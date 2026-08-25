import { Layout } from "@/components/layout/Layout";
import { useRoute } from "wouter";
import { getProductBySlug } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Info } from "lucide-react";
import { Link } from "wouter";
import { StoreLinks } from "@/components/products/StoreLinks";
import { ProductNotFound } from "@/components/products/ProductNotFound";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:slug");
  const slug = params?.slug || "";
  const product = getProductBySlug(slug);

  useSEO({
    title: product ? `${product.seoTitle || product.productName} | Habinix` : "Product Not Found",
    description: product?.seoDescription || product?.shortDescription
  });

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <Layout>
      {/* Product Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          {product.heroImage ? (
            <img src={product.heroImage} alt="" className="w-full h-full object-cover blur-3xl" />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-accent/20 to-transparent blur-3xl" />
          )}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white/70 border border-white/5">
                  {product.category || product.productType}
                </span>
                {product.status === "coming_soon" && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Coming Soon
                  </span>
                )}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                {product.productName}
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                {product.shortDescription}
              </p>

              <StoreLinks 
                googlePlayUrl={product.googlePlayUrl} 
                appleAppStoreUrl={product.appleAppStoreUrl} 
              />
            </motion.div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="relative">
              {product.heroImage ? (
                <img 
                  src={product.heroImage} 
                  alt={`${product.productName} hero`} 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              ) : (
                <div className="aspect-[4/3] rounded-2xl glass-card flex flex-col items-center justify-center p-8 text-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                    <Info className="w-8 h-8 text-white/40" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Visuals Coming Soon</h3>
                  <p className="text-white/40 max-w-sm text-sm">
                     Official product screenshots and artwork for {product.productName} will be published here when available.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "hsl(222,47%,4%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <h2 className="text-3xl font-bold text-white mb-6">About {product.productName}</h2>
                <div className="prose prose-invert max-w-none text-white/70 mb-16">
                  {product.fullDescription ? (
                    <p>{product.fullDescription}</p>
                  ) : (
                    <p>
                      Official information about {product.productName} has not yet been published. Product details will appear here when available.
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Features - Render only if they exist */}
              {product.features && product.features.length > 0 && (
                <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                  <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="p-6 rounded-2xl glass-card">
                        <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div 
                custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-8 rounded-2xl glass-card"
              >
                <h3 className="text-lg font-bold text-white mb-6">Product Information</h3>
                
                <ul className="space-y-4">
                  {product.status && (
                    <li className="flex flex-col gap-1 pb-4 border-b border-white/5">
                      <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Status</span>
                      <span className="text-white font-medium capitalize">{product.status.replace('_', ' ')}</span>
                    </li>
                  )}
                  <li className="flex flex-col gap-1 pb-4 border-b border-white/5">
                    <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Type</span>
                    <span className="text-white font-medium">{product.productType}</span>
                  </li>
                  <li className="flex flex-col gap-1 pb-4 border-b border-white/5">
                    <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Platforms</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.platforms?.map(p => (
                        <span key={p.name} className="text-sm text-white/80">{p.name}</span>
                      ))}
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-6">Resources & Support</h3>
                
                <ul className="space-y-3">
                  <li>
                    <Link href={`/products/${product.slug}/support`} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <span className="text-white/80 group-hover:text-white">Help & Support</span>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/products/${product.slug}/privacy`} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <span className="text-white/80 group-hover:text-white">Privacy Policy</span>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/products/${product.slug}/terms`} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <span className="text-white/80 group-hover:text-white">Terms of Service</span>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}
