/**
 * PosaLanding — Template per landing "posa in opera infissi + città".
 *
 * Uso:
 *   <PosaLanding citta="Milano" provincia="MI" />
 */
import Quiz from '../../components/Quiz'
import TrustBanner from '../../components/TrustBanner'
import InstallationTrustBanner from '../../components/InstallationTrustBanner'
import ValueProposition from '../../components/ValueProposition'
import azienda from '../../datiAziendali'
import { Phone, Wrench, CheckCircle, Clock } from 'lucide-react'
import furgoneImg from '../../assets/images/varie/MrkFurgone3.jpg'

const DEFAULT_STEPS = [
  { icon: '📞', titolo: 'Contatto', desc: 'Chiami o compili il form — risposta entro 2 ore' },
  { icon: '📐', titolo: 'Sopralluogo', desc: 'Tecnico in loco entro 48h, misurazione gratuita' },
  { icon: '🏭', titolo: 'Produzione', desc: 'Fabbricazione su misura in 2–3 settimane' },
  { icon: '🔧', titolo: 'Posa', desc: 'Squadra certificata, pulizia cantiere inclusa' },
]

export default function PosaLanding({
  citta = 'Milano',
  provincia = 'MI',
  zona = 'tutta la provincia',
  headline,
  subheadline,
}) {
  const titoloDefault = `Posa Infissi a ${citta} — Squadre Certificate`
  const sottotitoloDefault = `Installiamo finestre e porte in ${zona} (${provincia}). Dalla fabbrica alla posa: un unico fornitore, zero subappalti.`

  return (
    <>
      {/* ── HERO POSA ── */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-5">
            <Wrench className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-semibold text-blue-700">Posa certificata a {citta} ({provincia})</span>
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
              Chiama — {azienda.telefono}
            </a>
            <a
              href="#preventivo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-500 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all"
            >
              Preventivo posa gratuito →
            </a>
          </div>

          {/* Come funziona — 4 step */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left mt-4">
            {DEFAULT_STEPS.map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="text-2xl mb-2">{step.icon}</div>
                <p className="text-sm font-bold text-gray-900 mb-1">{step.titolo}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMMAGINE TRUST ── */}
      <div className="bg-white px-6 pb-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '240px' }}>
            <img
              src={furgoneImg}
              alt={`Squadra posa infissi ${citta}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex flex-wrap gap-4">
                {['Operai dipendenti (no subappalto)', 'Pulizia cantiere garantita', 'Lavori tracciati con fattura'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-white text-xs font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <InstallationTrustBanner />
      <div id="preventivo"><Quiz /></div>
      <TrustBanner />
      <ValueProposition />
    </>
  )
}
