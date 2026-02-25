import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const menuItems = [
  { name: 'Restaurante', index: 0 },
  { name: 'Cartas', index: 1 },
  { name: 'Gift Card', index: 2 },
  { name: 'Espaços', index: 3 },
  { name: 'Contactos', index: 4 },
];

const socialIcons = [
  { Icon: Mail, label: 'Email' },
  { Icon: MapPin, label: 'Location' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
];

function Sidebar({ isOpen, onClose, activeSlide, setActiveSlide }: SidebarProps) {
  const handleMenuClick = (index: number) => {
    if (index >= 0) {
      setActiveSlide(index);
      onClose();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-rustic-dark/70 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 h-screen w-80 bg-rustic-dark/95 backdrop-blur-xl z-50 transition-transform duration-500 ease-in-out border-r border-rustic-tan/30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col justify-between h-full px-12 py-32">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li key={item.name}>
                <button
                  onClick={() => handleMenuClick(item.index)}
                  className={`text-rustic-cream font-serif text-3xl transition-all duration-300 transform hover:translate-x-2 block ${
                    item.index < 0
                      ? 'opacity-40 cursor-not-allowed'
                      : activeSlide === item.index
                      ? 'opacity-100 hover:opacity-70'
                      : 'opacity-60 hover:opacity-70'
                  }`}
                  disabled={item.index < 0}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-8">
            <div>
              <div className="flex gap-6">
                {socialIcons.map(({ Icon, label }) => (
                  <button
                    key={label}
                    className="text-rustic-cream hover:text-rustic-tan transition-colors duration-300 border border-rustic-tan/40 w-12 h-12 flex items-center justify-center transform rotate-45 hover:border-rustic-tan/70"
                    aria-label={label}
                  >
                    <Icon size={18} strokeWidth={1.5} className="-rotate-45" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-rustic-beige text-xs tracking-wider">PT | EN</p>
              <p className="text-rustic-beige text-xs tracking-wider">Livro de reclamações</p>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
