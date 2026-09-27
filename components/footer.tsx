import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={240}
            height={89}
            className="h-6 w-auto"
          />
          <span className="font-heading font-bold text-foreground">
            Appoint Funnels
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Appoint Funnels. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
