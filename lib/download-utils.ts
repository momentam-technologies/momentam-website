export const APP_LINKS = {
  android: 'https://play.google.com/store/apps/details?id=com.momentam.app&pcampaignid=web_share',
  ios: 'https://apps.apple.com/us/app/momentam/id6746681576'
}

export function detectDevice() {
  if (typeof window === 'undefined') return 'desktop'
  
  const userAgent = window.navigator.userAgent.toLowerCase()
  const isAndroid = /android/.test(userAgent)
  const isIOS = /iphone|ipad|ipod/.test(userAgent)
  const isMobile = /mobile/.test(userAgent) || isAndroid || isIOS
  
  if (isAndroid) return 'android'
  if (isIOS) return 'ios'
  if (isMobile) return 'mobile'
  return 'desktop'
}

export function handleSmartDownload() {
  const device = detectDevice()
  
  switch (device) {
    case 'android':
      // Use window.location.href for immediate redirect
      window.location.href = APP_LINKS.android
      break
    case 'ios':
      // Use window.location.href for immediate redirect
      window.location.href = APP_LINKS.ios
      break
    case 'desktop':
    case 'mobile':
    default:
      // Return true to indicate we should show the QR modal
      return true
  }
  
  return false
}

export function generateQRCodeUrl(url: string, size: number = 200) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`
}

// Generate universal download link for SMS sharing
export function getUniversalDownloadLink(baseUrl?: string) {
  const domain = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '')
  return `${domain}/download`
}

// Generate SMS message with download link
export function generateSMSMessage(phoneNumber: string, baseUrl?: string) {
  const downloadLink = getUniversalDownloadLink(baseUrl)
  const message = `Hi! Download the Momentam app to get your event photos instantly: ${downloadLink}`
  
  // Create SMS URL for different platforms
  const encodedMessage = encodeURIComponent(message)
  
  return {
    link: downloadLink,
    message: message,
    smsUrl: `sms:${phoneNumber}?body=${encodedMessage}`,
    // Alternative formats for different platforms
    iosUrl: `sms:${phoneNumber}&body=${encodedMessage}`,
    androidUrl: `sms:${phoneNumber}?body=${encodedMessage}`
  }
} 