import React from 'react'
import Image from 'next/image'
import i from "../../../public/Group 85.png"
const TContentOne = () => {
  return (
    <>
     <div className='mt-10'>
        <Image src={i} className='sm:scale-90'/>
     </div>
    </>
  )
}

export default TContentOne