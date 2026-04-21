
export default function Hero() {
  const clients = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
    'https://michelemariatammaro.it/wp-content/uploads/2019/07/Logo-MMT.jpg',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
    'https://www.shutterstock.com/image-vector/femida-goddess-law-logo-sale-600nw-2715417587.jpg',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces',
    'https://s3.amazonaws.com/thumbnails.venngage.com/template/6114cd0a-e706-4e1b-85b5-8aca4c480570.png',
  ]

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-2 sm:py-16">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8 pb-0 sm:py-12 text-center">
        
        {/* Social Proof Section */}
        <div className="mb-6">
          <div className="flex flex-col items-center pt-2 gap-2">
            {/* Client Avatars */}
            <div className="flex items-center justify-center mb-1">
              {clients.map((client, i) => (
                <img
                  key={i}
                  alt={`Client ${i + 1}`}
                  className="w-7 h-7 rounded-full border-2 border-white shadow-sm object-cover"
                  src={client}
                  style={{ marginLeft: i === 0 ? '0px' : '-11px' }}
                />
              ))}
            </div>

            {/* Stars & Text */}
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
                Scelto da più di <span className="text-emerald-600 font-bold">316 famiglie e aziende</span>
              </span>
            </div>
          </div>
        </div>

        {/* Headline principale */}
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.065em] text-gray-900 leading-[1.3] mb-2">
          In negozio paghi le finestre il 40% in più.{' '}
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            <br />
            Salta gli Intermediari e Acquista direttamente dalla Fabbrica.
          </span>
        </h1>


      </div>
    </section>
  )
}
