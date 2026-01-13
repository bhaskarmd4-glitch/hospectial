
import React, { useState } from 'react';
import { Page, Doctor } from './types';
import Layout from './components/Layout';
import HealthAssistant from './components/HealthAssistant';
import { DOCTORS, SERVICES, GALLERY } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleCallAmbulance = () => {
    alert("Emergency Services Initiated! Dispatching nearest ambulance to your location. (Simulated)");
  };

  const downloadBrochure = () => {
    alert("Downloading Awas Hospital Brochure... (Simulated)");
  };

  const renderHome = () => (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hosphero/1920/1080" 
            alt="Hospital Interior" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-in slide-in-from-left duration-700">
            Care for Your <br />
            <span className="text-blue-400 italic">Entire Family</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-slate-200 animate-in slide-in-from-left duration-700 delay-200">
            Awas Hospital brings world-class medical expertise and compassionate care under one roof. Your health is our priority.
          </p>
          <div className="flex flex-wrap gap-4 animate-in slide-in-from-left duration-700 delay-500">
            <button 
              onClick={() => setCurrentPage(Page.Contact)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105"
            >
              Book Appointment
            </button>
            <button 
              onClick={handleCallAmbulance}
              className="bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105"
            >
              Emergency 24/7
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 -mt-24 relative z-20">
        {[
          { label: 'Specialist Doctors', val: '150+' },
          { label: 'Happy Patients', val: '25K+' },
          { label: 'Successful Surgeries', val: '10K+' },
          { label: 'Years Experience', val: '28' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center hover:translate-y-[-5px] transition-transform">
            <div className="text-3xl font-black text-blue-600 mb-1">{stat.val}</div>
            <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">What we do</span>
            <h2 className="text-4xl font-black mt-2">Comprehensive Services</h2>
          </div>
          <button 
            onClick={() => setCurrentPage(Page.Services)}
            className="text-blue-600 font-bold hover:underline mb-2"
          >
            View All Services &rarr;
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <div key={service.id} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
              <button className="text-blue-600 font-bold flex items-center gap-2">
                Learn More <span className="text-xs">▶</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Know Your Doctor Teaser */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16">Meet Our Specialists</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTORS.map((doc) => (
              <div 
                key={doc.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => {
                  setSelectedDoctor(doc);
                  setCurrentPage(Page.Doctors);
                }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl">{doc.name}</h4>
                  <p className="text-blue-600 font-medium text-sm mb-4">{doc.specialty}</p>
                  <div className="flex justify-center gap-4">
                     <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase">Profile</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage(Page.Doctors)}
            className="mt-16 bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Find Your Doctor
          </button>
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-20 -mt-20 opacity-50"></div>
          <div className="relative z-10 md:max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Patient Resources & Guides</h2>
            <p className="text-blue-100 text-lg mb-8">Get all the information you need before your visit. Download our comprehensive hospital brochure for details on facilities, insurance, and more.</p>
            <button 
              onClick={downloadBrochure}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </button>
          </div>
          <div className="relative z-10 w-full md:w-1/3">
             <div className="bg-blue-800 p-8 rounded-3xl transform rotate-3 shadow-2xl">
                <div className="w-full h-48 bg-blue-700 rounded-xl mb-4 animate-pulse"></div>
                <div className="space-y-2">
                   <div className="h-4 bg-blue-700 rounded w-full"></div>
                   <div className="h-4 bg-blue-700 rounded w-2/3"></div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServices = () => (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black mb-4">Our Medical Services</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Awas Hospital provides a wide range of specialized medical care delivered by board-certified experts using the latest technology.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <div key={s.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300 group-hover:text-white">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-6">{s.description}</p>
            <ul className="space-y-3 mb-8">
              {['24/7 Availability', 'Specialist Consults', 'Modern Equipment'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <span className="text-green-500">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-slate-100 font-bold text-slate-400 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
              Book Department
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDoctors = () => (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black mb-4">Know Your Doctor</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Our doctors are not just medical experts; they are your partners in health. Learn more about their backgrounds and specialties.</p>
      </div>
      
      {selectedDoctor && (
        <div className="mb-20 bg-blue-600 rounded-[3rem] overflow-hidden text-white flex flex-col lg:flex-row shadow-2xl animate-in zoom-in duration-500">
           <div className="lg:w-1/3">
             <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
           </div>
           <div className="lg:w-2/3 p-12 lg:p-20 relative">
             <button onClick={() => setSelectedDoctor(null)} className="absolute top-8 right-8 text-blue-200 hover:text-white">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
             <span className="text-blue-200 font-bold uppercase tracking-widest text-sm">Featured Specialist</span>
             <h2 className="text-5xl font-black mt-2 mb-4">{selectedDoctor.name}</h2>
             <p className="text-2xl text-blue-100 font-medium mb-8">{selectedDoctor.specialty}</p>
             
             <div className="grid grid-cols-2 gap-8 mb-10">
               <div>
                 <h4 className="text-blue-200 font-bold text-sm uppercase mb-1">Education</h4>
                 <p className="text-lg">{selectedDoctor.education}</p>
               </div>
               <div>
                 <h4 className="text-blue-200 font-bold text-sm uppercase mb-1">Experience</h4>
                 <p className="text-lg">{selectedDoctor.experience}</p>
               </div>
             </div>
             
             <div className="mb-12">
               <h4 className="text-blue-200 font-bold text-sm uppercase mb-2">Professional Bio</h4>
               <p className="text-lg leading-relaxed text-blue-50 italic">"{selectedDoctor.bio}"</p>
             </div>
             
             <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
               Schedule Consultation
             </button>
           </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {DOCTORS.map((doc) => (
          <div 
            key={doc.id} 
            className={`bg-white rounded-3xl overflow-hidden shadow-lg group cursor-pointer border-4 transition-all ${selectedDoctor?.id === doc.id ? 'border-blue-600' : 'border-white'}`}
            onClick={() => setSelectedDoctor(doc)}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl">{doc.name}</h4>
              <p className="text-blue-600 font-medium text-sm">{doc.specialty}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                 <span className="text-slate-400 text-xs font-bold uppercase">{doc.experience}</span>
                 <span className="text-blue-600 text-xs font-black uppercase">View Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black mb-4">Hospital Gallery</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Take a tour of our facilities, advanced equipment, and the dedicated team that makes Awas Hospital exceptional.</p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {GALLERY.map((img) => (
          <div key={img.id} className="relative group overflow-hidden rounded-[2rem] break-inside-avoid">
            <img src={img.url} alt={img.caption} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
               <span className="text-blue-400 text-xs font-bold uppercase mb-2">{img.category}</span>
               <p className="text-white text-xl font-bold">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-black mb-8">Contact & Appointments</h1>
        <p className="text-slate-500 text-lg mb-12">Whether you're booking an appointment or have a question about our services, our team is here to help 24/7.</p>
        
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl text-blue-600">📍</div>
            <div>
              <h4 className="font-bold text-xl">Address</h4>
              <p className="text-slate-500">123 Health Boulevard, Medical District, Wellness City, 54321</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-2xl text-red-600">📞</div>
            <div>
              <h4 className="font-bold text-xl">24/7 Helpline</h4>
              <p className="text-slate-500">Toll Free: 1800-AWAS-CARE</p>
              <p className="text-slate-500">Emergency: +1 (555) 911-HELP</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl text-green-600">✉️</div>
            <div>
              <h4 className="font-bold text-xl">Email</h4>
              <p className="text-slate-500">General: info@awashospital.com</p>
              <p className="text-slate-500">Appointments: booking@awashospital.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100">
        <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form Submitted Successfully!"); }}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500" required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Department</label>
            <select className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500">
              <option>General Inquiry</option>
              <option>Cardiology</option>
              <option>Pediatrics</option>
              <option>Neurology</option>
              <option>Surgery</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
            <textarea rows={5} placeholder="How can we help you?" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 resize-none" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all text-lg shadow-xl hover:shadow-blue-500/20 active:scale-95">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );

  const getContent = () => {
    switch (currentPage) {
      case Page.Home: return renderHome();
      case Page.Services: return renderServices();
      case Page.Doctors: return renderDoctors();
      case Page.Gallery: return renderGallery();
      case Page.Contact: return renderContact();
      default: return renderHome();
    }
  };

  return (
    <Layout 
      currentPage={currentPage} 
      onPageChange={(p) => { 
        setCurrentPage(p); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onCallAmbulance={handleCallAmbulance}
    >
      {getContent()}
      <HealthAssistant />
    </Layout>
  );
};

export default App;
