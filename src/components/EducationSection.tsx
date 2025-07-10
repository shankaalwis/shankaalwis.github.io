
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

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
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      duration: "2016 - 2018",
      gpa: "3.8/4.0",
      notes: "Specialized in Software Engineering and Machine Learning. Thesis on distributed systems optimization.",
      achievements: ["Dean's List", "Research Assistant", "CS Graduate Society President"]
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Tech State University",
      location: "Austin, TX",
      duration: "2012 - 2016",
      gpa: "3.6/4.0",
      notes: "Focus on web development and database systems. Completed senior capstone project on e-commerce platform.",
      achievements: ["Magna Cum Laude", "Programming Club Leader", "Hackathon Winner"]
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formal foundations of knowledge and growth.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`glow-card p-8 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <div className="flex flex-col space-y-2 text-muted-foreground">
                    <span className="font-semibold text-primary text-lg">{edu.institution}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <div className="text-primary font-medium">GPA: {edu.gpa}</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{edu.notes}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Achievements</h4>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{achievement}</span>
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
