
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
      gpa: "3./4.0",
      notes: "Specialized in Software Engineering and Machine Learning. Thesis on distributed systems optimization.",
      achievements: ["Dean's List", "Research Assistant", "CS Graduate Society President"]
    },
    {
      degree: "Diploma of Science in Computing/IT",
      institution: " Edith Cowan College",
      location: "Rajagiriya, LK",
      icon: "https://media.licdn.com/dms/image/v2/D560BAQGvBFDtOPMQ9A/company-logo_200_200/company-logo_200_200/0/1738560733700/edith_cowan_college_logo?e=1756339200&v=beta&t=W5AXF90yD47wUt8QqUzMR5HG-dRaBvVaRfdTK4swaaI",
      duration: "2023 - 2024",
      gpa: "3.6/4.0",
      notes: "Focus on web development and database systems. Completed senior capstone project on e-commerce platform.",
      achievements: ["Magna Cum Laude", "Programming Club Leader", "Hackathon Winner"]
    },
    {
      degree: "Diploma of Science in Computing/IT",
      institution: " Australian College of Business and Technology (ACBT)",
      location: "Rajagiriya, LK",
      icon: "https://www.acbt.net/wp-content/themes/wp-acbt/images/site-logo.svg",
      duration: "2023 - 2024",
      gpa: "3.6/4.0",
      notes: "Focus on web development and database systems. Completed senior capstone project on e-commerce platform.",
      achievements: ["Magna Cum Laude", "Programming Club Leader", "Hackathon Winner"]
    },
    {
      degree: "GCE Advanced Level – Mathematics",
      institution: "Lyceum International School",
      location: "Wattala, LK",
      icon: "https://cdn.lyceum.lk/edgemedia/20240529130041/lyceum-school-symbol.png",
      duration: "2016 - 2019",
      gpa: "3.6/4.0",
      notes: "Focus on web development and database systems. Completed senior capstone project on e-commerce platform.",
      achievements: ["Magna Cum Laude", "Programming Club Leader", "Hackathon Winner"]
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
                    alt={`${edu.degree} logo`} className="w-8 h-8 text-primary" />
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
                
                <div className="text-primary font-medium font-mono">GPA: {edu.gpa}</div>

                <p className="text-muted-foreground leading-relaxed font-mono text-sm md:text-base">{edu.notes}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 font-mono">Achievements</h4>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground font-mono text-sm md:text-base">{achievement}</span>
                      </div>
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

export default EducationSection;
