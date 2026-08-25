import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const CASES = [
  {
    id: "logistics-ai",
    client: "GlobalFreight Partners",
    title: "AI Route Optimization",
    desc: "Implemented a predictive machine learning model to dynamically reroute cargo based on real-time weather and traffic, saving 14% on fuel costs globally.",
    metrics: [
      { icon: TrendingUp, val: "14%", label: "Fuel Savings" },
      { icon: Clock, val: "2.4M", label: "Hours Saved" },
      { icon: BarChart3, val: "99.9%", label: "Uptime" },
    ],
  },
  {
    id: "health-crm",
    client: "CarePlus Medical",
    title: "Enterprise SaaS CRM",
    desc: "Built a fully HIPAA-compliant patient management system unifying 40+ legacy databases into a single, high-performance web application.",
    metrics: [
      { icon: TrendingUp, val: "40+", label: "Systems Unified" },
      { icon: Clock, val: "-60%", label: "Admin Time" },
      { icon: BarChart3, val: "100%", label: "Compliance" },
    ],
  },
  {
    id: "retail-ecom",
    client: "Urban Threads",
    title: "E-Commerce Transformation",
    desc: "Migrated a struggling monolith to a modern microservices architecture, implementing an AI recommendation engine that boosted average order value by 32%.",
    metrics: [
      { icon: TrendingUp, val: "+32%", label: "AOV Increase" },
      { icon: Clock, val: "<100ms", label: "Page Load" },
      { icon: BarChart3, val: "10x", label: "Scale Capacity" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div
          className="absolute top-1/2 left-1/3 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Results</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Case Studies</h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Deep dives into how we solve complex engineering challenges and deliver measurable ROI for enterprise clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {CASES.map((study, i) => (
            <motion.div
              key={study.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Content */}
              <div className="p-10 md:p-16" style={{ background: "rgba(255,255,255,0.025)" }}>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
                  style={{ background: "rgba(0,229,255,0.08)", color: "hsl(188,100%,65%)", border: "1px solid rgba(0,229,255,0.15)" }}
                >
                  {study.client}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{study.title}</h2>
                <p className="text-white/45 leading-relaxed mb-10 text-lg">{study.desc}</p>

                <div
                  className="grid grid-cols-3 gap-6 mb-10 pt-8"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {study.metrics.map((m, j) => (
                    <div key={j}>
                      <m.icon className="w-5 h-5 text-accent mb-3" />
                      <div
                        className="text-2xl md:text-3xl font-bold mb-1"
                        style={{
                          background: "linear-gradient(90deg, hsl(188,100%,65%), hsl(200,100%,55%))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {m.val}
                      </div>
                      <div className="text-xs text-white/35 font-medium uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:opacity-70 transition-opacity"
                  data-testid={`button-case-${study.id}`}
                >
                  Discuss a similar project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Visual panel */}
              <div
                className="relative min-h-[280px] flex flex-col justify-between p-10 md:p-16"
                style={{
                  background: "rgba(0,229,255,0.03)",
                  borderLeft: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)" }}
                />
                <div className="relative z-10">
                  <div className="rounded-xl p-6 mb-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="h-2 w-1/3 rounded mb-4" style={{ background: "rgba(0,229,255,0.2)" }} />
                    <div className="space-y-2.5">
                      <div className="h-1.5 w-full rounded" style={{ background: "rgba(255,255,255,0.07)" }} />
                      <div className="h-1.5 w-5/6 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                      <div className="h-1.5 w-4/6 rounded" style={{ background: "rgba(255,255,255,0.04)" }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="h-1.5 w-2/3 rounded mb-2" style={{ background: "rgba(0,229,255,0.15)" }} />
                      <div className="h-1 w-full rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                    </div>
                    <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="h-1.5 w-1/2 rounded mb-2" style={{ background: "rgba(0,229,255,0.1)" }} />
                      <div className="h-1 w-full rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
