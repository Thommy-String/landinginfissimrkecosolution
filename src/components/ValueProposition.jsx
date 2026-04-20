import nicoVideo from '../assets/videos/NicoScorrevole.mp4'

export default function ValueProposition() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center">
          {/* Problem headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.3] mb-6">
            <span className="relative inline-block text-black">
              <span className="relative z-10">15.000€ dal rivenditore.</span>
              <span className="absolute left-[-10px] right-[-10px] top-1/2 h-[3px] sm:h-[4px] bg-red-300 -translate-y-1/2 rounded-full" />
            </span>
            {' '}<br />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
             7.500€ dalla Fabbrica.
            </span>
          </h2>

          {/* Sub-headline - Problem & Solution */}
          <p className="text-lg sm:text-xl font-medium text-gray-700 mb-8 leading-relaxed">
            I rivenditori tradizionali aggiungono il <strong>dal 50-100% di ricarico</strong> alle tue finestre. Loro vendono quello che comprano da noi a doppio prezzo. <strong>Compra dalla fonte</strong> e risparmia, niente intermediari.
          </p>

          {/* Value drivers - 3 column */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Produzione Diretta',
                desc: 'Produciamo noi stessi nella nostra fabbrica'
              },
              {
                title: 'Nessun Intermediario',
                desc: 'Niente rivenditori. Niente costi nascosti. Prezzo trasparente.'
              },
              {
                title: 'Qualità Garantita',
                desc: 'Profili Aluplast & Veka certificati, garanzia decennale.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">✓</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button 
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Calcola Gratis quanto risparmi
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
          <video
            src={nicoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  )
}
