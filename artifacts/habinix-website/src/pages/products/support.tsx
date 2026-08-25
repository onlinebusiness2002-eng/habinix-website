import { Layout } from "@/components/layout/Layout";
import { useRoute } from "wouter";
import { getProductBySlug } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowLeft, LifeBuoy, Mail, FileText } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { ProductNotFound } from "@/components/products/ProductNotFound";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ProductSupport() {
  const [match, params] = useRoute("/products/:slug/support");
  const slug = params?.slug || "";
  const product = getProductBySlug(slug);

  useSEO({
    title: product ? `${product.productName} Support | Habinix` : "Support",
    description: `Get help and support for ${product?.productName}.`
  });

  if (!product) return <ProductNotFound />;

  return (
    <Layout>
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to {product.productName}
            </Link>
            
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 opacity-70">Support Center</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {product.productName} Help & Support
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              This page is reserved for official help resources for {product.productName}.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              <div className="p-8 rounded-2xl glass-card text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-sm text-white/60 mb-6">
                  Official support contact details for {product.productName} will appear here when available.
                </p>
                <button disabled className="px-6 py-2 rounded-full bg-white/5 text-white/40 text-sm font-medium cursor-not-allowed">
                  Contact Support
                </button>
              </div>

              <div className="p-8 rounded-2xl glass-card text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
                <p className="text-sm text-white/60 mb-6">
                  Official guides and documentation will be published here when available.
                </p>
                <button disabled className="px-6 py-2 rounded-full bg-white/5 text-white/40 text-sm font-medium cursor-not-allowed">
                  Read Guides
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                <p className="text-white/60 m-0 text-center text-sm">
                  Official frequently asked questions will be published here when available.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
