import React from 'react'
import Image from 'next/image'
import Sigilpool from '../../../public/Icon.svg'
import Eth from '../../../public/Group 89.png'
import Layer1 from '../../../public/Layer_1.svg'


const Fifthcomponent = () => {
  return (
    <>
        <div className='mt-14 sm:flex sm:w-2/3 sm:px-8 sm:mt-14'>
            <div className='sm:mt-10 sm:w-full'>
                <div className='flex justify-center sm:flex sm:justify-center'>
                    <Image src={Sigilpool}/>
                </div>
                <div className=''>
                    <h1 className='py-4 text-center text-2xl font-semibold sm:text-center sm:text-2xl sm:font-medium sm:py-5'>Select a Sigil pool</h1>
                    <p className='text-center sm:text-center'>You can view a pool's past performance and risk rating to make your decision</p>
                </div>
            </div>
            <div className='mt-10 sm:w-full'>
                <div className='flex justify-center sm:flex sm:justify-center'>
                    <Image src={Eth}/>
                </div>
                <div>
                    <h1 className='py-4 text-center text-2xl font-semibold sm:text-center sm:text-2xl sm:font-medium sm:py-5'>Deposit ETH into the pool</h1>
                    <p className='text-center sm:text-center'>On deposit, you will receive a tokenized share in the pool proportionate to the value you put in.</p>
                </div>
            </div>
            <div className='mt-10 sm:w-full'>
                <div className='flex justify-center  sm:flex sm:justify-center'>
                    <Image src={Layer1}/>
                </div>
                <div>
                    <h1 className='py-4 text-center text-2xl font-semibold sm:text-center sm:text-2xl sm:font-medium sm:py-5'>Sit back and relax!</h1>
                    <p className='text-center sm:text-center'>Your funds will be traded for you by the pool's manager</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Fifthcomponent