import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Kreatis',
  description: 'Web development agency',
  keywords: ['web developer', 'programmer', 'linux', 'mac os', 'hackintosh', 'woof os', 'woof', 'vithushan', 'sutharsan', 'vithu', 'acutewoof', 'a cute woof'],
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
