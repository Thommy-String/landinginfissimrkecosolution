export default function SocialProofBadge() {
  const avatars = [
    'https://i.pinimg.com/736x/d8/39/4b/d8394bd7f78be8bed8754eadc8bf650c.jpg',
    'https://i.pinimg.com/1200x/53/24/25/532425760b453e6283cfef74ec335a0c.jpg',
    'https://i.pinimg.com/736x/ef/e6/6a/efe66a9566171cbcd0563168f583e9dd.jpg',
    'https://i.pinimg.com/736x/4d/45/3c/4d453ccacc80cef6799a08474ed7065d.jpg',
    'https://i.pinimg.com/1200x/19/cb/8f/19cb8fae220b5d6b86e075f3e62e82f6.jpg',
    'https://i.pinimg.com/736x/81/f4/ea/81f4ea155ab2ac3cd116929cd98cbdaa.jpg',
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
          Scelto da più di <span className="text-emerald-400 font-bold">817 famiglie e aziende</span>
        </span>
      </div>
    </div>
  )
}
