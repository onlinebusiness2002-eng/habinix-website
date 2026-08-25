import { Layout } from "@/components/layout/Layout";
import { Cpu, Code, Globe, Smartphone, Cloud, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const SERVICES = [
  {
    id: "ai", icon: Cpu, title: "AI Solutions",
    description: "We build AI capabilities directly into your core systems — not as bolt-ons, but as foundational architecture.",
    features: ["AI Automation", "AI Agents & Chatbots", "Workflow Automation", "Prompt Engineering", "AI Integration", "Predictive Analytics"],
  },
  {
    id: "software", icon: Code, title: "Software Development",
    description: "Robust, scalable custom software built for the specific demands of your industry and scale.",
    features: ["Custom Software", "SaaS Development", "CRM Systems", "ERP Solutions", "Legacy System Modernization", "API Development"],
  },
  {
    id: "web", icon: Globe, title: "Web Development",
    description: "High-performance enterprise web platforms that convert visitors and represent your brand at the highest level.",
    features: ["Corporate Websites", "E-Commerce Platforms", "Landing Pages", "CMS Development", "Web Applications", "Performance Optimization"],
  },
  {
    id: "mobile", icon: Smartphone, title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences that your users will actually want to open every day.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter", "App UI/UX Design", "Mobile API Integration"],
  },
  {
    id: "cloud", icon: Cloud, title: "Cloud Solutions",
    description: "Resilient, secure cloud infrastructure that scales with your business without surprises.",
    features: ["Cloud Migration (AWS/Azure/GCP)", "Serverless Architecture", "Database Design", "Cybersecurity", "DevOps & CI/CD", "Infrastructure as Code"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "hsl(222,47%,5%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">What We Build</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Comprehensive technological expertise to modernize your operations from end to end. Digital infrastructure that scales, performs, and drives real business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-8"
        style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-start"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex-1">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-8"
                  style={{ background: "rgba(0,229,255,0.08)", boxShadow: "0 0 16px rgba(0,229,255,0.1)" }}
                >
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{service.title}</h2>
                <p className="text-lg text-white/45 mb-10 leading-relaxed max-w-lg">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:opacity-70 transition-opacity"
                  data-testid={`link-service-contact-${service.id}`}
                >
                  Start a project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="w-full lg:w-72 shrink-0">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "hsl(188,100%,50%)", boxShadow: "0 0 6px rgba(0,229,255,0.6)" }}
                      />
                      <span className="text-white/60 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,184,212,0.07) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Need a custom solution?</h2>
            <p className="text-white/45 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
              Our engineering team can build bespoke architecture tailored specifically to your business requirements and scale.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                style={{ background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)", boxShadow: "0 0 30px rgba(0,229,255,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 50px rgba(0,229,255,0.55)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,229,255,0.35)"; }}
                data-testid="button-services-contact"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
