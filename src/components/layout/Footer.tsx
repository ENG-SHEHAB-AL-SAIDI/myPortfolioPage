import { Github, Linkedin, Mail, Twitter, Facebook, Instagram } from "lucide-react"

const socialLinks = [
  { Icon: Github, label: "GitHub", href: "https://github.com/ENG-SHEHAB-AL-SAIDI" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { Icon: Mail, label: "Email", href: "mailto:shshehab02@gmail.com" },
]

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, hsl(158 84% 40% / 0.5), hsl(174 80% 44% / 0.4), transparent)" }} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-10"
          style={{ background: "radial-gradient(ellipse, hsl(158 84% 40%) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section label */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">...Contacts...</p>
          <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground/40">Let's work together</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Start", href: "#start" },
                { label: "Education & Skills", href: "#educationAndSkills" },
                { label: "Projects", href: "#projects" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Center branding */}
          <div className="md:col-span-6 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-3 gradient-text">
              SHEHAB AL-SAIDI
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Software Engineer
            </p>
            <p className="text-sm text-muted-foreground/50 mb-8">
              Computer Engineering Graduate · Ibb University
            </p>

            {/* CTA email */}
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 text-sm font-medium mb-10"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>

            <div className="text-xs text-muted-foreground/40 flex flex-col items-center gap-1">
              <p>Built with React & Tailwind · {new Date().getFullYear()}</p>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 flex justify-center md:justify-end">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Social</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { Icon: Github, label: "GitHub", href: ""},
                  { Icon: Linkedin, label: "LinkedIn" , href: ""},
                  { Icon: Mail, label: "Email" , href: "mailto:shshehab02@gmail.com"},
                ].map(({ Icon, label }, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl border border-white/8 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
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
