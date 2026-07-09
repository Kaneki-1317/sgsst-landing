import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton/WhatsAppButton'
import Hero from './components/sections/Hero/Hero'
import Problems from './components/sections/Problems/Problems'
import MoneyLeaks from './components/sections/MoneyLeaks/MoneyLeaks'
import Services from './components/sections/Services/Services'
import Pricing from './components/sections/Pricing/Pricing'
import Features from './components/sections/Features/Features'
import Testimonials from './components/sections/Testimonials/Testimonials'
import FAQ from './components/sections/FAQ/FAQ'
import CTA from './components/sections/CTA/CTA'
import Coverage from './components/sections/Coverage/Coverage'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Problems />
        <MoneyLeaks />
        <Features />
        <Services />
        <Pricing />
        <FAQ />
        <CTA />
        <Coverage />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
