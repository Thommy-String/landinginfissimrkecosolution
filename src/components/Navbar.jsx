import { Phone } from 'lucide-react'
import logo from '../assets/images/logo/logoMRKEcoSolution-removebg-preview.png'
import azienda from '../datiAziendali'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo e Info Azienda */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="MRK Eco Solution"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col gap-0.5">
            <h2 className="text-sm font-extrabold text-gray-900 leading-tight tracking-tight">MRK Eco Solution</h2>
            <p className="text-[11px] font-semibold text-emerald-700 leading-tight uppercase tracking-wide">Fabbrica Serramenti</p>
            <p className="text-[10px] text-gray-400 leading-tight">Lentate sul Seveso (MB)</p>
          </div>
        </div>

        {/* CTA Telefono */}
        <div className="flex flex-col items-end gap-0.5">
          <a
            href={azienda.telefonoLink}
            onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.telefonoLink)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-blue-500 text-blue-600 rounded-full text-xs font-semibold hover:bg-blue-50 transition-all duration-300 active:scale-[0.98]"
          >
            <Phone className="w-3 h-3" />
            <span>{azienda.telefono}</span>
          </a>
          <p className="text-[10px] text-gray-400 leading-tight pr-1">Tutti i giorni · 08:00–20:00</p>
        </div>
      </div>
    </nav>
  )
}
