import Image from 'next/image'
import { ArrowUpRight, Star } from 'lucide-react'

const tickerItems = [
  'AI LEAD GENERATION AGENCY',
  'COLD INFRASTRUCTURE',
  'SCALE',
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-0">
      {/* Radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(44,132,195,0.18), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-display text-balance text-4xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
          Top B2B AI Lead Gen{' '}
          <span className="inline-block rounded-xl bg-brand px-3 py-1 text-white">
            Systems
          </span>{' '}
          in Demand
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-card-foreground sm:text-lg">
          High-velocity client acquisition engines tailored for modern
          businesses ready to dominate their market with hyper-automated
          infrastructure.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
