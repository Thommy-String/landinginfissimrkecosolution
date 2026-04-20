import { Phone } from 'lucide-react'
import logo from '../assets/images/logo/logoMRKEcoSolution-removebg-preview.png'
import azienda from '../datiAziendali'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        {/* Logo e Info Azienda */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="MRK Eco Solution"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col gap-0.5">
            <h2 className="text-sm font-bold text-gray-900">MRK Eco Solution</h2>
            <p className="text-xs text-gray-600 ">Produttori di Serramenti - Lentate sul Seveso MB - Lombardia</p>
          </div>
        </div>

        {/* CTA Telefono */}
        <a
          href={azienda.telefonoLink}
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-50 transition-all duration-300 active:scale-[0.98]"
        >
          <Phone className="w-3 h-3" />
          <span>{azienda.telefono}</span>
        </a>
      </div>
    </nav>
  )
}
