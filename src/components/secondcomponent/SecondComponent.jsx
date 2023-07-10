import React from 'react'
import ContentOne from './ContentOne'
import ContentTwo from './ContentTwo'

const SecondComponent = () => {
  return (
    <>
    <div className='hidden sm:flex sm:w-2/3 '>
      <div className='sm:w-full sm:mt-40 '>
        <ContentOne/>
      </div>
      <div className='sm:w-full sm:mt-14 mt-5'>
        <ContentTwo/>
      </div>
      {/* <div className='sm:w-full sm:mt-40'>
        <ContentOne/>
      </div> */}
    </div>

      {/* mobile view */}

    <div className='sm:hidden sm:w-2/3'>
      <div className='sm:w-full sm:mt-14 mt-5'>
        <ContentTwo/>
      </div>
      <div className='sm:w-full sm:mt-40 sm:hidden'>
        <ContentOne/>
      </div>
    </div>
    </>
  )
}

export default SecondComponent