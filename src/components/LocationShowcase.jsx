import fabbricaVideo from '../assets/videos/previewFabbrica2.mp4'

export default function LocationShowcase() {
  return (
    <section className="bg-gray-900 py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.065em] text-white leading-[1.2] mb-7">
            Consegna e Intallazione in tutta Lombardia{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              <br></br>Il nostro magazzino è a Lentate Sul Seveso - MB
            </span>
          </h2>
          <p className="text-sm sm:text-base font-medium text-gray-300 leading-relaxed mb-8">
            Produciamo infissi di qualità certificata per famiglie e professionisti. La nostra fabbrica è sinonimo di eccellenza, innovazione e trasparenza totale.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-1 mt-3">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-400">Certificato ISO</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-400">Anche Pacchetto Fornitura + Posa</p>
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black border border-gray-700">
          {/* Video Placeholder / Actual Video */}
          <div 
            className="aspect-video w-full bg-black flex items-center justify-center relative group"
          >
            {/* Embedded Video — always visible */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={fabbricaVideo} type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>

        </div>

      </div>
    </section>
  )
}
