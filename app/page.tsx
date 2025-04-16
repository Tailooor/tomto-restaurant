import Hero from "@/components/hero"
import Menu from "@/components/menu"
import Hours from "@/components/hours"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Menu />
      <Hours />
      <Contact />
      <Footer />
    </main>
  )
}
