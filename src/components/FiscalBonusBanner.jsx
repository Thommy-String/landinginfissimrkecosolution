import furgoneImg from '../assets/images/varie/MrkFurgone.jpg'

export default function FiscalBonusBanner() {
  return (
    <section className="bg-white mt-32 px-6 py-8">
      <div className="max-w-5xl mx-auto">

        {/* Titolo sopra */}
        <div className="text-center mb-5">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.2]">
            Non ti basta?{' '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              <br className="hidden sm:block" />
              Recupera il 50% con le detrazioni fiscali.
            </span>
          </h2>
        </div>

        {/* Card foto */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-green-50 border border-green-100 p-8 sm:p-12">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/5" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-left space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-800">
                <span className="text-sm">📄</span>
                <span className="text-xs font-bold uppercase tracking-wide">Ecobonus 50%</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Recupero Bonus 2026
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
            Oltre a farti risparmiare fino al 40% sul prezzo di listino acquistando direttamente dalla fabbrica, ti aiutiamo con tutta la <strong className="text-gray-900">documentazione per la detrazione fiscale al 50%</strong>.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Fattura elettronica a norma per Ecobonus',
                  'Certificazioni termiche e marcatura CE',
                  'Assistenza pratiche ENEA',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-green-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/3 flex justify-center pb-4 md:pb-0">
               <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                 <div className="bg-white w-40 h-40 sm:w-48 sm:h-48 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-green-50 relative z-10">
                    <span className="text-5xl sm:text-6xl font-black bg-gradient-to-br from-green-500 to-emerald-700 bg-clip-text text-transparent">-50%</span>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Ecobonus</span>
                 </div>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
