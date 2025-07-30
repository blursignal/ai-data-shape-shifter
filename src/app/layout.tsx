import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Data Shape Shifter',
  description: 'A sophisticated Python library for dynamic data transformation and manipulation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
