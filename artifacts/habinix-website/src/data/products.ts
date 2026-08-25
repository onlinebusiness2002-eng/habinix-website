export type ProductStatus = 'coming_soon' | 'available' | 'beta' | 'deprecated';

export interface ProductFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProductPlatform {
  name: string;
  available: boolean;
}

export interface Product {
  productName: string;
  slug: string;
  productType: string;
  shortDescription: string;
  fullDescription?: string;
  productLogo?: string;
  productIcon?: string;
  heroImage?: string;
  screenshots?: string[];
  features?: ProductFeature[];
  platforms?: ProductPlatform[];
  status?: ProductStatus;
  launchStatus?: string;
  websiteUrl?: string;
  googlePlayUrl?: string;
  appleAppStoreUrl?: string;
  supportUrl?: string;
  privacyUrl?: string;
  termsUrl?: string;
  faqUrl?: string;
  documentationUrl?: string;
  category?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const products: Product[] = [
  {
    productName: "MyPDF",
    slug: "mypdf",
    productType: "Digital Product",
    shortDescription: "Official product details will be published here.",
    launchStatus: "First Featured Habinix Product",
    platforms: [
      { name: "Google Play Store", available: false },
      { name: "Apple App Store", available: false }
    ],
    seoTitle: "MyPDF | Habinix Products",
    seoDescription: "Discover MyPDF, a Habinix-owned digital product. Official product information will be published here."
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
