import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-primary">HABINIX LLC</span>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade Managed Service Provider and IT consulting firm.
              Wyoming-registered, NAICS 541 compliant.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Corporate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/support-our-mission" className="hover:text-primary transition-colors">Support Our Mission</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Portfolios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/muftiyaan" className="hover:text-primary transition-colors">Muftiyaan App</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@habinix.com</li>
              <li>+1-307-555-0190</li>
              <li>Wyoming, USA</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Habinix LLC. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/muftiyaan/privacy-policy" className="hover:text-primary">Privacy</Link>
            <Link href="/muftiyaan/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
