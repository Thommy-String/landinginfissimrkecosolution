/**
 * FabbricaLanding — Template per landing "fabbrica infissi + città".
 * Intento: utente cerca "fabbrica infissi Milano" ecc.
 *
 * Props:
 *   citta       {string}
 *   provincia   {string}
 *   zona        {string}
 */
import Quiz from '../../components/Quiz'
import TrustBanner from '../../components/TrustBanner'
import FabbricaBanner from '../../components/FabbricaBanner'
import ProductionVideo from '../../components/ProductionVideo'
import ValueProposition from '../../components/ValueProposition'
import azienda from '../../datiAziendali'
import { Phone, Factory, CheckCircle } from 'lucide-react'
import fabbricaImg from '../../assets/images/varie/MrkFabbrica.jpg'

const VANTAGGI_FABBRICA = [
  'Produciamo noi stessi ogni serramento',
  'Nessun intermediario = prezzi imbattibili',
  'Profilati VEKA certificati (qualità tedesca)',
  'Consegna diretta dalla fabbrica a casa tua',
  'Personalizzazione totale: colori, misure, vetri',
]

export default function FabbricaLanding({
  citta = 'Milano',
  provincia = 'MI',
  zona = 'tutta la provincia',
  headline,
  subheadline,
}) {
  const titoloDefault = `Fabbrica Infissi a ${citta} — Vendita Diretta`
  const sottotitoloDefault = `Acquistiamo direttamente dalla nostra fabbrica e consegniamo in ${zona} (${provincia}). Risparmi reali fino al 40% rispetto ai negozi.`

  return (
    <>
      {/* ── HERO FABBRICA ── */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-5">
            <Factory className="w-3.5 h-3.5 text-orange-600" />
            <span className="text-xs font-semibold text-orange-700">Fabbrica — spedizione a {citta} ({provincia})</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.06em] text-gray-900 leading-[1.3] mb-4">
            {headline ?? titoloDefault}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {subheadline ?? sottotitoloDefault}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href={azienda.telefonoLink}
              onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.telefonoLink)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all duration-200 shadow-md"
            >
              <Phone className="w-4 h-4" />
              Chiama la Fabbrica — {azienda.telefono}
            </a>
            <a
              href="#preventivo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-500 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all"
            >
              Preventivo fabbrica gratuito →
            </a>
          </div>

          {/* Vantaggi fabbrica diretta */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
            {VANTAGGI_FABBRICA.map((v, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── IMMAGINE FABBRICA ── */}
      <div className="bg-white px-6 pb-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '280px' }}>
            <img
              src={fabbricaImg}
              alt={`Fabbrica infissi — consegna a ${citta}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <p className="text-white font-bold text-sm mb-1">
                🏭 Stabilimento produttivo — Lentate sul Seveso (MB)
              </p>
              <p className="text-white/60 text-xs">Produciamo ogni giorno oltre 30 serramenti su misura</p>
            </div>
          </div>
        </div>
      </div>

      <ProductionVideo />
      <FabbricaBanner />
      <div id="preventivo"><Quiz /></div>
      <TrustBanner />
      <ValueProposition />
    </>
  )
}
