import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Activity, Building, ShoppingBag, Factory, GraduationCap, Home, Truck, Video, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const INDUSTRIES = [
  { icon: Activity, name: "Healthcare", desc: "HIPAA-compliant platforms, patient portals, and predictive diagnostic AI." },
  { icon: Building, name: "Finance", desc: "Secure fintech applications, automated trading algorithms, and risk analysis." },
  { icon: ShoppingBag, name: "Retail & E-Commerce", desc: "Scalable storefronts, inventory management AI, and personalized shopping." },
  { icon: Factory, name: "Manufacturing", desc: "IoT integration, predictive maintenance, and supply chain automation." },
  { icon: GraduationCap, name: "Education", desc: "LMS platforms, virtual classrooms, and student performance tracking." },
  { icon: Home, name: "Real Estate", desc: "Property management software, virtual tours, and market prediction models." },
  { icon: Truck, name: "Logistics", desc: "Route optimization, fleet tracking, and automated dispatch systems." },
  { icon: Video, name: "Media & Entertainment", desc: "Content delivery networks, recommendation engines, and streaming platforms." },
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.08) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Sectors</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Specialized technology solutions adapted to the unique regulatory, performance, and scaling requirements of your sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-8 rounded-2xl cursor-default transition-all duration-400"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.border = "1px solid rgba(0,229,255,0.2)";
                  el.style.background = "rgba(0,229,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.border = "1px solid rgba(255,255,255,0.05)";
                  el.style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(0,229,255,0.08)" }}
                >
                  <ind.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{ind.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,184,212,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Don't see your industry?</h2>
            <p className="text-white/40 mb-12 max-w-xl mx-auto leading-relaxed">
              Our engineering methodologies are domain-agnostic. We adapt to new regulatory environments and business models rapidly.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                style={{ background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)", boxShadow: "0 0 30px rgba(0,229,255,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 50px rgba(0,229,255,0.55)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,229,255,0.35)"; }}
                data-testid="button-industry-contact"
              >
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
