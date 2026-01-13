
import React from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onCallAmbulance: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange, onCallAmbulance }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white py-2 px-4 text-sm flex justify-between items-center overflow-hidden">
        <div className="flex gap-4 items-center">
          <span className="hidden md:inline">📍 123 Health Blvd, Wellness City</span>
          <span>📞 1800-AWAS-CARE</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onCallAmbulance}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full font-bold animate-pulse"
          >
            🚑 CALL AMBULANCE
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => onPageChange(Page.Home)}
            >
              <span className="text-3xl font-black text-blue-600 tracking-tighter">AWAS</span>
              <span className="text-3xl font-light text-slate-400 ml-1">HOSPITAL</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {Object.values(Page).map((page) => (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`text-sm font-semibold transition-colors uppercase tracking-wider ${
                    currentPage === page ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              {/* Mobile menu button could go here */}
              <button className="p-2 text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">AWAS HOSPITAL</h3>
            <p className="text-slate-400 leading-relaxed">
              Providing compassionate and comprehensive medical care to our community since 1995. Our mission is your health.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><button onClick={() => onPageChange(Page.Home)} className="hover:text-blue-400">Home</button></li>
              <li><button onClick={() => onPageChange(Page.Services)} className="hover:text-blue-400">Our Services</button></li>
              <li><button onClick={() => onPageChange(Page.Doctors)} className="hover:text-blue-400">Find a Doctor</button></li>
              <li><button onClick={() => onPageChange(Page.Contact)} className="hover:text-blue-400">Appointments</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Departments</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Stay updated with our health tips and news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-slate-800 border-none rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Awas Hospital Group. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
