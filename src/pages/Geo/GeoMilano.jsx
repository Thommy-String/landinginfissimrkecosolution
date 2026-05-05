import { useEffect } from 'react'
import GeoLanding from './GeoLanding'
import furgoneMilano from '../../assets/images/geo-furgoni-img/furgone mrk ecosolution milano.png'

/**
 * Funzione di conversione Google Ads — ID univoco per campagna Milano Infissi.
 * Viene registrata su window solo quando questa pagina è montata.
 * send_to: AW-17830431434/BIeECL_d7KccEMqVm7ZC
 */
function gtagReportConversionMilano(url) {
  const callback = () => {
    if (typeof url !== 'undefined') window.location = url
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17830431434/BIeECL_d7KccEMqVm7ZC',
      value: 1.0,
      currency: 'EUR',
      event_callback: callback,
    })
  } else {
    callback()
  }
  return false
}

export default function GeoMilano() {
  // Registra/rimuove la funzione su window solo quando questa pagina è visibile
  useEffect(() => {
    window.gtag_report_conversion_milano = gtagReportConversionMilano
    return () => {
      delete window.gtag_report_conversion_milano
    }
  }, [])

  return (
    <GeoLanding
      citta="Milano"
      provincia="MI"
      zona="Milano città, hinterland nord e sud"
      kmDistanza={22}
      imgFurgone={furgoneMilano}
      conversionFn={gtagReportConversionMilano}
    />
  )
}
