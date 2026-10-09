import { useState, useEffect } from 'react';
import { ActiveScreen, CourseModule, PricingPlan } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValueSection } from './components/ValueSection';
import { ModulesSection } from './components/ModulesSection';
import { AuthorSection } from './components/AuthorSection';
import { CaseStudySection } from './components/CaseStudySection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { NeuropolisMap } from './components/NeuropolisMap';
import { AiPlayground } from './components/AiPlayground';
import { RoiCalculator } from './components/RoiCalculator';
import { DistrictModal } from './components/DistrictModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { BottomBar } from './components/BottomBar';
import { Footer } from './components/Footer';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('overview');
  const [selectedModule, setSelectedModule] = useState<CourseModule | null>(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollingPlan, setEnrollingPlan] = useState<PricingPlan | null>(null);

  // Scroll to top on screen switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeScreen]);

  const handleOpenEnrollWithPlan = (plan: PricingPlan) => {
    setEnrollingPlan(plan);
    setIsEnrollModalOpen(true);
  };

  const handleOpenEnrollGeneral = () => {
    setEnrollingPlan(null);
    setIsEnrollModalOpen(true);
  };

  const handleScrollToProgram = () => {
    if (activeScreen !== 'overview') {
      setActiveScreen('overview');
      setTimeout(() => {
        const el = document.getElementById('programma');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('programma');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1c1b] flex flex-col font-sans">
      {/* Fixed Luxury Header */}
      <Header
        activeScreen={activeScreen}
        onNavigate={setActiveScreen}
        onOpenEnroll={handleOpenGeneralEnroll}
      />

      {/* Main Container with top padding for fixed header and bottom padding for bar */}
      <main className="flex-1 w-full pt-16 md:pt-20 pb-28">
        {activeScreen === 'overview' && (
          <div className="flex flex-col w-full">
            <HeroSection
              onOpenEnroll={handleOpenGeneralEnroll}
              onNavigate={setActiveScreen}
            />
            <ValueSection />
            <ModulesSection
              onSelectModule={setSelectedModule}
              onNavigate={setActiveScreen}
            />
            <AuthorSection />
            <CaseStudySection />
            <PricingSection
              onSelectPlan={handleOpenEnrollWithPlan}
            />
            <FaqSection />
          </div>
        )}

        {activeScreen === 'map' && (
          <NeuropolisMap
            onSelectModule={setSelectedModule}
            onOpenEnroll={handleOpenGeneralEnroll}
          />
        )}

        {activeScreen === 'playground' && (
          <AiPlayground />
        )}

        {activeScreen === 'calculator' && (
          <RoiCalculator
            onOpenEnroll={handleOpenGeneralEnroll}
          />
        )}
      </main>

      {/* Pre-footer banner and legal info */}
      <Footer onOpenEnroll={handleOpenGeneralEnroll} />

      {/* Sticky Bottom Bar */}
      <BottomBar
        onOpenEnroll={handleOpenGeneralEnroll}
        onScrollToProgram={handleScrollToProgram}
      />

      {/* District Detail Modal */}
      <DistrictModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onOpenEnroll={handleOpenGeneralEnroll}
      />

      {/* Booking / Enrollment Checkout Modal */}
      {isEnrollModalOpen && (
        <EnrollmentModal
          initialPlan={enrollingPlan}
          onClose={() => {
            setIsEnrollModalOpen(false);
            setEnrollingPlan(null);
          }}
        />
      )}
    </div>
  );

  function handleOpenGeneralEnroll() {
    handleOpenEnrollGeneral();
  }
}
