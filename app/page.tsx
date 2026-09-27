import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CaseStudies } from '@/components/case-studies'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Framework } from '@/components/framework'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Process />
        <Framework />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
