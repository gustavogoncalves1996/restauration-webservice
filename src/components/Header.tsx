import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
  onLogoClick: () => void;
}

const logoImages = [
  'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
  'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg',
  'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
];

function Header({ onMenuClick, isSidebarOpen, onLogoClick }: HeaderProps) {
  const [logoImage, setLogoImage] = useState('');

  useEffect(() => {
    setLogoImage(logoImages[Math.floor(Math.random() * logoImages.length)]);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6">
      <button
        onClick={onMenuClick}
        className="text-rustic-cream hover:text-rustic-beige transition-colors duration-300 z-50"
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? (
          <X size={32} strokeWidth={1.5} />
        ) : (
          <Menu size={32} strokeWidth={1.5} />
        )}
      </button>

      <button
        onClick={onLogoClick}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-rustic-cream/20 px-8 py-4 rounded-2xl hover:bg-rustic-cream/30 transition-all duration-300 group border border-rustic-tan/30"
        aria-label="Go to home"
      >
        <img
          src={logoImage}
          alt="Home"
          className="h-16 md:h-20 w-auto"
        />
      </button>

    </header>
  );
}

export default Header;
