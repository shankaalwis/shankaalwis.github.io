
import { useEffect, useRef, useState } from 'react';
import { Code2, ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
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

    const projects = [
    {
      title: "XL2Images",
      description: "A Python script to bulk download images from Excel (.xlsx) sheets containing image URLs. Useful for datasets and product imagery.",
      techStack: ["Python", "openpyxl", "requests"],
      image: "🖼️",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Distributed Tax Estimator",
      description: "A distributed system for estimating personal income tax using Python, Pyro5 for RPC, and SQLite for backend storage.",
      techStack: ["Python", "Pyro5", "SQLite"],
      image: "💰",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "The Urban Nest Store",
      description: "A WooCommerce-based webstore for home and lifestyle products with responsive design, product filters, and IPG integration.",
      techStack: ["WooCommerce", "WordPress", "PHP", "MySQL"],
      image: "🛒",
      demoUrl: "https://www.theurbanneststore.com",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Dictionary Search System",
      description: "C++ console application for dictionary management, supporting file loading, binary search, and interactive menu navigation.",
      techStack: ["C++"],
      image: "📚",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Block Cipher Encryption System",
      description: "A custom block cipher using permutations, XOR operations, and prime-based substitution with full IV and key scheduling.",
      techStack: ["Python"],
      image: "🔐",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Time-Based Stream Cipher",
      description: "Simulation of a stream cipher using a time-based keystream with XOR for lightweight encryption and decryption.",
      techStack: ["Python"],
      image: "⏱️",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "CyberMiniScan v1.2",
      description: "A lightweight offline security scanner in Scala that detects weak passwords, dangerous file types, and risky URLs.",
      techStack: ["Scala"],
      image: "🛡️",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];


  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className={`text-left mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-tech text-4xl md:text-5xl font-bold text-foreground mb-2">
                Projects
              </h2>
              <p className="text-lg text-muted-foreground font-mono">
                Real-world applications of passion and problem-solving.
              </p>
            </div>
          </div>
          <div className="h-px bg-primary w-96 max-w-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glow-card p-8 rounded-2xl transition-all duration-700 group relative ${project.featured ? 'lg:col-span-2' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
              )}
              
              <div className={`${project.featured ? 'md:flex md:items-center md:gap-8' : ''}`}>
                <div className={`${project.featured ? 'md:flex-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`flex gap-4 ${project.featured ? 'md:flex-col' : ''}`}>
                  <button className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    <Play className="w-4 h-4" />
                    Demo
                  </button>
                  <button className="flex items-center gap-2 bg-card hover:bg-muted text-foreground border border-border px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
