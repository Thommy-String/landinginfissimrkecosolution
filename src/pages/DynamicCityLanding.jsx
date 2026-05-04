/**
 * DynamicCityLanding.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Template "Smart" riutilizzabile per tutte le landing geo + intento.
 * Copre i gruppi: Fabbrica, Posa, Geo-Pura.
 *
 * Uso in App.jsx:
 *   <DynamicCityLanding intento="fabbrica" citta="milano" />
 *   <DynamicCityLanding intento="posa"     citta="generica" />
 *   <DynamicCityLanding intento="geo"      citta="monza" />
 *
 * Props:
 *   intento  "fabbrica" | "posa" | "geo"
 *   citta    "milano" | "monza" | "como" | "varese" | "generica"
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { CONFIG, BADGE_COLORS } from './landingConfig'
import Quiz from '../components/Quiz'
import TrustBanner from '../components/TrustBanner'
import SocialProof from '../components/SocialProof'
import InstallationTrustBanner from '../components/InstallationTrustBanner'
import FabbricaBanner from '../components/FabbricaBanner'
import ValueProposition from '../components/ValueProposition'
import azienda from '../datiAziendali'
import { Phone, CheckCircle } from 'lucide-react'
import teamImg from '../assets/images/varie/MrkTeam.jpg'
import furgoneImg from '../assets/images/varie/MrkFurgone3.jpg'
import fabbricaImg from '../assets/images/varie/MrkFabbrica.jpg'

// Immagine hero in base all'intento
const HERO_IMG = {
  fabbrica: fabbricaImg,
  posa:     furgoneImg,
  geo:      teamImg,
}

export default function DynamicCityLanding({ intento = 'geo', citta = 'milano' }) {
  const cfg = CONFIG[intento]?.[citta]

  // Fallback se combinazione non esiste
  if (!cfg) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-400">
        Pagina non trovata — intento: {intento}, città: {citta}
      </div>
    )
  }

  const badgeClass = BADGE_COLORS[cfg.badgeColor] ?? BADGE_COLORS.emerald
  const heroImg    = HERO_IMG[intento] ?? teamImg

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* Badge intento + geo */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 ${badgeClass}`}>
            {cfg.badge}
          </div>

          {/* H1 dinamico */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.06em] text-gray-900 leading-[1.3] mb-4">
            {cfg.h1}
            <br />
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              {cfg.h1Gradient}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {cfg.sottotitolo}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="#preventivo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all duration-200 shadow-md"
            >
              {cfg.cta1}
            </a>
            <a
              href={azienda.telefonoLink}
              onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.telefonoLink)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-500 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              {cfg.cta2}
            </a>
          </div>

          {/* Feature list */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
            {cfg.features?.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── IMMAGINE HERO ────────────────────────────────────────────────── */}
      <div className="bg-white px-6 pb-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '280px' }}>
            <img src={heroImg} alt={cfg.h1} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <p className="text-white font-bold text-sm mb-1">
                🏭 Fabbrica a Lentate sul Seveso (MB) — {cfg.badge}
              </p>
              <p className="text-white/60 text-xs">Oltre 817 famiglie e aziende servite in Lombardia</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── STEPS (solo per intento POSA) ────────────────────────────────── */}
      {cfg.focus === 'posa' && cfg.steps && (
        <section className="bg-gray-50 py-10">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-900 mb-8">
              Come funziona la sostituzione
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cfg.steps.map((step, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{step.titolo}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BLOCCHI CONDIVISI ────────────────────────────────────────────── */}
      <SocialProof />
      <div id="preventivo">
        <Quiz />
      </div>
      <TrustBanner />

      {/* Blocchi extra per intento fabbrica */}
      {cfg.focus === 'fabbrica' && <FabbricaBanner />}

      {/* Blocchi extra per intento posa */}
      {cfg.focus === 'posa' && <InstallationTrustBanner />}

      <ValueProposition />
    </>
  )
}
