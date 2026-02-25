import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Slider from './components/Slider';
import Header from './components/Header';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToHome = () => {
    setActiveSlide(0);
    setBackgroundImage('https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {backgroundImage && (
        <>
          <div
            className="fixed inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="fixed inset-0 bg-rustic-dark/60 z-0" />
        </>
      )}
      <Header
        onMenuClick={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        onLogoClick={goToHome}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <Slider
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        setBackgroundImage={setBackgroundImage}
      />
    </div>
  );
}

export default App;
