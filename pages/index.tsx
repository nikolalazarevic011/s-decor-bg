import SEO from '../components/SEO'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <SEO 
        title="Stefan - PVC i Aluminijumska Stolarija | Reparacija i Farbanje"
        description="Specijalizovani za reparaciju, farbanje i kompletnu obnovu PVC i aluminijumske stolarije. Profesionalan pristup sa garancijom kvaliteta. Besplatan predračun."
        url="https://your-domain.com"
      />
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
