import React from 'react'

const ContentOne = () => {
  return (
    <>
        <div className='text-center mt-10 sm:mt-0'>
          <p className='text-2xl py-2 sm:py-3 sm:text-4xl sm:font-mediun'>Welcome to <span className='text-blue-600	'>SigilFinance</span></p>
          <h1 className='text-5xl font-bold py-3 sm:text-7xl sm:py-3 sm:font-bold'>Defi Made Easy!</h1>
          <p className='text-lg py-3	sm:text-lg sm:py-3'>Sigil Finance removes the stress and complexity of managing a portfolio with the power of decentralized mutual funds.</p>
          <button className="mt-5 py-3 bg-blue-600 text-white sm:mt-0 sm:py-2 px-4 rounded-full sm:h-14 sm:w-36">Launch dApp</button>
        </div>
    </>
  )
}

export default ContentOne