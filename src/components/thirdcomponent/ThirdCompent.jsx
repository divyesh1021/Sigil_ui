import React from 'react'
import TContentOne from './TContentOne';
import TContentTwo from './TContentTwo'

const Thirdcompent = () => {
  return (
    <>
      <div className='hidden sm:flex sm:py-14 sm:w-2/3'>
          <div className='sm:w-full'>
              <TContentOne/>
          </div>
          <div className='sm:w-full'>
              <TContentTwo/>
          </div>
      </div>

      {/* mobile view */}

      <div className='sm:hidden sm:py-14 sm:w-2/3'>
          <div className='sm:w-full'>
            <TContentTwo/>
          </div>
          <div className='sm:w-full'>
            <TContentOne/>
          </div>
      </div>
    </>
  )
}

export default Thirdcompent