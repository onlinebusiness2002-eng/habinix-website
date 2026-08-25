import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const POSTS = [
  {
    id: "ai-trends-2025",
    title: "Enterprise AI Adoption: What to Expect in 2025",
    excerpt: "As predictive models become commoditized, the true differentiator for enterprises will be secure, domain-specific AI integrations.",
    author: "Elena Rostov",
    date: "Oct 12, 2024",
    category: "AI & Automation",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065",
  },
  {
    id: "microservices-vs-monolith",
    title: "When to Break the Monolith: A Pragmatic Guide",
    excerpt: "Microservices aren't always the answer. We analyze the technical and organizational tipping points that justify the architectural shift.",
    author: "David Chen",
    date: "Sep 28, 2024",
    category: "Software Engineering",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070",
  },
  {
    id: "cloud-cost-optimization",
    title: "Taming Cloud Sprawl: Architecting for Cost Efficiency",
    excerpt: "How proactive infrastructure design and serverless patterns can reduce AWS/GCP footprints by up to 40% without compromising scale.",
    author: "Michael Harris",
    date: "Sep 15, 2024",
    category: "Cloud Solutions",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
  },
  {
    id: "llm-security",
    title: "Securing Large Language Models in Corporate Environments",
    excerpt: "Navigating the compliance, data leakage, and prompt injection risks when deploying LLMs against proprietary enterprise data.",
    author: "Elena Rostov",
    date: "Aug 30, 2024",
    category: "Cybersecurity",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div
          className="absolute top-1/2 right-1/4 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Engineering Blog</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Insights & Engineering</h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Technical perspectives, architectural patterns, and industry analysis from the Habinix engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {POSTS.map((post, i) => (
              <motion.article
                key={post.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <Link href="/blog" className="block mb-6 overflow-hidden rounded-2xl aspect-[16/9] relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75"
                    style={{ filter: "grayscale(20%)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}
                  />
                </Link>

                <div className="flex items-center gap-5 text-xs font-medium text-white/30 mb-4">
                  <span className="text-accent font-semibold tracking-wider uppercase opacity-80">{post.category}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {post.author}</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight">
                  <Link href="/blog">{post.title}</Link>
                </h2>
                <p className="text-white/40 leading-relaxed mb-6 text-sm">{post.excerpt}</p>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-sm font-semibold text-accent hover:opacity-70 transition-opacity gap-2"
                  data-testid={`link-blog-${post.id}`}
                >
                  Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
