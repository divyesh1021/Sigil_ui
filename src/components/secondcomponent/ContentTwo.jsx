import React from 'react'
import Image from 'next/image'
import Cimg from '../../../public/Img.svg'

const ContentTwo = () => {
  return (
    <div className='sm:flex justify-end'>
        <Image className='sm:scale-100' alt='' src={Cimg} />
        {/* <h1 className='sm:flex justify-end'>hello</h1> */}
    </div>
  )
}

export default ContentTwo