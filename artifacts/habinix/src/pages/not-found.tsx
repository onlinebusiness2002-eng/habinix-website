import React from "react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl font-semibold text-foreground mb-4">Page Not Found</p>
      <p className="text-muted-foreground mb-8 max-w-md">
        The resource you are looking for has been moved or no longer exists.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Return to Operations
      </Link>
    </div>
  );
}