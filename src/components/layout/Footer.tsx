import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext.tsx"

export function Footer() {
  const { t } = useLanguage()

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const navLinks = [
    { labelKey: "nav.start", href: "#start" },
    { labelKey: "nav.education", href: "#educationAndSkills" },
    { labelKey: "nav.projects", href: "#projects" },
    { labelKey: "nav.contact", href: "#contact" },
  ]

  const socialLinks = [
    { Icon: Github, label: "GitHub", href: "https://github.com/ENG-SHEHAB-AL-SAIDI" },
    { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shehab-al-saidi-a5b0a6394" },
    { Icon: Mail, label: "Email", href: "mailto:shshehab02@gmail.com" },
  ]

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, hsl(158 84% 40% / 0.5), hsl(174 80% 44% / 0.4), transparent)" }} />
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-10"
          style={{ background: "radial-gradient(ellipse, hsl(158 84% 40%) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">{t("footer.contactsLabel")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground/40">{t("footer.letsTalk")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("footer.navigate")}</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a key={item.labelKey} href={item.href} onClick={(e) => scrollTo(e, item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit text-sm">
                  {t(item.labelKey)}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-3 gradient-text">SHEHAB AL-SAIDI</h2>
            <p className="text-lg text-muted-foreground mb-2">{t("footer.role")}</p>
            <p className="text-sm text-muted-foreground/50 mb-8">{t("footer.graduate")}</p>
            <a href="mailto:shshehab02@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 text-sm font-medium mb-10">
              <Mail className="w-4 h-4" />
              {t("footer.getInTouch")}
            </a>
            <div className="text-xs text-muted-foreground/40">
              <p>{t("footer.builtWith")} · {new Date().getFullYear()}</p>
            </div>
          </div>

          <div className="md:col-span-3 flex justify-center md:justify-end">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("footer.social")}</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
