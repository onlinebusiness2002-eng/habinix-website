import { Link } from "wouter";
import { ArrowRight, Smartphone, Globe, Code, Sparkles } from "lucide-react";
import { Product } from "@/data/products";

const TypeIcon = ({ type, className }: { type: string, className?: string }) => {
  if (type.toLowerCase().includes("mobile")) return <Smartphone className={className} />;
  if (type.toLowerCase().includes("web")) return <Globe className={className} />;
  if (type.toLowerCase().includes("ai")) return <Sparkles className={className} />;
  return <Code className={className} />;
};

export function ProductCard({ product, index }: { product: Product, index: number }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div 
        className="glass-card rounded-2xl p-6 h-full flex flex-col group cursor-pointer"
        data-testid={`card-product-${product.slug}`}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {product.productLogo ? (
              <img src={product.productLogo} alt={`${product.productName} logo`} className="w-12 h-12 rounded-xl object-cover" />
            ) : (
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-accent group-hover:border-accent/30 transition-colors"
                aria-hidden="true"
              >
                <TypeIcon type={product.productType} className="w-6 h-6" />
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                {product.productName}
              </h3>
              <p className="text-xs font-medium text-white/40 tracking-wider uppercase mt-1">
                {product.category || product.productType}
              </p>
            </div>
          </div>
          {product.status === "coming_soon" && (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/70 border border-white/5">
              Coming Soon
            </span>
          )}
          {product.status === "beta" && (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/20">
              Beta
            </span>
          )}
        </div>
        
        <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
          {product.shortDescription}
        </p>
        
        <div className="flex flex-col gap-4 mt-auto">
          {product.platforms && product.platforms.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.platforms.map(platform => (
                <span 
                  key={platform.name} 
                  className={`text-[10px] px-2 py-1 rounded border ${
                    platform.available 
                      ? 'border-white/20 text-white/80 bg-white/5' 
                      : 'border-white/10 text-white/40 bg-transparent'
                  }`}
                >
                  {platform.name}
                </span>
              ))}
            </div>
          )}
          
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
              View Product
            </span>
            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </Link>
  );
}
