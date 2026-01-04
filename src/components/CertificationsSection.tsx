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
      "name": "FCF - Technical Introduction to Cybersecurity 1.0",
      "organization": "Fortinet",
      "year": "2024",
      "image": "https://images.credly.com/size/680x680/images/38484a57-5b41-4411-aaf3-63030da63993/image.png",
      "description": "Technical overview of cybersecurity principles and protection mechanisms",
      "skills": ["Application Security", "Authentication Control", "Cloud Security", "Cryptography", "Data Privacy", "Data Security", "Endpoint Security", "Firewall", "IoT Security", "Network Access Control", "Network Security", "Secure Remote Access", "Secure SD-WAN", "Zero Trust"]
    },
    {
      "name": "FCF - Introduction to the Threat Landscape 2.0",
      "organization": "Fortinet",
      "year": "2024",
      "image": "https://images.credly.com/size/680x680/images/083854d8-3a8f-465c-b414-19507f9703d9/image.png",
      "description": "Insight into evolving cybersecurity threats and modern attack methods",
      "skills": ["Cybersecurity", "Cybersecurity Threats", "Information Security Principles", "Malware Attacks", "Social Engineering", "Threat Intelligence"]
    },
    {
      "name": "Prompt Design in Vertex AI",
      "organization": "Google Cloud",
      "year": "2024",
      "image": "https://images.credly.com/size/680x680/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png",
      "description": "Skills in prompt engineering, multimodal analysis, and generative AI using Vertex AI",
      "skills": ["Artificial Intelligence (AI)", "Gemini APIs", "Generative AI", "Prompt Engineering"]
    },
    {
      "name": "Web Design for Beginners",
      "organization": "University of Moratuwa",
      "year": "2024",
      "image": "https://uom.lk/sites/default/files/logoUoM_0_0_0.png",
      "description": "Basics of HTML, CSS, and web design principles for building static websites",
      "skills": ["HTML", "CSS", "Web Design"]
    },
    {
      "name": "Networking Basics",
      "organization": "Cisco Networking Academy",
      "year": "2024",
      "image": "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/ec7b044a-3368-4bc3-8eaf-1872a41780b2.png",
      "description": "Foundational networking knowledge including protocols, topologies, and IP addressing",
      "skills": ["Application Layer Services", "IPv4 Addresses", "Network Media", "NetWork Types", "Protocols Standards", "Wireless Access"]
    },
    {
      "name": "Python for Beginners",
      "organization": "University of Moratuwa",
      "year": "2022",
      "image": "https://uom.lk/sites/default/files/logoUoM_0_0_0.png",
      "description": "Fundamentals of Python programming and basic scripting techniques",
      "skills": ["Python", "Scripting", "Programming Basics"]
    },
    {
      "name": "Google Professional Workspace Administrator",
      "organization": "Google Cloud Training",
      "year": "2022",
      "image": "https://images.credly.com/images/16d3e89c-4af5-47d8-a502-2a93b02c26d4/image.png",
      "description": "Expertise in managing Google Workspace domains, users, and security settings",
      "skills": ["Google Workspace", "Help Desk Support", "Identity And Access Management (IAM)", "Productivity Software", "System Administration", "Teleconferencing", "User Account Management"]
    },
    {
      "name": "Google IT Support Specialization",
      "organization": "Google",
      "year": "2022",
      "image": "https://images.credly.com/size/680x680/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png",
      "description": "Practical IT support skills including troubleshooting, system administration, and customer support",
      "skills": ["Computer Networking", "Customer Service", "IT Infrastructure Services", "IT Support", "Operating Systems", "Security", "System Administration", "Troubleshooting"]
    },
    {
      "name": "Microsoft Azure Fundamentals",
      "organization": "Microsoft",
      "year": "2022",
      "image": "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      "description": "Fundamental knowledge of Microsoft Azure services and cloud concepts",
      "skills": ["Azure", "Cloud Data", "Cloud Networking", "Cloud Security", "Cloud Services", "Cloud Storage", "Virtualization"]
    },
    {
      "name": "Introduction to Cyber Security",
      "organization": "Cisco Networking Academy",
      "year": "2020",
      "image": "https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      "description": "Introductory cybersecurity concepts including threats, vulnerabilities, and defense strategies",
      "skills": ["Cyber Best Practices", "Cybersecurity", "Network Vulnerabilities", "Privacy And Data Confidentiality", "Threat Detection"]
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`mb-16 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Proof of continued learning and professional milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white border border-border/50 flex items-center justify-center p-2 shadow-sm shrink-0 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-snug mb-1">{cert.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{cert.organization}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                {cert.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
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
