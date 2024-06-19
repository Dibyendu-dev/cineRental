
import { useState } from 'react'
import './App.css'
import Page from './Page' 

import { MovieContext ,ThemeContext } from './context'

function App() {

  const [cardData, setCardData] = useState([])
  const [darkMode, setDarkMode]= useState(true)
  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
    <MovieContext.Provider value={{cardData,setCardData}}>
      <Page/>
    </MovieContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}

export default App
