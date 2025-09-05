import { Zap } from 'lucide-react'

export default function SportsChannels() {
  const sportsChannels = [
    'Champions League', 'Premier League', 'Eredivisie',
    'La Liga', 'Bundesliga', 'Serie A',
    'Ligue 1', 'Formula 1', 'MotoGP',
    'UFC', 'Tennis', 'NASCAR',
    'Europa League', 'Conference League', 'World Cup',
    'Euro Championship', 'Olympic Games', 'Wimbledon'
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Popular Competitions & Sports Channels
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sportsChannels.map((channel, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-primary-500/20 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary-500" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">
                  {channel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
