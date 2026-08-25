import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";

export function ProductNotFound() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Habinix Products</p>
        <h1 className="text-4xl font-bold text-white mb-4">Product not found</h1>
        <p className="text-white/60 mb-8 max-w-md">
          This product page is unavailable. Browse the Habinix product catalog to see published products.
        </p>
        <Link
          href="/products"
          className="text-accent hover:text-white transition-colors flex items-center gap-2"
          data-testid="link-back-to-products"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </section>
    </Layout>
  );
}