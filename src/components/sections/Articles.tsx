import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"

const articles = [
  {
    title: "Building a Scalable Renter Management System",
    description: "A walkthrough of architecting a dual-platform application with a Spring Boot backend, React web client, and Android mobile app — from database design to API contracts.",
    date: "Dec 2024",
    readTime: "8 min",
    tag: "Full-Stack",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    title: "Automated Bill Generation with PDF Export in Java",
    description: "How I built a local water bill generator that reads meter data, calculates consumption-based pricing, and exports formatted invoices as PDFs using JasperReports.",
    date: "Oct 2024",
    readTime: "6 min",
    tag: "Java",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
  },
  {
    title: "Lessons from a 5-Person University Project",
    description: "What I learned building a student services portal as a team — version control workflows, resolving merge conflicts, API contract-first development, and dividing backend modules across team members.",
    date: "Aug 2024",
    readTime: "5 min",
    tag: "Teamwork",
    tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20"
  }
]

export function Articles() {
  return (
    <section id="articles" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 bottom-0 w-[350px] h-[350px] rounded-full opacity-8 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, hsl(158 84% 40%) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Writing</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Articles &{" "}
            <span className="gradient-text">Insights</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg, hsl(158 84% 40%), hsl(174 80% 44%))" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glow-card flex flex-col p-7 rounded-3xl bg-card/50 border border-white/6 hover:bg-card/80 hover:border-white/12 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Tag + date */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${article.tagColor}`}>
                  {article.tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                  <Clock className="w-3 h-3" />
                  {article.readTime} · {article.date}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                {article.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5">
                <a href="#" className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors group/link">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <div className="w-6 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-muted hover:bg-primary/50 cursor-pointer transition-colors" />
          <div className="w-2 h-2 rounded-full bg-muted hover:bg-primary/50 cursor-pointer transition-colors" />
        </div>
      </div>
    </section>
  )
}
