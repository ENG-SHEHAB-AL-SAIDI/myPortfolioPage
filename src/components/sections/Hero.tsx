import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    "Flutter",
    "React",
    "Node.js",
    "Laravel",
    "Python",
    "PyTorch",
    "TensorFlow",
    "MySQL",
    "Firebase",
  ];
  const socialLinks = [
    {
      Icon: Github,
      label: "GitHub",
      href: "https://github.com/ENG-SHEHAB-AL-SAIDI",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shehab-al-saidi-a5b0a6394",
    },
    { Icon: Mail, label: "Email", href: "mailto:shshehab02@gmail.com" },
  ];

  return (
    <section
      id="start"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="orb-1 absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, hsl(158 84% 40%) 0%, transparent 70%)",
          }}
        />
        <div
          className="orb-2 absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, hsl(174 80% 44%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(158 84% 55%) 0%, transparent 70%)",
            animation: "float-orb 18s ease-in-out infinite",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(240 8% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(240 8% 60%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <GraduationCap className="w-4 h-4" />
              Computer Engineering Graduate · Ibb University · 82.56%
            </motion.div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-4">
              <span className="block text-foreground">SHEHAB</span>
              <span className="gradient-text block">AL-SAIDI</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary/60" />
              Computer Engineer & App Developer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Experienced in full-stack development and mobile application
              development, with a focus on cross-platform apps using Flutter,
              and capable of designing and implementing AI models.
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 mb-10 lg:w-3/4">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5 mb-8">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group neon-glow bg-primary hover:bg-primary/90 text-white px-8 rounded-full font-medium"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {
                  value: "3",
                  label: "Projects Built",
                  color: "from-emerald-500/20 to-teal-500/10",
                  border: "border-emerald-500/20",
                },
                {
                  value: "82.56%",
                  label: "University GPA",
                  color: "from-cyan-500/20 to-blue-500/10",
                  border: "border-cyan-500/20",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${stat.color} border ${stat.border} backdrop-blur-sm`}
                >
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured project card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glow-card rounded-2xl bg-card/80 backdrop-blur-xl p-6 border border-white/8"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Graduation Project
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 leading-snug">
                Student Services System
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                A full-featured university portal built with a team of 5,
                streamlining student administration and academic workflows.
              </p>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                See all projects <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
