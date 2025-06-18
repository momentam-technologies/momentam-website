import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import ErrorBoundary from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#000099',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  title: "Momentam | Get Your Event Photos in Seconds",
  description: "Don't wait for your event photos. Download the Momentam app, book a photographer, and get them in seconds. Trusted for all events including conferences, exhibitions, weddings, parties, and university graduations.",
  generator: 'Next.js',
  metadataBase: new URL('https://momentam.io'),
  keywords: ['photography', 'events', 'photos', 'instant', 'professional', 'conferences', 'exhibitions', 'weddings', 'parties', 'graduations'],
  authors: [{ name: 'Momentam Limited' }],
  creator: 'Momentam',
  publisher: 'Momentam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Momentam | Get Your Event Photos in Seconds',
    description: "Don't wait for your event photos. Download the Momentam app, book a photographer, and get them in seconds. Trusted for all events including conferences, exhibitions, weddings, parties, and university graduations.",
    url: 'https://momentam.io',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Momentam Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentam | Get Your Event Photos in Seconds",
    description: "Don't wait for your event photos. Download the Momentam app, book a photographer, and get them in seconds. Trusted for all events including conferences, exhibitions, weddings, parties, and university graduations.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/logo.png', sizes: '152x152', type: 'image/png' },
      { url: '/images/logo.png', sizes: '120x120', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Momentam',
    startupImage: '/images/logo.png',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Momentam',
    'application-name': 'Momentam',
    'msapplication-TileColor': '#000099',
    'msapplication-TileImage': '/images/logo.png',
    'theme-color': '#000099',
    'color-scheme': 'light',
    'supported-color-schemes': 'light',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Momentam" />
        <meta name="application-name" content="Momentam" />
        <meta name="msapplication-TileColor" content="#000099" />
        <meta name="msapplication-TileImage" content="/images/logo.png" />
        <meta name="theme-color" content="#000099" />
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
