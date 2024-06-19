
import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import MovieList from './cine/MovieList'
import { MovieContext } from './context'

function App() {

  const [cardData, setCardData] = useState([])
  return (
    <>
    <MovieContext.Provider value={{cardData,setCardData}}>
    <Header/>
    <main>
		<div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
      <Sidebar/>
      <MovieList/>
    </div>
    </main>
    <Footer/>
    </MovieContext.Provider>
    </>
  )
}

export default App
