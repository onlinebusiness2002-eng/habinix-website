import React from "react";
import { Link } from "wouter";

export function MuftiyaanNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/muftiyaan" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-primary">Muftiyaan</span>
          <span className="text-xs text-muted-foreground hidden sm:inline-block pl-2 border-l ml-2">by Habinix LLC</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/muftiyaan/support" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Support
          </Link>
          <Link href="/muftiyaan/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/muftiyaan/terms" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Corporate Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
