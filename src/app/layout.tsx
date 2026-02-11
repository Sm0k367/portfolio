import type { Metadata } from 'next'
import { Inter, Orbitron, Rajdhani } from 'next/font/google'
import './globals.css'
import Lenis from '@/components/Lenis'
import ParticlesBackground from '@/components/ParticlesBackground'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900'],
  variable: '--font-cyber'
})
const rajdhani = Rajdhani({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-neon'
})

export const metadata: Metadata = {
  title: {
    default: 'Sm0kn420 x TSI Portfolio',
    template: '%s | Sm0kn420 Cyber Empire'
  },
  description: 'Building the Future with @tsi_org - AI-Powered Web Experiences by Sm0k367',
  openGraph: {
    title: 'Sm0kn420 x TSI Portfolio',
    description: 'Cyberpunk AI portfolio with all GitHub/Vercel projects',
    url: 'https://portfolio.sm0k367.com',
    siteName: 'Sm0kn420',
    images: '/og-image-cyberpunk.jpg',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sm0kn420 x TSI Portfolio',
    description: 'Cyberpunk AI empire powered by @tsi_org',
    images: ['/og-image-cyberpunk.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable}`}>
      <body className={cn(
        'min-h-screen bg-cyber-900 text-neon-cyan font-neon antialiased overflow-x-hidden'
      )}>
        <Lenis root>
          <ParticlesBackground />
          <main className="relative z-10">
            {children}
          </main>
        </Lenis>
      </body>
    </html>
  )
}