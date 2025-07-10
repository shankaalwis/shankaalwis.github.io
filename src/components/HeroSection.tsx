
import { useEffect, useState } from 'react';
import { Code, Zap, Cpu } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Floating tech icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="float-animation">
            <Code className="w-8 h-8 text-primary" style={{ animationDelay: '0s' }} />
          </div>
          <div className="float-animation">
            <Zap className="w-8 h-8 text-neon-cyan" style={{ animationDelay: '1s' }} />
          </div>
          <div className="float-animation">
            <Cpu className="w-8 h-8 text-primary" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Main title */}
        <h1 className="font-tech text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent animate-glow-pulse">
          [Your Name]
        </h1>
        
        {/* Subtitle */}
        <div className="relative">
          <h2 className="font-tech text-2xl md:text-3xl text-primary mb-4 tracking-wider">
            — Digital Alchemist —
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-64 mx-auto"></div>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
          Transforming ideas into digital reality through innovation, creativity, and cutting-edge technology
        </p>

        {/* CTA Button */}
        <div className="mt-12">
          <button 
            className="tech-button pulse-glow"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Journey
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
