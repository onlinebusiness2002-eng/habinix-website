import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function ProductsCatalog() {
  useSEO({
    title: "Habinix Products | Innovative Digital Solutions & Applications",
    description: "Explore the ecosystem of digital products, mobile applications, and software solutions developed by Habinix LLC."
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div 
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 70% 20%, hsl(188,100%,40%, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, hsl(200,100%,40%, 0.1) 0%, transparent 40%)"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ boxShadow: "0 0 10px hsl(188,100%,50%)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Habinix App Ecosystem</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Products</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
              Explore the digital products developed and owned by Habinix. Official information is published product by product as it becomes available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 relative" style={{ background: "hsl(222,47%,4%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </div>

          {products.length === 1 && (
            <motion.div 
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 p-8 rounded-2xl border border-white/5 bg-white/5 text-center flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20 mx-1" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <h3 className="text-lg font-semibold text-white/80 mb-2">More Products Coming Soon</h3>
              <p className="text-sm text-white/40 max-w-md">
                Additional Habinix products will appear here when their official information is ready to publish.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
