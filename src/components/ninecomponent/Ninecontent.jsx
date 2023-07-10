import React from 'react'
import Image from 'next/image'
import Vec from '../../../public/Vector.png'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { RiBook2Fill } from 'react-icons/ri'
import Link from 'next/link'

const Ninecontent = () => {
  return (
    <>
        <div className=' sm:flex sm:justify-between sm:w-2/3 sm:py-20'>
            <div className='sm:flex sm:flex-col sm:w-1/3'>
                <div className='flex justify-center py-10 sm:flex sm:justify-start'>
                    <Image src={Vec}/>
                    <span className='text-2xl mt-1 font-bold ml-2'>SIGIL</span><span className='text-2xl font-light mt-1'>FINANCE</span>
                </div>
                <p className='flex text-center'>Building metaverse and NFT products to derive new kinds of value from crypto technology and to apply it to increasingly better use. Advancing our innovations to every part of the world.</p>
                <div className='flex py-5 sm:flex sm:py-5'>
                    <span className='bg-white text-black rounded-full h-10 w-10 px-2 sm:bg-white sm:text-black sm:rounded-full sm:h-10 sm:w-10 sm:px-2'><FaTelegramPlane className='h-8 w-5 sm:h-8 sm:w-5 mt-1'/></span>
                    <span className='bg-white text-black rounded-full h-10 w-10 px-2.5 sm:bg-white sm:text-black sm:rounded-full sm:h-10 sm:w-10 sm:px-2.5'><FaFacebookF className='h-5 w-5 sm:h-5 sm:w-5 mt-2.5' /></span>
                    <span className='bg-blue-600 text-white rounded-full h-10 w-10 px-2.5 sm:bg-blue-600 sm:text-white sm:rounded-full sm:h-10 sm:w-10 sm:px-2.5'><FaTwitter className='h-8 w-5 sm:h-8 sm:w-5 mt-1' /></span>
                    <span className='bg-white text-black rounded-full h-10 w-10 px-2.5  sm:bg-white sm:text-black sm:rounded-full sm:h-10 sm:w-10 sm:px-2.5'><RiBook2Fill className='h-8 w-5 sm:h-8 sm:w-5 mt-1' /></span>
                </div>
            </div>
            <div className='mt-8 sm:flex sm:flex-col'>
                <div>
                    <h1 className='text-xl font-bold text-center sm:text-xl sm:font-bold'>Navigation</h1>
                </div>
                <div className='flex flex-col text-center mt-5 sm:flex sm:flex-col'>
                    <Link href='' className='py-3'>Browse Pools</Link>
                    <Link href='' className=''>Create a Pool</Link>
                    <Link href='' className='py-3'>Stake $SIGIL</Link>
                    <Link href='' className=''>Portfolio</Link>
                    <Link href='' className='py-3'>Pool Wars</Link>
                </div>
            </div>
            <div className='mt-8'>
                <div className='text-center'>
                    <h1 className='text-xl font-bold '>QuickLinks</h1>
                </div>
                <div className='flex flex-col text-center mt-5 sm:flex sm:flex-col'>
                    <Link href='' className='py-3'>Buy $SIGIL</Link>
                    <Link href='' className=''>Documentation</Link>
                    <Link href='' className='py-3'>Trello</Link>
                </div>
            </div>
            <div className='py-10 sm:w-1/3'>
                <div className='text-center sm:text-center'>
                    <h1 className='text-2xl font-bold w-full pb-10 sm:text-2xl sm:font-bold sm:w-full sm:pb-10'>Virtual Wallet  on the go with Sigil Finance</h1>
                    <button className='bg-blue-600 text-white sm:bg-blue-600 sm:text-white rounded-full h-14 w-44'>Connect Wallet</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ninecontent