
import teamInsideImg from '../assets/images/varie/mrkTeamInside.jpg'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-0">
      {/* Background Image - More Visible */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${teamInsideImg})`,
          opacity: 0.8
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/40 via-black/25 to-black/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8 sm:py-12 text-center">

        {/* Content wrapper with white rounded background */}
        <div className="bg-white/10 rounded-3xl px-6 sm:px-10 py-8 sm:py-12 inline-block max-w-2xl mx-auto" style={{ backdropFilter: 'blur(2px)' }}>
          {/* Headline principale */}
          <h1
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.050em] text-white leading-[1.3]"
          >
            In negozio paghi il 40% in più.{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text">
             <br />Risparmia e acquista le Finestre direttamente dalla Fabbrica senza Intermediari.
            </span>
          </h1>
        </div>

        {/* Check list */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mx-auto mt-8"
        >
          {[
            'Stessa Qualità Certificata.',
            'Risparmi almeno il 30%',
            'Pronte in 2-3 settimane',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-base sm:text-lg font-semibold text-white">{item}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
