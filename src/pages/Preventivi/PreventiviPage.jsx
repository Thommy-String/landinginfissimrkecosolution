/**
 * PreventiviPage — Landing focalizzata su costi e richiesta preventivo.
 * URL: /preventivo-infissi
 * Intento: "preventivo infissi", "costo finestre PVC", "quanto costano gli infissi"
 */
import Quiz from '../../components/Quiz'
import TrustBanner from '../../components/TrustBanner'
import ValueProposition from '../../components/ValueProposition'
import FiscalBonusBanner from '../../components/FiscalBonusBanner'
import azienda from '../../datiAziendali'
import { Phone, Calculator, CheckCircle, AlertCircle } from 'lucide-react'

const FASCE_PREZZO = [
  { materiale: 'PVC', fascia: 'da €260/mq', desc: 'Standard, alta efficienza termica, bassa manutenzione', colore: 'blue' },
  { materiale: 'Alluminio', fascia: 'da €340/mq', desc: 'Profili sottili, estetica moderna, massima durabilità', colore: 'gray' },
  { materiale: 'Legno', fascia: 'su preventivo', desc: 'Legno massiccio o lamellare, personalizzazione totale', colore: 'amber' },
]

const INCLUSO = [
  'Sopralluogo e misurazione gratuiti',
  'Preventivo dettagliato entro 24h',
  'Posa professionale con squadre proprie',
  'Smontaggio e smaltimento vecchi infissi',
  'Garanzia 10 anni prodotto + 2 anni posa',
]

export default function PreventiviPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-5">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700">Preventivo gratuito entro 24 ore</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.06em] text-gray-900 leading-[1.3] mb-4">
            Quanto costano gli Infissi?
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">
              Scopri i Prezzi di Fabbrica
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nessun listino gonfiato da negozio o rivenditore. Acquisti direttamente dal produttore
            e risparmi fino al 40%. Preventivo personalizzato gratuito in 24 ore.
          </p>

          {/* Fasce prezzo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            {FASCE_PREZZO.map((f, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{f.materiale}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{f.fascia}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Avviso comparativo */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 max-w-2xl mx-auto mb-10 text-left">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>In negozio paghi fino al 40% in più</strong> per lo stesso prodotto —
              i rivenditori aggiungono il loro margine al prezzo di fabbrica.
              Noi siamo la fabbrica.
            </p>
          </div>

          {/* Cosa è incluso */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto mb-10">
            {INCLUSO.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={azienda.telefonoLink}
              onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.telefonoLink)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              Chiama ora — {azienda.telefono}
            </a>
            <a
              href="#preventivo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-500 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all"
            >
              Calcola il tuo preventivo →
            </a>
          </div>
        </div>
      </section>

      <FiscalBonusBanner />
      <div id="preventivo"><Quiz /></div>
      <TrustBanner />
      <ValueProposition />
    </>
  )
}
