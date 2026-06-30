import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Hero from './components/sections/Hero/Hero'
import Problems from './components/sections/Problems/Problems'
import MoneyLeaks from './components/sections/MoneyLeaks/MoneyLeaks'
import Services from './components/sections/Services/Services'
import Pricing from './components/sections/Pricing/Pricing'
import Features from './components/sections/Features/Features'
import Testimonials from './components/sections/Testimonials/Testimonials'
import FAQ from './components/sections/FAQ/FAQ'
import CTA from './components/sections/CTA/CTA'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <MoneyLeaks />
        <Features />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
