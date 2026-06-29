import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Corporate IT background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 container px-4 mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Precision. Scale. Reliability.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Enterprise-grade Managed Services & IT Consulting built for organizations that cannot afford downtime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-colors bg-white text-primary hover:bg-gray-100"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Competencies</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Enterprise Technical & IT Consulting</h3>
              <p className="text-muted-foreground">Strategic infrastructure planning, security audits, and systems architecture designed for scale.</p>
            </div>
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Managed Operations & Business Services</h3>
              <p className="text-muted-foreground">End-to-end operational oversight ensuring your critical business functions never miss a beat.</p>
            </div>
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">General E-commerce Services</h3>
              <p className="text-muted-foreground">Robust digital commerce platforms engineered for high volume, security, and seamless user experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}