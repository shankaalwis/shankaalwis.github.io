
import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
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

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      year: "2023",
      badge: "🏆",
      description: "Professional level certification for designing distributed systems on AWS",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"]
    },
    {
      name: "Google Cloud Professional Developer",
      organization: "Google Cloud",
      year: "2022",
      badge: "🌟",
      description: "Expert-level certification for building scalable applications on Google Cloud Platform",
      skills: ["GCP Services", "Kubernetes", "DevOps", "Application Development"]
    },
    {
      name: "Microsoft Azure Fundamentals",
      organization: "Microsoft",
      year: "2022",
      badge: "⚡",
      description: "Foundational knowledge of cloud services and Azure platform",
      skills: ["Azure Services", "Cloud Concepts", "Security", "Compliance"]
    },
    {
      name: "Certified Kubernetes Administrator",
      organization: "Cloud Native Computing Foundation",
      year: "2021",
      badge: "🚀",
      description: "Expertise in Kubernetes cluster administration and orchestration",
      skills: ["Container Orchestration", "Cluster Management", "Networking", "Security"]
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <Award className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proof of continued learning and professional milestones.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`glow-card p-8 rounded-2xl transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {cert.badge}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{cert.name}</h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="text-primary font-semibold">{cert.organization}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{cert.description}</p>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Skills Validated</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
