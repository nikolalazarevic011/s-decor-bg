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
        title="S_Decor_Bg - Profesionalno Farbanje PVC i Aluminijumske Stolarije Beograd"
        description="Specijalizovani za spray farbanje i reparaciju PVC i aluminijumske stolarije u Beogradu. Kvalitetno farbanje pištoljem, promena boje prozora, vrata, fasada. Održavanje i renovacija stolarije. Dugogodišnje iskustvo, garancija kvaliteta. Pozovite za besplatan predračun!"
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
