import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const cases = [
  {
    title: 'AI Cold SMS Engine',
    description:
      'A direct-to-cell conversational system that opens dialogues with decision-makers at scale. Automated qualification sequences book meetings straight into your calendar while reply-handling agents keep every thread warm.',
    image: '/images/mockup-sms.png',
    alt: 'AI cold SMS campaign dashboard showing conversation threads and reply rate analytics',
  },
  {
    title: 'Cold Email Infrastructure',
    description:
      'Clean-domain, inbox-ready outreach architecture delivering thousands of hyper-personalized emails daily. Deliverability monitoring, domain rotation, and LLM-driven personalization keep response rates compounding.',
    image: '/images/mockup-email.png',
    alt: 'Cold email infrastructure dashboard with deliverability score and domain health table',
  },
]

export function CaseStudies() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="mb-14 text-center">
        <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
          Core Outcomes
        </span>
        <h2 className="font-display mt-5 text-balance text-4xl font-bold text-foreground sm:text-5xl">
          What We Build
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {cases.map((item) => (
          <article
            key={item.title}
            className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-secondary p-8 sm:p-12 lg:grid-cols-2"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-card-foreground">
                {item.description}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_0_60px_rgba(44,132,195,0.15)]">
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.alt}
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
