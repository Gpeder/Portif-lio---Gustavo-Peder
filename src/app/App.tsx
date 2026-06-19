import Experience from "@/components/experience"
import Hero from "@/components/hero"
import Navbar from "@/components/layout/nav_bar"
import Projects from "@/components/projects"
import ScrollTop from "@/components/ui/scroll_top"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollTop />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />

      </main>

    </div>
  )
}

export default App
