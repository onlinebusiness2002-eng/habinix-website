import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Code, Cpu, Cloud, Smartphone, ChevronRight, Zap, Shield, Globe, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Engineering Support" },
  { value: "5+", label: "Years of Excellence" },
];

const SERVICES = [
  { icon: Cpu, title: "AI Automation", desc: "Intelligent agents, predictive models, and workflow automation tailored for your domain.", href: "/services#ai" },
  { icon: Code, title: "Software Engineering", desc: "Custom SaaS, CRM, and ERP systems built with robust modern architectures.", href: "/services#software" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud migrations, database design, and resilient API development.", href: "/services#cloud" },
  { icon: Smartphone, title: "Mobile & Web", desc: "High-performance enterprise websites and cross-platform mobile applications.", href: "/services#web" },
];

const WHY = [
  { icon: Zap, title: "AI-First Engineering", desc: "We integrate AI capabilities at the architecture level, not as an afterthought." },
  { icon: Shield, title: "Enterprise Security", desc: "Every system is built with compliance, audit trails, and zero-trust principles from day one." },
  { icon: Globe, title: "Global Delivery", desc: "Distributed elite engineering team delivering round-the-clock support worldwide." },
  { icon: TrendingUp, title: "Measurable ROI", desc: "We tie every technology decision to business outcomes and measurable performance gains." },
];

export default function Home() {
  return (
    <Layout>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "hsl(222,47%,5%)" }}
      >
        {/* Animated glow orbs */}
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,184,212,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,100,200,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "pulse 11s ease-in-out infinite reverse",
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(hsl(188,100%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(188,100%,50%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(222,47%,5%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-32">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-10"
              style={{
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.2)",
                color: "hsl(188,100%,65%)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Enterprise-Grade AI & Software
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-[96px] font-bold tracking-tight text-white leading-[1.0] mb-8"
          >
            Intelligence Built
            <br />
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(90deg, hsl(188,100%,70%), hsl(200,100%,60%), hsl(220,100%,70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              For Scale.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/55 mb-12 max-w-2xl leading-relaxed"
          >
            Habinix LLC is a global technology partner delivering robust AI automation, custom software, and cloud solutions. We engineer the future of your business with precision.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/contact">
              <button
                className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                style={{
                  background: "hsl(188,100%,50%)",
                  color: "hsl(222,47%,5%)",
                  boxShadow: "0 0 30px rgba(0,229,255,0.35)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 50px rgba(0,229,255,0.6)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,229,255,0.35)"; }}
                data-testid="button-hero-cta"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/services">
              <button
                className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
                data-testid="button-hero-secondary"
              >
                Explore Services
                <ChevronRight className="w-5 h-5 opacity-50 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,229,255,0.03)" }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(90deg, hsl(188,100%,65%), hsl(200,100%,55%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-white/40 tracking-wide uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="py-32" style={{ background: "hsl(222,47%,5%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Who We Are</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-[1.15]">
                The intersection of cutting-edge AI and rigorous engineering.
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                We are not a flashy startup. We are a serious, reliable technology partner that global enterprises trust. Based in Wyoming, operating globally — we build digital infrastructure that scales, performs, and drives real business value.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-accent font-medium hover:opacity-80 transition-opacity gap-2 text-sm"
                data-testid="link-about"
              >
                Read our story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,184,212,0.07) 0%, transparent 70%)" }}
              />
              <div
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
              >
                <div className="aspect-[4/3] flex items-center justify-center relative">
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,184,212,0.05) 0%, rgba(0,60,200,0.08) 100%)" }} />
                  <div className="relative z-10 text-center p-12">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl font-bold"
                      style={{
                        background: "linear-gradient(135deg, hsl(188,100%,45%), hsl(200,100%,40%))",
                        boxShadow: "0 0 40px rgba(0,229,255,0.3)",
                        color: "hsl(222,47%,5%)",
                      }}
                    >
                      H
                    </div>
                    <div className="text-white/30 text-sm tracking-widest uppercase">Habinix LLC</div>
                    <div className="text-white/20 text-xs mt-2">Wyoming, USA · Global</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-32" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "hsl(222,47%,4%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <motion.div
              className="max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 opacity-70">Core Capabilities</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Comprehensive technology expertise.</h2>
            </motion.div>
            <Link href="/services">
              <button
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all"
                data-testid="button-view-all-services"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((srv, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={srv.href} data-testid={`link-service-${i}`}>
                  <div
                    className="group p-8 rounded-2xl h-full cursor-pointer transition-all duration-500"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      backdropFilter: "blur(10px)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.border = "1px solid rgba(0,229,255,0.25)";
                      el.style.background = "rgba(0,229,255,0.04)";
                      el.style.boxShadow = "0 0 30px rgba(0,229,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.border = "1px solid rgba(255,255,255,0.06)";
                      el.style.background = "rgba(255,255,255,0.03)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(0,229,255,0.1)", boxShadow: "0 0 12px rgba(0,229,255,0.15)" }}
                    >
                      <srv.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white">{srv.title}</h3>
                    <p className="text-white/45 leading-relaxed text-sm mb-6">{srv.desc}</p>
                    <span className="text-accent text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-32" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "hsl(222,47%,5%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 opacity-70">Why Habinix</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Built different. Engineered to last.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(0,229,255,0.08)" }}
                >
                  <w.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-base font-bold mb-3 text-white">{w.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,184,212,0.08) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Ready to Begin</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Ready to build<br />
              <span
                style={{
                  background: "linear-gradient(90deg, hsl(188,100%,70%), hsl(200,100%,60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                the future?
              </span>
            </h2>
            <p className="text-lg text-white/45 mb-12 max-w-2xl mx-auto leading-relaxed">
              Schedule a strategic consultation with our engineering leadership to discuss your technological challenges and opportunities.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-base font-semibold transition-all duration-300"
                style={{
                  background: "hsl(188,100%,50%)",
                  color: "hsl(222,47%,5%)",
                  boxShadow: "0 0 40px rgba(0,229,255,0.35)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 60px rgba(0,229,255,0.6)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(0,229,255,0.35)"; }}
                data-testid="button-bottom-cta"
              >
                Book a Consultation <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
