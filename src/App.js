import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import SlideTwo from './components/SlideTwo'
import { ThemeProvider } from './components/Theme'

// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
      <Navbar/>
      <Carousel/>
      <Header/>
      <SlideTwo/>
      <Footer/>
      </div>
     </ThemeProvider>
  )
}

export default App
