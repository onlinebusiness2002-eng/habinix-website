import { Layout } from "@/components/layout/Layout";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const TIERS = [
  {
    name: "Starter",
    desc: "For small businesses needing foundational digital tools.",
    price: "Custom",
    features: [
      "Basic Web Development",
      "Standard UI/UX Design",
      "Essential API Integrations",
      "Standard Support (48h)",
      "Basic Cloud Setup",
    ],
  },
  {
    name: "Professional",
    desc: "For growing companies requiring robust, scalable systems.",
    price: "Custom",
    highlight: true,
    features: [
      "Advanced Custom Software",
      "Mobile App Development",
      "Basic AI Workflow Automation",
      "Priority Support (24h)",
      "Scalable Cloud Architecture",
      "Performance Optimization",
    ],
  },
  {
    name: "Enterprise",
    desc: "For large organizations needing mission-critical scale.",
    price: "Custom",
    features: [
      "Full AI Transformation",
      "Complex ERP/CRM Systems",
      "Dedicated Engineering Pod",
      "24/7 SLA Support",
      "Enterprise Grade Security",
      "Custom Microservices Architecture",
    ],
  },
];

export default function Pricing() {
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
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Pricing</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Clear Engagement Models
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              We don't sell off-the-shelf software. We sell dedicated engineering capability. Pricing is scoped custom to your exact requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex flex-col rounded-2xl p-8"
                style={
                  tier.highlight
                    ? {
                        background: "rgba(0,229,255,0.05)",
                        border: "1px solid rgba(0,229,255,0.25)",
                        boxShadow: "0 0 60px rgba(0,229,255,0.08)",
                      }
                    : {
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }
                }
              >
                {tier.highlight && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{ background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)" }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{tier.desc}</p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-white">{tier.price}</div>
                  <div className="text-white/30 text-xs mt-1 tracking-wide">Scoped to your requirements</div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: tier.highlight ? "rgba(0,229,255,0.15)" : "rgba(255,255,255,0.06)" }}
                      >
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-white/60">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="block">
                  <button
                    className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    style={
                      tier.highlight
                        ? { background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)", boxShadow: "0 0 20px rgba(0,229,255,0.3)" }
                        : { background: "rgba(255,255,255,0.06)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }
                    }
                    onMouseEnter={(e) => {
                      if (tier.highlight) (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 36px rgba(0,229,255,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      if (tier.highlight) (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(0,229,255,0.3)";
                    }}
                    data-testid={`button-pricing-${tier.name.toLowerCase()}`}
                  >
                    Request Estimate <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white/30 text-sm mt-12"
          >
            All engagements begin with a complimentary discovery call. No commitment required.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
