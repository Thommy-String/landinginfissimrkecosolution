import azienda from '../datiAziendali'

export default function FloatingCTA({ onConversion }) {
  // Messaggio WhatsApp personalizzato
  const whatsappMessage = encodeURIComponent('Ciao fabbrica MRK-Ecosolution, vorrei ...')
  const whatsappLinkWithMessage = `https://wa.me/393342221212?text=${whatsappMessage}`

  // Usa la conversione specifica della pagina se passata, altrimenti quella generica
  const fireConversion = (url) => {
    const fn = onConversion ?? window.gtag_report_conversion
    if (typeof fn === 'function') fn(url)
  }

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-sm">
      <div
        className="flex flex-col gap-2.5 rounded-2xl px-3 pt-3 pb-2.5 shadow-xl border border-black/8"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Buttons row */}
        <div className="flex items-center gap-2">
          {/* WhatsApp */}
        <a
          href={whatsappLinkWithMessage}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            fireConversion(whatsappLinkWithMessage);
            window.open(whatsappLinkWithMessage, '_blank');
          }}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 px-4 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 transition-all duration-150"
        >
          {/* WhatsApp icon */}
          <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.843L.057 23.486a.5.5 0 00.611.637l5.797-1.522A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.733.98.997-3.648-.235-.374A9.861 9.861 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
          </svg>
          <span className="text-sm font-semibold text-white tracking-tight">Preventivo</span>
        </a>

        {/* Divider */}
        <div className="w-px h-8 bg-black/10 flex-shrink-0" />

        {/* Chiamata */}
        <a
          href={azienda.telefonoLink}
          onClick={() => fireConversion(azienda.telefonoLink)}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 px-4 bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all duration-150"
        >
          {/* Phone icon */}
          <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
          </svg>
          <span className="text-sm font-semibold text-white tracking-tight">Chiama</span>
        </a>
        </div>

      {/* Caption */}
      <p className="text-center text-[12px] text-gray-400 font-medium tracking-wide pb-0.5">
        Nessun obbligo di acquisto
      </p>
      </div>
    </div>
  )
}
