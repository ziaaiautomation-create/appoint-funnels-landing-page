import { ChevronsRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <ChevronsRight className="h-5 w-5 text-brand" aria-hidden="true" />
          <span className="font-display font-bold text-foreground">
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
