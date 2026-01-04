import { useEffect, useRef, useState } from 'react';
import { Code2, Github, Play, ShoppingCart, BookA, Lock, Timer, Shield, Info } from 'lucide-react';
import TextShuffle from './TextShuffle';
import ScrambleText from './ScrambleText';
import ScrambleHTML from './ScrambleHTML';
import scIcon from './sc.jpeg';
import fluxIcon from './flux.png';
import spaIcon from './spa-ceylon.png';
import syclIcon from './sycl.svg';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldDecode, setShouldDecode] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setShouldDecode(false);
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
      title: "FLUX - Financial Clarity",
      description: "Transform complex PDF bank statements into clear, actionable insights. Experience automated analysis with enterprise-grade privacy and security.",
      techStack: ["React", "TypeScript", "Node.js", "AI Analysis"],
      icon: fluxIcon,
      demoUrl: "https://flux.shankaalwis.dev",
      githubUrl: "#",
      featured: true,
      highlightTag: "Key Features:",
      highlightText: [
        <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }} key="flux-list">
          <li><strong>Automated Analysis:</strong> Intelligent engine categorizes transactions and identifies subscriptions instantly from PDF uploads.</li>
          <li><strong>Actionable Insights:</strong> Gain immediate visibility into spending patterns and financial health with clear visualizations.</li>
          <li><strong>Enterprise Security:</strong> Built with privacy-first architecture ensuring your financial data remains secure.</li>
          <li><strong>Broad Support:</strong> Compatible with PDF statements from most major banking institutions.</li>
        </ul>
      ],
    },
    {
      title: "Revamping the Spa Ceylon Rewards App",
      description: "Led the design, development, and implementation of a fully integrated Spa Reservation System to streamline appointment booking, enhance customer experience, and optimize operational efficiency across Spa Ceylon outlets.",
      techStack: [""],
      icon: spaIcon,
      forceWhiteBackground: true,
      githubUrl: "",
      featured: true,
      highlightTag: "Key Highlights:",
      highlightText: [
        <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }} key="list">
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
      icon: spaIcon,
      forceWhiteBackground: true,
      githubUrl: "",
      featured: true,
      highlightTag: "Key Highlights:",
      highlightText: [
        <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }} key="list2">
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
      title: "SYCL Dashboard",
      description: "Manage your subscription business with powerful analytics, multi-currency support, and automated billing workflows.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      icon: syclIcon,
      demoUrl: "https://sycl.shankaalwis.dev",
      githubUrl: "#",
      featured: true,
      highlightTag: "Key Features:",
      highlightText: [
        <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }} key="sycl-list">
          <li><strong>Business Analytics:</strong> Real-time tracking of subscription value, growth trends, and daily user activity.</li>
          <li><strong>Multi-Currency:</strong> Seamless management of global pricing with built-in currency switching.</li>
          <li><strong>Billing Automation:</strong> Streamlined active subscription tracking and pending invoice management.</li>
          <li><strong>Integrated Reports:</strong> Centralized reporting for subscriptions and financial performance.</li>
        </ul>
      ],
    },
    {
      title: "The Urban Nest Store",
      description: "A WooCommerce-based webstore for home and lifestyle products with responsive design, product filters, and IPG integration.",
      techStack: ["WooCommerce", "WordPress", "PHP", "MySQL"],
      icon: ShoppingCart,
      demoUrl: "https://www.theurbanneststore.com",
      githubUrl: "https://github.com/shankaalwis/www.theurbanneststore.com",
      featured: true
    },
    {
      title: "Dictionary Search System",
      description: "C++ console application for dictionary management, supporting file loading, binary search, and interactive menu navigation.",
      techStack: ["C++"],
      icon: BookA,
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/DictionaryFileIO_SearchSystem_CPP",
      featured: false
    },
    {
      title: "Block Cipher Encryption System",
      description: "A custom block cipher using permutations, XOR operations, and prime-based substitution with full IV and key scheduling.",
      techStack: ["Python"],
      icon: Lock,
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/Block-Cipher-Encryption-using-Custom-Permutation-and-Prime-Based-Substitution",
      featured: false
    },
    {
      title: "Time-Based Stream Cipher",
      description: "Simulation of a stream cipher using a time-based keystream with XOR for lightweight encryption and decryption.",
      techStack: ["Python"],
      icon: Timer,
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/Time-Based-Stream-Cipher-Simulation-using-XOR",
      featured: false
    },
    {
      title: "CyberMiniScan v1.2",
      description: "A lightweight offline security scanner in Scala that detects weak passwords, dangerous file types, and risky URLs.",
      techStack: ["Scala"],
      icon: Shield,
      demoUrl: "#",
      githubUrl: "https://github.com/shankaalwis/CyberMiniScan-v1.2",
      featured: false
    }
  ];


  const handleMouseEnter = () => {
    setShouldDecode(true);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`mb-16 max-w-3xl ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 reveal-hidden stagger-1 reveal-visible">
            <TextShuffle text="Projects" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
          </h2>
          <p className="text-lg text-muted-foreground reveal-hidden stagger-2 reveal-visible">
            <ScrambleText text="Real-world applications of passion and problem-solving." shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group relative flex flex-col h-full ${project.featured ? 'lg:col-span-2' : ''} ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${(index * 100) + 200}ms` }}
            >
              {project.featured && (
                <div className="absolute top-6 right-6 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Featured
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  {/* @ts-ignore */}
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${project.forceWhiteBackground ? 'bg-white p-2' : 'bg-secondary/50'} group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                    {/* @ts-ignore */}
                    {project.icon && typeof project.icon === 'string' ? (
                      <img
                        /* @ts-ignore */
                        src={project.icon}
                        alt={`${project.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    ) : project.icon ? (
                      /* @ts-ignore */
                      <project.icon className="w-8 h-8 text-primary" />
                    ) : (
                      /* @ts-ignore */
                      <span className="text-3xl">{project.image}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground leading-tight pr-16">
                    <ScrambleText text={project.title} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                  <ScrambleText text={project.description} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                </p>

                {/* Highlights */}
                {project.highlightText && (
                  <div className="mb-6 bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 text-xs font-bold uppercase tracking-wide mb-3">
                      <ScrambleText text={project.highlightTag ?? "Highlights"} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                    </span>
                    <div className="text-muted-foreground text-sm space-y-2 [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:pl-1">
                      <ScrambleHTML shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter}>
                        {project.highlightText}
                      </ScrambleHTML>
                    </div>
                  </div>
                )}

                {project.techStack?.filter(Boolean).length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide opacity-70">
                      <ScrambleText text="Tech Stack" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.filter(Boolean).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          <ScrambleText text={tech} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {/* Demo button */}
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <ScrambleText text="Live Demo" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                  </a>
                )}

                {/* Code button */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <ScrambleText text="View Code" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
