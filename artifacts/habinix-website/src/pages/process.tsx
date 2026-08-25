import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const STEPS = [
  { num: "01", title: "Discovery", desc: "We begin with a deep dive into your business objectives, current technical debt, and required outcomes. No assumptions — only verified facts." },
  { num: "02", title: "Strategy", desc: "Our architects design a scalable, secure roadmap, selecting the exact technology stack that fits your long-term goals and team capabilities." },
  { num: "03", title: "Design", desc: "We map out user flows, API contracts, and system architectures. All stakeholders aligned before a single line of code is written." },
  { num: "04", title: "Development", desc: "Our engineers build using agile methodologies, delivering functional increments and maintaining strict code quality and review standards." },
  { num: "05", title: "Testing", desc: "Rigorous QA, automated testing suites, security audits, and load testing to ensure predictable behavior under real-world stress." },
  { num: "06", title: "Launch", desc: "Controlled, zero-downtime deployment strategies with full CI/CD pipeline integration and documented rollback procedures." },
  { num: "07", title: "Support", desc: "Ongoing monitoring, proactive maintenance, and iterative feature development to ensure your investment continues to compound." },
];

export default function Process() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div
          className="absolute top-1/2 right-1/4 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">How We Work</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Our Process</h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Predictable delivery through disciplined engineering. We treat software development as an exact science — minimizing risk and maximizing ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-7 top-8 bottom-8 w-px hidden md:block"
              style={{ background: "linear-gradient(180deg, rgba(0,229,255,0.3) 0%, rgba(0,229,255,0.05) 100%)" }}
            />

            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-8 items-start"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10 relative"
                    style={{
                      background: "hsl(222,47%,4%)",
                      border: "1px solid rgba(0,229,255,0.3)",
                      color: "hsl(188,100%,65%)",
                      boxShadow: "0 0 16px rgba(0,229,255,0.1)",
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="flex-1 p-8 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/45 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,184,212,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Experience predictability.</h2>
            <p className="text-white/40 mb-12 max-w-lg mx-auto">Ready to begin the discovery phase? It starts with a single conversation.</p>
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                style={{ background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)", boxShadow: "0 0 30px rgba(0,229,255,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 50px rgba(0,229,255,0.55)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,229,255,0.35)"; }}
                data-testid="button-process-cta"
              >
                Start Step 01 <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
