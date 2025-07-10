
import { useEffect, useState } from 'react';
import { Code, Zap, Cpu } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Content Section */}
          <div className="text-left">
            {/* Floating tech icons */}
            <div className="flex justify-start space-x-8 mb-8">
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
            <h1 className="font-tech text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent animate-glow-pulse">
              [Your Name]
            </h1>
            
            {/* Subtitle */}
            <div className="relative mb-8">
              <h2 className="font-tech text-xl md:text-2xl lg:text-3xl text-primary mb-4 tracking-wider">
                — Digital Alchemist —
              </h2>
              <div className="h-px bg-gradient-to-r from-primary via-primary to-transparent w-64"></div>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-archivo">
              Transforming ideas into digital reality through innovation, creativity, and cutting-edge technology
            </p>

            {/* CTA Button */}
            <div>
              <button 
                className="tech-button pulse-glow"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Journey
              </button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-cyan/20 border-2 border-primary/30 flex items-center justify-center cyber-glow">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="w-12 h-12 text-primary" />
                  </div>
                  <p className="font-archivo text-lg">Your Photo Here</p>
                  <p className="font-archivo text-sm opacity-70 mt-2">Upload your professional photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/50 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-cyan/50 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
