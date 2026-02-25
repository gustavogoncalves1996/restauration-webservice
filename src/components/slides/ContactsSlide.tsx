import { ChevronLeft, MapPin, Phone } from 'lucide-react';

interface ContactsSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

interface Restaurant {
  name: string;
  address: string;
  phone: string;
}

const restaurants: Restaurant[] = [
  {
    name: 'SEDE',
    address: 'Rua Principal n. 28, Porto',
    phone: '+351 934 158 672',
  },
  {
    name: 'FILIAL NORTE',
    address: 'Av. da Beira-Mar n. 2020, Vila Nova de Gaia',
    phone: '+351 936 008 522',
  },
  {
    name: 'FILIAL SUL',
    address: 'Rua de Gondarém n. 487, Porto',
    phone: '+351 934 113 658',
  }
];

function ContactsSlide({ onPrev }: ContactsSlideProps) {
  return (
    <div className="relative h-full flex items-center justify-center overflow-y-auto">
        <div className="px-8 md:px-16 py-12 w-full">
          <div className="flex items-center gap-6 mb-12 animate-fade-in">
            <button
              onClick={onPrev}
              className="text-rustic-cream hover:text-rustic-tan transition-colors duration-300 animate-pulse-left"
              aria-label="Previous slide"
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>
            <h2 className="text-rustic-cream font-serif text-4xl md:text-6xl tracking-wide">
              Contactos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 max-w-4xl mx-auto">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-rustic-cream/15 p-8 rounded-3xl hover:bg-rustic-cream/25 transition-all duration-500 animate-fade-in group border border-rustic-tan/30 hover:border-rustic-tan/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light tracking-[0.2em] text-rustic-cream">{restaurant.name}</h3>
                </div>

                <div className="space-y-4 text-rustic-beige">
                  <div className="flex items-start gap-3 group/item">
                    <MapPin size={16} strokeWidth={1.5} className="flex-shrink-0 mt-1 text-rustic-tan group-hover/item:text-rustic-cream transition-colors" />
                    <p className="text-sm font-light leading-relaxed">{restaurant.address}</p>
                  </div>

                  <div className="flex items-center gap-3 group/item">
                    <Phone size={16} strokeWidth={1.5} className="flex-shrink-0 text-rustic-tan group-hover/item:text-rustic-cream transition-colors" />
                    <p className="text-sm font-light">{restaurant.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default ContactsSlide;
