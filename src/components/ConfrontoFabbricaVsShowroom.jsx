/**
 * ConfrontoFabbricaVsShowroom — "La prova del vantaggio"
 * Due schede affiancate: Negozio (rosso) vs Fabbrica (verde).
 * Mostra visivamente la catena dei costi vs il percorso diretto.
 */
import { Package, Store, UserCheck, Building2, Wrench, AlertCircle } from 'lucide-react'
import teamImg from '../assets/images/varie/MrkTeam.jpg'
const VOCI_NEGOZIO = [
  { label: 'Costo infisso',                  value: '€ 580',  note: 'prezzo base produttore',          Icon: Package },
  { label: 'Ricarico rivenditore',            value: '+ 30%',  note: 'margine del negozio',             Icon: Store },
  { label: 'Ricarico rappresentante',         value: '+ 5%',   note: 'agente di zona',                  Icon: UserCheck },
  { label: 'Affitto negozio',                 value: '+3%',    note: 'costo di gestione del negozio',   Icon: Building2 },
  { label: 'Posatori esterni (sub-appalto)',  value: '+ €250', note: 'squadra esterna',                 Icon: Wrench },
]

const VOCI_FABBRICA = [
  { label: 'Produzione interna',   value: '€ 580', note: 'noi produciamo direttamente' },
  { label: 'Posa diretta',         value: '+ €80',  note: 'nostri posatori dipendenti' },
]

function Voce({ label, value, note, rosso, Icon }) {
  return (
    <div className={`flex items-center justify-between gap-3 py-3 px-4 rounded-xl ${rosso ? 'bg-red-50/70' : 'bg-emerald-50/70'}`}>
      <div className="flex items-center gap-2.5">
        {Icon && (
          <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${rosso ? 'bg-red-100' : 'bg-emerald-100'}`}>
            <Icon className={`w-4 h-4 ${rosso ? 'text-red-500' : 'text-emerald-600'}`} />
          </span>
        )}
        <div>
          <p className={`text-sm font-semibold ${rosso ? 'text-gray-700' : 'text-gray-800'}`}>{label}</p>
          {note && <p className="text-xs text-gray-400 mt-0.5">{note}</p>}
        </div>
      </div>
      <span className={`text-sm font-bold shrink-0 ${rosso ? 'text-red-500' : 'text-emerald-600'}`}>{value}</span>
    </div>
  )
}

export default function ConfrontoFabbricaVsShowroom() {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">

        {/* Titolo */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3">
            La prova del vantaggio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Perché costiamo meno?<br />
            <span className="text-emerald-500">Meno passaggi.</span>
          </h2>
          {/* Avviso comparativo */}
                    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-6 max-w-2xl mx-auto text-left">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800">
                        <strong>In negozio paghi fino al 40% in più</strong> per lo stesso prodotto —
                        i rivenditori aggiungono il loro margine al prezzo di fabbrica.
                        <span className='underline'> Noi siamo la fabbrica.</span>
                      </p>
                    </div>
        </div>

        {/* Due schede */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* ── Scheda Negozio ── */}
          <div className="rounded-2xl border-2 border-red-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-red-500 px-5 py-4 flex items-center gap-3">
              <span className="text-2xl">🏪</span>
              <div>
                <p className="text-white font-bold text-base leading-tight">Il Negozio / Showroom</p>
                <p className="text-red-200 text-xs">Catena lunga = prezzo gonfiato</p>
              </div>
            </div>
            {/* Voci */}
            <div className="bg-white px-4 py-4 space-y-2">
              {VOCI_NEGOZIO.map((v, i) => (
                <Voce key={i} {...v} rosso />
              ))}
              {/* Separatore + totale */}
              <div className="border-t border-red-100 pt-3 mt-2 flex items-center justify-between px-4">
                <span className="text-sm font-bold text-gray-700">Prezzo finale</span>
                <span className="text-xl font-extrabold text-red-500">~ €1.056</span>
              </div>
              <p className="text-xs text-red-400 text-center pb-1">Stesso infisso. Più passaggi = più costi.</p>
            </div>
          </div>

          {/* ── Scheda Fabbrica ── */}
          <div className="rounded-2xl border-2 border-emerald-400 overflow-hidden shadow-sm flex flex-col">
            {/* Foto team — hero alta */}
            <div className="relative h-48 sm:h-56 shrink-0">
              <img
                src={teamImg}
                alt="Il team Ecosolution MRK"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 28%' }}
              />
              {/* Gradient dal basso per leggibilità testo */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-800/30 to-transparent" />
              {/* Badge in alto a sinistra */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                  MRK Ecosolution - Magazzino
                </span>
              </div>
              {/* Testo sovrapposto in basso */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <p className="text-white font-bold text-base leading-tight">La Nostra Fabbrica</p>
                <p className="text-emerald-200 text-xs mt-0.5">Filiera corta = risparmio reale</p>
              </div>
            </div>
            {/* Voci */}
            <div className="bg-white px-4 py-4 space-y-2 flex-1">
              {VOCI_FABBRICA.map((v, i) => (
                <Voce key={i} {...v} rosso={false} />
              ))}
              {/* Separatore + totale */}
              <div className="border-t border-emerald-100 pt-3 mt-2 flex items-center justify-between px-4">
                <span className="text-sm font-bold text-gray-700">Prezzo finale</span>
                <span className="text-xl font-extrabold text-emerald-500">~ €660</span>
              </div>
              <p className="text-xs text-emerald-500 text-center pb-1 font-semibold">✓ Risparmi ~€400 sullo stesso prodotto.</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
