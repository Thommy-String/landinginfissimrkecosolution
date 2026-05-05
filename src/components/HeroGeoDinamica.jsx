/**
 * HeroGeoDinamica — Blocco hero geo-localizzato per le landing Geo.
 * Mostra foto locale (furgone/squadra), H1 dinamico con città, badge
 * lampeggiante di operatività e CTA "Sopralluogo Gratuito".
 *
 * Props:
 *   citta      {string}  Nome città (es. "Milano")
 *   provincia  {string}  Sigla provincia (es. "MI")
 *   imgSrc     {string?} Foto locale (furgone/squadra). Se omessa → placeholder.
 */
import furgoneImg from '../assets/images/varie/MrkFurgone3.jpg'

export default function HeroGeoDinamica({ citta = 'Milano', provincia = 'MI', imgSrc }) {
  const foto = imgSrc ?? furgoneImg   // ← sostituisci con foto locale quando disponibile

  return (
    <section className="bg-white pt-6 pb-0">
      <div className="max-w-5xl mx-auto px-6">

      

      </div>
    </section>
  )
}
