/**
 * ClientiScorrevoli — Recensioni Google stile card scorrevoli
 */

function GoogleLogo() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

// chip: label + colore tailwind bg/text
const CLIENTI = [
  {
    avatar: 'https://i.pinimg.com/736x/d8/39/4b/d8394bd7f78be8bed8754eadc8bf650c.jpg',
    nome: 'Marco T.',
    citta: 'Monza',
    frase: 'Onestamente non mi aspettavo lo stesso prodotto del negozio a questo prezzo... Ho fatto 3 preventivi prima di loro per stessa finestra con stesse caratteristiche tecniche e nessuno si avvicinava Fabbrica top.',
    chips: [
      { label: '6 finestre PVC bianco', color: 'bg-sky-50 text-sky-700' },
      { label: 'Tapparelle', color: 'bg-slate-100 text-slate-600' },
    ],
    quando: '2 mesi fa',
  },
  {
    avatar: 'https://i.pinimg.com/1200x/53/24/25/532425760b453e6283cfef74ec335a0c.jpg',
    nome: 'Luca B.',
    citta: 'Como',
    frase: 'Tutto finito in un giorno solo. Sono arrivati alle 8 e alle 17 stavano già sistemando. Nessun problema, nessun casino in casa. Davvero bravi.',
    chips: [
      { label: '3 portefinestre PVC noce', color: 'bg-amber-50 text-amber-700' },
    ],
    quando: '1 mese fa',
  },
  {
    avatar: 'https://i.pinimg.com/736x/ef/e6/6a/efe66a9566171cbcd0563168f583e9dd.jpg',
    nome: 'Giulia R.',
    citta: 'Milano',
    frase: 'Un rivenditore di Milano mi aveva quotato €6.450 per 8 finestre. Qui ho speso €4.680 per lo stesso profilo Aluplast + montaggio e smaltimento. Ben €1770 di differenza... sappiamo già chi ho scelto.',
    chips: [
      { label: '8 finestre PVC antracite', color: 'bg-zinc-100 text-zinc-700' },
      { label: 'Cassonetti', color: 'bg-slate-100 text-slate-600' },
    ],
    quando: '3 mesi fa',
  },
  {
    avatar: 'https://i.pinimg.com/736x/4d/45/3c/4d453ccacc80cef6799a08474ed7065d.jpg',
    nome: 'Lucrezia M.',
    citta: 'Varese',
    frase: 'Dal sopralluogo alla posa tutto molto professionale. Il ragazzo che è venuto a misurare era preparatissimo, mi ha spiegato ogni cosa. Consiglio vivamente!!',
    chips: [
      { label: '4 finestre PVC bianco', color: 'bg-sky-50 text-sky-700' },
      { label: "Porta d'ingresso", color: 'bg-emerald-50 text-emerald-700' },
    ],
    quando: '5 mesi fa',
  },
  {
    avatar: 'https://i.pinimg.com/1200x/19/cb/8f/19cb8fae220b5d6b86e075f3e62e82f6.jpg',
    nome: 'Roberto F.',
    citta: 'Lecco',
    frase: 'Avevo bisogno di ristrutturare tutta la casa e temevo tempi lunghissimi. Preventivo in 24h, consegna prima del previsto. Roba che non capita spesso, ve lo dico.',
    chips: [
      { label: '12 infissi PVC bianco', color: 'bg-sky-50 text-sky-700' },
      { label: 'Tapparelle noce', color: 'bg-brown-50 text-brown-700' },
     { label: 'Cassonetti PVC', color: 'bg-gray-50 text-slate-700' },

    ],
    quando: '3 settimane fa',
  },
  {
    avatar: 'https://i.pinimg.com/736x/81/f4/ea/81f4ea155ab2ac3cd116929cd98cbdaa.jpg',
    nome: 'Andrea V.',
    citta: 'Monza',
    frase: 'Si vede che è roba tedesca, non è come certe finestre cinesi. Il profilo è bello robusto, la guarnizione ho scelto doppia e sento già la differenza quando tengo le finestre chiuse, e il prezzo era comunque sotto a tutti gli altri.',
    chips: [
      { label: '5 finestre PVC grigio', color: 'bg-zinc-100 text-zinc-700' },
      { label: 'Oscuranti', color: 'bg-slate-100 text-slate-600' },
    ],
    quando: '6 mesi fa',
  },
  {
    avatar: 'https://i.pinimg.com/736x/24/3b/9a/243b9a65cbc0ca363e133b125cf2720b.jpg',
    nome: 'Chiara D.',
    citta: 'Milano',
    frase: 'Finalmente una ditta dove il preventivo è quello che paghi. Niente sorprese, niente costi extra a fine lavoro. Il preventivo era dettagliatissimo già da subito.',
    chips: [
      { label: '7 finestre PVC bianco', color: 'bg-sky-50 text-sky-700' },
      { label: 'Cassonetti coibentati', color: 'bg-teal-50 text-teal-700' },
    ],
    quando: '2 settimane fa',
  },
]

// Duplichiamo per il loop seamless
const ITEMS = [...CLIENTI, ...CLIENTI]

export default function ClientiScorrevoli() {
  const card = (c, i) => (
    <div
      key={i}
      className="flex flex-col gap-2.5 bg-white border border-gray-100 rounded-2xl px-4 py-4 shadow-sm shrink-0 snap-center"
      style={{ width: '270px' }}
    >
      <div className="flex items-center gap-2.5">
        <img src={c.avatar} alt={c.nome} referrerPolicy="no-referrer"
          className="w-10 h-10 rounded-full object-cover shrink-0 border border-gray-100" />
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold text-gray-800 truncate">{c.nome}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <GoogleLogo />
            <span className="text-[11px] text-gray-400">Verificato</span>
          </div>
        </div>
        <div className="flex items-center gap-0.5 shrink-0">
          {[...Array(5)].map((_, j) => (
            <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-[12px] text-gray-600 leading-relaxed">{c.frase}</p>
      <div className="flex flex-wrap gap-1.5">
        {c.chips.map((chip, k) => (
          <span key={k} className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${chip.color}`}>
            {chip.label}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1 border-t border-gray-50">
        <span className="text-[11px] text-gray-400">📍 {c.citta}</span>
        <span className="text-[11px] text-gray-400">{c.quando}</span>
      </div>
    </div>
  )

  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex gap-3 animate-scroll-left" style={{ width: 'max-content' }}>
          {ITEMS.map((c, i) => card(c, i))}
        </div>
      </div>
    </div>
  )
}
