import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import HomeBanner from '../HomeBanner/HomeBanner'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

function MainPage() {
    const [translated, setTranslated] = useState(false)
    
    console.log(translated)
  return (
    <>
    <NavBar setTranslated={setTranslated}/>
    <HomeBanner language={translated}/>
    <Skills language={translated}/>
    <Projects language={translated}/>
    
    </>
  )
}

export default MainPage