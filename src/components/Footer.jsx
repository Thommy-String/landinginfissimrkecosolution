import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import logo from '../assets/images/logo/logoMRKEcoSolution-removebg-preview.png'
import teamImg from '../assets/images/varie/MrkTeam.jpg'
import azienda from '../datiAziendali'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">

        {/* Top: Brand + What we do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          
          {/* Brand & Description */}
          <div>
            <img 
              src={logo} 
              alt="Ecosolution SAS" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Produciamo e installiamo infissi in PVC, alluminio e legno direttamente dalla nostra fabbrica. Vendita diretta senza rivenditori — risparmi reali per famiglie e professionisti in tutta la Lombardia.
            </p>
            <img 
              src={teamImg} 
              alt="Team MRK Eco Solution" 
              className="mt-8 rounded-lg shadow-md w-full max-w-sm h-auto object-cover"
            />
          </div>

          {/* What we produce */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Cosa produciamo e installiamo
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                'Finestre in PVC',
                'Finestre in Alluminio',
                'Portoncini d\'ingresso',
                'Porte finestre',
                'Scorrevoli e alzanti',
                'Persiane e scuri',
                'Zanzariere',
                'Cassonetti coibentati',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          
          {/* Chiamaci */}
          <a
            href={azienda.telefonoLink}
            onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.telefonoLink)}
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gray-800/60 border border-gray-700/50 text-gray-200 hover:bg-sky-950/40 hover:border-sky-700/40 hover:text-sky-300 transition-all duration-300 group"
          >
            <Phone className="w-4 h-4 text-sky-400 group-hover:text-sky-300 transition-colors" />
            <span className="text-sm font-medium">Chiamaci</span>
          </a>

          {/* Email */}
          <a
            href={azienda.emailLink}
            onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.emailLink)}
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gray-800/60 border border-gray-700/50 text-gray-200 hover:bg-amber-950/30 hover:border-amber-700/40 hover:text-amber-300 transition-all duration-300 group"
          >
            <Mail className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors" />
            <span className="text-sm font-medium">Scrivici un'Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href={azienda.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(azienda.whatsappLink)}
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gray-800/60 border border-gray-700/50 text-gray-200 hover:bg-emerald-950/30 hover:border-emerald-700/40 hover:text-emerald-300 transition-all duration-300 group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>

          {/* Calcola Stima */}
          <button
            onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gray-800/60 border border-gray-700/50 text-gray-200 hover:bg-violet-950/30 hover:border-violet-700/40 hover:text-violet-300 transition-all duration-300 group cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 text-violet-400 group-hover:text-violet-300 transition-colors" />
            <span className="text-sm font-medium">Calcola Gratis Stima</span>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-gray-400">
            Sede Operativa: {azienda.indirizzo}
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {azienda.nome} — P.IVA {azienda.piva}
          </p>
        </div>

      </div>
    </footer>
  )
}
