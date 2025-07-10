
import { useEffect, useRef, useState } from 'react';
import { Mail, Github, MessageCircle, Instagram, Facebook, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      color: "text-red-400",
      hoverColor: "hover:text-red-300"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      color: "text-gray-300",
      hoverColor: "hover:text-white"
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/yourinvite",
      color: "text-indigo-400",
      hoverColor: "hover:text-indigo-300"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourusername",
      color: "text-pink-400",
      hoverColor: "hover:text-pink-300"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/yourusername",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300"
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      url: "https://wa.me/1234567890",
      color: "text-green-400",
      hoverColor: "hover:text-green-300"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out or follow me on any platform below.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-icon ${link.color} ${link.hoverColor} group transition-all duration-700 flex flex-col items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <link.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium mt-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="tech-gradient-bg p-8 rounded-2xl border border-primary/20">
            <h3 className="font-tech text-2xl font-bold text-foreground mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'm always excited to connect with fellow innovators and creators.
            </p>
            <a 
              href="mailto:your.email@example.com"
              className="tech-button inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground">
            © 2024 [Your Name]. Crafted with ⚡ and endless curiosity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
