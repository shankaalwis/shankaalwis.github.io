
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
    "title": "Technology Executive",
    "company": "Spa Ceylon Ayurveda Wellness",
    "icon":"sc.jpeg",
    "location": "Sri Lanka",
    "duration": "Apr 2025 - Present",
    "description": "Leading technology initiatives and supporting the digital transformation of Spa Ceylon’s operations. Collaborating across departments to streamline systems, improve IT governance, and enable data-driven decisions.",
    "technologies": ["IT Operations", "Digital Transformation", "System Architecture", "Leadership"]
  },
  {
    "title": "Junior Technology Executive",
    "company": "Spa Ceylon Ayurveda Wellness",
    "icon":"https://media.licdn.com/dms/image/v2/C4E0BAQGPkcxTQGEjNQ/company-logo_200_200/company-logo_200_200/0/1630652291793/spa_ceylon_logo?e=1756339200&v=beta&t=3Qgh28oMz2P69fVrD4PfanpSX4tS-MFeAyi8_ZZ-jvA",
    "location": "Sri Lanka",
    "duration": "Dec 2024 - Apr 2025",
    "description": "Assisted in CRM and loyalty platform transitions. Coordinated with Ecomm & DTX to integrate outlet data, enhance remarketing capabilities, and improve customer experience.",
    "technologies": ["CRM Tools", "Data Integration", "Cross-Functional Collaboration", "Retail IT"]
  },
  {
    "title": "IT Executive",
    "company": "GOODRICH MARITIME PVT. LTD",
    "icon":"https://media.licdn.com/dms/image/v2/D4D0BAQGXTBWvp49lpQ/company-logo_200_200/company-logo_200_200/0/1681098774750?e=1756339200&v=beta&t=U03KWW7yVfQ1z0qe4Jneuo0lQhewnTMCB92D3-afPCw",
    
    "location": "Sri Lanka",
    "duration": "Oct 2024 - Dec 2024",
    "description": "Managed DNS, domains, and cPanel hosting. Handled firewall activity monitoring, access point deployment, and network troubleshooting. Provided end-user support and created internal graphics for communication.",
    "technologies": ["cPanel", "DNS", "Firewall Monitoring", "Graphic Design", "Technical Support"]
  },
  
  {
    "title": "IT Technician",
    "company": "Ceylon Agri Harvest",
    "icon":"https://media.licdn.com/dms/image/v2/D560BAQHEI3oMsPTrxw/company-logo_200_200/company-logo_200_200/0/1727684952485/ceylonagriharvest_logo?e=1756339200&v=beta&t=tccEWMyGvLQQHMocCV_xIXrEKTNUKJczVPkmTN1wmGY",
    
    "location": "Sri Lanka",
    "duration": "2022 - Oct 2024",
    "description": "Provided ongoing technical support, resolving hardware and software issues. Ensured uninterrupted IT services across the organization.",
    "technologies": ["Technical Support", "IT Maintenance"]
  },
  {
    "title": "IT Support Specialist",
    "company": "B&W Engineering Solutions",
    "icon":"https://media.licdn.com/dms/image/v2/C560BAQFCQCJ1s9hHsg/company-logo_200_200/company-logo_200_200/0/1630656202262?e=1756339200&v=beta&t=XDhAZuFbmQa37tHuT_40oGCQakQtGYJbUfhzFOIz0iE",
    
    "location": "Sri Lanka",
    "duration": "Nov 2021 - Aug 2023",
    "description": "Maintained IT infrastructure and supported users with both software and hardware issues. Contributed to CAD-related workflows and troubleshooting.",
    "technologies": ["AutoCAD", "Technical Support", "IT Infrastructure", "Problem Solving"]
  },
  {
    "title": "Project Intern",
    "company": "B&W Engineering Solutions",
    "icon":"https://media.licdn.com/dms/image/v2/C560BAQFCQCJ1s9hHsg/company-logo_200_200/company-logo_200_200/0/1630656202262?e=1756339200&v=beta&t=XDhAZuFbmQa37tHuT_40oGCQakQtGYJbUfhzFOIz0iE",
    
    "location": "Sri Lanka",
    "duration": "Jan 2021 - Jun 2022",
    "description": "Supported internal IT projects and contributed to problem-solving in engineering-related initiatives.",
    "technologies": ["Problem Solving", "CAD"]
  },
  {
    "title": "Video Editor",
    "company": "B&W Media Solutions",
    "icon":"https://media.licdn.com/dms/image/v2/C560BAQF0fYWqQfBbXQ/company-logo_100_100/company-logo_100_100/0/1630590747881?e=1756339200&v=beta&t=Lzd87v0XHX5lqsTszy3G9i02yCc1PYZoVQp1BxFYD0A",
    "location": "Remote",
    "duration": "Sep 2019 - Jun 2023",
    "description": "Created and edited video content using Adobe Premiere Pro. Designed visual assets for internal and external communications.",
    "technologies": ["Adobe Premiere Pro", "Graphic Design", "Video Editing", "Computer Literacy"]
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

              <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Company Icon - Left Column */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <img src={exp.icon} alt={`${exp.title} logo`} className="w-12 h-12 object-contain" />
                    </div>
                  </div>

                  {/* Details - Right Column */}
                  <div className="flex-1 grid md:grid-cols-3 gap-4 md:gap-6">
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
                    
                    {/* Technologies */}
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

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
