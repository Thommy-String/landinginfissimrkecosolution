/**
 * ScreenshotPreventivi — Griglia 2×2 di screenshot preventivi reali.
 * Usato nelle geo-landing tra H1 e CTA.
 */
import screenshotTabella       from '../assets/images/Screenshot anteprima tabella preventivo.png'
import screenshotPortafinestra from '../assets/images/Screenshot portafinestra pvc bianco.png'
import screenshotPreventivoMrk from '../assets/images/screenshot preventivo mrk-eco.png'
import screenshotPvcBianco     from '../assets/images/screenshot preventivo pvc bianco.png'

export default function ScreenshotPreventivi() {
  return (
    <div className="overflow-x-hidden w-full">
    <div
      className="relative flex justify-center items-end mb-10 select-none max-w-5xl mx-auto px-6"
      style={{ height: 'clamp(220px, 55vw, 380px)' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Scheda dietro */}
      <div
        className="absolute z-0 rounded-xl overflow-hidden shadow-md border border-gray-200 origin-bottom opacity-90"
        style={{ width: 'clamp(180px, 18vw, 150px)', bottom: 'clamp(40px, 12vw, 80px)', left: 'calc(30% + clamp(14px, 4vw, 28px))', transform: 'rotate(12deg)' }}
      >
        <img src={screenshotPortafinestra} alt="" draggable="false" className="w-full h-auto object-cover pointer-events-none" />
      </div>
      {/* Scheda sinistra */}
      <div
        className="absolute bottom-0 z-[1] rounded-xl overflow-hidden shadow-lg border border-gray-200 origin-bottom"
        style={{ width: 'clamp(180px, 26vw, 200px)', left: 'clamp(0px, 2vw, 40px)', transform: 'rotate(-6deg)' }}
      >
        <img src={screenshotTabella} alt="" draggable="false" className="w-full h-auto object-cover pointer-events-none" />
      </div>
      {/* Scheda centrale */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-400" style={{ width: 'clamp(200px, 35vw, 240px)' }}>
          <img src={screenshotPreventivoMrk} alt="" draggable="false" className="w-full h-auto object-cover pointer-events-none" />
        </div>
      </div>
      {/* Scheda destra */}
      <div
        className="absolute bottom-0 z-[1] rounded-xl overflow-hidden shadow-lg border border-gray-200 origin-bottom"
        style={{ width: 'clamp(130px, 26vw, 200px)', right: 'clamp(0px, 2vw, 40px)', transform: 'rotate(8deg)' }}
      >
        <img src={screenshotPvcBianco} alt="" draggable="false" className="w-full h-auto object-cover pointer-events-none" />
      </div>
    </div>
    </div>
  )
}
