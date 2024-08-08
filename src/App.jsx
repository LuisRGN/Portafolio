import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [colorText, setColorText] = useState('text-black');
  const [bgColorClass, setBgColorClass] = useState('bg-white');
  const [aboutBgClass, setAboutBgClass] = useState('bg-[#c2c2c2d4]');
  const [navbarBgClass, setNavbarBgClass] = useState('custom-bg');
  const [sidebarBgClass, setSidebarBgClass] = useState('custom-bg');
  const [btnColorClass, setBtnColorClass] = useState('bg-[#242223]');
  const [stackColor, setStackColor] = useState('bg-[#242223]')
  const [isSunActive, setIsSunActive] = useState(true);

  const cambiarColor = () => {
    setBgColorClass(bgColorClass === 'bg-white' ? 'bg-[#262629]' : 'bg-white');
    setAboutBgClass(aboutBgClass === 'bg-[#c2c2c2d4]' ? 'bg-[#4c4c4c]' : 'bg-[#c2c2c2d4]');
    setNavbarBgClass(navbarBgClass === 'custom-bg' ? 'custom2-bg' : 'custom-bg');
    setSidebarBgClass(sidebarBgClass === 'custom-bg' ? 'custom2-bg' : 'custom-bg');
    setBtnColorClass(btnColorClass === 'bg-[#242223]' ? 'bg-[#000000] hover:bg-[#1b1942]' : 'bg-[#242223]');
    setStackColor(stackColor === 'bg-[#242223]' ? 'bg-[#000000]' : 'bg-[#242223]')
    setColorText(colorText === 'text-black' ? 'text-white' : 'text-black')
    setIsSunActive(!isSunActive);
  };

  return (
    <div className={` min-h-screen`}>
      <Navbar bgClass={navbarBgClass} />
      <Home bgColorClass={bgColorClass} colorText={colorText} />
      <About aboutBgClass={aboutBgClass} colorText={colorText} />
      <Projects bgColorClass={bgColorClass} btnColorClass={btnColorClass} colorText={colorText} stackColor={stackColor} />
      <Contact aboutBgClass={aboutBgClass} btnColorClass={btnColorClass} colorText={colorText} />
      <Footer bgClass={navbarBgClass} />
      <ScrollToTopButton btnColorClass={btnColorClass} />
      <div
        onClick={cambiarColor}
        className="fixed cursor-pointer left-4 bottom-4"
      >
        {isSunActive ? (
          <img src="/moon.svg" alt="sun" className={`h-10  rounded-full p-[0.30rem] transition duration-300 ${btnColorClass} hover:bg-[#1a25c2]`} />
        ) : (
          <img src="/sun.svg" alt="moon" className={`h-10  rounded-full p-[0.30rem] transition duration-300 ${btnColorClass}`} />
        )}
      </div>
    </div>
  );
}

export default App;
