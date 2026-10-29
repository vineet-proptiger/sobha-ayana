import './globals.css'
import { Poppins, Open_Sans, Montserrat } from 'next/font/google'
import { CITY_DISPLAY, SITE_URL } from '../lib/config'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL || 'https://sobhaayanapanathur.com'),
  title: 'Sobha Ayana | 3 BHK Luxury Apartments Panathur Bangalore',
  description: 'Sobha Ayana at Panathur, Off Marathahalli-ORR, Bengaluru by Sobha offers exclusive 3 BHK luxury apartments with 100+ modern lifestyle amenities. New Launch.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sobha Ayana | 3 BHK Luxury Apartments Panathur Bangalore',
    description: 'Sobha Ayana at Panathur, Off Marathahalli-ORR, Bengaluru by Sobha offers exclusive 3 BHK luxury apartments with 100+ modern lifestyle amenities. New Launch.',
    url: SITE_URL || 'https://sobhaayanapanathur.com',
    siteName: 'Sobha Ayana',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobha Ayana | 3 BHK Luxury Apartments Panathur Bangalore',
    description: 'Sobha Ayana at Panathur, Off Marathahalli-ORR, Bengaluru by Sobha offers exclusive 3 BHK luxury apartments with 100+ modern lifestyle amenities. New Launch.',
  },
  icons: {
    icon: '/favicon/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
