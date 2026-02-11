import { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'

import Layout from '@/components/Layout'

const utm_avo = localFont({
  src: [
    {
      path: './fonts/UTM_Avo.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/UTM_AvoBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
})

const iCielGotham = localFont({
  src: [
    {
      path: './fonts/iCielGotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/iCielGotham-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--iCielGotham',
})

export const metadata: Metadata = {
  title: 'ELH - Every Little Helps',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = 'manual'`,
          }}
        />
      </head>
      <body className={`${utm_avo.className} ${iCielGotham.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
