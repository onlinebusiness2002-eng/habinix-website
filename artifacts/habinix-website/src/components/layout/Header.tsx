import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Process", href: "/process" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[hsl(222,47%,5%)]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, hsl(188,100%,45%), hsl(200,100%,40%))",
                boxShadow: "0 0 18px rgba(0,229,255,0.45)",
                color: "hsl(222,47%,5%)",
              }}
            >
              H
            </div>
            <span className="text-lg font-bold tracking-[0.15em] text-white">HABINIX</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  location === link.href ? "text-accent" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <button
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: "hsl(188,100%,50%)",
                  color: "hsl(222,47%,5%)",
                  boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 32px rgba(0,229,255,0.55)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(0,229,255,0.3)";
                }}
                data-testid="button-nav-cta"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: "hsl(222,47%,3%)" }}
          >
            <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-bold tracking-tight transition-colors ${
                      location === link.href ? "text-accent" : "text-white/70 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.3 }}
                className="mt-4"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    className="px-8 py-3 rounded-full text-base font-semibold"
                    style={{
                      background: "hsl(188,100%,50%)",
                      color: "hsl(222,47%,5%)",
                      boxShadow: "0 0 24px rgba(0,229,255,0.4)",
                    }}
                    data-testid="button-mobile-cta"
                  >
                    Get a Free Consultation
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
