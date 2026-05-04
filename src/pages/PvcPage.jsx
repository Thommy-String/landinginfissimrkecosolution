/**
 * PvcPage — Landing focalizzata sul prodotto PVC.
 * URL: /infissi-pvc
 * Intento: "infissi PVC", "finestre PVC prezzi", "serramenti PVC VEKA"
 */
import Quiz from '../components/Quiz'
import ProfileQuality from '../components/ProfileQuality'
import WindowMaintenance from '../components/WindowMaintenance'
import TrustBanner from '../components/TrustBanner'
import QualityVideoBanner from '../components/QualityVideoBanner'
import azienda from '../datiAziendali'
import { Phone, CheckCircle, Thermometer, Volume2, Shield } from 'lucide-react'
import pvcImg from '../assets/images/profili/pvc.jpg'

const VANTAGGI_PVC = [
  { icon: <Thermometer className="w-5 h-5 text-blue-500" />, titolo: 'Isolamento termico', desc: 'Trasmittanza Uw fino a 0.8 W/m²K — classe A+' },
  { icon: <Volume2 className="w-5 h-5 text-purple-500" />, titolo: 'Isolamento acustico', desc: 'Fino a 42 dB di abbattimento del rumore esterno' },
  { icon: <Shield className="w-5 h-5 text-emerald-500" />, titolo: 'Sicurezza', desc: 'Cerniere antieffrazione, serrature europee di serie' },
  { icon: <CheckCircle className="w-5 h-5 text-orange-500" />, titolo: 'Zero manutenzione', desc: 'Non si vernica, non si gonfia — dura oltre 30 anni' },
]

export default function PvcPage() {
  return (
    <>
      {/* ── HERO PVC ── */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-5">
            <span className="text-xs font-semibold text-sky-700">🏆 Profilati VEKA — Qualità Tedesca Certificata</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.06em] text-gray-900 leading-[1.3] mb-4">
            Infissi in PVC su Misura
            <br />
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              da €260/mq — Direttamente dalla Fabbrica
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Utilizziamo profilati <strong>VEKA</strong> — il brand tedesco più venduto in Europa.
            Produciamo ogni finestra su misura nel nostro stabilimento in Brianza.
            Senza rivenditori, con risparmio reale.
          </p>

          {/* Prezzo in evidenza */}
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-blue-200 rounded-2xl px-8 py-5 mb-8">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Prezzo di fabbrica</span>
            <span className="text-4xl font-bold text-gray-900">da €260<span className="text-lg font-medium text-gray-500">/mq</span></span>
            <span className="text-xs text-gray-500 mt-1">IVA inclusa · posa esclusa (richiedibile a parte)</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href={azienda.telefonoLink}
              onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.telefonoLink)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              Chiama — {azienda.telefono}
            </a>
            <a
              href="#preventivo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-500 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all"
            >
              Preventivo PVC gratuito →
            </a>
          </div>

          {/* 4 vantaggi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {VANTAGGI_PVC.map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="mb-2">{v.icon}</div>
                <p className="text-sm font-bold text-gray-900 mb-1">{v.titolo}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMMAGINE PROFILO ── */}
      <div className="bg-white px-6 pb-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '240px' }}>
            <img
              src={pvcImg}
              alt="Profilo PVC VEKA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-bold text-sm">Profilati VEKA Series 70 & 76 — prodotti su misura nel nostro stabilimento</p>
            </div>
          </div>
        </div>
      </div>

      <QualityVideoBanner />
      <ProfileQuality />
      <div id="preventivo"><Quiz /></div>
      <TrustBanner />
      <WindowMaintenance />
    </>
  )
}
