/**
 * TreStepFacili — 4 step con immagine protagonista
 */
import { MessageCircle, FileText, Ruler } from 'lucide-react'
import azienda from '../datiAziendali'
import imgStep1 from '../assets/images/stepProcess/screen richiesta preventivo whasapp step1.png'
import imgStep2 from '../assets/images/Screenshot portafinestra pvc bianco.png'
import imgStep3 from '../assets/images/stepProcess/step 3 sopralluogo.png'

const STEPS = [
  {
    Icon: MessageCircle,
    numero: '1',
    img: imgStep1,
    colore: 'bg-blue-500',
    textColore: 'text-blue-500',
    borderColore: 'border-blue-200',
    titolo: 'Inviaci le misure su WhatsApp',
    sottotitolo: 'Bastano 2 foto o le misure indicative',
    desc: 'Niente moduli complicati. Manda una foto o le misure a occhio — ti rispondiamo in pochi minuti.',
  },
  {
    Icon: FileText,
    numero: '2',
    img: imgStep2,
    colore: 'bg-amber-500',
    textColore: 'text-amber-500',
    borderColore: 'border-amber-200',
    titolo: 'Ricevi il Preventivo',
    sottotitolo: 'Prezzo di fabbrica garantito in 24 ore',
    desc: 'Ti inviamo un preventivo dettagliato e trasparente. Prezzo fisso, nessun ricarico nascosto, nessuna sorpresa.',
  },
]

export default function TreStepFacili() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-[-0.065em] mb-3">
            Ecco come ricevere un
            <span className="text-emerald-500"> preventivo completo</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Inviaci le misure, anche grossolane, e il numero di pezzi. Scegliamo insieme tipo di infisso e colore.          </p>
        </div>

        {/* Steps verticali */}
        <div className="flex flex-col gap-0">
          {STEPS.map(({ Icon, numero, img, colore, textColore, borderColore, titolo, sottotitolo, desc }, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={i} className="relative">
                {/* Card */}
                <div className={`flex flex-col ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-stretch gap-0 bg-white rounded-3xl border ${borderColore} shadow-sm overflow-hidden`}>

                  {/* Immagine */}
                  <div className="sm:w-[40%] w-full relative" style={{ minHeight: '300px', maxHeight: '300px' }}>
                    {img ? (
                      <img
                        src={img}
                        alt={titolo}
                        className="w-full h-full object-cover"
                        style={{ minHeight: '300px', maxHeight: '300px' }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center" style={{ minHeight: '300px', maxHeight: '300px' }}>
                        <div className="text-center text-gray-300">
                          <Icon className="w-16 h-16 mx-auto mb-2 opacity-30" />
                          <p className="text-xs">Foto in arrivo</p>
                        </div>
                      </div>
                    )}
                    {/* Numero in overlay sull'immagine */}
                    <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} w-12 h-12 rounded-2xl ${colore} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-black text-xl leading-none">{numero}</span>
                    </div>
                  </div>

                  {/* Testo */}
                  <div className="sm:w-[60%] w-full flex flex-col justify-center p-6 sm:p-8">
                    <div className={`inline-flex items-center gap-2 mb-4 w-fit px-3 py-1.5 rounded-xl ${colore.replace('bg-', 'bg-').replace('500', '50')} border ${borderColore}`}>
                      <Icon className={`w-4 h-4 ${textColore}`} strokeWidth={2} />
                      <span className={`text-xs font-bold uppercase tracking-wide ${textColore}`}>Passo {numero}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-1">{titolo}</h3>
                    <p className={`text-sm font-semibold mb-3 ${textColore}`}>{sottotitolo}</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
                    {numero === '1' && (
                      <a
                        href="https://wa.me/393342221212?text=Ciao%2C+vorrei+un+preventivo+per+dei+nuovi+infissi..."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => window.gtag_report_conversion_preventivo && window.gtag_report_conversion_preventivo()}
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-5 py-3 rounded-xl shadow transition-all w-fit"
                      >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Scrivici le misure su WhatsApp
                      </a>
                    )}
                  </div>
                </div>

                {/* Freccia di collegamento tra step */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center py-3 z-10 relative">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4 bg-gray-200" />
                      <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24">
                        <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Blocco conclusivo — misure */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
            <Ruler className="w-6 h-6 text-emerald-500" strokeWidth={2} />
          </div>
          <div>
            <p className="text-base font-bold text-gray-900 mb-1">E poi? Ci occupiamo noi delle misure.</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Se il preventivo ti piace, ci organizziamo per passare a prendere le misure esatte prima dell'ordine.{' '}
              <span className="font-semibold text-gray-700">Non hai le misure? Nessun problema — veniamo noi da te, gratis e senza impegno.</span>
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}


