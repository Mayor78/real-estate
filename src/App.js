
import { MdNightlight } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import SlideTwo from './components/SlideTwo';
import { ThemeProvider } from './components/Theme';
import "./styles/navbar.css";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState("light");
  const [navbarBg, setNavbarBg] = useState(false);
  const [footerBg, setFooterBg] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setNavbarBg(currentScrollPos > 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
;
  return (
    <ThemeProvider theme={theme}>
       <div className={`App ${theme === 'light' ?  'light-theme' : 'dark-theme'}`}>
       <Navbar navbarBg={navbarBg} toggleTheme={toggleTheme} />
                
            <Carousel toggleTheme={toggleTheme}/>
            <Header/>
            <SlideTwo/>
            <Footer theme={theme} />

                
                <button onClick={toggleTheme}>
                                {theme === 'light' ? <MdNightlight /> : <IoMdSunny />}
                            </button>
     
      </div>
     </ThemeProvider>
  )
}

export default App
