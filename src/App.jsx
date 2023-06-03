import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import NavBar from './Components/NavBar/NavBar'
import HomeBanner from './Components/HomeBanner/HomeBanner'

library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils, faCircleArrowRight)

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
     <header>
      <NavBar/>
     </header>
     <main>
      <HomeBanner/>
     </main>
    </>
  )
}

export default App
