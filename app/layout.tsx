import type { Metadata } from 'next'
import './globals.css'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Manoj Sachdev | Portfolio',
  description: 'Full Stack Developer & UI/UX Designer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
