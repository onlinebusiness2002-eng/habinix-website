import { Layout } from "@/components/layout/Layout";
import { useRoute } from "wouter";
import { getProductBySlug } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { ProductNotFound } from "@/components/products/ProductNotFound";
import { company } from "@/data/company";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ProductPrivacy() {
  const [match, params] = useRoute("/products/:slug/privacy");
  const slug = params?.slug || "";
  const product = getProductBySlug(slug);

  useSEO({
    title: product ? `${product.productName} Privacy Policy | Habinix` : "Privacy Policy",
  });

  if (!product) return <ProductNotFound />;

  return (
    <Layout>
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to {product.productName}
            </Link>
            
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 opacity-70">Legal</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {product.productName} Privacy Policy
            </h1>
            <p className="text-white/35 text-sm">Product-specific policy information has not yet been published.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
            style={{
              "--tw-prose-headings": "white",
              "--tw-prose-body": "rgba(255,255,255,0.6)",
              "--tw-prose-links": "hsl(188,100%,65%)",
              "--tw-prose-bullets": "rgba(0,229,255,0.5)",
            } as React.CSSProperties}
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <p className="text-center text-white/70 m-0">
                The product-specific privacy policy for <strong>{product.productName}</strong> will be published here 
                when official product-specific policy information is available.
              </p>
            </div>
            
            <p>
              In the meantime, your use of the Habinix website and interaction with our services is governed by our general corporate privacy policy.
            </p>
            
            <ul>
              <li>
                <Link href={company.privacyPath} className="text-accent no-underline hover:underline">
                  View Habinix Corporate Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
