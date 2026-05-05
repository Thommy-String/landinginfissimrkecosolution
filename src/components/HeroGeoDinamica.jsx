/**
 * HeroGeoDinamica — Blocco hero geo-localizzato per le landing Geo.
 * Mostra foto locale (furgone/squadra), H1 dinamico con città, badge
 * lampeggiante di operatività e CTA "Sopralluogo Gratuito".
 *
 * Props:
 *   citta      {string}  Nome città (es. "Milano")
 *   provincia  {string}  Sigla provincia (es. "MI")
 *   imgSrc     {string?} Foto locale (furgone/squadra). Se omessa → placeholder.
 */
import furgoneImg from '../assets/images/varie/MrkFurgone3.jpg'

export default function HeroGeoDinamica({ citta = 'Milano', provincia = 'MI', imgSrc }) {
  const foto = imgSrc ?? furgoneImg   // ← sostituisci con foto locale quando disponibile

  return (
    <section className="bg-white pt-6 pb-0">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Card foto locale ── */}
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-xl"
          style={{ height: 'clamp(220px, 45vw, 420px)' }}
        >
          {/* Foto */}
          <img
            src={foto}
            alt={`Team MRK-Ecosolution a ${citta}`}
            className="w-full h-full object-cover object-center"
          />

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          {/* Badge lampeggiante */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-gray-900 text-xs sm:text-sm font-bold px-3 py-2 rounded-full shadow-lg">
              {/* Pallino verde lampeggiante */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Operativi a {citta} e provincia — Sopralluoghi in 48h
            </span>
          </div>

          {/* Testo sovrapposto in basso */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <p className="text-white/60 text-xs sm:text-sm mb-1 font-medium uppercase tracking-widest">
              Fabbrica MRK-Ecosolution · Lentate sul Seveso (MB)
            </p>
            <h2 className="text-white text-xl sm:text-3xl font-bold leading-snug">
              La nostra squadra interviene<br className="hidden sm:block" /> direttamente a{' '}
              <span className="text-emerald-400">{citta}</span>
            </h2>
          </div>
        </div>

        {/* ── CTA sotto la foto ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 mb-2">
          <a
            href="#preventivo"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all w-full sm:w-auto justify-center"
          >
            📍 Richiedi un Sopralluogo Gratuito a {citta}
          </a>
          <p className="text-xs text-gray-400">Nessun obbligo · Risposta entro 24h</p>
        </div>

      </div>
    </section>
  )
}
