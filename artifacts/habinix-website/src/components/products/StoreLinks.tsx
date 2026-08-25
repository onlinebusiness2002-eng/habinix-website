import { SiGoogleplay } from "react-icons/si";
import { FaApple } from "react-icons/fa";

export function StoreLinks({
  googlePlayUrl,
  appleAppStoreUrl,
  className = ""
}: {
  googlePlayUrl?: string;
  appleAppStoreUrl?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {appleAppStoreUrl ? (
        <a 
          href={appleAppStoreUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 group"
          data-testid="link-store-apple"
        >
          <FaApple className="w-6 h-6 text-white" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-white/50 leading-none mb-1">Download on the</span>
            <span className="text-sm font-semibold text-white leading-none">App Store</span>
          </div>
        </a>
      ) : (
        <button 
          disabled 
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 opacity-60 cursor-not-allowed"
          data-testid="btn-store-apple-disabled"
        >
          <FaApple className="w-6 h-6 text-white" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-white/50 leading-none mb-1">App Store</span>
            <span className="text-sm font-semibold text-white/70 leading-none">Coming Soon</span>
          </div>
        </button>
      )}

      {googlePlayUrl ? (
        <a 
          href={googlePlayUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 group"
          data-testid="link-store-google"
        >
          <SiGoogleplay className="w-5 h-5 text-white" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-white/50 leading-none mb-1">GET IT ON</span>
            <span className="text-sm font-semibold text-white leading-none">Google Play</span>
          </div>
        </a>
      ) : (
        <button 
          disabled 
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 opacity-60 cursor-not-allowed"
          data-testid="btn-store-google-disabled"
        >
          <SiGoogleplay className="w-5 h-5 text-white" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-white/50 leading-none mb-1">Google Play</span>
            <span className="text-sm font-semibold text-white/70 leading-none">Coming Soon</span>
          </div>
        </button>
      )}
    </div>
  );
}
