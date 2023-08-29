// Neste arquivo, você pode definir o layout padrão para todas as páginas da web, ele não é recarregado ao trocar de página. (landing)

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Navegando pela Ansiedade',
  description: 'Ebook - Navegando pela Ansiedade: Encontre sua terapia',
  viewport: 'width=device-width, initial-scale=1',
}

import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
        <body className={montserrat.className}>{children}</body>
    </html>
  )
}
