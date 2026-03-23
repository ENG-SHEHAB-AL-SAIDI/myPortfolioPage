import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { EducationAndSkills } from "@/components/sections/Work"
import { Projects } from "@/components/sections/Projects"
import { Articles } from "@/components/sections/Articles"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <EducationAndSkills />
        <Projects />
        {/* <Articles /> */}
      </main>

      <Footer />
    </div>
  )
}
