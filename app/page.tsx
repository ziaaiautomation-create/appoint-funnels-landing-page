import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CaseStudies } from '@/components/case-studies'
import { Services } from '@/components/services'
import { Framework } from '@/components/framework'
import { Testimonials } from '@/components/testimonials'
import { Founder } from '@/components/founder'
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
        <Framework />
        <Testimonials />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
