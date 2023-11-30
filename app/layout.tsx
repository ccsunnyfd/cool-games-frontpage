import type { Metadata } from 'next'
import { Barlow, Poppins, Righteous, Inter } from 'next/font/google'
import './globals.css'

const barlow_condensed = Barlow({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
})

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-righteous',
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Cool Games',
  description: 'Generated by David',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${barlow_condensed.variable} ${poppins.variable} ${righteous.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
