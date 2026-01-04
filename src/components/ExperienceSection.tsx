import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import spaCeylonIcon from './spa-ceylon.png';
import goodrichIcon from '../assets/experience/glk.jpeg';
import ceylonAgriIcon from '../assets/experience/cah.jpeg';
import bwEngineeringIcon from '../assets/experience/bwe.jpeg';
import bwMediaIcon from '../assets/experience/bwm.jpeg';

const ExperienceLogo = ({ icon, alt, forceWhiteBackground }: { icon?: string; alt: string; forceWhiteBackground?: boolean }) => {
  const [hasError, setHasError] = useState(false);

  if (!icon || hasError) {
    return (
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Building className="w-6 h-6 text-primary" aria-hidden="true" />
          <span className="sr-only">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0">
      <div className={`w-12 h-12 rounded-lg ${forceWhiteBackground ? 'bg-white p-1' : 'bg-white/50 bg-secondary/30'} border border-border/50 flex items-center justify-center overflow-hidden shadow-sm`}>
        <img
          src={icon}
          alt={alt}
          className="w-full h-full object-contain"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
};

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
      "title": "Digital Transformation and Technologies Executive",
      "company": "Spa Ceylon Ayurveda Wellness",
      "icon": spaCeylonIcon,
      "forceWhiteBackground": true,
      "location": "Sri Lanka",
      "duration": "Sep 2025 - Present",
      "description": "Led enterprise-wide technology initiatives to streamline operations and accelerate Spa Ceylon’s digital transformation. Partnered with cross-functional leaders to modernize system architecture, strengthen IT governance, and establish data pipelines and dashboards that enabled faster, evidence-based decisions. Elevated reliability and security across core systems, improved workflow automation, and supported CX and retail programs with cleaner data and better insights.",
      "technologies": ["IT Operations", "Digital Transformation", "System Architecture", "Leadership"]
    },
    {
      "title": "Technology Executive",
      "company": "Spa Ceylon Ayurveda Wellness",
      "icon": spaCeylonIcon,
      "forceWhiteBackground": true,
      "location": "Sri Lanka",
      "duration": "Apr 2025 - Sep 2025",
      "description": "Leading technology initiatives and supporting the digital transformation of Spa Ceylon’s operations. Collaborating across departments to streamline systems, improve IT governance, and enable data-driven decisions.",
      "technologies": ["IT Operations", "Digital Transformation", "System Architecture", "Leadership"]
    },
    {
      "title": "Junior Technology Executive",
      "company": "Spa Ceylon Ayurveda Wellness",
      "icon": spaCeylonIcon,
      "forceWhiteBackground": true,
      "location": "Sri Lanka",
      "duration": "Dec 2024 - Apr 2025",
      "description": "Assisted in CRM and loyalty platform transitions. Coordinated with Ecomm & DTX to integrate outlet data, enhance remarketing capabilities, and improve customer experience.",
      "technologies": ["CRM Tools", "Data Integration", "Cross-Functional Collaboration", "Retail IT"]
    },
    {
      "title": "IT Executive",
      "company": "GOODRICH MARITIME PVT. LTD",
      "icon": goodrichIcon,

      "location": "Sri Lanka",
      "duration": "Oct 2024 - Dec 2024",
      "description": "Managed DNS, domains, and cPanel hosting. Handled firewall activity monitoring, access point deployment, and network troubleshooting. Provided end-user support and created internal graphics for communication.",
      "technologies": ["cPanel", "DNS", "Firewall Monitoring", "Graphic Design", "Technical Support"]
    },

    {
      "title": "IT Technician",
      "company": "Ceylon Agri Harvest",
      "icon": ceylonAgriIcon,

      "location": "Sri Lanka",
      "duration": "2022 - Oct 2024",
      "description": "Provided ongoing technical support, resolving hardware and software issues. Ensured uninterrupted IT services across the organization.",
      "technologies": ["Technical Support", "IT Maintenance"]
    },
    {
      "title": "IT Support Specialist",
      "company": "B&W Engineering Solutions",
      "icon": bwEngineeringIcon,

      "location": "Sri Lanka",
      "duration": "Nov 2021 - Aug 2023",
      "description": "Maintained IT infrastructure and supported users with both software and hardware issues. Contributed to CAD-related workflows and troubleshooting.",
      "technologies": ["AutoCAD", "Technical Support", "IT Infrastructure", "Problem Solving"]
    },
    {
      "title": "Project Intern",
      "company": "B&W Engineering Solutions",
      "icon": bwEngineeringIcon,

      "location": "Sri Lanka",
      "duration": "Jan 2021 - Jun 2022",
      "description": "Supported internal IT projects and contributed to problem-solving in engineering-related initiatives.",
      "technologies": ["Problem Solving", "CAD"]
    },
    {
      "title": "Video Editor",
      "company": "B&W Media Solutions",
      "icon": bwMediaIcon,
      "location": "Remote",
      "duration": "Sep 2019 - Jun 2023",
      "description": "Created and edited video content using Adobe Premiere Pro. Designed visual assets for internal and external communications.",
      "technologies": ["Adobe Premiere Pro", "Graphic Design", "Video Editing", "Computer Literacy"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`mb-16 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground">
            A journey through roles that shaped my tech story.
          </p>
        </div>

        <div className="relative border-l border-border/60 ml-3 md:ml-6 space-y-12 pb-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 md:pl-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-[-6px] top-3 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="grid gap-6 lg:grid-cols-[1fr_250px]">
                {/* Content Card */}
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    {/* @ts-ignore */}
                    <ExperienceLogo icon={exp.icon} alt={exp.title} forceWhiteBackground={exp.forceWhiteBackground} />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex flex-row lg:flex-col gap-4 text-sm text-muted-foreground lg:text-right lg:items-end">
                  <div className="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full border border-border/50 lg:border-none lg:bg-transparent lg:p-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full border border-border/50 lg:border-none lg:bg-transparent lg:p-0">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
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
