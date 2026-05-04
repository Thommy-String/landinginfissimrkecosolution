/**
 * TabellaComparativa — 3 colonne: Parametro | Negozio ❌ | Fabbrica ✅
 */
import { Tag, Factory, Truck, Palette, ShieldCheck, FileText } from 'lucide-react'

const RIGHE = [
  { parametro: 'Prezzo',       Icon: Tag,          negozio: 'Gonfiato +40%',                fabbrica: 'Prezzo di fabbrica' },
  { parametro: 'Produzione',   Icon: Factory,      negozio: 'Acquistano e rivendono', fabbrica: 'Produciamo noi stessi' },
  { parametro: 'Consegna',     Icon: Truck,        negozio: 'dai 3 mesi',                   fabbrica: '2–3 settimane' },
  { parametro: 'Colori',       Icon: Palette,      negozio: 'Scelta limitata',              fabbrica: 'Nessun limite' },
  { parametro: 'Garanzia',     Icon: ShieldCheck,  negozio: 'Limitata del rivenditore',     fabbrica: 'Diretta del produttore' },
]

export default function TabellaComparativa() {
    return (
        <section className="w-full bg-gray-50 py-12 px-0 sm:px-6">

            {/* Header */}
            <div className="text-center mb-8 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
                    Perché comprare <span className="text-emerald-500">dalla Fabbrica?</span>
                </h2>
            </div>

            {/* Tabella 3 colonne */}
            <div className="w-full max-w-4xl mx-auto overflow-hidden sm:rounded-2xl shadow-xl border border-gray-200">

                {/* Intestazioni */}
                <div className="grid grid-cols-3">
                    <div className="bg-gray-100 border-b border-gray-200 py-4 px-3 sm:px-6 text-center">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest"></span>
                    </div>
                    <div className="bg-red-50 border-b border-red-100 py-4 px-3 sm:px-6 text-center border-l border-gray-200">
                        <span className="inline-flex items-center gap-1.5 text-red-600 font-bold text-sm sm:text-base">
                            <span>🏪</span> Negozio
                        </span>
                    </div>
                    <div className="bg-emerald-500 border-b border-emerald-600 py-4 px-3 sm:px-6 text-center">
                        <span className="inline-flex items-center gap-1.5 text-white font-bold text-sm sm:text-base">
                            <span>🏭</span> Fabbrica
                        </span>
                    </div>
                </div>

                {/* Righe */}
                {RIGHE.map((riga, i) => (
                    <div
                        key={i}
                        className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}
                    >
                        {/* Parametro */}
                        <div className="flex items-center py-3.5 px-3 sm:px-6 border-r border-gray-100">
                            <span className="text-sm font-semibold text-gray-700 leading-snug">{riga.parametro}</span>
                        </div>

                        {/* Negozio */}
                        <div className="flex items-center gap-2 py-3.5 px-3 sm:px-6 border-r border-gray-100">
                            <span className="shrink-0 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 text-red-500" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span className="text-sm text-gray-500 leading-snug">{riga.negozio}</span>
                        </div>

                        {/* Fabbrica */}
                        <div className="flex items-center gap-2 py-3.5 px-3 sm:px-6">
                            <span className="shrink-0 w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 text-emerald-600" viewBox="0 0 12 12" fill="none">
                                    <path d="M1.5 6.5l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="text-sm text-emerald-800 font-semibold leading-snug">{riga.fabbrica}</span>
                        </div>
                    </div>
                ))}

               

            </div>
        </section>
    )
}
