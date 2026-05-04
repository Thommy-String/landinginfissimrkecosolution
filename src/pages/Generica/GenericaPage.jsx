/**
 * GenericaPage — La landing page principale generica.
 * Corrisponde alla home su /fabbricainfissi/
 * Contenuto identico all'App.jsx originale.
 */
import Hero from '../../components/Hero'
import SocialProof from '../../components/SocialProof'
import Quiz from '../../components/Quiz'
import TrustBanner from '../../components/TrustBanner'
import FabbricaBanner from '../../components/FabbricaBanner'
import QualityVideoBanner from '../../components/QualityVideoBanner'
import FiscalBonusBanner from '../../components/FiscalBonusBanner'
import InstallationTrustBanner from '../../components/InstallationTrustBanner'
import ProductionVideo from '../../components/ProductionVideo'
import ProfileQuality from '../../components/ProfileQuality'
import WindowMaintenance from '../../components/WindowMaintenance'
import ValueProposition from '../../components/ValueProposition'
import LocationShowcase from '../../components/LocationShowcase'
import teamImg from '../../assets/images/varie/MrkTeam.jpg'

const TRUST_ITEMS = [
  'Miglior prezzo di Fabbrica Garantito',
  '100% Qualità Tedesca Certificata',
  'Consegna rapida in 2–3 settimane',
]

export default function GenericaPage() {
  return (
    <>
      <Hero />

      {/* Team photo card */}
      <div className="bg-white px-6 pt-2 pb-2">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '320px' }}>
            <img
              src={teamImg}
              alt="Il team Ecosolution MRK"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
                {TRUST_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SocialProof />
      <Quiz />
      <TrustBanner />
      <FabbricaBanner />
      <QualityVideoBanner />
      <FiscalBonusBanner />
      <InstallationTrustBanner />
      <ProductionVideo />
      <ProfileQuality />
      <WindowMaintenance />
      <ValueProposition />
      <LocationShowcase />
    </>
  )
}
