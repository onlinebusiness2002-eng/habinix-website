import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Building2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const INFO = [
  { icon: Building2, title: "Habinix LLC", body: "A registered Wyoming Limited Liability Company." },
  { icon: MapPin, title: "Location", body: "Wyoming, USA · Global Distributed Team" },
  { icon: Mail, title: "Email", body: "hello@habinix.com", href: "mailto:hello@habinix.com" },
  { icon: Phone, title: "Phone", body: "+1 (555) 000-0000" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message Received", description: "An engineer will review your request and reach out shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "hsl(222,47%,5%)" }}
      >
        <div
          className="absolute top-1/2 right-1/4 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,184,212,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-70">Get in Touch</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Ready to architect the future of your business? Reach out to schedule a technical discovery call with our leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24" style={{ background: "hsl(222,47%,4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-10"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold tracking-wide uppercase text-white/40">Full Name</label>
                    <Input
                      id="name" required placeholder="John Doe"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50"
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-semibold tracking-wide uppercase text-white/40">Company</label>
                    <Input
                      id="company" required placeholder="Acme Corp"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50"
                      data-testid="input-contact-company"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold tracking-wide uppercase text-white/40">Work Email</label>
                  <Input
                    id="email" type="email" required placeholder="john@company.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50"
                    data-testid="input-contact-email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project" className="text-xs font-semibold tracking-wide uppercase text-white/40">Project Details</label>
                  <Textarea
                    id="project" required
                    placeholder="Describe your technical requirements, goals, and timeline..."
                    className="min-h-[140px] bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50"
                    data-testid="input-contact-details"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
                  style={{ background: "hsl(188,100%,50%)", color: "hsl(222,47%,5%)", boxShadow: "0 0 20px rgba(0,229,255,0.25)" }}
                  onMouseEnter={(e) => { if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 36px rgba(0,229,255,0.45)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(0,229,255,0.25)"; }}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? "Sending..." : <><span>Submit Inquiry</span><ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Corporate Headquarters</h2>
              {INFO.map(({ icon: Icon, title, body, href }) => (
                <div
                  key={title}
                  className="flex gap-5 p-6 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,229,255,0.08)" }}
                  >
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                    {href
                      ? <a href={href} className="text-accent text-sm hover:opacity-70 transition-opacity">{body}</a>
                      : <p className="text-white/40 text-sm">{body}</p>
                    }
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
