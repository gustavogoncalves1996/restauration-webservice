import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface RestaurantSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const foodImages = [
  'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
  'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg',
  'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
];

function RestaurantSlide({ onNext, onPrev }: RestaurantSlideProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % foodImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {foodImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Food image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-rustic-dark via-rustic-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 px-12 md:px-24 max-w-2xl">
        <div className="flex items-center gap-6 mb-8 animate-fade-in">
          <h2 className="text-rustic-cream font-serif text-4xl md:text-6xl tracking-wide">
            Restaurante
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
          Seja nosso convidado
        </p>
      </div>
    </div>
  );
}

export default RestaurantSlide;
