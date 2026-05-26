
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import FloatingNav from '@/components/FloatingNav';
import BackgroundEffect from '@/components/BackgroundEffect';
import { ScrambleProvider } from '@/contexts/ScrambleContext';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import ScrambleToast from '@/components/ScrambleToast';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [effectIndex, setEffectIndex] = useState(0);

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Initialize daily effect rotation
    const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    setEffectIndex(day % 4);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const cycleEffect = () => {
    setEffectIndex(prev => (prev + 1) % 4);
  };

  return (
    <ErrorBoundary>
      <ScrambleProvider>
        <ScrollProgress />
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          <BackgroundEffect isDark={isDark} effectIndex={effectIndex} />
          <FloatingNav isDark={isDark} toggleTheme={toggleTheme} />
          <div className="relative z-10 selection:bg-primary/20">
            <HeroSection />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <ProjectsSection />
            <ContactSection onCycleEffect={cycleEffect} />
          </div>
          <BackToTop />
          <ScrambleToast />
        </div>
      </ScrambleProvider>
    </ErrorBoundary>
  );
};

export default Index;
