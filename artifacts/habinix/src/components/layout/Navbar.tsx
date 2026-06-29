import React from "react";
import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-primary">HABINIX</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/muftiyaan" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Muftiyaan
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/support-our-mission" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors">
            Support Our Mission
          </Link>
        </div>
      </div>
    </nav>
  );
}
