import profiloVideo from '../assets/videos/profili mrk.mp4'
import profileImg from '../assets/images/FabiamoProfilePic.jpg'
import SocialProofBadge from './SocialProofBadge'

const GOOGLE_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png'

export default function SocialProof() {

  return (
    <section className="bg-white py-2 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto">



        {/* ══════════ TITOLO SEZIONE ══════════ */}
        <div className="mb-6 mt-6 text-center">
          <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.055em] text-gray-900 leading-[1.2] mb-6">
            Stessa finestra, metà prezzo.
            {' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              <br />
              Taglia i costi del negozio.
            </span>
          </h2>

          
        </div>

        {/* ══════════ CARD UNICA: VIDEO SFONDO + RECENSIONE INTEGRATA ══════════ */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl">

          {/* Video sfondo — sempre visibile */}
          <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[2/1]">
            <video
              src={profiloVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay leggero solo in basso */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Recensione breve — ancorata in basso */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              {/* Badge Google + stelle + verificato — sopra la recensione */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/15">
                  <img src={GOOGLE_LOGO} alt="Google" className="h-3.5 w-3.5" />
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/25">
                  <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] font-semibold text-emerald-300">Verificata</span>
                </div>
              </div>

              <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed max-w-xl mb-3">
                "Preventivo quasi metà prezzo rispetto al negozio per stessa marca VEKA che avevo visto in showroom. Consigliato. Tra ordine e consegna arrivete in 3 settimane."
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={profileImg}
                  alt="Fabiano Ripetti"
                  className="w-7 h-7 rounded-full object-cover border border-white/20"
                />
                <span className="text-sm font-semibold text-white/90">Fabiano Ripetti</span>
                <span className="text-[11px] text-white/40">· Monza - 3 settimane fa</span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  )
}
