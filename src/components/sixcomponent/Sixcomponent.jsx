import React from 'react'
import Image from 'next/image'
import Yield from '../../../public/Group 98.svg'

const Sixcomponent = () => {
  return (
    <>
        <div className='w-full py-12 sm:py-12 sm:w-2/3 '>
            <div className='flex flex-col items-center w-full sm:flex sm:flex-col sm:items-center sm:w-full'>
                <div className='py-5'>
                    <Image src={Yield} />
                </div>
                <div className='sm:py-14'>
                    <h1 className='text-3xl font-bold sm:font-bold	sm:text-4xl'>Earn Real Yield!</h1>
                </div>
            </div>
            <div className='flex w-full justify-around py-10 sm:flex sm:justify-evenly sm:w-full'>
                <div>
                    <p className='text-center sm:text-center'>APY</p>
                    <h1 className='text-3xl font-semibold sm:text-4xl sm:font-semibold'>3.48%</h1>
                </div>
                
                <div className=''>
                    <p className='text-center sm:text-center'>TVL</p>
                    <h1 className='text-3xl font-semibold sm:text-4xl sm:font-semibold'>$15,909.65</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sixcomponent