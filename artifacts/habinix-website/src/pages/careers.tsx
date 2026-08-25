import { Layout } from "@/components/layout/Layout";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ROLES = [
  {
    title: "Senior AI Engineer",
    dept: "Artificial Intelligence",
    location: "Remote (US/EU Timezones)",
    type: "Full-Time",
    desc: "Lead the development of custom LLM implementations and predictive models for enterprise clients. Requires deep expertise in PyTorch, Python, and scalable ML deployment.",
  },
  {
    title: "Lead Full-Stack Developer",
    dept: "Software Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    desc: "Architect and build complex SaaS platforms using React, Node.js, and PostgreSQL. Must have experience managing distributed microservices.",
  },
  {
    title: "Cloud Infrastructure Architect",
    dept: "Cloud & DevOps",
    location: "Remote (US Only)",
    type: "Full-Time",
    desc: "Design resilient AWS/GCP environments for high-traffic applications. Expertise in Terraform, Kubernetes, and CI/CD pipelines required.",
  },
  {
    title: "Technical Project Manager",
    dept: "Delivery",
    location: "Wyoming, USA / Remote",
    type: "Full-Time",
    desc: "Bridge the gap between client stakeholders and our engineering teams. Ensure predictable delivery cadences using Agile methodologies.",
  },
];

const PERKS = [
  { title: "Remote-First, Global Talent", body: "Work from anywhere. We hire the best engineers globally, not just locally." },
  { title: "Continuous Learning", body: "Stipends for courses, certifications, and conferences. We invest in your technical growth." },
  { title: "Top-Tier Equipment", body: "You choose your machine. We provide the hardware you need to compile fast and work efficiently." },
  { title: "Health & Wellness", body: "Comprehensive health coverage and flexible PTO to ensure you perform at your best long-term." },
];

export default function Careers() {
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
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Careers</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Join Habinix</h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              A team of disciplined engineers, architects, and problem solvers building software that matters. No ego, just excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">The Culture</div>
            <p className="text-xl text-white/50 leading-relaxed max-w-3xl">
              We value deep work, asynchronous communication, and technical rigor. We believe the best code is written when engineers have large blocks of uninterrupted time. We don't track hours; we track output and system reliability.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERKS.map((perk, i) => (
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
                <h3 className="font-bold text-white mb-3">{perk.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{perk.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 opacity-70">Open Positions</div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Current Openings</h2>
          </motion.div>

          <div className="space-y-5">
            {ROLES.map((role, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.border = "1px solid rgba(0,229,255,0.2)";
                  el.style.background = "rgba(0,229,255,0.025)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.border = "1px solid rgba(255,255,255,0.05)";
                  el.style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <div className="flex-1">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2 opacity-70">{role.dept}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{role.title}</h3>
                  <p className="text-white/40 text-sm mb-4 max-w-2xl leading-relaxed">{role.desc}</p>
                  <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-white/30">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {role.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {role.type}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Experience Required</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <button
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/10 text-white/60 group-hover:border-accent group-hover:text-accent transition-all duration-300"
                    data-testid={`button-apply-${i}`}
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
