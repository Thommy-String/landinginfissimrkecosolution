import { useState, useRef } from 'react'
import { ChevronLeft, Check, ArrowRight, Phone, TrendingDown, ShieldCheck, Truck, Clock, Calculator, Plus, Trash2, Ruler, Package, Wrench, Zap, CalendarClock, HelpCircle, Star, Crown, Coins, Home, Lightbulb, Leaf, Thermometer, Shield, Wind } from 'lucide-react'

import imgPvc from '../assets/images/profili/pvc.jpg'
import imgAlluminio from '../assets/images/profili/alluminio.jpg.avif'
import imgLegno from '../assets/images/profili/legno.jpg'

const STEPS = [
  'materiale',
  'fascia',
  'misure',
  'installazione',
  'tempistiche',
  'risultato',
]

const FASCE = [
  {
    id: 'economy',
    nome: 'Il Prezzo Più Basso',
    headline: 'Voglio spendere il meno possibile',
    sottotitolo: 'Doppio vetro standard con camera d\'aria da 16mm. Già un enorme miglioramento rispetto ai vecchi infissi — conforme a tutte le normative, a un prezzo imbattibile.',
    perChi: 'Perfetto se hai un budget limitato, stai ristrutturando un appartamento in affitto, o vuoi semplicemente sostituire vecchi infissi con qualcosa di moderno e funzionale senza spendere troppo.',
    vetri: 'Doppio vetro 4/16/4',
    lowE: false,
    antisfondamento: false,
    gasArgon: false,
    uw: '≈ 1.4 W/m²K',
    specs: [
      { label: 'Vetrocamera', value: 'Doppio vetro 4/16/4 mm', desc: 'Due lastre di vetro con camera d\'aria da 16mm. Isolamento base ma già molto meglio di un vecchio infisso singolo vetro.', included: true },
      { label: 'Vetro basso-emissivo (Low-E)', value: 'Non incluso', desc: 'Il coating Low-E riflette il calore verso l\'interno. In questa fascia non è presente, ma l\'infisso è comunque a norma.', included: false },
      { label: 'Antisfondamento', value: 'Non incluso', desc: 'Il vetro stratificato di sicurezza non è incluso. Sufficiente per la maggior parte delle abitazioni standard.', included: false },
      { label: 'Gas Argon', value: 'Aria standard', desc: 'La camera è riempita con aria normale. L\'argon migliorerebbe l\'isolamento del 15%, ma non è necessario per un buon risultato.', included: false },
      { label: 'Isolamento termico (Uw)', value: '≈ 1.4 W/m²K', desc: 'Valore di trasmittanza termica. Più è basso, meno calore disperdi. 1.4 è buono — già conforme alle normative vigenti.', included: true },
    ],
    moltiplicatore: 1.0,
    color: {
      border: 'border-sky-200',
      bg: 'bg-sky-50/60',
      shadow: 'shadow-sky-200/5',
      check: 'bg-sky-500',
      icon: 'text-sky-500',
      iconBg: 'bg-sky-50',
      text: 'text-sky-700',
      badge: 'bg-sky-100/70 text-sky-700',
      gradient: 'from-sky-500 to-sky-600',
      light: 'text-sky-500',
      ring: 'ring-sky-200/20',
      borderLight: 'border-sky-150',
      hoverBorder: 'hover:border-sky-300',
    },
  },
  {
    id: 'qualita-prezzo',
    nome: 'Qualità / Prezzo',
    headline: 'Voglio il miglior rapporto qualità-prezzo',
    sottotitolo: 'Vetro basso-emissivo (Low-E) che riflette il calore + gas Argon per isolare il 30% in più. La scelta più intelligente: risparmi in bolletta fin da subito.',
    perChi: 'La scelta ideale per la tua casa principale. Ottieni isolamento superiore, risparmio in bolletta e un comfort abitativo che senti subito. È la fascia che consigliamo al 70% dei clienti.',
    vetri: 'Doppio vetro 4/16/4 basso-emissivo',
    lowE: true,
    antisfondamento: false,
    gasArgon: true,
    uw: '≈ 1.1 W/m²K',
    specs: [
      { label: 'Vetrocamera', value: 'Doppio vetro 4/16/4 mm', desc: 'Due lastre di vetro con camera d\'aria da 16mm — stessa struttura base ma con trattamenti superiori.', included: true },
      { label: 'Vetro basso-emissivo (Low-E)', value: 'Incluso', desc: 'Coating invisibile che riflette il calore verso l\'interno d\'inverno e lo respinge d\'estate. Riduce la dispersione fino al 30%.', included: true },
      { label: 'Antisfondamento', value: 'Non incluso', desc: 'Non presente in questa fascia. Aggiungibile su richiesta per esigenze di sicurezza specifiche.', included: false },
      { label: 'Gas Argon', value: 'Incluso', desc: 'Gas inerte iniettato nella camera tra i vetri. Isola il 15% in più dell\'aria e non si disperde nel tempo.', included: true },
      { label: 'Isolamento termico (Uw)', value: '≈ 1.1 W/m²K', desc: 'Eccellente isolamento. Significa bollette più basse e una casa che mantiene la temperatura senza sforzo.', included: true },
    ],
    moltiplicatore: 1.2,
    popolare: true,
    color: {
      border: 'border-emerald-200',
      bg: 'bg-emerald-50/60',
      shadow: 'shadow-emerald-200/5',
      check: 'bg-emerald-500',
      icon: 'text-emerald-500',
      iconBg: 'bg-emerald-50',
      text: 'text-emerald-700',
      badge: 'bg-emerald-100/70 text-emerald-700',
      gradient: 'from-emerald-500 to-emerald-600',
      light: 'text-emerald-500',
      ring: 'ring-emerald-200/20',
      borderLight: 'border-emerald-150',
      hoverBorder: 'hover:border-emerald-300',
    },
  },
  {
    id: 'premium',
    nome: 'Fascia Alta',
    headline: 'Voglio il massimo delle prestazioni',
    sottotitolo: 'Triplo vetro con doppio Low-E, gas Argon in entrambe le camere e vetro antieffrazione P2A.',
    perChi: 'Per chi non vuole compromessi. Ideale per villette, zone fredde o rumorose, e per chi vuole il massimo comfort, sicurezza antieffrazione e il miglior isolamento possibile. Investimento che si ripaga in bolletta.',
    vetri: 'Triplo vetro 4/12/4/12/4 basso-emissivo',
    lowE: true,
    antisfondamento: true,
    gasArgon: true,
    uw: '≈ 0.8 W/m²K',
    specs: [
      { label: 'Vetrocamera', value: 'Triplo vetro 4/12/4/12/4 mm', desc: 'Tre lastre di vetro con doppia camera. Isolamento termico e acustico ai massimi livelli — senti subito la differenza.', included: true },
      { label: 'Vetro basso-emissivo (Low-E)', value: 'Doppio coating', desc: 'Due strati di coating Low-E su lastre diverse. Massima riflessione del calore, efficienza quasi da "casa passiva".', included: true },
      { label: 'Antisfondamento', value: 'Vetro stratificato P2A', desc: 'Vetro di sicurezza certificato P2A: resiste a tentativi di effrazione e protegge dai vetri rotti. Sicurezza reale per la tua famiglia.', included: true },
      { label: 'Gas Argon', value: 'Doppia camera', desc: 'Gas argon in entrambe le camere per un isolamento termico imbattibile. Nessuna dispersione, massimo comfort.', included: true },
      { label: 'Isolamento termico (Uw)', value: '≈ 0.8 W/m²K — top', desc: 'Il valore più basso = il miglior isolamento. 0.8 è da casa quasi passiva. Risparmi concreti in bolletta, anno dopo anno.', included: true },
    ],
    moltiplicatore: 1.55,
    color: {
      border: 'border-amber-200',
      bg: 'bg-amber-50/60',
      shadow: 'shadow-amber-200/5',
      check: 'bg-amber-500',
      icon: 'text-amber-500',
      iconBg: 'bg-amber-50',
      text: 'text-amber-700',
      badge: 'bg-amber-100/70 text-amber-700',
      gradient: 'from-amber-500 to-amber-600',
      light: 'text-amber-500',
      ring: 'ring-amber-200/20',
      borderLight: 'border-amber-150',
      hoverBorder: 'hover:border-amber-300',
    },
  },
]

