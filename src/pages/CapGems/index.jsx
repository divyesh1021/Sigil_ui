import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CapGems from './CapGems'
import { useSelector } from 'react-redux'

const index = () => {
    
    const Mode = useSelector((state)=>state.question)

  return (
    <>
    <div className={`${Mode.theme == 'light' ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col place-items-center px-5`}>
        <Header />
        <CapGems />
        <Footer />
    </div>
    </>
  )
}

export default index