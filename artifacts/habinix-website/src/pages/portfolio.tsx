import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const PROJECTS = [
  { id: 1, title: "Nexus Global ERP", category: "Software Development", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015" },
  { id: 2, title: "FinPredict AI", category: "AI Solutions", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" },
  { id: 3, title: "MedFlow Portal", category: "Web Development", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076" },
  { id: 4, title: "AeroTrack Logistics", category: "Cloud Solutions", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034" },
  { id: 5, title: "RetailSync App", category: "Mobile Apps", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070" },
  { id: 6, title: "SecureVault API", category: "Software Development", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070" },
];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "hsl(222,47%,5%)" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.08) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Our Work</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Portfolio</h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              A selection of our enterprise deployments — software that handles massive scale, complex logic, and zero tolerance for failure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href="/case-studies" className="group block">
                  <div
                    className="rounded-2xl overflow-hidden mb-4 aspect-[4/3] relative"
                    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 translate-y-2 group-hover:translate-y-0"
                        style={{ background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)" }}
                      >
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 opacity-70">{project.category}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
