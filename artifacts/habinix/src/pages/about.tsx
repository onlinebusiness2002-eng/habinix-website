import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full">
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Institutional Reliability
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-foreground/80"
          >
            Habinix LLC is an operational powerhouse funding and supporting global digital infrastructure.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-muted-foreground"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Corporate Profile</h2>
              <p>
                Habinix LLC operates at the intersection of enterprise technology and strategic business services. 
                As a Wyoming-registered professional services company (NAICS Code 541), we provide unyielding operational 
                oversight and technical execution for complex digital ventures.
              </p>
              <p>
                We build, scale, and manage proprietary portfolios that require a high degree of technical precision 
                and rigorous compliance. Our infrastructure is designed not just to perform, but to endure.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Commitment</h3>
              <p>
                We believe that reliable digital welfare structures are the backbone of modern society. 
                Through targeted investments and strategic IT consulting, Habinix ensures that critical applications 
                receive the enterprise-grade support they require to serve global audiences without interruption.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Corporate Details</h3>
              <dl className="space-y-4 text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-4">
                  <dt className="text-muted-foreground font-medium">Entity Type</dt>
                  <dd className="font-semibold text-foreground">Limited Liability Company (LLC)</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-4">
                  <dt className="text-muted-foreground font-medium">Jurisdiction</dt>
                  <dd className="font-semibold text-foreground">Wyoming, USA</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between pb-4">
                  <dt className="text-muted-foreground font-medium">Classification</dt>
                  <dd className="font-semibold text-foreground">NAICS 541 (Professional, Scientific, and Technical Services)</dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}