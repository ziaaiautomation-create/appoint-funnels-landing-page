import Image from 'next/image'

export function Founder() {
  return (
    <section id="founder" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-tl-[4rem] rounded-tr-3xl rounded-bl-3xl rounded-br-[4rem] border border-border">
          <Image
            src="/images/founder.png"
            alt="Portrait of Ziauddin A, founder of Appoint Funnels"
            width={800}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center rounded-3xl bg-brand-deep p-8 sm:p-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Meet the Founder
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold text-white sm:text-5xl">
            Ziauddin A
          </h2>
          <div className="mt-6 flex flex-col gap-4 leading-relaxed text-white/85">
            <p>
              {"I started Appoint Funnels because I watched too many great B2B companies burn cash on manual cold calling and outdated agencies that couldn't scale. There had to be a better way — so I built it."}
            </p>
            <p>
              {"Today, we engineer bespoke n8n pipelines, clean data sourcing operations, and AI SDR agents that completely replace obsolete manual prospecting. Our systems work every hour of every day, personalizing outreach at a depth no human team can match."}
            </p>
            <p>
              {"My mission is simple: give ambitious companies a distinct automation advantage their competitors can't copy. When your acquisition engine runs on infrastructure instead of effort, growth stops being a guessing game."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
