
import { useEffect, useState } from 'react';
import { Code } from 'lucide-react';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Content Section */}
          <div className="text-left order-2 lg:order-1">
            {/* Main title */}
            <h1 className="font-tech text-3xl md:text-5xl xl:text-7xl font-bold mb-4 md:mb-6 animate-glow-pulse text-primary dark:text-white lg:text-8xl">
              [Your Name]
            </h1>
            
            {/* Subtitle */}
            <div className="relative mb-6 md:mb-8">
              <h2 className="font-tech text-lg md:text-xl xl:text-3xl text-primary mb-3 md:mb-4 tracking-wider lg:text-4xl">
                — Digital Alchemist —
              </h2>
              <div className="h-px bg-primary w-48 md:w-64"></div>
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl leading-relaxed font-mono">
              Transforming ideas into digital reality through innovation, creativity, and cutting-edge technology
            </p>

            {/* CTA Button */}
            <div>
              <button className="bg-primary text-primary-foreground font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-mono text-sm md:text-base" onClick={() => document.getElementById('experience')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Explore My Journey
              </button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-primary/20 border-2 border-primary/30 flex items-center justify-center cyber-glow">
                {/* Replace the src below with your actual photo URL */}
                {/* <img src="your-photo-url-here.jpg" alt="Your Name" className="w-full h-full object-cover rounded-2xl" /> */}
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                  </div>
                  <p className="font-mono text-base md:text-lg">Your Photo Here</p>
                  <p className="font-mono text-xs md:text-sm opacity-70 mt-2">Upload your professional photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/50 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/50 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
