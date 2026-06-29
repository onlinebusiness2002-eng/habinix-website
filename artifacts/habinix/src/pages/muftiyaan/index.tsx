import React from "react";
import { motion } from "framer-motion";

export default function MuftiyaanHome() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/muftiyaan-bg.jpg" 
            alt="Muftiyaan Islamic Pattern Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur border border-white/20 text-sm font-medium tracking-wide">
                OFFICIAL PLATFORM
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif">
                A Premium <br/>Scholarly Hub.
              </h1>
              <p className="text-xl text-slate-300 max-w-lg">
                Muftiyaan is the authoritative application for Islamic scholarship, connecting students with verified knowledge in a rigorous, beautifully engineered interface.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="h-14 px-8 bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 rounded-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.5c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4c0 1.3-1.1 2.4-2.4 2.4zm-11 0c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4c0 1.3-1.1 2.4-2.4 2.4zm5.5 0c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4c0 1.3-1.1 2.4-2.4 2.4z"/>
                  </svg>
                  App Store
                </button>
                <button className="h-14 px-8 bg-transparent border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 rounded-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zM12 16l4-5h-3V7h-2v4H8l4 5z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:flex justify-center"
            >
              <img 
                src="/muftiyaan-mockup.jpg" 
                alt="Muftiyaan App Interface Mockup" 
                className="max-h-[80vh] w-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Engineered for Scholars</h2>
            <p className="text-lg text-muted-foreground">
              Built on Habinix's enterprise infrastructure, Muftiyaan provides an uninterrupted, high-fidelity experience for deep academic study.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-card">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Verified Texts</h3>
              <p className="text-muted-foreground">Access a rigorously authenticated database of classical and contemporary works.</p>
            </div>
            
            <div className="p-8 border border-border bg-card">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Direct Counsel</h3>
              <p className="text-muted-foreground">Secure, private communication channels with established scholarly boards.</p>
            </div>
            
            <div className="p-8 border border-border bg-card">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Enterprise Security</h3>
              <p className="text-muted-foreground">End-to-end encryption protecting sensitive scholarly discussions and user data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Overview */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-serif mb-8">Scholarly Oversight</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Muftiyaan operates under the strict guidance of a verified scholarly board. Technical infrastructure is maintained by Habinix LLC to ensure zero operational interference with the academic mission.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
      </section>
    </div>
  );
}