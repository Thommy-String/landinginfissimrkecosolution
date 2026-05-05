/**
 * GeoLanding — Landing geo-localizzata, struttura basata su PreventiviPage.
 *
 * Props:
 *   citta        {string}  Nome città (es. "Milano")
 *   provincia    {string}  Sigla provincia (es. "MI")
 *   zona         {string}  Descrizione zona copertura (es. "centro e hinterland")
 *   kmDistanza   {number?} Km dalla fabbrica (opzionale, usato da CoperturaCitta)
 */
import { useState, useEffect } from 'react'
import Quiz from '../../components/Quiz'
import TrustBanner from '../../components/TrustBanner'
import ValueProposition from '../../components/ValueProposition'
import FiscalBonusBanner from '../../components/FiscalBonusBanner'
import FabbricaBanner from '../../components/FabbricaBanner'
import QualityVideoBanner from '../../components/QualityVideoBanner'
import InstallationTrustBanner from '../../components/InstallationTrustBanner'
import ProductionVideo from '../../components/ProductionVideo'
import ProfileQuality from '../../components/ProfileQuality'
import WindowMaintenance from '../../components/WindowMaintenance'
import LocationShowcase from '../../components/LocationShowcase'
import SocialProof from '../../components/SocialProof'
import TabellaComparativa from '../../components/TabellaComparativa'
import ConfrontoFabbricaVsShowroom from '../../components/ConfrontoFabbricaVsShowroom'
import TreStepFacili from '../../components/TreStepFacili'
import ClientiScorrevoli from '../../components/ClientiScorrevoli'
import CoperturaCitta from '../../components/CoperturaCitta'
import { CheckCircle, MapPin } from 'lucide-react'

import screenshotPreventivo from '../../assets/images/screenshot preventivo mrk-eco.png'
import screenshotTabella from '../../assets/images/Screenshot anteprima tabella preventivo.png'
import screenshotPvc from '../../assets/images/screenshot preventivo pvc bianco.png'
import screenshotPortafinestra from '../../assets/images/Screenshot portafinestra pvc bianco.png'

const INCLUSO = [
  'Prezzi di Fabbrica senza intermediari',
  'Sopralluogo gratuito entro 48h',
  'Garanzia 10 anni certificata',
]

export default function GeoLanding({
  citta = 'Milano',
  provincia = 'MI',
  zona,
  kmDistanza,
}) {
  const zonaLabel = zona ?? `${citta} e provincia (${provincia})`

  // Legge ?kw=... dall'URL (Google Ads ValueTrack)
  const [keywordTitle, setKeywordTitle] = useState(null)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const kw = params.get('kw') || params.get('keyword')
    if (kw) {
      const cleaned = kw.replace(/\+/g, ' ').replace(/%20/g, ' ').trim()
      setKeywordTitle(cleaned.charAt(0).toUpperCase() + cleaned.slice(1))
    }
  }, [])

  const DEFAULT_TITLE = `Infissi a ${citta}: Prezzi Diretti dalla Fabbrica, Installazione Inclusa.`

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white pt-2 pb-0 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* Galleria screenshot preventivi */}
          <div
            className="relative flex justify-center items-end mb-10 select-none"
            style={{ height: 'clamp(220px, 55vw, 380px)' }}
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Scheda dietro */}
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

            {/* Scheda centrale */}
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

          {/* Geo badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700 tracking-tight">
              Installiamo a {citta} ({provincia}) — Fabbrica a Lentate sul Seveso (MB)
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.065em] leading-[1.2] mb-6 text-gray-900">
            {keywordTitle ?? DEFAULT_TITLE}
          </h1>

          <section className="bg-white pb-2">
            <div className="max-w-5xl mx-auto px-6 text-center">

              {/* CTA principale */}
              <div className="flex flex-col items-center gap-2 mb-10">
                <a
                  href="#preventivo"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all"
                >
                  Ricevi un Preventivo Gratis per {citta}
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

      {/* ── RECENSIONI CLIENTI ── */}
      <ClientiScorrevoli />

      {/* ── COPERTURA LOCALE ── */}
      <CoperturaCitta citta={citta} provincia={provincia} zona={zonaLabel} kmDistanza={kmDistanza} />

      {/* ── QUIZ PREVENTIVO ── */}
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
