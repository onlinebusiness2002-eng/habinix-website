import { useEffect } from "react";

function upsertMeta(attribute: "name" | "property", key: string, value?: string) {
  if (!value) return;

  let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", value);
}

export function useSEO({ 
  title, 
  description, 
  url 
}: { 
  title: string; 
  description?: string; 
  url?: string;
}) {
  useEffect(() => {
    document.title = title;
    const canonicalUrl = new URL(url ?? window.location.href, window.location.origin);
    canonicalUrl.search = "";
    canonicalUrl.hash = "";
    const canonical = canonicalUrl.toString();

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  }, [title, description, url]);
}
