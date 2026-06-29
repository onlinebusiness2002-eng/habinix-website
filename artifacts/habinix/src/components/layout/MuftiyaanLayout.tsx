import React from "react";
import { MuftiyaanNavbar } from "./MuftiyaanNavbar";
import { Footer } from "./Footer";

export function MuftiyaanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <MuftiyaanNavbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
