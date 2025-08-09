
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';

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
      notes: "Pursuing in-depth studies in network and information security, ethical hacking, digital forensics, and secure systems design to develop expertise in protecting digital assets and mitigating cyber threats.",
      
    },
    {
      degree: "Diploma of Science in Computing/IT",
      institution: " Edith Cowan College",
      location: "Rajagiriya, LK",
      icon: "https://media.licdn.com/dms/image/v2/D560BAQGvBFDtOPMQ9A/company-logo_200_200/company-logo_200_200/0/1738560733700/edith_cowan_college_logo?e=1756339200&v=beta&t=W5AXF90yD47wUt8QqUzMR5HG-dRaBvVaRfdTK4swaaI",
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
      icon: "https://media.licdn.com/dms/image/v2/D560BAQFMInVcCSOH-A/company-logo_200_200/company-logo_200_200/0/1693208033180?e=1757548800&v=beta&t=fWHZvQsc5LoGu1LO2isZHZttVbKUZMiOwZk7c9abSfs",
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
    <section id="education" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className={`text-left mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 w-fit">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-tech text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                Education
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-mono">
                Formal foundations of knowledge and growth.
              </p>
            </div>
          </div>
          <div className="h-px bg-primary w-64 md:w-96 max-w-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`glow-card p-6 md:p-8 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="space-y-4 md:space-y-6">               
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <img
                      src={edu.icon}
                      alt={`${edu.degree} logo`}
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 font-mono">{edu.degree}</h3>
                    <div className="flex flex-col space-y-2 text-muted-foreground">
                      <span className="font-semibold text-primary text-base md:text-lg font-mono">{edu.institution}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-mono text-sm md:text-base">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-sm md:text-base">{edu.duration}</span>
                  </div>
                </div>

                {edu.gpa && (
                  <div className="text-primary font-medium font-mono">GPA: {edu.gpa}</div>
                )}

                <p className="text-muted-foreground leading-relaxed font-mono text-sm md:text-base">{edu.notes}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
