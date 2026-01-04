import { useRef, useState, useEffect } from 'react';
import { Mail, Github, MessageCircle, Instagram, Facebook, MessageSquare } from 'lucide-react';
import TextShuffle from './TextShuffle';
import ScrambleText from './ScrambleText';

interface ContactSectionProps {
  onCycleEffect: () => void;
}

const ContactSection = ({ onCycleEffect }: ContactSectionProps) => {
  // ... existing hooks
  const [isVisible, setIsVisible] = useState(false);
  const [shouldDecode, setShouldDecode] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // ... observer logic remains same
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setShouldDecode(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    // ... same links
    {
      name: "Email",
      icon: Mail,
      url: "mailto:hello@shankaalwis.dev",
      color: "text-red-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/shankaalwis",
      color: "text-foreground",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/yourinvite",
      color: "text-indigo-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/shankaalwis",
      color: "text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/shankaalwis",
      color: "text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      url: "https://wa.me/715333531",
      color: "text-green-500",
    }
  ];

  const handleMouseEnter = () => {
    setShouldDecode(true);
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <TextShuffle text="Let's Connect" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <ScrambleText text="Reach out or follow me on any platform below." shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-card hover:bg-background border border-border/50 hover:border-primary/30 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <link.icon className={`w-8 h-8 ${link.color} transition-transform duration-300 group-hover:scale-110`} />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                <ScrambleText text={link.name} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
              </span>
            </a>
          ))}
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <ScrambleText text="Ready to Collaborate?" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              <ScrambleText text="Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'm always excited to connect with fellow innovators and creators." shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/715333531"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span><ScrambleText text="Get In Touch" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} /></span>
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground text-sm">
            © 2026 Shanka Alwis
            <br />
            <br />
            <br />
            <br />
            <span
              onClick={onCycleEffect}
              className="cursor-pointer hover:text-primary transition-colors select-none"
              title="Change Background Effect"
            >
              &gt;&gt;
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
