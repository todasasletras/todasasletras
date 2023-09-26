import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import GlobalStyles from './styles/GlobalStyles';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todas as Letras',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#5A08FC',
  description: 'Inserimos talentos LGBTI+ na área de tecnologia.',
  keywords: 'lgbt, lgbtqi, tech, tecnologia, desenvolvimento, design, pride',
  robots: 'follow',
  applicationName: 'Todas as Letras',
  openGraph: {
    type: 'website',
    url: 'https://todasasletras.org',
    title: 'Todas as Letras',
    siteName: 'Todas as Letras',
    description: 'Inserimos talentos LGBTI+ na área de tecnologia.',
    images: [
      {
        url: 'https://todasasletras.netlify.app/social-share.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Todas as Letras',
    description: 'Inserimos talentos LGBTI+ na área de tecnologia.',
    site: '@todasasletras_',
    images: {
      url: 'https://todasasletras.netlify.app/social-share.png',
      alt: 'Inserimos talentos LGBTI+ na área de tecnologia.',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
