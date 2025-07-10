
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through roles that shaped my tech story.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32 mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`glow-card p-8 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                    <span className="font-semibold text-primary">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
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
