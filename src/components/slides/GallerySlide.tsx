import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface GallerySlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const galleryImages = [
  'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
  'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg',
  'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
  'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
  'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
];

function GallerySlide({ onNext }: GallerySlideProps) {
  const [visibleImages, setVisibleImages] = useState(8);

  const loadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 4, galleryImages.length));
  };

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg)',
        }}
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div className="relative h-full overflow-y-auto px-12 md:px-24 py-32">
        <div className="flex items-center gap-6 mb-12 animate-fade-in">
          <h2 className="text-white font-serif text-6xl md:text-8xl tracking-wide">
            Galery
          </h2>
          <button
            onClick={onNext}
            className="text-white hover:opacity-70 transition-opacity duration-300 animate-pulse-right"
            aria-label="Next slide"
          >
            <ChevronRight size={56} strokeWidth={1} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-delay">
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {visibleImages < galleryImages.length && (
          <div className="flex justify-center pb-8">
            <button
              onClick={loadMore}
              className="text-white border border-white/50 px-8 py-3 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group"
            >
              Load more
              <ChevronDown
                size={20}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default GallerySlide;
