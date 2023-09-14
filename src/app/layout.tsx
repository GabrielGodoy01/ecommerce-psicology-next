// Neste arquivo, você pode definir o layout padrão para todas as páginas da web, ele não é recarregado ao trocar de página. (landing)

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Navegando pela Ansiedade',
  description: 'Descubra soluções terapêuticas personalizadas para a ansiedade em nosso eBook, ajudando você a encontrar a terapia perfeita para suas necessidades.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['ansiedade', 'terapia', 'ebook', 'livro digital', 'psicologia', 'psicólogo', 'psicóloga', 'psicoterapia', 'terapia', 'terapeuta', 'terapeuta ocupacional', 'terapia ocupacional', 'ebook', 'ebook terapeutico', 'autoconhecimento', 'depressão', 'Estratégias para Ansiedade', 'Tratamento da Ansiedade', 'Saúde Mental', 'saude mental', 'autoajuda', 'auto ajuda',],
  authors: [
    { name: 'Gabriel de Godoy Braz', url: 'https://github.com/GabrielGodoy01' }
  ],
  openGraph: {
    images: ['https://live.staticflickr.com/65535/53187030206_c6b583c824_c.jpg'],
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Navegando pela Ansiedade',
    title: 'Navegando pela Ansiedade',
    description: 'Descubra soluções terapêuticas personalizadas para a ansiedade em nosso eBook, ajudando você a encontrar a terapia perfeita para suas necessidades.',
    url: '',
  },
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: ['/favicon.ico', 'image/x-icon', '16x16'],
  }
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
