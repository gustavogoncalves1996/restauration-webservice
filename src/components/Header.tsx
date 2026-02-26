import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
  onLogoClick: () => void;
}

function Header({ onMenuClick, isSidebarOpen, onLogoClick }: HeaderProps) {
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
          src="https://64.media.tumblr.com/b9db1d5dac9bed864221b0bcae855df5/877119eca8d6fb75-ac/s2048x3072/288b94cedbb12c676ac07460e0b0102d00c7f265.pnj"
          alt="Home"
          className="h-16 md:h-20 w-auto"
        />
      </button>

    </header>
  );
}

export default Header;
