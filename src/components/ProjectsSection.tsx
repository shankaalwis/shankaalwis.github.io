
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
      title: "AI-Powered Task Manager",
      description: "A intelligent task management application that uses machine learning to prioritize tasks and suggest optimal scheduling based on user behavior patterns.",
      techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
      image: "🤖",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Real-time Collaboration Platform",
      description: "WebRTC-based platform enabling real-time collaboration with document editing, video calls, and screen sharing capabilities.",
      techStack: ["Vue.js", "Socket.io", "WebRTC", "Express.js", "Redis"],
      image: "👥",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Cryptocurrency Trading Bot",
      description: "Automated trading bot with machine learning algorithms for market analysis and risk management across multiple exchanges.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"],
      image: "📈",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "Full-stack application for monitoring and controlling IoT devices with real-time data visualization and automated routines.",
      techStack: ["React Native", "Firebase", "Arduino", "MQTT", "Chart.js"],
      image: "🏠",
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
