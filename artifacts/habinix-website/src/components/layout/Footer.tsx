import { Link } from "wouter";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

const FOOTER_LINKS = {
  Products: [
    { name: "MyPDF", href: "/products/mypdf" },
    { name: "All Products", href: "/products" },
  ],
  Services: [
    { name: "AI Solutions", href: "/services#ai" },
    { name: "Software Development", href: "/services#software" },
    { name: "Web Development", href: "/services#web" },
    { name: "Cloud Solutions", href: "/services#cloud" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "hsl(222,47%,4%)" }} className="relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(188,100%,50%), transparent)",
          opacity: 0.4,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg"
                style={{
                  background: "linear-gradient(135deg, hsl(188,100%,45%), hsl(200,100%,40%))",
                  boxShadow: "0 0 16px rgba(0,229,255,0.4)",
                  color: "hsl(222,47%,5%)",
                }}
              >
                H
              </div>
              <span className="text-lg font-bold tracking-[0.15em] text-white">HABINIX</span>
            </Link>
            <p className="text-white/40 mb-8 max-w-sm text-sm leading-relaxed">
              A Wyoming-based global technology company delivering intelligent AI and robust software solutions to enterprises worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "linkedin" },
                { icon: Twitter, label: "twitter" },
                { icon: Github, label: "github" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 transition-all duration-300"
                  style={{ backdropFilter: "blur(8px)" }}
                  data-testid={`link-social-${label}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-6 text-xs tracking-[0.12em] uppercase text-white/25">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-accent transition-colors text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Habinix LLC. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" style={{ boxShadow: "0 0 6px hsl(188,100%,50%)" }} />
            <span>Wyoming LLC, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
