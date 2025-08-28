import { useState, useEffect } from 'react';
import NotificationBar from '@/components/NotificationBar';
import Navigation from '@/components/Navigation';
import OnasadhyaSection from '@/components/OnasadhyaSection';
import PayasamSection from '@/components/PayasamSection';
import GiftBoxSection from '@/components/GiftBoxSection';
import BulkOrderSection from '@/components/BulkOrderSection';
import PickupLocationsSection from '@/components/PickupLocationsSection';
import Footer from '@/components/Footer';
import TermsModal from '@/components/modals/TermsModal';
import LogoDiv from '@/components/LogoDiv';
import OnamContest from '@/components/OnamContest';

export default function Home() {
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('onasadhya');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['onasadhya', 'payasam', 'giftbox', 'onamcontest', 'bulk-order'];
      const offset = notificationVisible ? 140 : 80;
      
      let current = '';
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop - offset;
          if (window.pageYOffset >= sectionTop - 100) {
            current = sectionId;
          }
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [notificationVisible]);

  return (
    <div>
      <NotificationBar 
        visible={notificationVisible} 
        onClose={() => setNotificationVisible(false)} 
      />
      <Navigation 
        notificationVisible={notificationVisible} 
        activeSection={activeSection} 
      />
      <LogoDiv />
      <OnasadhyaSection />
      <PayasamSection />
      <GiftBoxSection />
      <OnamContest/>
      <BulkOrderSection />
      <PickupLocationsSection />
      <Footer />
      <TermsModal />
    </div>
  );
}