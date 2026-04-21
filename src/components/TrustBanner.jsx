import furgoneImg from '../assets/images/varie/MrkFurgone3.jpg'

export default function TrustBanner() {
  return (
    <section className="bg-white px-6 py-8">
      <div className="max-w-5xl mx-auto">

        {/* Titolo sopra */}
        <div className="text-center mb-5">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.2]">
            Consegniamo in tutta Lombardia.{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              <br className="hidden sm:block" />
              Direttamente dalla nostra fabbrica.
            </span>
          </h2>
        </div>

        {/* Card foto */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '300px' }}>
          <img
            src={furgoneImg}
            alt="Furgone consegna Ecosolution MRK"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

          {/* Badge pin — in alto a sinistra */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            <span className="text-sm">📍</span>
            <span className="text-xs font-semibold text-white whitespace-nowrap">Magazzino - Lentate sul Seveso · MB</span>
          </div>

          {/* 3 check in basso */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
              {[
                'Pronte in 2-3 settimane dall\'ordine',
                'Oltre 4.000 infissi consegnati ogni anno',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
