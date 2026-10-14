import { motion } from "framer-motion"
import { Code2, Smartphone, Globe, Award, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  )
}

export function EducationAndSkills() {
  const { t } = useLanguage()

  const skillGroups = [
    {
      labelKey: "work.frontend",
      icon: Globe,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      labelKey: "work.backend",
      icon: Code2,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      skills: ["Laravel", "Node.js", "PHP", "JavaScript", "REST APIs"],
    },
    {
      labelKey: "work.mobile",
      icon: Smartphone,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      skills: ["Flutter", "Android Studio", "Firebase"],
    },
    {
      labelKey: "work.tools",
      icon: BookOpen,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      skills: ["MySQL", "Git", "GitHub", "VS Code", "Postman"],
    },
  ]

  const highlights = [
    { icon: Award, labelKey: "work.gpa", subKey: "work.topAcademic", color: "text-emerald-400" },
    { icon: Globe, labelKey: "work.webMobile", subKey: "work.fullstack", color: "text-pink-400" },
  ]

  return (
    <section id="educationAndSkills" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, hsl(192 91% 48%) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">{t("work.sectionLabel")}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-warm">{t("work.title")}</span>{" "}
            <span className="text-foreground">{t("work.titleAccent")}</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg, hsl(158 84% 40%), hsl(174 80% 44%))" }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glow-card rounded-3xl border border-white/8 bg-card/60 backdrop-blur-sm p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
              <GraduationCapIcon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold">{t("work.degree")}</h3>
                <span className="text-sm font-medium px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit">
                  {t("work.period")}
                </span>
              </div>
              <p className="text-lg text-muted-foreground mb-1">{t("work.university")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("work.description")}</p>
            </div>
            <div className="shrink-0 text-center p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20">
              <div className="text-3xl font-bold gradient-text">82.56%</div>
              <div className="text-xs text-muted-foreground mt-1">{t("work.gpaLabel")}</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {highlights.map((h, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-white/6 hover:border-white/12 transition-colors">
              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${h.color}`}>
                <h.icon className="w-5 h-5" />
              </div>
              <div>
                <div className={`font-bold ${h.color}`}>{t(h.labelKey)}</div>
                <div className="text-xs text-muted-foreground">{t(h.subKey)}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl border ${group.borderColor} ${group.bgColor} hover:scale-[1.02] transition-transform duration-300`}>
              <div className={`flex items-center gap-3 mb-4 ${group.color}`}>
                <group.icon className="w-5 h-5" />
                <span className="font-semibold text-sm">{t(group.labelKey)}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
