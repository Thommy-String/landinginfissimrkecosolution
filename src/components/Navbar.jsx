import { Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        {/* Logo e Info Azienda */}
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/images/logo/logoMRKEcoSolution-removebg-preview.png"
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
          href="tel:+393342221212"
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-50 transition-all duration-300 active:scale-[0.98]"
        >
          <Phone className="w-3 h-3" />
          <span>+39 334 222 1212</span>
        </a>
      </div>
    </nav>
  )
}
