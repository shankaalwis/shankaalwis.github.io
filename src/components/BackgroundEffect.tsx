import { useEffect, useRef } from 'react';

interface BackgroundEffectProps {
    isDark: boolean;
}

const BackgroundEffect = ({ isDark }: BackgroundEffectProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        interface Particle {
            x: number;
            y: number;
            history: { x: number, y: number }[];
            offset: number;
            speed: number;
        }

        const particles: Particle[] = [];
        const numParticles = 25; // Fewer, longer lines for cleaner look
        const trailLength = 100; // Length of the solid line

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            particles.length = 0;
            for (let i = 0; i < numParticles; i++) {
                const p = {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    history: [],
                    offset: Math.random() * 1000,
                    speed: Math.random() * 0.5 + 0.2
                };

                // Pre-calculate trail so lines don't start as dots
                // We simulate running backwards or just filling it
                // Simpler: let them grow naturally, they grow fast enough (100 frames = 1.6s)
                // Or fill it:
                let tx = p.x;
                let ty = p.y;
                for (let j = 0; j < trailLength; j++) {
                    p.history.push({ x: tx, y: ty });
                    // simple linear back-fill just to have data
                    tx -= 1;
                    ty -= 1;
                }

                particles.push(p);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // High visibility solid lines
            ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)';
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round'; // Smooth corners

            const time = Date.now() * 0.0005;

            particles.forEach((p) => {
                // 1. Move Head
                const noise = Math.sin((p.x * 0.002) + (p.y * 0.003) + time + p.offset);
                const angle = noise * Math.PI * 1.5; // More curve variation

                p.x += Math.cos(angle) * p.speed;
                p.y += Math.sin(angle) * p.speed;

                // Mouse Interaction
                const dx = p.x - mouseRef.current.x;
                const dy = p.y - mouseRef.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 250) {
                    const force = (250 - dist) / 250;
                    // Gentle push
                    p.x += (dx / dist) * force * 2;
                    p.y += (dy / dist) * force * 2;
                }

                // 2. Manage History (The Solid Line)
                p.history.push({ x: p.x, y: p.y });
                if (p.history.length > trailLength) {
                    p.history.shift();
                }

                // 3. Draw The Line
                if (p.history.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(p.history[0].x, p.history[0].y);

                    // Use quadratic curves for smoother look? 
                    // Standard lineTo is fine for high resolution history
                    for (let i = 1; i < p.history.length; i++) {
                        ctx.lineTo(p.history[i].x, p.history[i].y);
                    }
                    ctx.stroke();
                }

                // 4. Wrap Logic
                // If head goes off screen, we respawn ONLY if the whole tail is gone?
                // Or we respawn head and reset history.
                // Let's create a "flow" effect where lines enter/leave.
                // If outside bounds + buffer
                const buffer = 200;
                if (p.x > width + buffer || p.x < -buffer || p.y > height + buffer || p.y < -buffer) {
                    // Respawn at a random edge depending on flow direction?
                    // Random is fine.
                    p.x = Math.random() * width;
                    p.y = Math.random() * height;
                    p.history = []; // Reset line so it doesn't streak across screen
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', init);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        draw();

        return () => {
            window.removeEventListener('resize', init);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 1 }}
        />
    );
};

export default BackgroundEffect;
