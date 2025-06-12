"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, Copy, Check } from "lucide-react"
import { generateSMSMessage, getUniversalDownloadLink } from "@/lib/download-utils"

export function SMSShareDemo() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [copied, setCopied] = useState(false)

  const downloadLink = getUniversalDownloadLink()
  
  const handleSendSMS = () => {
    if (!phoneNumber) return
    
    const smsData = generateSMSMessage(phoneNumber)
    
    // Try to open SMS app
    try {
      window.open(smsData.smsUrl, '_blank')
    } catch (error) {
      // Fallback: copy message to clipboard
      navigator.clipboard.writeText(smsData.message)
      alert('SMS app not available. Message copied to clipboard!')
    }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy link:', error)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Share via SMS</h3>
      
      {/* Universal Link Display */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Universal Download Link:
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={downloadLink}
            readOnly
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
          />
          <Button
            onClick={copyLink}
            size="sm"
            variant="outline"
            className="flex items-center gap-1"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          This link automatically detects the user's device and redirects appropriately
        </p>
      </div>

      {/* SMS Sender */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1234567890"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000099] focus:border-transparent"
          />
        </div>
        
        <Button
          onClick={handleSendSMS}
          disabled={!phoneNumber}
          className="w-full bg-[#000099] hover:bg-[#000077] text-white"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Send SMS
        </Button>
      </div>

      {/* Preview Message */}
      {phoneNumber && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Message Preview:</p>
          <p className="text-sm text-gray-800">
            {generateSMSMessage(phoneNumber).message}
          </p>
        </div>
      )}
    </div>
  )
} 