import { useEffect, useRef, useState } from 'react';

interface BackgroundEffectProps {
    isDark: boolean;
}

// -----------------------------------------------------------------------------
// EFFECT 1: NEURAL NETWORK (Constellation)
// -----------------------------------------------------------------------------
const drawNeuralNetwork = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    mouse: { x: number, y: number },
    isDark: boolean,
    state: any
) => {
    const { particles } = state;
    const particleCount = Math.min(Math.floor((width * height) / 15000), 80);
    const connectionDistance = 150;
    const mouseDistance = 200;

    // Init if needed
    if (particles.length === 0) {
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
            });
        }
    }

    ctx.clearRect(0, 0, width, height);
    const colorRGB = isDark ? '255, 255, 255' : '0, 0, 0';
    const nodeOpacity = isDark ? 0.6 : 0.6; // Darker black in light mode, Whiter in dark mode
    const lineOpacityBase = isDark ? 0.4 : 0.35;

    particles.forEach((p: any, i: number) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attract
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distMouse = Math.sqrt(dx * dx + dy * dy);
        if (distMouse < mouseDistance) {
            const force = (mouseDistance - distMouse) / mouseDistance;
            p.x += (dx / distMouse) * force * 1.5;
            p.y += (dy / distMouse) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorRGB}, ${nodeOpacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (dist < connectionDistance) {
                const opacity = (1 - dist / connectionDistance) * lineOpacityBase;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(${colorRGB}, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    });
};

// -----------------------------------------------------------------------------
// EFFECT 2: DIGITAL FABRIC (Hex Grid)
// -----------------------------------------------------------------------------
const drawDigitalFabric = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    mouse: { x: number, y: number },
    isDark: boolean
) => {
    const spacing = 30;
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);
    const time = Date.now() * 0.002;

    ctx.clearRect(0, 0, width, height);
    const colorRGB = isDark ? '255, 255, 255' : '0, 0, 0';
    const baseOpacity = isDark ? 0.5 : 0.45;

    for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
            let pointX = x * spacing;
            let pointY = y * spacing;
            if (y % 2 === 1) pointX += spacing / 2;

            const dx = pointX - mouse.x;
            const dy = pointY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 200;

            let radius = 1;
            let opacity = baseOpacity;
            let moveX = 0;
            let moveY = 0;

            if (dist < maxDist) {
                const influence = (1 - dist / maxDist); // Linear is fine
                radius = 1 + (influence * 2);
                opacity = baseOpacity + (influence * 0.5);
                const force = influence * 15;
                const angle = Math.atan2(dy, dx);
                moveX = Math.cos(angle) * force;
                moveY = Math.sin(angle) * force;
            }

            ctx.beginPath();
            ctx.arc(pointX + moveX, pointY + moveY, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${colorRGB}, ${opacity})`;
            ctx.fill();
        }
    }
};

// -----------------------------------------------------------------------------
// EFFECT 3: CIRCUIT STREAM (Grid Walkers)
// -----------------------------------------------------------------------------
const drawCircuitStream = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    mouse: { x: number, y: number },
    isDark: boolean,
    state: any
) => {
    const { walkers } = state;
    const gridSize = 30;
    const maxWalkers = 50;

    if (walkers.length === 0) {
        const resetWalker = (w: any) => {
            w.x = Math.floor((Math.random() * width) / gridSize) * gridSize;
            w.y = Math.floor((Math.random() * height) / gridSize) * gridSize;
            w.history = [{ x: w.x, y: w.y }];
            w.life = Math.random() * 100 + 50;
            if (Math.random() > 0.5) {
                w.dirX = Math.random() > 0.5 ? 1 : -1;
                w.dirY = 0;
            } else {
                w.dirX = 0;
                w.dirY = Math.random() > 0.5 ? 1 : -1;
            }
        };

        for (let i = 0; i < maxWalkers; i++) {
            const w = { x: 0, y: 0, dirX: 0, dirY: 0, life: 0, history: [] };
            resetWalker(w);
            walkers.push(w);
        }
    }

    const resetWalker = (w: any) => {
        w.x = Math.floor((Math.random() * width) / gridSize) * gridSize;
        w.y = Math.floor((Math.random() * height) / gridSize) * gridSize;
        w.history = [{ x: w.x, y: w.y }];
        w.life = Math.random() * 100 + 50;
        if (Math.random() > 0.5) {
            w.dirX = Math.random() > 0.5 ? 1 : -1;
            w.dirY = 0;
        } else {
            w.dirX = 0;
            w.dirY = Math.random() > 0.5 ? 1 : -1;
        }
    };

    ctx.clearRect(0, 0, width, height);
    const moveSpeed = 0.4;

    walkers.forEach((w: any) => {
        w.x += w.dirX * moveSpeed;
        w.y += w.dirY * moveSpeed;
        w.life--;
        w.history.push({ x: w.x, y: w.y });
        if (w.history.length > 120) w.history.shift();

        if (Math.random() < 0.02) {
            if (w.dirX !== 0) { w.dirX = 0; w.dirY = Math.random() > 0.5 ? 1 : -1; }
            else { w.dirY = 0; w.dirX = Math.random() > 0.5 ? 1 : -1; }
        }

        const dx = mouse.x - w.x;
        const dy = mouse.y - w.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let isActive = dist < 150;
        if (isActive) w.life += 2;

        if (w.life <= 0 || w.x < 0 || w.x > width || w.y < 0 || w.y > height) resetWalker(w);

        ctx.beginPath();
        if (w.history.length > 0) {
            ctx.moveTo(w.history[0].x, w.history[0].y);
            for (let i = 1; i < w.history.length; i++) ctx.lineTo(w.history[i].x, w.history[i].y);
        }

        const opacity = Math.min(w.life / 50, 1) * (isDark ? 0.6 : 0.5);
        if (isActive && isDark) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity + 0.2})`;
            ctx.lineWidth = 2;
        } else {
            ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`;
            ctx.lineWidth = isDark ? 1.5 : 2;
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(w.x, w.y, isActive ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = isActive && isDark ? '#64E4FF' : (isDark ? 'white' : 'black');
        ctx.fill();
    });
};

// -----------------------------------------------------------------------------
// EFFECT 4: ASCENDING GLYPHS (Code Rain)
// -----------------------------------------------------------------------------
const drawAscendingGlyphs = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    mouse: { x: number, y: number },
    isDark: boolean,
    state: any
) => {
    const { particles } = state;
    const glyphs = ['1', '0', '{', '}', '<', '>', '/', '+', '*', 'x', '•'];
    const particleCount = 60;

    if (particles.length === 0) {
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                char: glyphs[Math.floor(Math.random() * glyphs.length)],
                size: Math.random() * 15 + 20,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    }

    ctx.clearRect(0, 0, width, height);
    const colorBase = isDark ? '255, 255, 255' : '0, 0, 0';

    particles.forEach((p: any) => {
        p.y -= p.speed;
        if (p.y < -50) {
            p.y = height + 50;
            p.x = Math.random() * width;
            p.char = glyphs[Math.floor(Math.random() * glyphs.length)];
        }

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
            const force = (150 - dist) / 150;
            const sign = dx > 0 ? 1 : -1;
            p.x += sign * force * 2;
        }

        ctx.font = `${p.size}px monospace`;
        ctx.textAlign = 'center';

        let finalOpacity = p.opacity * (isDark ? 0.7 : 0.6);
        if (dist < 200) finalOpacity += (1 - dist / 200) * 0.4;

        ctx.fillStyle = `rgba(${colorBase}, ${finalOpacity})`;
        ctx.fillText(p.char, p.x, p.y);
    });
};

interface BackgroundEffectProps {
    isDark: boolean;
    effectIndex: number;
}
// ... (keep previous drawing functions)

const BackgroundEffect = ({ isDark, effectIndex }: BackgroundEffectProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const stateRef = useRef({ particles: [], walkers: [] });
    // Internal state removed, using prop effectIndex directly

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Reset state on resize/init to be safe
            stateRef.current = { particles: [], walkers: [] };
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const loop = () => {
            // Switch between the 4 tech effects
            switch (effectIndex) {
                case 0: // Neural Network
                    drawNeuralNetwork(ctx, width, height, mouseRef.current, isDark, stateRef.current);
                    break;
                case 1: // Circuit Stream
                    drawCircuitStream(ctx, width, height, mouseRef.current, isDark, stateRef.current);
                    break;
                case 2: // Digital Fabric
                    drawDigitalFabric(ctx, width, height, mouseRef.current, isDark);
                    break;
                case 3: // Ascending Glyphs
                    drawAscendingGlyphs(ctx, width, height, mouseRef.current, isDark, stateRef.current);
                    break;
                default:
                    drawNeuralNetwork(ctx, width, height, mouseRef.current, isDark, stateRef.current);
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        window.addEventListener('resize', init);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        loop();

        return () => {
            window.removeEventListener('resize', init);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark, effectIndex]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 1 }}
        />
    );
};

export default BackgroundEffect;
