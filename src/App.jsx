
import { useState,useReducer } from 'react'
import './App.css'
import Page from './Page' 

import { MovieContext ,ThemeContext } from './context'
import { cartReducer, initialState } from './reducers/CartReducers'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // const [cardData, setCardData] = useState([])
  const [darkMode, setDarkMode]= useState(true) 
  const [state,dispatch] = useReducer(cartReducer,initialState)
  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
    <MovieContext.Provider value={{state,dispatch}}>
      <Page/>
      <ToastContainer />
    </MovieContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}

export default App
