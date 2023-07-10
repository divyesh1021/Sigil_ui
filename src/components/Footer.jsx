import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const Mode = useSelector((state)=> state.question)
  return (
    <>
        <div className={`sm:w-full sm:flex sm:justify-center ${Mode.theme == 'light' ? `bg-black text-white` : `bg-white text-black`}`}>
        {/* <div className={`content ${props.darkMode ? 'sm:bg-white sm:text-black bg-white text-black'  : 'sm:bg-black sm:text-white bg-black text-white'}`}> */}
            <p className='text-base sm:text-xl font-normal'>Copyright © 2023 <span className='ml-1 text-xl font-normal text-blue-600'> Sigil Finance </span>. All rights reserved.</p>
        </div>
    </>
  )
}

export default Footer