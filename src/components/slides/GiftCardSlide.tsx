import { ChevronRight, ChevronLeft } from 'lucide-react';

interface GiftCardSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

function GiftCardSlide({ onNext, onPrev }: GiftCardSlideProps) {
  return (
    <div className="relative h-full flex items-center px-12 md:px-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-6 mb-8 animate-fade-in">
            <button
              onClick={onPrev}
              className="text-rustic-cream hover:text-rustic-tan transition-colors duration-300 animate-pulse-left"
              aria-label="Previous slide"
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>
            <h2 className="text-rustic-cream font-serif text-4xl md:text-6xl tracking-wide">
              Gift Card
            </h2>
            <button
              onClick={onNext}
              className="text-rustic-cream hover:text-rustic-tan transition-colors duration-300 animate-pulse-right"
              aria-label="Next slide"
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>
          </div>

          <p className="text-rustic-beige text-lg md:text-xl font-light leading-relaxed animate-fade-in-delay">
            Ofereça a experiência perfeita
          </p>
        </div>
    </div>
  );
}

export default GiftCardSlide;
