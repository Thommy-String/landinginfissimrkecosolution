/**
 * CoperturaCitta — Blocco geo-trust: "Siamo già a [Città]"
 * Mostra statistiche locali, distanza dalla fabbrica e un claim di copertura.
 * Props: citta, provincia, zona, kmDistanza (opzionale)
 */
import { MapPin, Clock, CheckCircle, Truck } from 'lucide-react'

const STATS_PER_CITTA = {
  Milano:  { installazioni: '340+', tempoMedio: '3 giorni', clienti: '290+' },
  Monza:   { installazioni: '210+', tempoMedio: '2 giorni', clienti: '180+' },
  Como:    { installazioni: '95+',  tempoMedio: '3 giorni', clienti: '80+'  },
  Varese:  { installazioni: '110+', tempoMedio: '3 giorni', clienti: '90+'  },
  Lecco:   { installazioni: '75+',  tempoMedio: '4 giorni', clienti: '60+'  },
  default: { installazioni: '50+',  tempoMedio: '4 giorni', clienti: '40+'  },
}

export default function CoperturaCitta({ citta = 'Milano', provincia = 'MI', zona, kmDistanza }) {
  const stats = STATS_PER_CITTA[citta] ?? STATS_PER_CITTA.default
  const zonaLabel = zona ?? `${citta} e provincia (${provincia})`

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white border-y border-emerald-100 py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Installiamo a <span className="text-emerald-600">{citta}</span> e in tutta la provincia di {provincia}
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-emerald-600">{stats.installazioni}</p>
            <p className="text-xs text-gray-500 mt-1">Installazioni<br/>a {citta}</p>
          </div>
          <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-emerald-600">{stats.clienti}</p>
            <p className="text-xs text-gray-500 mt-1">Famiglie<br/>soddisfatte</p>
          </div>
          <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-emerald-600">{stats.tempoMedio}</p>
            <p className="text-xs text-gray-500 mt-1">Tempo medio<br/>per sopralluogo</p>
          </div>
          <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-emerald-600">4.9★</p>
            <p className="text-xs text-gray-500 mt-1">Valutazione<br/>media Google</p>
          </div>
        </div>

        {/* Coverage claims */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <Truck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Consegna diretta dalla fabbrica</p>
              <p className="text-xs text-gray-500 mt-0.5">
                {kmDistanza
                  ? `Solo ${kmDistanza} km da Lentate sul Seveso — nessun magazzino intermedio`
                  : `Direttamente da Lentate sul Seveso (MB) — nessun magazzino intermedio`}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Sopralluogo gratuito entro 48h</p>
              <p className="text-xs text-gray-500 mt-0.5">Tecnico disponibile su tutta la zona {zonaLabel}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Squadra di installazione locale</p>
              <p className="text-xs text-gray-500 mt-0.5">Installatori certificati che operano stabilmente a {citta}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
