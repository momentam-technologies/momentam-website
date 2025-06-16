"use client"

import { useEffect, useState } from 'react'

export default function IOSTestPage() {
  const [deviceInfo, setDeviceInfo] = useState<any>({})
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    try {
      const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenResolution: `${screen.width}x${screen.height}`,
        windowSize: `${window.innerWidth}x${window.innerHeight}`,
        devicePixelRatio: window.devicePixelRatio,
        touchSupport: 'ontouchstart' in window,
        isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        isStandalone: window.matchMedia('(display-mode: standalone)').matches,
        viewport: {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
        },
        timestamp: new Date().toISOString(),
      }
      setDeviceInfo(info)
    } catch (error) {
      setErrors(prev => [...prev, `Device info error: ${error}`])
    }

    // Test various iOS-specific features
    const testFeatures = async () => {
      const testResults: string[] = []

      // Test CSS support
      try {
        if (CSS.supports('scroll-behavior', 'smooth')) {
          testResults.push('✅ CSS scroll-behavior supported')
        } else {
          testResults.push('❌ CSS scroll-behavior not supported')
        }
      } catch (e) {
        testResults.push('❌ CSS.supports not available')
      }

      // Test viewport height
      try {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--test-vh', `${vh}px`)
        testResults.push('✅ Custom viewport height set')
      } catch (e) {
        testResults.push('❌ Viewport height setting failed')
      }

      // Test local storage
      try {
        localStorage.setItem('ios-test', 'working')
        const test = localStorage.getItem('ios-test')
        if (test === 'working') {
          testResults.push('✅ Local storage working')
          localStorage.removeItem('ios-test')
        } else {
          testResults.push('❌ Local storage not working')
        }
      } catch (e) {
        testResults.push('❌ Local storage error')
      }

      // Test service worker support
      try {
        if ('serviceWorker' in navigator) {
          testResults.push('✅ Service worker supported')
        } else {
          testResults.push('❌ Service worker not supported')
        }
      } catch (e) {
        testResults.push('❌ Service worker check failed')
      }

      setErrors(prev => [...prev, ...testResults])
    }

    testFeatures()
  }, [])

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">
          iOS Browser Compatibility Test
        </h1>
        
        <div className="space-y-6">
          {/* Device Information */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">
              Device Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {Object.entries(deviceInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-medium text-muted-foreground">
                    {key}:
                  </span>
                  <span className="text-card-foreground">
                    {typeof value === 'object' 
                      ? JSON.stringify(value) 
                      : String(value)
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Test Results */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">
              Compatibility Test Results
            </h2>
            <div className="space-y-2">
              {errors.map((error, index) => (
                <div key={index} className="text-sm font-mono bg-muted p-2 rounded">
                  {error}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Tests */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">
              Visual Tests
            </h2>
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
                CSS Gradient Test
              </div>
              <div className="transform rotate-1 bg-green-500 h-16 rounded-lg flex items-center justify-center text-white font-semibold">
                CSS Transform Test
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Button Hover Test
                </button>
                <input 
                  type="text" 
                  placeholder="Input zoom test (should not zoom on iOS)"
                  className="px-4 py-2 border rounded-md flex-1"
                  style={{ fontSize: '16px' }}
                />
              </div>
            </div>
          </div>

          {/* Return to Home */}
          <div className="text-center">
            <a 
              href="/" 
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 