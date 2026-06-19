import Hero from "@/components/hero"
import Navbar from "@/components/layout/nav_bar"
import ScrollTop from "@/components/ui/scroll_top"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollTop />
      <Navbar />
      <main>
        <Hero />

      </main>

    </div>
  )
}

export default App
