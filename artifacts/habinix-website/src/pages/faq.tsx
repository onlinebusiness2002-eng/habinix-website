import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

const FAQS = [
  {
    category: "Services & Capabilities",
    questions: [
      { q: "What makes Habinix different from other agencies?", a: "We are an engineering-first company. We don't just assemble off-the-shelf tools; we architect scalable systems from the ground up. Our deep expertise in both emerging AI and traditional enterprise software allows us to build robust, future-proof infrastructure." },
      { q: "Do you only work with large enterprises?", a: "While our systems are built to enterprise scale, we frequently partner with well-funded startups and mid-market companies that require robust, secure architecture from day one to support aggressive growth." },
      { q: "Can you integrate AI into our existing legacy systems?", a: "Yes. Legacy system modernization is a core capability. We build secure API layers over your existing infrastructure to deploy modern AI models without requiring a total rip-and-replace of your operational systems." },
    ],
  },
  {
    category: "Process & Delivery",
    questions: [
      { q: "How long does a typical engagement last?", a: "This depends entirely on scope. A discovery and strategy phase might take 2-4 weeks, while a full enterprise SaaS build can span 4-8 months. We provide precise timelines after the initial scoping." },
      { q: "Do you provide ongoing support after launch?", a: "Yes. For our Professional and Enterprise tiers, we offer continuous monitoring, security updates, and SLA-backed support. We view deployments as the beginning of the relationship, not the end." },
      { q: "Will we own the code you write?", a: "Absolutely. Upon final payment, all intellectual property, source code, and assets are fully transferred to your company. We build it, but you own it." },
    ],
  },
  {
    category: "Technology Stack",
    questions: [
      { q: "What is your preferred technology stack?", a: "We choose the right tool for the job. Our core stack often involves React/Next.js for the frontend, Node.js or Python for the backend, PostgreSQL for databases, and AWS/GCP for infrastructure. For AI, we utilize PyTorch, OpenAI APIs, and custom local models where data privacy requires it." },
      { q: "How do you handle security and data privacy?", a: "Security is integrated at the architectural level. We enforce encryption at rest and in transit, implement role-based access control (RBAC), and conduct rigorous security audits. We can build HIPAA, SOC2, or GDPR-compliant systems based on your industry requirements." },
    ],
  },
];

export default function Faq() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.08) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">FAQ</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Clear answers regarding our capabilities, engineering process, and engagement models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-24" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {FAQS.map((section, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-white mb-6 tracking-tight">{section.category}</h2>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {section.questions.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${idx}-${i}`}
                    className="rounded-xl px-6"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-white hover:text-accent hover:no-underline py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/45 text-sm leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,184,212,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Still have questions?</h2>
            <p className="text-white/40 mb-12 max-w-lg mx-auto">Our team is happy to answer anything not covered above.</p>
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                style={{ background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)", boxShadow: "0 0 30px rgba(0,229,255,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 50px rgba(0,229,255,0.55)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,229,255,0.35)"; }}
                data-testid="button-faq-contact"
              >
                Contact our Team <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
