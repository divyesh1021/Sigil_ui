import React from 'react'
import Earnsigil from './Earnsigil'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'

const index = () => {
  const Mode = useSelector((state)=>state.question)
  return (
    <>
    <div className={`${Mode.theme == 'light' ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col place-items-center px-5`}>
      <Header/>
      <Earnsigil/>
      <Footer/>
    </div>
    </>
  )
}

export default index