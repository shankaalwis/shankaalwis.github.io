
import { useEffect, useRef, useState } from 'react';
import { Code2, ExternalLink, Github, Play } from 'lucide-react';
import scIcon from './sc.jpeg';

const ProjectsSection = () => {
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

    const projects = [
    {
      title: "Revamping the Spa Ceylon Rewards App",
      description: "Led the design, development, and implementation of a fully integrated Spa Reservation System to streamline appointment booking, enhance customer experience, and optimize operational efficiency across Spa Ceylon outlets.",
      techStack: [""],
      icon: scIcon,
      githubUrl: "",
      featured: true,
      highlightTag:"Key Highlights:",
    highlightText: [
      <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }}>
          <li><strong>App Overhaul:</strong> Completely redesigned and re-engineered the existing loyalty app to improve usability, functionality, and scalability across digital and in-store touchpoints.</li>
        <li><strong>POS System Integration:</strong> Seamlessly integrated the app with our existing POS infrastructure, enabling real-time transaction syncing and unlocking unified customer profiles.</li>
        <li><strong>Outlet Data Integration:</strong> Centralized outlet-level customer data to enable personalized remarketing, campaign optimization, and more accurate customer segmentation.</li>
        <li><strong>Enhanced CX & Retention:</strong> Focused on streamlining user journeys, improving loyalty mechanics, and strengthening member engagement to drive repeat transactions.</li>
        <li><strong>Cross-Functional Leadership:</strong> Served as the key digital transformation lead, collaborating with CRM, retail, tech, and marketing teams to deliver a coordinated rollout and long-term impact.</li>
      </ul>
    ],
      demoUrl: "https://lk.spaceylon.com/pages/spa-ceylon-rewards",
    },
    {
      title: "Rollout of the Spa Ceylon Spa Reservation System",
      description: "As the key digital transformation and technologies lead for the project, I took over and led the full revamp of our existing loyalty app driving the initiative forward in close collaboration with my team, my lead, senior leadership, and other departments—transforming it into a modern, data-driven platform aligned with our customer experience and retention goals. Reshaped the direction of the project and delivered an integrated, performance-oriented solution.",
      techStack: [""],
      icon: scIcon,
      githubUrl: "",
      featured: true,
      highlightTag:"Key Highlights:",
      highlightText: [
  <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }}>
    <li><strong>End-to-End Project Ownership:</strong> Managed the project lifecycle from requirement gathering, technology selection, and system design to deployment and post-launch optimization.</li>
    <li><strong>Stakeholder Coordination:</strong> Worked closely with outlet managers, IT teams, and directly with company directors to gather, refine, and prioritize business requirements.</li>
    <li><strong>Staff Training & Onboarding:</strong> Acted as the key person in educating staff and all system users, conducting training sessions across outlets to ensure smooth adoption and confident usage.</li>
    <li><strong>Customer-Centric Design:</strong> Developed a user-friendly online booking interface with real-time slot availability, integrated payment gateway, and automated confirmation/reminder notifications.</li>
    <li><strong>Data Integration:</strong> Linked the reservation platform with the loyalty system and CRM to enable personalized marketing campaigns and improved retention.</li>
    <li><strong>Process Automation:</strong> Reduced manual booking errors and administrative workload by implementing calendar syncing and automated reporting.</li>
    <li><strong>Performance Monitoring:</strong> Set KPIs to track booking conversion rates, customer satisfaction, and repeat visit patterns.</li>
  </ul>
],

      demoUrl: "https://bookspaceylon.com",
    },
    {
      title: "The Urban Nest Store",
      description: "A WooCommerce-based webstore for home and lifestyle products with responsive design, product filters, and IPG integration.",
      techStack: ["WooCommerce", "WordPress", "PHP", "MySQL"],
      image: "🛒",
      demoUrl: "https://www.theurbanneststore.com",
      githubUrl: "https://github.com/shankaalwis/www.theurbanneststore.com",
      featured: true
    },
      {
      title: "XL2Images",
      description: "A Python script to bulk download images from Excel (.xlsx) sheets containing image URLs. Useful for datasets and product imagery.",
      techStack: ["Python", "openpyxl", "requests"],
      image: "🖼️",
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/XL2Images",
      featured: false
    },
    {
      title: "Distributed Tax Estimator",
      description: "A distributed system for estimating personal income tax using Python, Pyro5 for RPC, and SQLite for backend storage.",
      techStack: ["Python", "Pyro5", "SQLite"],
      image: "💰",
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/pitre-distributed-tax-estimator",
      featured: false
    },
    {
      title: "Dictionary Search System",
      description: "C++ console application for dictionary management, supporting file loading, binary search, and interactive menu navigation.",
      techStack: ["C++"],
      image: "📚",
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/DictionaryFileIO_SearchSystem_CPP",
      featured: false
    },
    {
      title: "Block Cipher Encryption System",
      description: "A custom block cipher using permutations, XOR operations, and prime-based substitution with full IV and key scheduling.",
      techStack: ["Python"],
      image: "🔐",
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/Block-Cipher-Encryption-using-Custom-Permutation-and-Prime-Based-Substitution",
      featured: false
    },
    {
      title: "Time-Based Stream Cipher",
      description: "Simulation of a stream cipher using a time-based keystream with XOR for lightweight encryption and decryption.",
      techStack: ["Python"],
      image: "⏱️",
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/Time-Based-Stream-Cipher-Simulation-using-XOR",
      featured: false
    },
    {
      title: "CyberMiniScan v1.2",
      description: "A lightweight offline security scanner in Scala that detects weak passwords, dangerous file types, and risky URLs.",
      techStack: ["Scala"],
      image: "🛡️",
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/CyberMiniScan-v1.2",
      featured: false
    }
  ];


  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className={`text-left mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-tech text-4xl md:text-5xl font-bold text-foreground mb-2">
                Projects
              </h2>
              <p className="text-lg text-muted-foreground font-mono">
                Real-world applications of passion and problem-solving.
              </p>
            </div>
          </div>
          <div className="h-px bg-primary w-96 max-w-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glow-card p-8 rounded-2xl transition-all duration-700 group relative ${project.featured ? 'lg:col-span-2' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
              )}
              
              <div className={`${project.featured ? 'md:flex md:items-center md:gap-8' : ''}`}>
                <div className={`${project.featured ? 'md:flex-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {project.icon ? (
                        <img
                          src={project.icon}
                          alt={`${project.title} icon`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      ) : (
                        <span className="text-4xl">{project.image}</span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  {/* Highlights (only for projects that have it) */}
                  {project.highlightText ? (
                    <div className="mb-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 text-xs font-semibold mb-2">
                        {project.highlightTag ?? "Highlights"}
                      </span>
                      <p className="text-muted-foreground">
                        {project.highlightText}
                      </p>
                    </div>
                  ) : null}
                  {project.techStack?.filter(Boolean).length ? (
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.filter(Boolean).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  
                  <div className={`flex gap-4 ${project.featured ? 'md:flex-col' : ''}`}>
                      {/* Demo button — show only if demoUrl exists */}
                      {project.demoUrl && project.demoUrl !== '#' && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-3 py-2 rounded-lg w-fit transition-all duration-300 hover:scale-105"

                        >
                          <Play className="w-4 h-4" />
                          Demo
                        </a>
                      )}

                      {/* Code button — show only if githubUrl exists */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-card hover:bg-muted text-foreground border border-border px-4 py-2 rounded-lg w-fit transition-all duration-300 hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
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

export default ProjectsSection;