const MATERIALI = [
  {
    id: 'pvc',
    nome: 'PVC',
    image: imgPvc,
    pro: ['Massimo Isolamento termico', 'Zero manutenzione', 'Miglior rapporto qualità/prezzo'],
    contro: [],
    prezzoNegozioMq: 450,
    prezzoFabbricaMq: 190,
    posaMq: 45,
    posaNegozioMq: 85,
    popolare: true,
    nota: 'La scelta più diffusa in Italia. Perfetto per chi vuole il miglior rapporto qualità/prezzo senza rinunce: isolamento termico eccellente, zero manutenzione e costi ridotti. Ideale per case in zona fredda e chi vuole subito una spesa contenuta.',
    iconNota: Home,
    colorNota: 'text-sky-600',
    bgNota: 'bg-sky-50',
    accent: { border: 'border-sky-500', bg: 'bg-sky-50', shadow: 'shadow-sky-500/10', check: 'bg-sky-500', text: 'text-sky-700' },
  },
  {
    id: 'alluminio',
    nome: 'Alluminio',
    image: imgAlluminio,
    pro: ['Ultra resistente', 'Design minimal e moderno', 'Ideale per grandi vetrate'],
    contro: ['Meno isolante del PVC', 'Prezzo più alto'],
    prezzoNegozioMq: 620,
    prezzoFabbricaMq: 310,
    posaMq: 55,
    posaNegozioMq: 95,
    nota: "Per chi ama il design minimalista e le linee pulite. L'alluminio è perfetto per case moderne con grandi vetrate, uffici, e spazi aperti. Scegli questa soluzione se vuoi un'estetica contemporanea e prestazioni elevate.",
    iconNota: Lightbulb,
    colorNota: 'text-slate-600',
    bgNota: 'bg-slate-50',
    accent: { border: 'border-slate-500', bg: 'bg-slate-50', shadow: 'shadow-slate-500/10', check: 'bg-slate-500', text: 'text-slate-700' },
  },
  {
    id: 'legno',
    nome: 'Legno',
    image: imgLegno,
    pro: ['Caldo ed elegante', 'Ottimo isolamento naturale', 'Perfetto per case classiche'],
    contro: ['Richiede manutenzione periodica', 'Prezzo più elevato'],
    prezzoNegozioMq: 700,
    prezzoFabbricaMq: 380,
    posaMq: 55,
    posaNegozioMq: 95,
    nota: 'La scelta di chi vuole eleganza senza compromessi. Il legno è perfetto per case rustiche, dimore storiche e chi apprezza il calore naturale. Richiede manutenzione periodica (trattamenti ogni 3-5 anni), ma dona personalità unica agli spazi.',
    iconNota: Leaf,
    colorNota: 'text-amber-600',
    bgNota: 'bg-amber-50',
    accent: { border: 'border-amber-500', bg: 'bg-amber-50', shadow: 'shadow-amber-500/10', check: 'bg-amber-500', text: 'text-amber-700' },
  },
]

