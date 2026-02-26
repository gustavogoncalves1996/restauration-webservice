import { useState, useEffect, useCallback } from 'react';
import RestaurantSlide from './slides/RestaurantSlide';
import CartasSlide from './slides/CartasSlide';
import GiftCardSlide from './slides/GiftCardSlide';
import EspacosSlide from './slides/EspacosSlide';
import ContactsSlide from './slides/ContactsSlide';

interface SliderProps {
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  setBackgroundImage: (image: string) => void;
}

const slides = [
  { component: RestaurantSlide, backgroundImage: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg' },
  { component: CartasSlide, backgroundImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg' },
  { component: GiftCardSlide, backgroundImage: 'https://images.pexels.com/photos/264869/pexels-photo-264869.jpeg' },
  { component: EspacosSlide, backgroundImage: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg' },
  { component: ContactsSlide, backgroundImage: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg' },
];

function Slider({ activeSlide, setActiveSlide, setBackgroundImage }: SliderProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useState(() => {
    setBackgroundImage(slides[activeSlide].backgroundImage);
  });

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const nextIndex = (activeSlide + 1) % slides.length;
      setActiveSlide(nextIndex);
      setBackgroundImage(slides[nextIndex].backgroundImage);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== activeSlide) {
      setIsAnimating(true);
      setActiveSlide(index);
      setBackgroundImage(slides[index].backgroundImage);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const prevIndex = (activeSlide - 1 + slides.length) % slides.length;
      setActiveSlide(prevIndex);
      setBackgroundImage(slides[prevIndex].backgroundImage);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && activeSlide < slides.length - 1) {
      if (!isAnimating) {
        setIsAnimating(true);
        const nextIndex = activeSlide + 1;
        setActiveSlide(nextIndex);
        setBackgroundImage(slides[nextIndex].backgroundImage);
        setTimeout(() => setIsAnimating(false), 800);
      }
    } else if (e.key === 'ArrowLeft' && activeSlide > 0) {
      if (!isAnimating) {
        setIsAnimating(true);
        const prevIndex = activeSlide - 1;
        setActiveSlide(prevIndex);
        setBackgroundImage(slides[prevIndex].backgroundImage);
        setTimeout(() => setIsAnimating(false), 800);
      }
    }
  }, [activeSlide, isAnimating, setActiveSlide, setBackgroundImage]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => {
        const SlideComponent = slide.component;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === activeSlide
                ? 'opacity-100 scale-100'
                : index < activeSlide
                ? 'opacity-0 scale-95 -translate-x-full'
                : 'opacity-0 scale-95 translate-x-full'
            }`}
          >
            <SlideComponent onNext={nextSlide} onPrev={prevSlide} />
          </div>
        );
      })}

    </div>
  );
}

export default Slider;
