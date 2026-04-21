import { useState, useEffect } from 'react'
import profiloVideo from '../assets/videos/profiloVPerfect.mp4'

export default function ProfileQuality() {
  return (
    <section className="bg-white py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.2] mb-7">
             Profili Tedeschi Certificati.{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              <br></br>Produciamo Infissi fatti per durare.
            </span>
          </h2>
          
          {/* Loghi dei profili */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mb-8">
            <img 
              src="https://www.hstrade.co.uk/wp-content/uploads/2022/08/Aluplast-logo-white.png"
              alt="Aluplast Logo"
              className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="w-px h-12 sm:h-16 bg-gray-200" />
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mix9IMRGshquzIZNtkg5riraVJGEG09NdA&s"
              alt="Veka Logo"
              className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed mb-8">
            I migliori profili europei per durabilità, isolamento termico e resistenza nel tempo. Garanzia decennale.
          </p>
         
          <div className="flex flex-col items-center justify-center gap-1 mt-3">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-500">Certificazione Europea</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-500">Garanzia 10 Anni</p>
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 border border-gray-800">
          {/* Video Placeholder / Actual Video */}
          <div 
            className="aspect-video w-full bg-gray-900 flex items-center justify-center relative group"
          >
            {/* Embedded Video — always visible */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={profiloVideo} type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>

        </div>

      </div>
    </section>
  )
}
