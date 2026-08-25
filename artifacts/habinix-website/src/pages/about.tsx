import { Layout } from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const VALUES = [
  { icon: Target, title: "Precision", desc: "We build with deliberate architecture, clean code, and an obsession for getting details right." },
  { icon: Eye, title: "Transparency", desc: "Our clients have full visibility into progress, decisions, and trade-offs at every stage." },
  { icon: Heart, title: "Commitment", desc: "We are a long-term partner in your success, not a vendor who disappears after delivery." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative pt-40 pb-32 overflow-hidden"
        style={{ background: "hsl(222,47%,5%)" }}
      >
        <div
          className="absolute top-1/2 right-1/4 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Our Story</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight max-w-4xl">
              Built on precision.<br />
              <span
                style={{
                  background: "linear-gradient(90deg, hsl(188,100%,70%), hsl(200,100%,60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Engineered for scale.
              </span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Habinix LLC was founded to bridge the gap between emerging AI technologies and rigorous software engineering standards. We build solutions that work in the real world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: "Mission",
                title: "Simplify technology. Accelerate growth.",
                body: "To simplify technology and help businesses grow through intelligent digital solutions. We believe that technology should be an accelerator, not a bottleneck — so we design systems that are powerful yet approachable, complex yet manageable.",
              },
              {
                label: "Vision",
                title: "A globally trusted technology leader.",
                body: "To become a globally trusted technology company delivering innovative AI and software solutions, recognized for our commitment to quality, security, and measurable impact on the businesses we serve.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-10 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 opacity-70">{item.label}</div>
                <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                <p className="text-white/45 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Identity */}
      <section className="py-32" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Corporate Identity</div>
              <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">Who we are, legally and operationally.</h2>
              <ul className="space-y-8">
                {[
                  { title: "Wyoming LLC, USA", body: "Registered and operating under the rigorous business frameworks of Wyoming — one of the most business-friendly states in the USA, ensuring stability and legal clarity for our global clients." },
                  { title: "Global Delivery Model", body: "A distributed elite team of engineers providing round-the-clock development, monitoring, and support for enterprise clients worldwide. We operate across time zones so you never have to wait." },
                  { title: "AI-First Paradigm", body: "We don't just add AI — we build from the ground up with AI capabilities integrated into the core architecture of your systems for genuine competitive advantage." },
                ].map((item, i) => (
                  <motion.li
                    key={item.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-2 font-semibold">{item.title}</strong>
                      <span className="text-white/45 text-sm leading-relaxed">{item.body}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className="p-8 rounded-2xl flex gap-5 items-start"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,229,255,0.08)" }}
                  >
                    <v.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Join the companies trusting Habinix.
            </h2>
            <p className="text-white/45 mb-12 max-w-xl mx-auto">
              Let's have a conversation about how we can architect your next phase of growth.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                style={{ background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)", boxShadow: "0 0 30px rgba(0,229,255,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 50px rgba(0,229,255,0.55)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,229,255,0.35)"; }}
                data-testid="button-about-contact"
              >
                Contact our leadership team <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
