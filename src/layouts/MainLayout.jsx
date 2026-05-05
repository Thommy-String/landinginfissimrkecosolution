import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import CookieConsent from '../components/CookieConsent'

// Mappa route → funzione di conversione specifica
const CONVERSION_MAP = {
  '/preventivi':   () => window.gtag_report_conversion_preventivo?.(),
  '/geo-monza':    () => window.gtag_report_conversion_preventivo?.(),
  '/geo-milano':   () => window.gtag_report_conversion_preventivo?.(),
  '/geo-como':     () => window.gtag_report_conversion_preventivo?.(),
  '/geo-varese':   () => window.gtag_report_conversion_preventivo?.(),
  // aggiungi qui altre landing: '/infissi-pvc': () => window.gtag_report_conversion_pvc?.(),
}

export default function MainLayout() {
  const { pathname } = useLocation()

  // Trova la conversione per la route corrente (default: generica)
  const onConversion = CONVERSION_MAP[pathname] ?? ((url) => window.gtag_report_conversion?.(url))

  return (
    <>
      <CookieConsent />
      <Navbar />
      <main className="antialiased">
        <Outlet />
      </main>
      <Footer onConversion={onConversion} />
      <FloatingCTA onConversion={onConversion} />
    </>
  )
}
