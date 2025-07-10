
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
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

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      technologies: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "InnovateLab",
      location: "Austin, TX",
      duration: "2020 - 2022",
      description: "Built responsive user interfaces and collaborated with design teams to create exceptional user experiences. Improved application performance by 40%.",
      technologies: ["Vue.js", "CSS3", "JavaScript", "Figma"]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2018 - 2020",
      description: "Developed and maintained web applications, gained experience in agile methodologies, and contributed to open-source projects.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Git"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-left mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 w-fit">
              <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-tech text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                Experience
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-mono">
                A journey through roles that shaped my tech story.
              </p>
            </div>
          </div>
          <div className="h-px bg-primary w-64 md:w-96 max-w-full"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`glow-card p-6 md:p-8 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                {/* Company Icon Placeholder */}
                <div className="md:col-span-1 flex md:justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Building className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-mono">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 md:gap-4 mb-4 text-muted-foreground">
                    <span className="font-semibold text-primary font-mono">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-mono text-sm md:text-base">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm md:text-base">{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed font-mono text-sm md:text-base">{exp.description}</p>
                </div>
                <div className="md:col-span-1 space-y-4">
                  <h4 className="font-semibold text-foreground font-mono">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs md:text-sm font-medium border border-primary/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
