import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Globe, Smartphone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { projects } from "@/data/projects"

export function Projects() {
  const { t, lang } = useLanguage()

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-px opacity-30 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(158 84% 40%), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">{t("projects.sectionLabel")}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-warm">{t("projects.title")}</span>
            {t("projects.titleSuffix") && <span className="text-foreground"> {t("projects.titleSuffix")}</span>}
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg, hsl(158 84% 40%), hsl(174 80% 44%))" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className={`group glow-card flex flex-col bg-card border border-white/6 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.borderGlow}`}>
              <div className="relative aspect-[16/9]  overflow-hidden">
                <img
                  src={`./public/images/${project.image}`}
                  alt={project.title[lang]}
                  className="w-full h-full item-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-80 group-hover:opacity-60 transition-opacity`} />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.platforms[lang].map(p => (
                    <span key={p} className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-xs font-medium border border-white/20 text-white/80">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${project.typeColor}`}>
                      {project.type[lang]}
                    </p>
                    <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                      {t(project.title[lang])}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary/60 transition-colors shrink-0 mt-1" />
                </div>

                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                  {t(project.description[lang])}
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
