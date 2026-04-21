export default function SocialProofBadge() {
  const avatars = [
'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
'https://michelemariatammaro.it/wp-content/uploads/2019/07/Logo-MMT.jpg',
'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
'https://www.shutterstock.com/image-vector/femida-goddess-law-logo-sale-600nw-2715417587.jpg',
'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces',
'https://s3.amazonaws.com/thumbnails.venngage.com/template/6114cd0a-e706-4e1b-85b5-8aca4c480570.png',
]



  return (
    <div className="flex flex-col items-center pt-2 gap-2">
      {/* Avatar sovapposti */}
      <div className="flex items-center justify-center mb-1">
        {avatars.map((avatar, i) => (
          <img
            key={i}
            src={avatar}
            alt={`Client ${i + 1}`}
            className="w-7 h-7 rounded-full border-2 border-white shadow-sm object-cover"
            style={{ marginLeft: i > 0 ? '-11px' : '0' }}
          />
        ))}
      </div>

      {/* 5 Stelle + Testo - stessi rigo */}
      <div className="flex items-center gap-2 mb-1">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs font-semibold text-gray-300 whitespace-nowrap">
          Scelto da più di <span className="text-emerald-400 font-bold">316 famiglie e aziende</span>
        </span>
      </div>
    </div>
  )
}
