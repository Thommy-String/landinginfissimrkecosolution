/**
 * GalleryGeoHero — solo foto furgone con overlay testo.
 */
import fallbackFurgone from '../assets/images/varie/MrkFurgone3.jpg'

export default function GalleryGeoHero({ citta = 'Milano', imgFurgone }) {
  const foto = imgFurgone ?? fallbackFurgone

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-xl mb-6 select-none"
      style={{ height: 'clamp(260px, 30vw, 260px)' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={foto}
        alt={`Furgone MRK-Ecosolution a ${citta}`}
        draggable="false"
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-transparent" />
      <div className="absolute top-0 left-0 right-0 z-20 px-5 pt-4 flex flex-col items-center text-center">
        <p className="text-white/70 text-[11px] font-medium uppercase tracking-tight mb-0.5">
          Infissi a <span className='text-emerald-400'>{citta} e provincia </span>  dalla fabbrica
        </p>
       
      </div>
    </div>
  )
}
