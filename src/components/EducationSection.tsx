import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';

const EducationLogo = ({ icon, alt }: { icon?: string; alt: string }) => {
  const [hasError, setHasError] = useState(false);

  if (!icon || hasError) {
    return (
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <School className="w-6 h-6 text-primary" aria-hidden="true" />
          <span className="sr-only">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-border/50 flex items-center justify-center p-1">
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

const EducationSection = () => {
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

  const education = [
    {
      degree: "Bachelor of Computer Science, Cyber Security",
      institution: "Edith Cowan University",
      location: "Rajagiriya, LK",
      icon: "https://www.ecu.edu.lk/wp-content/themes/wp-edith-cowan-sri-lanka/images/site-logo.svg",
      duration: "2023 - 2025",
      gpa: "3.3/4.0",
      notes: "Completed in-depth studies in network and information security, ethical hacking, digital forensics, and secure systems design, developing expertise in protecting digital assets and mitigating cyber threats.",

    },
    {
      degree: "Diploma of Science in Computing/IT",
      institution: " Edith Cowan College",
      location: "Rajagiriya, LK",
      icon: "https://www.edithcowancollege.edu.au/wp-content/themes/wp-edith-cowan-college/images/site-logo.svg",
      duration: "2023 - 2024",
      gpa: "3.3/4.0",
      notes: "Focused on applied communications, systems and database design, computer security, and core computing fundamentals, building a strong foundation for advanced studies in information technology.",

    },
    {
      degree: "Diploma of Science in Computing/IT",
      institution: " Australian College of Business and Technology (ACBT)",
      location: "Rajagiriya, LK",
      icon: "https://www.acbt.net/wp-content/themes/wp-acbt/images/site-logo.svg",
      duration: "2023 - 2024",
      gpa: "3.3/4.0",
      notes: "Studied system analysis, programming principles, mathematics for computing, and professional science essentials, developing technical skills and problem-solving capabilities for IT and computing applications.",

    },
    {
      degree: "Motor Mechanism Part-I/II",
      institution: "Automobile Engineering Training Institute",
      location: "AETI, LK",
      icon: "https://www.pickacourse.lk/storage/28/29.Automobile.jpg",
      duration: "2023 - 2024",
      gpa: "",
      notes: "Completed foundational training in motor mechanism, covering basic automotive systems, engine components, maintenance practices, and mechanical principles essential for further specialization in automobile engineering.",

    },
    {
      degree: "GCE Advanced Level – Mathematics",
      institution: "Lyceum International School",
      location: "Wattala, LK",
      icon: "https://cdn.lyceum.lk/edgemedia/20240529130041/lyceum-school-symbol.png",
      duration: "2016 - 2019",
      notes: "Focused on Pure Mathematics, Applied Mathematics, and related subjects, building strong analytical, logical reasoning, and problem-solving skills.",

    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`mb-16 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Education</h2>
          <p className="text-lg text-muted-foreground">
            Formal foundations of knowledge and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-base font-medium text-muted-foreground">{edu.institution}</p>
                  </div>
                  <EducationLogo icon={edu.icon} alt={edu.institution} />
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-md font-medium">
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mt-auto">
                  {edu.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
