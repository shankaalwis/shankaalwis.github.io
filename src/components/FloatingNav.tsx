
import { useEffect, useState } from 'react';
import { User, Briefcase, GraduationCap, Award, Code, Mail, Sun, Moon } from 'lucide-react';

interface FloatingNavProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const FloatingNav = ({ isDark, toggleTheme }: FloatingNavProps) => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: User, label: 'Home' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-center space-y-2 bg-card/80 backdrop-blur-md border border-border/20 rounded-2xl p-3 shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`p-3 rounded-xl transition-all duration-300 group relative ${
              activeSection === item.id
                ? 'bg-primary text-primary-foreground cyber-glow'
                : 'hover:bg-primary/20 text-muted-foreground hover:text-primary'
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-card border border-border rounded-lg px-2 py-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
        
        <div className="w-full h-px bg-border my-2"></div>
        
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl transition-all duration-300 hover:bg-primary/20 text-muted-foreground hover:text-primary group relative"
          title={isDark ? 'Light Mode' : 'Dark Mode'}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-card border border-border rounded-lg px-2 py-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default FloatingNav;
