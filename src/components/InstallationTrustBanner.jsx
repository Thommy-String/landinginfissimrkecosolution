import teamInsideImg from '../assets/images/varie/mrkTeamInside.jpg'

export default function InstallationTrustBanner() {
  return (
    <section className="bg-white px-6 py-8">
      <div className="max-w-5xl mx-auto">

        {/* Titolo sopra */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.2]">
            Hai bisogno del montaggio?{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              <br className="hidden sm:block" />
              Posiamo noi da soli €80 al pezzo
            </span>
          </h2>
        </div>

        {/* Card foto */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100" style={{ height: '350px' }}>
          <img
            src={teamInsideImg}
            alt="Squadra di posatori MRK al lavoro"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Badge pin — in alto a sinistra */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            <span className="text-xs font-semibold text-white whitespace-nowrap">Fabbrica MRK-Ecosolution</span>
          </div>

          {/* 3 check in basso */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              {[
                'Niente estranei. Squadre interne.',
                'Montaggio garantito quanto l\'infisso',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-semibold text-white tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testo di rassicurazione aggiuntivo offline */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-[15px] sm:text-[17px] leading-relaxed">
            Una finestra eccellente posata male diventa una finestra scadente. 
            Ecco perché <strong>non affidiamo l'installazione a ditte esterne o "tuttofare"</strong>. 
            La posa è eseguita dai nostri tecnici con materiali adatti per garantirti un isolamento perfetto.
          </p>
        </div>

      </div>
    </section>
  )
}
