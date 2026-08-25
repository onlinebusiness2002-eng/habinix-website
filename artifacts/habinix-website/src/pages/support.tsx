import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MessageSquare, LifeBuoy } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CompanySupport() {
  useSEO({
    title: "Support | Habinix LLC",
    description: "Get assistance with Habinix services, solutions, or products."
  });

  return (
    <Layout>
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Help Center</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">How can we help?</h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Find the right path for a Habinix service inquiry or a Habinix-owned product.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 pb-32" style={{ background: "hsl(222,47%,4%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-8 rounded-2xl glass-card flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Client Support</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                For existing clients engaged in active software development or AI solutions projects.
              </p>
              <Link href="/contact" className="w-full text-center py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/15 transition-colors border border-white/5">
                Contact Account Manager
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-8 rounded-2xl glass-card flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <LifeBuoy className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Product Support</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
              Browse the official support space for a specific Habinix product.
              </p>
              <Link href="/products" className="w-full text-center py-3 rounded-lg bg-accent text-[hsl(222,47%,5%)] font-semibold hover:opacity-90 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                Browse Products
              </Link>
            </motion.div>

          </div>
          
        </div>
      </section>
    </Layout>
  );
}
