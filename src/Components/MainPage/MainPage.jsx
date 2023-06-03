import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import HomeBanner from '../HomeBanner/HomeBanner'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function MainPage() {
    const [translated, setTranslated] = useState(false)
    
    console.log(translated)
  return (
    <>
    <NavBar setTranslated={setTranslated} language = {translated}/>
    <HomeBanner language={translated}/>
    <Skills language={translated}/>
    <Projects language={translated}/>
    <Contact language={translated}/>
    <Footer/>
    </>
  )
}

export default MainPage