const TEMPISTICHE_OPTIONS = [
  { id: 'urgente', label: 'Il prima possibile', sub: 'Entro 2-3 settimane', Icon: Zap, color: { border: 'border-orange-200', borderLight: 'border-orange-150', bg: 'bg-orange-50/60', icon: 'text-orange-500', text: 'text-orange-700', shadow: 'shadow-orange-200/5', hoverBorder: 'hover:border-orange-300' } },
  { id: '1-3mesi', label: 'Entro 1-3 mesi', sub: 'Tempistica standard', Icon: CalendarClock, color: { border: 'border-sky-200', borderLight: 'border-sky-150', bg: 'bg-sky-50/60', icon: 'text-sky-500', text: 'text-sky-700', shadow: 'shadow-sky-200/5', hoverBorder: 'hover:border-sky-300' } },
  { id: 'nessuna-fretta', label: 'Nessuna fretta', sub: 'Sto solo valutando', Icon: HelpCircle, color: { border: 'border-violet-200', borderLight: 'border-violet-150', bg: 'bg-violet-50/60', icon: 'text-violet-500', text: 'text-violet-700', shadow: 'shadow-violet-200/5', hoverBorder: 'hover:border-violet-300' } },
]

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const quizRef = useRef(null)
  const [answers, setAnswers] = useState({
    materiale: null,
    fascia: null,
    hasMisure: null, // 'si' | 'no'
    serramenti: [{ tipo: 'finestra', larghezza: '', altezza: '' }],
    quantitaGenerica: null, // usata se non ha misure
    installazione: null,
    tempistiche: null,
  })

  const stepName = STEPS[currentStep]
  const progress = ((currentStep + 1) / STEPS.length) * 100

  const canProceed = () => {
    switch (stepName) {
      case 'materiale': return answers.materiale !== null
      case 'fascia': return answers.fascia !== null
      case 'misure': {
        if (answers.hasMisure === null) return false
        if (answers.hasMisure === 'no') return answers.quantitaGenerica !== null
        return answers.serramenti.some(s => s.larghezza && s.altezza)
      }
      case 'installazione': return answers.installazione !== null
      case 'tempistiche': return answers.tempistiche !== null
      case 'risultato': return true
      default: return false
    }
  }

  const scrollToQuiz = () => {
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const next = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
      scrollToQuiz()
    }
  }
  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      scrollToQuiz()
    }
  }

  // --- Gestione serramenti ---
  const addSerramento = () => {
    setAnswers({
      ...answers,
      serramenti: [...answers.serramenti, { tipo: 'finestra', larghezza: '', altezza: '' }],
    })
  }
  const removeSerramento = (idx) => {
    if (answers.serramenti.length <= 1) return
    setAnswers({
      ...answers,
      serramenti: answers.serramenti.filter((_, i) => i !== idx),
    })
  }
  const updateSerramento = (idx, field, value) => {
    const updated = [...answers.serramenti]
    updated[idx] = { ...updated[idx], [field]: value }
    setAnswers({ ...answers, serramenti: updated })
  }

  // --- Calcolo stima ---
  const getEstimate = () => {
    const mat = MATERIALI.find(m => m.id === answers.materiale) || MATERIALI[0]
    const fascia = FASCE.find(f => f.id === answers.fascia) || FASCE[0]
    const molt = fascia.moltiplicatore
    const conPosa = answers.installazione === 'fornitura-posa'

    let voci = []
    let totaleMqFabbrica = 0
    let totaleMqNegozio = 0
    let totalePosaFabbrica = 0
    let totalePosaNegozio = 0

    if (answers.hasMisure === 'si') {
      answers.serramenti.forEach((s, i) => {
        const l = parseFloat(s.larghezza) || 0
        const a = parseFloat(s.altezza) || 0
        if (l === 0 || a === 0) return
        const mq = (l * a) / 10000
        const costoFabbrica = Math.round(mq * mat.prezzoFabbricaMq * molt)
        const costoNegozio = Math.round(mq * mat.prezzoNegozioMq * molt)
        totaleMqFabbrica += costoFabbrica
        totaleMqNegozio += costoNegozio
        totalePosaFabbrica += conPosa ? Math.round(mq * mat.posaMq) : 0
        totalePosaNegozio += conPosa ? Math.round(mq * mat.posaNegozioMq) : 0

        voci.push({
          label: `${s.tipo === 'portafinestra' ? 'Portafinestra' : 'Finestra'} ${i + 1}`,
          desc: `${l} × ${a} cm — ${mq.toFixed(2)} mq`,
          fabbrica: costoFabbrica,
          negozio: costoNegozio,
        })
      })
    } else {
      const qtyMap = { '1–3': 2, '4–6': 5, '7–10': 8, '10+': 12 }
      const num = qtyMap[answers.quantitaGenerica] || 4
      const mqMedioPerFinestra = 1.5
      const mqTotale = num * mqMedioPerFinestra
      totaleMqFabbrica = Math.round(mqTotale * mat.prezzoFabbricaMq * molt)
      totaleMqNegozio = Math.round(mqTotale * mat.prezzoNegozioMq * molt)
      totalePosaFabbrica = conPosa ? Math.round(mqTotale * mat.posaMq) : 0
      totalePosaNegozio = conPosa ? Math.round(mqTotale * mat.posaNegozioMq) : 0

      voci.push({
        label: `~${num} serramenti in ${mat.nome}`,
        desc: `Stima ~${mqTotale.toFixed(1)} mq totali (misura media 120×130 cm)`,
        fabbrica: totaleMqFabbrica,
        negozio: totaleMqNegozio,
      })
    }

    const totaleFabbrica = totaleMqFabbrica + totalePosaFabbrica
    const totaleNegozio = totaleMqNegozio + totalePosaNegozio
    const risparmio = totaleNegozio - totaleFabbrica
    const percentualeRisparmio = totaleNegozio > 0 ? Math.round((risparmio / totaleNegozio) * 100) : 0

    const tempoMap = {
      'urgente': '2–3 settimane',
      '1-3mesi': '1–3 mesi',
      'nessuna-fretta': 'Da definire',
    }

    return {
      mat,
      fascia,
      conPosa,
      voci,
      totaleMqFabbrica,
      totaleMqNegozio,
      totalePosaFabbrica,
      totalePosaNegozio,
      totaleFabbrica,
      totaleNegozio,
      risparmio,
      percentualeRisparmio,
      tempistica: tempoMap[answers.tempistiche] || '',
      hasMisure: answers.hasMisure === 'si',
    }
  }

  const fmt = (n) => '€ ' + n.toLocaleString('it-IT')
  const scontoLabel = (mat) => {
    const perc = Math.round(((mat.prezzoNegozioMq - mat.prezzoFabbricaMq) / mat.prezzoNegozioMq) * 100)
    return `-${perc}%`
  }

  return (
    <section id="quiz" ref={quizRef} className="bg-[#fafafa] pb-20 px-6 scroll-mt-4">
      <div className="max-w-4xl mx-auto">
        {/* Intro quiz */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            ⚡ Configura i tuoi infissi in 60 secondi
          </h2>
          <p className="text-gray-500 text-sm">Rispondi a poche domande e scopri quanto risparmi</p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
            <span>Passo {currentStep + 1} di {STEPS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Card quiz */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-10 min-h-[400px] flex flex-col">

          {/* ==================== STEP 1: MATERIALE ==================== */}
          {stepName === 'materiale' && (
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Che tipo di infissi vuoi?</h3>
              <p className="text-sm text-gray-400 mb-8">Scegli il materiale — clicca e prosegui automaticamente.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {MATERIALI.map((mat) => {
                  const selected = answers.materiale === mat.id
                  return (
                    <button
                      key={mat.id}
                      onClick={() => {
                        setAnswers({ ...answers, materiale: mat.id })
                        // Auto-advance after a brief visual feedback
                        setTimeout(() => {
                          setCurrentStep(1)
                          scrollToQuiz()
                        }, 350)
                      }}
                      className={`relative group text-left rounded-xl border-2 overflow-hidden transition-all duration-300 hover:shadow-lg ${
                        selected
                          ? `${mat.accent.border} shadow-lg ${mat.accent.shadow}`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {/* Popolare badge */}
                      {mat.popolare && (
                        <div className="absolute top-0 left-0 right-0 bg-sky-500 text-white text-[10px] font-bold uppercase tracking-wider text-center py-1 z-20">
                         Il Più Scelto
                        </div>
                      )}

                      {selected && (
                        <div className={`absolute top-3 right-3 z-10 w-6 h-6 ${mat.accent.check} rounded-full flex items-center justify-center`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}

                      <div className="h-40 bg-gray-100 overflow-hidden">
                        <img
                          src={mat.image}
                          alt={mat.nome}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      </div>

                      <div className={`p-4 ${mat.popolare ? 'pt-6' : ''}`}>
                        {/* Nome + Prezzi in colonna */}
                        <div className="mb-4">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{mat.nome}</h4>
                          
                          {/* Prezzo Negozio */}
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider">Prezzo medio in negozio:</span>
                            <span className="text-sm text-red-500 line-through decoration-1 font-semibold">€{mat.prezzoNegozioMq}</span>
                            <span className="text-[10px] text-gray-300">/mq</span>
                          </div>

                          {/* Prezzo Fabbrica */}
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider">Nostro prezzo di Fabbrica:</span>
                            <span className="text-base font-extrabold text-emerald-600"> <span className='text-gray-300 tracking-tightest font-medium text-xs'> </span>€{mat.prezzoFabbricaMq}</span>
                            <span className="text-[10px] text-gray-300">/mq</span>
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full ml-auto">{scontoLabel(mat)}</span>
                          </div>
                        </div>

                        <div className="space-y-1 mb-3">
                          {mat.pro.map((p, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                              <span className="text-xs text-gray-600">{p}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-1 mb-3">
                          {mat.contro.map((c, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <span className="text-xs text-red-400 mt-0.5 shrink-0">✕</span>
                              <span className="text-xs text-gray-400">{c}</span>
                            </div>
                          ))}
                        </div>

                        {/* Nota consigliata */}
                        <div className={`${mat.bgNota} rounded-lg p-3 mb-3`}>
                          <div className="flex items-center gap-2 mb-2">
                            <mat.iconNota className={`w-4 h-4 ${mat.colorNota}`} />
                            <span className={`text-xs font-bold ${mat.colorNota} uppercase tracking-wider`}>Per chi è adatto</span>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">{mat.nota}</p>
                        </div>

                        {/* IVA note */}
                        <div className="pt-3 border-t border-gray-100">
                          <span className="text-[10px] text-gray-300">*Prezzi al mq, IVA esclusa</span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* ==================== STEP 2: FASCIA ==================== */}
          {stepName === 'fascia' && (
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Cosa è più importante per te?</h3>
              <p className="text-sm text-gray-400 mb-8">Ogni fascia ha vetri e trattamenti diversi. Scegli quella più adatta a te.</p>

              <div className="space-y-4">
                {FASCE.map((f) => {
                  const selected = answers.fascia === f.id
                  const IconComp = f.id === 'economy' ? Coins : f.id === 'qualita-prezzo' ? Star : Crown

                  return (
                    <div key={f.id} className="relative">
                      {/* Popolare badge */}
                      {f.popolare && (
                        <div className="absolute -top-3 left-6 z-10">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-emerald-500/25">
                            ★ Consigliato — scelto dal 70% dei clienti
                          </span>
                        </div>
                      )}

                      <button
                        onClick={() => {
                          setAnswers({ ...answers, fascia: f.id })
                          setTimeout(() => {
                            setCurrentStep(2)
                            scrollToQuiz()
                          }, 400)
                        }}
                        className={`w-full text-left rounded-2xl overflow-hidden transition-all duration-300 p-5 sm:p-6 ${
                          selected
                            ? `border-2 ${f.color.border} ${f.color.bg} shadow-md ${f.color.shadow} ring-2 ${f.color.ring}`
                            : `border-0 ${f.color.bg} hover:shadow-md`
                        }`}
                      >
                        <div className="flex flex-col items-start gap-3">
                          {/* Icon — small, top left, ALWAYS colored */}
                          <div className="flex items-center justify-between w-full">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${f.color.iconBg}`}>
                              <IconComp className={`w-4 h-4 ${f.color.icon}`} />
                            </div>
                            {selected && (
                              <div className={`w-6 h-6 ${f.color.check} rounded-full flex items-center justify-center shrink-0`}>
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>

                          {/* Content — all left aligned below icon */}
                          <div className="w-full">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{f.headline}</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed mb-3">{f.sottotitolo}</p>

                            {/* Quick specs badges */}
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg ${f.color.badge}`}>
                                {f.vetri.split(' ').slice(0, 2).join(' ')}
                              </span>
                              {f.lowE && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-600">
                                  <Thermometer className="w-3 h-3" /> Low-E
                                </span>
                              )}
                              {f.gasArgon && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600">
                                  <Wind className="w-3 h-3" /> Argon
                                </span>
                              )}
                              {f.antisfondamento && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-600">
                                  <Shield className="w-3 h-3" /> Sicurezza
                                </span>
                              )}
                              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${selected ? 'bg-white/60 text-gray-600' : `${f.color.badge}`}`}>
                                Uw {f.uw}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* ==================== STEP 3: MISURE ==================== */}
          {stepName === 'misure' && (
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Hai già le misure dei tuoi serramenti?</h3>
              <p className="text-sm text-gray-400 mb-6">Così calcoliamo un preventivo più preciso.</p>

              {/* Toggle hai misure — colori differenziati */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-8">
                {/* Sì, ho le misure */}
                <button
                  onClick={() => setAnswers({ ...answers, hasMisure: 'si' })}
                  className={`py-5 px-5 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md ${
                    answers.hasMisure === 'si'
                      ? 'border-emerald-300 bg-emerald-50/60 shadow-md shadow-emerald-200/5'
                      : 'border-emerald-200 bg-emerald-50/60 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-emerald-50`}>
                      <Ruler className={`w-4 h-4 text-emerald-500`} />
                    </div>
                    <span className="text-sm font-bold text-gray-900">Sì, ho le misure</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-11">Inserisci larghezza e altezza di ogni finestra per un calcolo preciso al centimetro.</p>
                </button>

                {/* No, stima generica */}
                <button
                  onClick={() => setAnswers({ ...answers, hasMisure: 'no' })}
                  className={`py-5 px-5 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md ${
                    answers.hasMisure === 'no'
                      ? 'border-amber-300 bg-amber-50/60 shadow-md shadow-amber-200/5'
                      : 'border-amber-200 bg-amber-50/60 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-amber-50`}>
                      <Calculator className={`w-4 h-4 text-amber-500`} />
                    </div>
                    <span className="text-sm font-bold text-gray-900">No, stima approssimativa</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-11">Non preoccuparti! Dicci solo quante finestre hai e ti daremo una stima indicativa.</p>
                </button>
              </div>

              {/* Se ha le misure: form serramenti — redesigned for mobile */}
              {answers.hasMisure === 'si' && (
                <div className="max-w-xl mx-auto">
                  <div className="space-y-4">
                    {answers.serramenti.map((s, idx) => {
                      const mq = s.larghezza && s.altezza ? ((parseFloat(s.larghezza) * parseFloat(s.altezza)) / 10000) : 0
                      return (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100">
                          {/* Header riga: numero + tipo toggle + delete */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-xs font-bold text-blue-600">{idx + 1}</span>
                              </div>
                              {/* Tipo pill toggle */}
                              <div className="flex bg-white rounded-lg border border-gray-200 p-0.5">
                                <button
                                  type="button"
                                  onClick={() => updateSerramento(idx, 'tipo', 'finestra')}
                                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                                    s.tipo === 'finestra'
                                      ? 'bg-blue-500 text-white shadow-sm'
                                      : 'text-gray-400 hover:text-gray-600'
                                  }`}
                                >
                                  Finestra
                                </button>
                                <button
                                  type="button"
                                  onClick={() => updateSerramento(idx, 'tipo', 'portafinestra')}
                                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                                    s.tipo === 'portafinestra'
                                      ? 'bg-blue-500 text-white shadow-sm'
                                      : 'text-gray-400 hover:text-gray-600'
                                  }`}
                                >
                                  Portafinestra
                                </button>
                              </div>
                            </div>

                            {answers.serramenti.length > 1 && (
                              <button
                                onClick={() => removeSerramento(idx)}
                                className="p-1.5 text-gray-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>

                          {/* Inputs larghezza × altezza */}
                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Larghezza</label>
                              <div className="relative">
                                <input
                                  type="number"
                                  inputMode="numeric"
                                  placeholder="es. 120"
                                  value={s.larghezza}
                                  onChange={(e) => updateSerramento(idx, 'larghezza', e.target.value)}
                                  className="w-full px-3 py-3 rounded-lg border border-gray-200 text-sm font-medium bg-white text-gray-900 placeholder-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-300 font-medium">cm</span>
                              </div>
                            </div>

                            <span className="text-gray-300 mt-5 text-lg font-light">×</span>

                            <div className="flex-1">
                              <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Altezza</label>
                              <div className="relative">
                                <input
                                  type="number"
                                  inputMode="numeric"
                                  placeholder="es. 140"
                                  value={s.altezza}
                                  onChange={(e) => updateSerramento(idx, 'altezza', e.target.value)}
                                  className="w-full px-3 py-3 rounded-lg border border-gray-200 text-sm font-medium bg-white text-gray-900 placeholder-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-300 font-medium">cm</span>
                              </div>
                            </div>

                            {/* Live mq badge */}
                            {mq > 0 && (
                              <div className="mt-5 shrink-0">
                                <div className="px-2.5 py-2 bg-blue-50 border border-blue-100 rounded-lg text-center">
                                  <div className="text-xs font-bold text-blue-600">{mq.toFixed(2)}</div>
                                  <div className="text-[9px] text-blue-400 font-medium">mq</div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Add button */}
                  <button
                    onClick={addSerramento}
                    className="mt-4 w-full py-3.5 border-2 border-dashed border-gray-200 rounded-xl text-sm font-semibold text-gray-400 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Aggiungi un altro serramento
                  </button>
                </div>
              )}

              {/* Se NON ha misure: quantità generica — colori differenziati */}
              {answers.hasMisure === 'no' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
                  {[
                    { q: '1–3', color: { border: 'border-sky-200', borderLight: 'border-sky-150', bg: 'bg-sky-50/60', text: 'text-sky-700', shadow: 'shadow-sky-200/5', hoverBorder: 'hover:border-sky-300' } },
                    { q: '4–6', color: { border: 'border-violet-200', borderLight: 'border-violet-150', bg: 'bg-violet-50/60', text: 'text-violet-700', shadow: 'shadow-violet-200/5', hoverBorder: 'hover:border-violet-300' } },
                    { q: '7–10', color: { border: 'border-amber-200', borderLight: 'border-amber-150', bg: 'bg-amber-50/60', text: 'text-amber-700', shadow: 'shadow-amber-200/5', hoverBorder: 'hover:border-amber-300' } },
                    { q: '10+', color: { border: 'border-emerald-200', borderLight: 'border-emerald-150', bg: 'bg-emerald-50/60', text: 'text-emerald-700', shadow: 'shadow-emerald-200/5', hoverBorder: 'hover:border-emerald-300' } },
                  ].map(({ q, color }) => (
                    <button
                      key={q}
                      onClick={() => setAnswers({ ...answers, quantitaGenerica: q })}
                      className={`py-6 px-4 rounded-xl border-2 text-center transition-all duration-300 ${
                        answers.quantitaGenerica === q
                          ? `border-2 ${color.border} ${color.bg} shadow-md ${color.shadow}`
                          : `${color.borderLight} ${color.bg} ${color.hoverBorder} hover:shadow-md`
                      }`}
                    >
                      <div className={`text-2xl font-bold mb-1 ${answers.quantitaGenerica === q ? color.text : 'text-gray-900'}`}>{q}</div>
                      <div className="text-xs text-gray-400">serramenti</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ==================== STEP 4: INSTALLAZIONE ==================== */}
          {stepName === 'installazione' && (
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Hai bisogno anche della posa in opera?</h3>
              <p className="text-sm text-gray-400 mb-8">I nostri posatori certificati installano in tutta la Lombardia.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                {[
                  { id: 'fornitura', label: 'Solo fornitura', sub: 'Hai già un tuo installatore di fiducia. Ti forniamo solo i serramenti.', Icon: Package, color: { border: 'border-sky-200', borderLight: 'border-sky-150', bg: 'bg-sky-50/60', icon: 'text-sky-500', iconBg: 'bg-sky-50', shadow: 'shadow-sky-200/5', hoverBorder: 'hover:border-sky-300' } },
                  { id: 'fornitura-posa', label: 'Fornitura + Posa', sub: 'Ci occupiamo noi di tutto: serramenti + installazione professionale.', Icon: Wrench, color: { border: 'border-emerald-200', borderLight: 'border-emerald-150', bg: 'bg-emerald-50/60', icon: 'text-emerald-500', iconBg: 'bg-emerald-50', shadow: 'shadow-emerald-200/5', hoverBorder: 'hover:border-emerald-300' }, badge: '💰 Prezzo Conveniente', included: ['Sopralluogo gratuito', 'Rilevamento misure a domicilio', 'Posa professionale certificata', 'Smaltimento vecchi infissi', 'Miglior prezzo grazie alle squadre interne'] },
                ].map((opt) => {
                  const selected = answers.installazione === opt.id
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setAnswers({ ...answers, installazione: opt.id })}
                      className={`relative py-6 px-5 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md ${
                        selected
                          ? `border-2 ${opt.color.border} ${opt.color.bg} shadow-md ${opt.color.shadow}`
                          : `${opt.color.borderLight} ${opt.color.bg} ${opt.color.hoverBorder}`
                      }`}
                    >
                      {/* Badge per Fornitura + Posa */}
                      {opt.badge && (
                        <div className="absolute -top-3 right-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-emerald-500/30">
                          {opt.badge}
                        </div>
                      )}

                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${opt.color.iconBg}`}>
                          <opt.Icon className={`w-5 h-5 ${opt.color.icon}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-base font-bold text-gray-900">{opt.label}</div>
                          <div className="text-xs text-gray-400 leading-relaxed">{opt.sub}</div>
                        </div>
                      </div>
                      
                      {/* Incluso list — ALWAYS visible for Fornitura + Posa */}
                      {opt.included && (
                        <div className={`mt-4 pt-4 border-t border-current border-opacity-10 space-y-2 ${opt.badge ? 'mt-6' : ''}`}>
                          {opt.included.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <Check className={`w-4 h-4 ${opt.color.icon} mt-0.5 flex-shrink-0`} />
                              <span className="text-xs text-gray-600 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* ==================== STEP 5: TEMPISTICHE ==================== */}
          {stepName === 'tempistiche' && (
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Quando ti servirebbero?</h3>
              <p className="text-sm text-gray-400 mb-8">Così organizziamo la produzione al meglio.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
                {TEMPISTICHE_OPTIONS.map((opt) => {
                  const selected = answers.tempistiche === opt.id
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setAnswers({ ...answers, tempistiche: opt.id })}
                      className={`py-8 px-6 rounded-xl border-2 text-center transition-all duration-300 hover:shadow-md ${
                        selected
                          ? `border-2 ${opt.color.border} ${opt.color.bg} shadow-md ${opt.color.shadow}`
                          : `${opt.color.borderLight} ${opt.color.bg} ${opt.color.hoverBorder}`
                      }`}
                    >
                      <opt.Icon className={`w-6 h-6 mx-auto mb-3 ${opt.color.icon}`} />
                      <div className={`text-base font-bold mb-1 ${selected ? opt.color.text : 'text-gray-900'}`}>{opt.label}</div>
                      <div className="text-xs text-gray-400">{opt.sub}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* ==================== STEP 6: RISULTATO ==================== */}
          {stepName === 'risultato' && (() => {
            const est = getEstimate()
            return (
              <div className="flex-1">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 mb-4">
                    <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                      {est.hasMisure ? 'Preventivo su misura' : 'Stima indicativa'}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Ecco quanto risparmi con noi</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Colonna sinistra: dettaglio voci */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Dettaglio configurazione</h4>

                    {/* Fascia scelta */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-900">Vetrata: {est.fascia.nome}</span>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${est.fascia.color.badge}`}>{est.fascia.vetri.split(' ')[0]} vetro</span>
                      </div>
                      <p className="text-xs text-gray-400">{est.fascia.vetri}{est.fascia.lowE ? ' • Low-E' : ''}{est.fascia.antisfondamento ? ' • Antisfondamento' : ''}{est.fascia.gasArgon ? ' • Gas Argon' : ''}</p>
                    </div>

                    {est.voci.map((v, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-gray-900">{v.label}</span>
                          <span className="text-sm font-bold text-gray-900">{fmt(v.fabbrica)}</span>
                        </div>
                        <p className="text-xs text-gray-400">{v.desc}</p>
                      </div>
                    ))}

                    {est.conPosa && (
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-gray-900">Posa in opera certificata</span>
                          <span className="text-sm font-bold text-gray-900">{fmt(est.totalePosaFabbrica)}</span>
                        </div>
                        <p className="text-xs text-gray-400">Posatori professionisti — {fmt(est.mat.posaMq)}/mq</p>
                      </div>
                    )}

                    {!est.conPosa && (
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-gray-900">Posa in opera</span>
                          <span className="text-sm font-medium text-gray-400">Non inclusa</span>
                        </div>
                        <p className="text-xs text-gray-400">Solo fornitura — userai i tuoi installatori</p>
                      </div>
                    )}

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-sm font-semibold text-gray-900">Consegna stimata</span>
                      </div>
                      <p className="text-xs text-gray-400">{est.tempistica} — produzione su misura</p>
                    </div>
                  </div>

                  {/* Colonna destra: confronto prezzi */}
                  <div className="space-y-4">
                    {/* Box negozio */}
                    <div className="rounded-xl border-2 border-red-200/60 bg-red-50/30 p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="text-xs font-semibold text-red-800 uppercase tracking-wider">Prezzo showroom / negozio</span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Serramenti in {est.mat.nome}</span>
                          <span className="text-gray-500">{fmt(est.totaleMqNegozio)}</span>
                        </div>
                        {est.conPosa && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Posa in opera</span>
                            <span className="text-gray-500">{fmt(est.totalePosaNegozio)}</span>
                          </div>
                        )}
                      </div>
                      <div className="border-t border-red-200/50 pt-3 flex justify-between items-center">
                        <span className="text-sm font-semibold text-red-700">Totale negozio</span>
                        <span className="text-2xl font-bold text-red-600 line-through decoration-2">{fmt(est.totaleNegozio)}</span>
                      </div>
                    </div>

                    {/* Box fabbrica */}
                    <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/40 p-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg flex items-center gap-1">
                        <span>Risparmi</span>
                        <span>-{est.percentualeRisparmio}%</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Il tuo prezzo di fabbrica</span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Serramenti in {est.mat.nome}</span>
                          <span className="text-gray-600">{fmt(est.totaleMqFabbrica)}</span>
                        </div>
                        {est.conPosa && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Posa in opera</span>
                            <span className="text-gray-600">{fmt(est.totalePosaFabbrica)}</span>
                          </div>
                        )}
                      </div>
                      <div className="border-t border-emerald-300/50 pt-3 flex justify-between items-center">
                        <span className="text-sm font-semibold text-emerald-700">Totale fabbrica</span>
                        <span className="text-3xl font-bold text-emerald-600">{fmt(est.totaleFabbrica)}</span>
                      </div>
                    </div>

                    {/* Risparmio totale */}
                    <div className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 p-5 text-white text-center">
                      <TrendingDown className="w-5 h-5 mx-auto mb-2 opacity-80" />
                      <div className="text-xs uppercase tracking-wider opacity-80 mb-1">Risparmio totale stimato</div>
                      <div className="text-3xl sm:text-4xl font-bold">{fmt(est.risparmio)}</div>
                      <div className="text-sm opacity-80 mt-1">sulla stessa identica qualità</div>
                    </div>
                  </div>
                </div>

                {/* Garanzie */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <ShieldCheck className="w-5 h-5 text-blue-500" />
                      <span className="text-xs font-semibold text-gray-700">Garanzia 10 anni</span>
                      <span className="text-[11px] text-gray-400">Su tutti i prodotti</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Truck className="w-5 h-5 text-blue-500" />
                      <span className="text-xs font-semibold text-gray-700">Consegna inclusa</span>
                      <span className="text-[11px] text-gray-400">In tutta la Lombardia</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Calculator className="w-5 h-5 text-blue-500" />
                      <span className="text-xs font-semibold text-gray-700">
                        {est.hasMisure ? 'Preventivo su misura' : 'Stima indicativa'}
                      </span>
                      <span className="text-[11px] text-gray-400">IVA esclusa</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <a
                    href="tel:+393342221212"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full text-base font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4" />
                    Chiamaci per il preventivo esatto
                  </a>
                  <p className="text-xs text-gray-400 mt-3">Oppure scrivici su WhatsApp al +39 334 222 1212</p>
                </div>
              </div>
            )
          })()}

          {/* ==================== NAVIGATION ==================== */}
          {stepName !== 'risultato' && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
              {currentStep > 0 ? (
                <button
                  onClick={prev}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Indietro
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={next}
                disabled={!canProceed()}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  canProceed()
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                }`}
              >
                {currentStep === STEPS.length - 2 ? 'Vedi il tuo risparmio' : 'Avanti'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {stepName === 'risultato' && (
            <div className="flex items-center justify-center mt-6 pt-6 border-t border-gray-100">
              <button
                onClick={prev}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Modifica le scelte
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
