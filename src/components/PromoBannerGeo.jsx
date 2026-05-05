/**
 * PromoBannerGeo — Striscia promo con scarsità territoriale.
 * Appare dall'alto dopo 5 secondi, può essere chiusa dall'utente.
 * Props: citta {string}
 */
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const POSTI_RIMASTI = 7

export default function PromoBannerGeo({ citta = 'Milano' }) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Controlla se già chiuso in questa sessione
    const key = `promo_dismissed_${citta}`
    if (sessionStorage.getItem(key)) return

    const t = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(t)
  }, [citta])

  const handleDismiss = () => {
    setDismissed(true)
    sessionStorage.setItem(`promo_dismissed_${citta}`, '1')
    // Aspetta fine animazione uscita
    setTimeout(() => setVisible(false), 400)
  }

  if (!visible) return null

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-[9999]
        transition-transform duration-500 ease-out
        ${dismissed ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="bg-amber-400">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">

          {/* Testo con gerarchia */}
          <div className="flex-1 min-w-0 flex flex-col gap-1">

            {/* Riga 1 — titolo */}
            <span className="text-[14px] sm:text-[15px] font-extrabold text-amber-950 tracking-tight leading-tight">
              🎁 Promo {citta} — incluso nel preventivo:
            </span>

            {/* Riga 2 — chips */}
            <div className="flex flex-wrap gap-1.5">
              {/* Chip rilievo misure */}
              <span className="inline-flex items-center gap-1 bg-white/70 border border-amber-300 text-amber-950 text-[12px] font-semibold px-2.5 py-0.5 rounded-md">
                📐 Rilievo misure
                <span className="text-emerald-700 font-bold ml-0.5">GRATIS</span>
              </span>
              {/* Chip trasporto con prezzo sbarrato */}
              <span className="inline-flex items-center gap-1.5 bg-white/70 border border-amber-300 text-amber-950 text-[12px] font-semibold px-2.5 py-0.5 rounded-md">
                🚚 Trasporto
                <span className="text-red-600 line-through text-[11px] font-medium">€300</span>
                <span className="text-emerald-700 font-bold">GRATIS</span>
              </span>
            </div>

            {/* Riga 3 — scarsità */}
            <p className="text-[12px] text-amber-900 leading-tight font-medium">
              Solo per le prime 10 richieste da <span className="font-bold">{citta}</span> di questo mese
              {' · '}
              <span className="font-bold text-red-700">{POSTI_RIMASTI} posti rimasti</span>
            </p>

          </div>

          {/* Bottone X grande e facile da toccare */}
          <button
            onClick={handleDismiss}
            aria-label="Chiudi"
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 active:scale-95 text-amber-950 transition-all"
          >
            <X className="w-5 h-5" strokeWidth={2.5} />
          </button>

        </div>
      </div>
    </div>
  )
}
