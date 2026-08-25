import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Terms() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Legal</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Terms & Conditions</h1>
            <p className="text-white/35 text-sm">Last Updated: October 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
            style={{
              "--tw-prose-headings": "white",
              "--tw-prose-body": "rgba(255,255,255,0.5)",
              "--tw-prose-links": "hsl(188,100%,65%)",
              "--tw-prose-bullets": "rgba(0,229,255,0.5)",
              "--tw-prose-bold": "white",
            } as React.CSSProperties}
          >
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf
              of an entity ("you") and Habinix LLC ("we," "us" or "our"), concerning your access to and use of the website as well
              as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality,
              software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content")
              and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
            </p>

            <h2>3. Client Engagements & Services</h2>
            <p>
              Specific engagements for software development, AI solutions, or consultancy services will be governed by separate
              Master Services Agreements (MSA) and Statements of Work (SOW). These website terms govern only the usage of our
              public-facing digital properties.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct,
              indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue,
              loss of data, or other damages arising from your use of the site.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of the State of Wyoming, USA. Habinix LLC and yourself
              irrevocably consent that the courts of Wyoming shall have exclusive jurisdiction to resolve any dispute which may arise
              in connection with these terms.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
