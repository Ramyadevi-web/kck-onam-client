import React, { useState } from "react";

interface NavigationProps {
  notificationVisible: boolean;
  activeSection: string;
}

export default function Navigation({ notificationVisible, activeSection }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = notificationVisible ? 140 : 80;
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false); // Close menu on link click
    }
  };

  return (
    <nav
      className={`fixed left-0 w-full bg-black mt-2 shadow ${notificationVisible ? 'pt-15' : 'pt-2'}`}
      id="mainNavbar"
      style={{
        top: notificationVisible ? '44px' : '0px'
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="#logo">
          <img
          src="/images/kck_logo.webp"
          alt="logo"
          className="p-1"
          style={{ height: '70px' }}
          data-testid="navbar-logo"
         />  
        </a>
        
        {/* Hamburger button for mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        {/* Menu */}
        <ul className={`flex-col lg:flex-row lg:flex space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'}`}>
          <li>
            <a
              className={`block px-4 py-2  hover:text-yellow-400 transition ${activeSection === 'onasadhya' ? 'font-bold nav-active' : ''}`}
              href="#onasadhya"
              onClick={(e) => scrollToSection('onasadhya', e)}
              data-testid="link-nav-onasadhya"
            >
            ONASADHYA
            </a>
          </li>
          <li>
            <a
              className={`block px-4 py-2 hover:text-yellow-400 transition ${activeSection === 'payasam' ? 'font-bold  nav-active' : ''}`}
              href="#payasam"
              onClick={(e) => scrollToSection('payasam', e)}
              data-testid="link-nav-payasam"
            >
              PAYASAM
            </a>
          </li>
          <li>
            <a
              className={`block px-4 py-2 hover:text-yellow-400 transition ${activeSection === 'giftbox' ? 'font-bold  nav-active' : ''}`}
              href="#giftbox"
              onClick={(e) => scrollToSection('giftbox', e)}
              data-testid="link-nav-giftbox"
            >
              KCK GIFT BOX
            </a>
          </li>
           <li>
            <a
              className={`block px-4 py-2 hover:text-yellow-400 transition ${activeSection === 'onamcontest' ? 'font-bold  nav-active' : ''}`}
              href="#onamcontest"
              onClick={(e) => scrollToSection('onamcontest', e)}
              data-testid="link-nav-onamcontest"
            >
              KCK ONAM CONTEST
            </a>
          </li>

          <li>
            <a
              className={`block px-4 py-2 hover:text-yellow-400 transition ${activeSection === 'bulk-order' ? 'font-bold  nav-active' : ''}`}
              href="#bulk-order"
              onClick={(e) => scrollToSection('bulk-order', e)}
              data-testid="link-nav-bulk-order"
            >
              BULK ORDER
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}