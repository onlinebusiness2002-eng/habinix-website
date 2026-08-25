import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Privacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Legal</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Privacy Policy</h1>
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
            <h2>1. Introduction</h2>
            <p>
              Habinix LLC ("we", "our", or "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy will inform you as to how we look after your personal data when you visit our website
              (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified.
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2>3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data
              to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2>5. Contact Details</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:<br />
              <strong>Habinix LLC</strong><br />
              Email: legal@habinix.com<br />
              Wyoming, USA
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
