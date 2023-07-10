import React from 'react'
import Image from 'next/image'
import img from '../../../public/Img.png'


const Sevenconent = () => {
  return (
    <>
        <div className=' w-full sm:flex sm:w-2/3'>
            <div className='sm:w-full'>
                <Image src={img}/>
            </div>
            <div className='text-center sm:w-full sm:ml-20 sm:my-36'>
                <h1 className='font-bold text-4xl sm:font-bold sm:text-4xl'>$SIGIL</h1>
                <p className='mt-5 sm:py-5'>$SIGIL is the token at the heart of the Sigil Finance. It provides utility to the platform and <span className='text-blue-600 sm:text-blue-600'>rewards its holders</span>, giving the community 
                    something to rally around.
                    You can stake $SIGIL to <span className='text-blue-600 sm:text-blue-600'>earn platform fees</span> on Sigil.</p>
                <div className='py-10'>
                    <button className="bg-blue-600 text-white rounded-full h-14 w-36">Tokenomics</button>
                    <button className='ml-5 border-2 rounded-full h-14 w-36'>Buy$SIGIL</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sevenconent