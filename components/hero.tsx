import Image from 'next/image'
import { ArrowUpRight, Star } from 'lucide-react'

const tickerItems = [
  'AI LEAD GENERATION AGENCY',
  'COLD INFRASTRUCTURE',
  'SCALE',
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-0 sm:pt-40">
      {/* Radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(44,132,195,0.18), transparent 70%)',
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <h1 className="font-display text-[clamp(1rem,6.2vw,2rem)] font-medium leading-[1.25] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <span className="block whitespace-nowrap">
            The AI Sales Systems That
          </span>
          <span className="block whitespace-nowrap">
            Fills Your Calendar With
          </span>
          <span className="block whitespace-nowrap text-brand">
            Booked Appointments
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-[clamp(0.875rem,4.4vw,1.0625rem)] leading-relaxed text-muted-foreground sm:text-base">
          AI systems that generate leads, book appointments, and scale your
          pipeline. Built for B2B companies ready to dominate their market.
        </p>

        <dl className="mt-12 flex w-full max-w-lg flex-wrap justify-center gap-x-2 gap-y-9">
          {[
            { value: '30+', label: 'satisfied clients' },
            { value: '10K+', label: 'appointments booked' },
            { value: '95%+', label: 'inbox placement' },
            { value: '24/7', label: 'AI working for you' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex w-[30%] min-w-24 flex-col items-center gap-1"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-[clamp(1.5rem,7.7vw,1.875rem)] font-medium text-foreground sm:text-4xl">
                {stat.value}
              </dd>
              <span className="text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-primary py-3.5 pl-8 pr-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {"Let's talk"}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>

      {/* Scrolling ticker with floating badge */}
      <div className="relative mt-24 border-y border-border py-6">
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="animate-ticker flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
            {[...Array(2)].map((_, dup) =>
              [...Array(3)].map((_, rep) =>
                tickerItems.map((item, i) => (
                  <span
                    key={`${dup}-${rep}-${i}`}
                    className="flex items-center gap-8 font-display text-3xl font-bold uppercase tracking-wider text-muted-foreground/40 sm:text-5xl"
                  >
                    {item}
                    <span className="text-brand">•</span>
                  </span>
                )),
              ),
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center sm:left-12">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 px-5 py-4 backdrop-blur-xl">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((n) => (
                <Image
                  key={n}
                  src={`/images/avatar-${n}.png`}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand text-brand"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                30+ Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
