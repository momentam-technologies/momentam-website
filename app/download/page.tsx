import type { Metadata } from "next"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { DownloadPageClient } from "./download-client"

export const metadata: Metadata = {
  title: "Download Momentam - Get Your Event Photos Instantly",
  description: "Book photographers at events and get your photos instantly on your phone. No contact exchange needed - just scan, book, and receive!",
  keywords: "momentam, event photography, instant photos, photographer booking, event photos",
  openGraph: {
    title: "Download Momentam App",
    description: "Get your event photos instantly - no contact exchange needed!",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Momentam Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Download Momentam App",
    description: "Get your event photos instantly - no contact exchange needed!",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Server-side mobile detection for more reliable QR code redirects
function isMobileUserAgent(userAgent: string): { isMobile: boolean; platform: 'ios' | 'android' | 'other' } {
  const ua = userAgent.toLowerCase()
  
  if (/iphone|ipad|ipod/.test(ua)) {
    return { isMobile: true, platform: 'ios' }
  } else if (/android/.test(ua)) {
    return { isMobile: true, platform: 'android' }
  } else {
    return { isMobile: false, platform: 'other' }
  }
}

export default function DownloadPage() {
  // Temporarily disable server-side redirects to troubleshoot
  // Let client-side handle all redirects for now
  return <DownloadPageClient />
} 