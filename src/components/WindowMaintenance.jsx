import profileVideo from '../assets/videos/profileVideo1.mp4'

export default function WindowMaintenance() {
  return (
    <section className="bg-white py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="mb-3">
            <span className="text-lg sm:text-2xl line-through text-red-500 font-semibold">Addio 2-3 Mesi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.2] mb-7">
            Pronte in 2-4 Settimane.{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              <br></br>Non aspettare mesi.
            </span>
          </h2>
          
          <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed mb-8">
            Gestimo tutto il processo, questo ci permette di produrre e consegnare in soli 14-28 giorni. Tempi record ripetto la concorrenza.
          </p>
          <button 
            onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Calcola Gratis la tua Stima di Spesa
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center gap-1 mt-3">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-500">14-28 giorni dalla fabbrica</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-500">Consegna in tutta Lombardia</p>
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
              <source src={profileVideo} type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>

        </div>

      </div>
    </section>
  )
}
