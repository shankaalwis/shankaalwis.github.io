
import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, ExternalLink, Badge } from 'lucide-react';

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
    name: "Microsoft Azure Fundamentals",
    organization: "Microsoft",
    year: "2022",
    badge: "☁️",
    description: "Fundamental knowledge of Microsoft Azure services and cloud concepts",
    skills: ["Cloud Concepts", "Azure Services", "Pricing & Support"]
  },
  {
    name: "Google IT Support Specialization",
    organization: "Google",
    year: "2022",
    badge: "🛠️",
    description: "Practical IT support skills including troubleshooting, system administration, and customer support",
    skills: ["Troubleshooting", "System Administration", "Customer Support"]
  },
  {
    name: "Google Professional Workspace Administrator",
    organization: "Google Cloud Training",
    year: "2022",
    badge: "📧",
    description: "Expertise in managing Google Workspace domains, users, and security settings",
    skills: ["User Management", "Security Configuration", "Issue Troubleshooting"]
  },
  {
    name: "Networking Basics",
    organization: "Cisco Networking Academy",
    year: "2024",
    badge: "🌐",
    description: "Foundational networking knowledge including protocols, topologies, and IP addressing",
    skills: ["Networking", "IP Addressing", "Routing"]
  },
  {
    name: "Introduction to Cyber Security",
    organization: "Cisco Networking Academy",
    year: "2020",
    badge: "🔐",
    description: "Introductory cybersecurity concepts including threats, vulnerabilities, and defense strategies",
    skills: ["Cybersecurity", "Threat Analysis", "Risk Awareness"]
  },
  {
    name: "Web Design for Beginners",
    organization: "University of Moratuwa",
    year: "2024",
    badge: "🎨",
    description: "Basics of HTML, CSS, and web design principles for building static websites",
    skills: ["HTML", "CSS", "Web Design"]
  },
  {
    name: "Python for Beginners",
    organization: "University of Moratuwa",
    year: "2022",
    badge: "🐍",
    description: "Fundamentals of Python programming and basic scripting techniques",
    skills: ["Python", "Scripting", "Programming Basics"]
  },
  {
    name: "FCF - Introduction to the Threat Landscape 2.0",
    organization: "Fortinet",
    year: "2024",
    badge: "🛡️",
    description: "Insight into evolving cybersecurity threats and modern attack methods",
    skills: ["Threat Landscape", "Cybersecurity", "Defense Tactics"]
  },
  {
    name: "FCF - Technical Introduction to Cybersecurity 1.0",
    organization: "Fortinet",
    year: "2024",
    badge: "🔍",
    description: "Technical overview of cybersecurity principles and protection mechanisms",
    skills: ["Cybersecurity", "Security Principles", "Network Defense"]
  },
  {
    name: "Prompt Design in Vertex AI",
    organization: "Google Cloud",
    year: "2024",
    badge: "🤖",
    description: "Skills in prompt engineering, multimodal analysis, and generative AI using Vertex AI",
    skills: ["Prompt Engineering", "Image Analysis", "Generative AI"]
  }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-left mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-tech text-4xl md:text-5xl font-bold text-foreground mb-2">
                Certifications
              </h2>
              <p className="text-lg text-muted-foreground font-mono">
                Proof of continued learning and professional milestones.
              </p>
            </div>
          </div>
          <div className="h-px bg-primary w-96 max-w-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`glow-card p-8 rounded-2xl transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                {/* Certification Icon Placeholder */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Badge className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1 font-mono">{cert.name}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="text-primary font-semibold font-mono">{cert.organization}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                <p className="text-muted-foreground leading-relaxed font-mono">{cert.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 font-mono">Skills Validated</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors duration-200 font-mono"
                      >
                        {skill}
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

export default CertificationsSection;
