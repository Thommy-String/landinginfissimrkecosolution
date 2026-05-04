/**
 * GeoLanding — Template riutilizzabile per landing geo-localizzate.
 *
 * Uso:
 *   <GeoLanding citta="Milano" provincia="MI" zona="centro e hinterland" />
 *
 * Props:
 *   citta        {string}  Nome città (es. "Milano")
 *   provincia    {string}  Sigla provincia (es. "MI")
 *   zona         {string}  Descrizione zona copertura (es. "centro e hinterland")
 *   headline     {string?} Override titolo Hero (opzionale)
 *   subheadline  {string?} Override sottotitolo Hero (opzionale)
 */
import Quiz from '../../components/Quiz'
import TrustBanner from '../../components/TrustBanner'
import SocialProof from '../../components/SocialProof'
import FabbricaBanner from '../../components/FabbricaBanner'
import InstallationTrustBanner from '../../components/InstallationTrustBanner'
import ValueProposition from '../../components/ValueProposition'
import FloatingCTA from '../../components/FloatingCTA'
import azienda from '../../datiAziendali'
import { Phone, MapPin, CheckCircle } from 'lucide-react'
import teamImg from '../../assets/images/varie/MrkTeam.jpg'

const DEFAULT_FEATURES = [
  'Prezzi di fabbrica senza intermediari',
  'Installazione professionale con squadre locali',
  'Garanzia 10 anni su tutti i prodotti',
  'Sopralluogo gratuito entro 48 ore',
]

export default function GeoLanding({
  citta = 'Milano',
  provincia = 'MI',
  zona = 'tutta la provincia',
  headline,
  subheadline,
  features = DEFAULT_FEATURES,
}) {
  const titoloDefault = `Infissi a ${citta} direttamente dalla Fabbrica`
  const sottotitoloDefault = `Serviamo ${zona} (${provincia}). Niente negozi, niente rivenditori — prezzi reali di produzione con installazione inclusa.`

  return (
    <>
      {/* ── HERO GEO ── */}
      <section className="relative flex items-center justify-center overflow-hidden py-8 sm:py-16 bg-white">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Geo badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700">Serviamo {citta} e provincia ({provincia})</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.3] mb-4">
            {headline ?? titoloDefault}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {subheadline ?? sottotitoloDefault}
          </p>

          {/* Feature list */}
          <ul className="inline-flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-8 text-left">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={azienda.telefonoLink}
              onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.telefonoLink)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all duration-200 shadow-md"
            >
              <Phone className="w-4 h-4" />
              Chiama ora — {azienda.telefono}
            </a>
            <a
              href="#preventivo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-500 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all duration-200"
            >
              Richiedi preventivo gratuito →
            </a>
          </div>
        </div>
      </section>

      {/* ── TEAM / TRUST CARD ── */}
      <div className="bg-white px-6 pt-2 pb-2">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '280px' }}>
            <img
              src={teamImg}
              alt={`Team Ecosolution - infissi ${citta}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <p className="text-white/90 text-sm font-semibold mb-1">
                🏭 Fabbrica a Lentate sul Seveso (MB) — consegna e installazione a {citta} ({provincia})
              </p>
              <p className="text-white/60 text-xs">Oltre 817 famiglie e aziende servite in Lombardia</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RESTO DEI BLOCCHI CONDIVISI ── */}
      <SocialProof />
      <div id="preventivo">
        <Quiz />
      </div>
      <TrustBanner />
      <FabbricaBanner />
      <InstallationTrustBanner />
      <ValueProposition />
    </>
  )
}
