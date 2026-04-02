'use client'

import { useState, useEffect } from 'react'

export default function WhatsApp() {
  const [visible, setVisible] = useState(false)
  const phoneNumber = '905327180613'
  const message = 'Merhaba, Elektrik Teknik sitesinden size ulaşıyorum. Yardımcı olabilir misiniz?'

  useEffect(() => {
    setVisible(true)
  }, [])

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Online Badge */}
      <div className="bg-white rounded-full shadow-lg px-4 py-2 text-sm animate-fade-in">
        <span className="relative flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-gray-700">7/24 Destek Hattı</span>
        </span>
      </div>
      
      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="WhatsApp ile iletişime geç"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.55 4.123 1.52 5.857L0 24l6.35-1.653C8.073 23.45 9.981 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.72-.521-5.315-1.488l-.378-.225-3.767.993 1.007-3.67-.243-.39A9.947 9.947 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
        </svg>
      </button>
    </div>
  )
}