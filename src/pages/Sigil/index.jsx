import React from 'react'
import Header from '../../components/Header'
import Footer from "../../components/Footer"
import Sigil from "./Sigil.jsx"
import { useSelector } from 'react-redux'


const index = () => {

  const Mode = useSelector((state)=>state.question)
  
  return (
    <>
    <div className={`${Mode.theme == 'light' ? `bg-black text-white` : `bg-white text-black`} px-8 sm:px-0 sm:flex sm:place-items-center flex flex-col place-items-center`}>
    {/* <div className={`content ${darkMode ? 'sm:bg-white sm:text-black bg-white text-black'  : 'sm:bg-black sm:text-white bg-black text-white'}`}> */}
    {/* <div className={`${Mode.theme == 'light' ? `bg-black text-white` : `bg-white text-black`}`}> */}
      <Header/>
      <Sigil/>
      <Footer />
    </div>
      
    </>
  )
}

export default index