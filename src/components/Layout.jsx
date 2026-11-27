import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
        {/* Logo - Top Left */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center"
        onClick={closeMenu}
      >
        <img
          src="/logo.png"
          alt="Avneet Saggu Logo"
          className="h-12 md:h-16 w-auto object-contain"
        />
      </Link>

      {/* Persistent Top-Corner Navigation */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={toggleMenu}
          className="font-press-start bg-accent-yellow text-deep-maroon px-3 py-2 border-4 border-deep-maroon shadow-[4px_4px_0_0_#7A1224] transition-all active:translate-y-[4px] active:translate-x-[4px] active:shadow-none hover:bg-primary-magenta hover:text-white"
        >
          {isMenuOpen ? 'X' : 'MENU'}
        </button>

        {isMenuOpen && (
          <nav className="absolute top-14 right-0 bg-white border-4 border-deep-maroon shadow-[8px_8px_0_0_#2F5FCB] p-4 min-w-[200px] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={closeMenu}
                className={`font-press-start text-sm hover:text-primary-magenta transition-colors ${
                  location.pathname === link.path || (link.path === '/case-studies' && (location.pathname.startsWith('/case-studies') || location.pathname.startsWith('/projects')))
                    ? 'text-primary-magenta underline' 
                    : 'text-deep-maroon'
                }`}
              >
                &gt; {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Main Content Area */}
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
