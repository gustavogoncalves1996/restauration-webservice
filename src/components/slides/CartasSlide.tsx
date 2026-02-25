import { ChevronRight, ChevronLeft } from 'lucide-react';

interface CartasSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

interface MenuCard {
  name: string;
  subtitle: string;
  pdfUrl?: string;
  disabled?: boolean;
  image: string;
}

const menuCards: MenuCard[] = [
  {
    name: 'ALMOÇO',
    subtitle: 'a carta de',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg'
  },
  {
    name: 'JANTAR',
    subtitle: 'a carta de',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg'
  },
  {
    name: 'BEBIDAS',
    subtitle: 'a carta de',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg'
  }
];

function CartasSlide({ onNext, onPrev }: CartasSlideProps) {
  const handleCardClick = (card: MenuCard) => {
    if (card.disabled) return;
    if (card.pdfUrl) {
      window.open(card.pdfUrl, '_blank');
    }
  };

  return (
    <div className="relative h-full flex items-center justify-center overflow-y-auto">
        <div className="px-8 md:px-16 py-12 w-full">
          <div className="flex items-center gap-6 mb-8 animate-fade-in">
            <button
              onClick={onPrev}
              className="text-rustic-cream hover:text-rustic-tan transition-colors duration-300 animate-pulse-left"
              aria-label="Previous slide"
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>
            <h2 className="text-rustic-cream font-serif text-4xl md:text-6xl tracking-wide">
              as nossas CARTAS
            </h2>
            <button
              onClick={onNext}
              className="text-rustic-cream hover:text-rustic-tan transition-colors duration-300 animate-pulse-right"
              aria-label="Next slide"
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>
          </div>

          <p className="text-rustic-beige text-lg md:text-xl font-light mb-12 animate-fade-in-delay">
            Todas as iguarias e as melhores seleções escolhidas especialmente para ti.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 max-w-4xl mx-auto">
            {menuCards.map((card, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(card)}
                disabled={card.disabled}
                className={`backdrop-blur-md bg-rustic-cream/15 p-8 rounded-3xl transition-all duration-500 animate-fade-in group border border-rustic-tan/30 h-40 flex items-center justify-center ${
                  card.disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-rustic-cream/25 cursor-pointer hover:scale-105 hover:border-rustic-tan/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="text-center">
                    <p className="text-rustic-beige text-sm font-light tracking-wider mb-2">
                      {card.subtitle}
                    </p>
                    <h3 className="text-rustic-cream text-2xl font-light tracking-[0.2em]">
                      {card.name}
                    </h3>
                  </div>

                  {card.disabled && (
                    <div className="mt-4 text-center">
                      <span className="text-rustic-tan text-xs font-light">
                        Em breve
                      </span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
    </div>
  );
}

export default CartasSlide;
