/**
 * PreventiviPage — Landing focalizzata su costi e richiesta preventivo.
 * URL: /preventivo-infissi
 * Intento: "preventivo infissi", "costo finestre PVC", "quanto costano gli infissi"
 */
import { useState, useEffect } from 'react'
import Quiz from '../components/Quiz'
import TrustBanner from '../components/TrustBanner'
import ValueProposition from '../components/ValueProposition'
import FiscalBonusBanner from '../components/FiscalBonusBanner'
import FabbricaBanner from '../components/FabbricaBanner'
import QualityVideoBanner from '../components/QualityVideoBanner'
import InstallationTrustBanner from '../components/InstallationTrustBanner'
import ProductionVideo from '../components/ProductionVideo'
import ProfileQuality from '../components/ProfileQuality'
import WindowMaintenance from '../components/WindowMaintenance'
import LocationShowcase from '../components/LocationShowcase'
import SocialProof from '../components/SocialProof'
import { CheckCircle, Factory } from 'lucide-react'
import SocialProofBadge from '../components/SocialProofBadge'
import TabellaComparativa from '../components/TabellaComparativa'
import ConfrontoFabbricaVsShowroom from '../components/ConfrontoFabbricaVsShowroom'
import TreStepFacili from '../components/TreStepFacili'
import ClientiScorrevoli from '../components/ClientiScorrevoli'
import screenshotPreventivo from '../assets/images/screenshot preventivo mrk-eco.png'
import screenshotTabella from '../assets/images/Screenshot anteprima tabella preventivo.png'
import screenshotPvc from '../assets/images/screenshot preventivo pvc bianco.png'
import screenshotPortafinestra from '../assets/images/Screenshot portafinestra pvc bianco.png'
import teamImg from '../assets/images/varie/MrkTeam.jpg'



const INCLUSO = [
  'Miglior Prezzo di Fabbrica',
  'Nessun obbligo di acquisto',
  'Qualità Tedesca 100% certificata',
]





export default function PreventiviPage() {
  // Legge ?kw=... dall'URL (passato da Google Ads via {keyword} o ValueTrack)
  const [keywordTitle, setKeywordTitle] = useState(null)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const kw = params.get('kw') || params.get('keyword')
    if (kw) {
      // Capitalizza prima lettera
      const cleaned = kw.replace(/\+/g, ' ').replace(/%20/g, ' ').trim()
      setKeywordTitle(cleaned.charAt(0).toUpperCase() + cleaned.slice(1))
    }
  }, [])

  const DEFAULT_TITLE = 'Preventivo Infissi: Ricevi il miglior prezzo diretto dalla nostra Fabbrica.'
  return (
    <>


    
      {/* ── HERO ── */}
      <section className="bg-white pt-2 pb-0 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          

          {/* ── Galleria screenshot preventivi ── */}
          {/* onContextMenu blocca il tasto destro su tutto il blocco */}
          <div
            className="relative flex justify-center items-end mb-10 select-none"
            style={{ height: 'clamp(220px, 55vw, 380px)' }}
            onContextMenu={(e) => e.preventDefault()}
          >

            {/* Scheda dietro — sbuca alta sopra le altre */}
            <div
              className="absolute z-0 rounded-xl overflow-hidden shadow-md border border-gray-200 origin-bottom opacity-90"
              style={{
                width: 'clamp(180px, 18vw, 150px)',
                bottom: 'clamp(40px, 12vw, 80px)',
                left: 'calc(30% + clamp(14px, 4vw, 28px))',
                transform: 'rotate(12deg)',
              }}
            >
              <img src={screenshotPortafinestra} alt="" draggable="false" className="w-full h-auto object-cover pointer-events-none" />
            </div>

            {/* Scheda sinistra */}
            <div
              className="absolute bottom-0 z-[1] rounded-xl overflow-hidden shadow-lg border border-gray-200 origin-bottom"
              style={{
                width: 'clamp(180px, 26vw, 200px)',
                left: 'clamp(0px, 2vw, 40px)',
                transform: 'rotate(-6deg)',
              }}
            >
              <img src={screenshotTabella} alt="" draggable="false" className="w-full h-auto object-cover pointer-events-none" />
            </div>

            {/* Scheda centrale — più grande, in primo piano */}
            <div className="relative z-10 flex flex-col items-center">
             
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-400"
                style={{ width: 'clamp(200px, 35vw, 240px)' }}
              >
                <img src={screenshotPreventivo} alt="" draggable="false" className="w-full h-auto object-cover pointer-events-none" />
              </div>
            </div>

            {/* Scheda destra */}
            <div
              className="absolute bottom-0 z-[1] rounded-xl overflow-hidden shadow-lg border border-gray-200 origin-bottom"
              style={{
                width: 'clamp(130px, 26vw, 200px)',
                right: 'clamp(0px, 2vw, 40px)',
                transform: 'rotate(8deg)',
              }}
            >
              <img src={screenshotPvc} alt="" draggable="false" className="w-full h-auto object-cover pointer-events-none" />
            </div>

          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-5">
            <Factory className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700 tracking-tight">Fabbrica di Serramenti - Lentate sul Seveso (MB)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.065em] leading-[1.2] mb-6 text-gray-900">
            {keywordTitle ?? DEFAULT_TITLE}
          </h1>

          <section className="bg-white pb-2">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* ── CTA principale ── */}
          <div className="flex flex-col items-center gap-2 mb-10">
            <a
              href="#preventivo"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all"
            >
              Ricevi un Preventivo Gratis
            </a>
            <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
              <span className="text-gray-300">·</span>
              <span>Scopri quanto risparmi comprando alla fonte</span>
            </div>
          </div>
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto mb-10">
            {INCLUSO.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

        </div>
      </section>


       <ClientiScorrevoli />

      <div id="preventivo"><Quiz /></div>

      <TreStepFacili />

      <ConfrontoFabbricaVsShowroom />

      <TabellaComparativa />

    

      <SocialProof />

      <FabbricaBanner />
      <QualityVideoBanner />
      <FiscalBonusBanner />
      <InstallationTrustBanner />
      <ProductionVideo />
      <ProfileQuality />
      <WindowMaintenance />
      <TrustBanner />
      <ValueProposition />
      <LocationShowcase />
    </>
  )
}
