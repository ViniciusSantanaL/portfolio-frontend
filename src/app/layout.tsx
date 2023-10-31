import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './global.css'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Viniciussls',
  description: 'My Portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
