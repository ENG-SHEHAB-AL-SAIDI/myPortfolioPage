import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Globe, Smartphone } from "lucide-react"

const projects = [
  {
    title: "Renter's Management System",
    image: "project-1.png",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Android"],
    platforms: ["Web", "Android"],
    type: "Full-Stack + Mobile",
    typeColor: "text-emerald-400",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    description: "A dual-platform rental management application with a React web dashboard and native Android client. Handles tenant records, payment tracking, lease management, and real-time notifications.",
    icon: Globe
  },
  {
    title: "Local Water Bill Generator",
    image: "project-2.png",
    tags: ["Python", "Java", "MySQL", "PDF Export"],
    platforms: ["Desktop"],
    type: "Utility App",
    typeColor: "text-cyan-400",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    description: "An automated billing system for local water supply management. Calculates monthly bills based on consumption readings, generates printable PDF invoices, and maintains a customer database.",
    icon: Smartphone
  },
  {
    title: "Student Services System",
    image: "project-3.png",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API"],
    platforms: ["Web"],
    type: "Graduation Project · 5 Members",
    typeColor: "text-pink-400",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    borderGlow: "hover:border-pink-500/40 hover:shadow-pink-500/10",
    description: "A comprehensive university portal built with a team of 5. Covers student registration, course scheduling, grade management, exam timetables, and academic records — replacing manual administrative processes.",
    icon: Users
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-px opacity-30 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(158 84% 40%), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-warm">Projects</span> I've Built
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg, hsl(158 84% 40%), hsl(174 80% 44%))" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group glow-card flex flex-col bg-card border border-white/6 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.borderGlow}`}
            >
              {/* Image with gradient overlay */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={`./public/images/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-80 group-hover:opacity-60 transition-opacity`} />
                {/* Platform badges on image */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.platforms.map(p => (
                    <span key={p} className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-xs font-medium border border-white/20 text-white/80">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${project.typeColor}`}>
                      {project.type}
                    </p>
                    <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary/60 transition-colors shrink-0 mt-1" />
                </div>

                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5 rounded-md border-white/10 bg-white/4 hover:bg-white/8 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
