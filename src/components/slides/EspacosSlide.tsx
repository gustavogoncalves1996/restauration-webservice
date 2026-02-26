import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface EspacosSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

interface Space {
  name: string;
  images: string[];
}

const spaces: Space[] = [
  {
    name: 'Sala Principal',
    images: [
      'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    ]
  },
  {
    name: 'Esplanada',
    images: [
      'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
      'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg',
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    ]
  },
  {
    name: 'Bar',
    images: [
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
      'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
    ]
  }
];

function EspacosSlide({ onNext, onPrev }: EspacosSlideProps) {
  const [selectedSpace, setSelectedSpace] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % spaces[selectedSpace].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? spaces[selectedSpace].images.length - 1 : prev - 1
    );
  };

  const handleSpaceChange = (index: number) => {
    setSelectedSpace(index);
    setCurrentImageIndex(0);
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
              Espaços
            </h2>
            <button
              onClick={onNext}
              className="text-rustic-cream hover:text-rustic-tan transition-colors duration-300 animate-pulse-right"
              aria-label="Next slide"
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>
          </div>

          <div className="mb-12 flex justify-center">
            <nav className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {spaces.map((space, index) => (
                <button
                  key={index}
                  onClick={() => handleSpaceChange(index)}
                  className={`px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 whitespace-nowrap border ${
                    selectedSpace === index
                      ? 'bg-rustic-cream/30 text-rustic-cream border-rustic-tan/50'
                      : 'bg-rustic-cream/10 text-rustic-beige hover:bg-rustic-cream/20 hover:text-rustic-cream border-rustic-tan/30'
                  }`}
                >
                  {space.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="relative max-w-3xl mx-auto flex flex-col items-center">
            <div className="aspect-video rounded-3xl overflow-hidden backdrop-blur-sm bg-rustic-dark/20 relative group border border-rustic-tan/30">
              <img
                src={spaces[selectedSpace].images[currentImageIndex]}
                alt={`${spaces[selectedSpace].name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-md bg-rustic-cream/20 flex items-center justify-center text-rustic-cream hover:bg-rustic-cream/30 transition-all duration-300 opacity-0 group-hover:opacity-100 border border-rustic-tan/30"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} strokeWidth={2} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-md bg-rustic-cream/20 flex items-center justify-center text-rustic-cream hover:bg-rustic-cream/30 transition-all duration-300 opacity-0 group-hover:opacity-100 border border-rustic-tan/30"
                aria-label="Next image"
              >
                <ChevronRight size={24} strokeWidth={2} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {spaces[selectedSpace].images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'bg-rustic-cream w-8'
                        : 'bg-rustic-cream/50 hover:bg-rustic-cream/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default EspacosSlide;
