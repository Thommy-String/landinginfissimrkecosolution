import { useState, useEffect } from 'react'
import { Factory } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#fafafa] pb-0 pt-16 sm:pt-24">
      {/* Background gradient decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-sky-100/60 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-blue-50/40 to-transparent blur-3xl" />
      </div>

      {/* Griglia sottile decorativa */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/60 mb-10 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Factory className="w-4 h-4 text-orange-600" strokeWidth={2} />
          <span className="text-xs font-semibold text-orange-900 tracking-wide uppercase whitespace-nowrap">Fabbrica • Vendita diretta</span>
        </div>

        {/* Headline principale */}
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.2] mb-7 transition-all duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Perché pagare il doppio in negozio?{' '}
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            <br></br>Compra le tue Finestre direttamente dalla Fabbrica.
          </span>
        </h1>

        {/* Check list */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mx-auto mb-10 transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            'Stessa Qualità Certificata',
            'Consegna in 2-3 settimane',
            'Prezzi di Fabbrica. Zero Intermediari',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
