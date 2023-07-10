import React from 'react'
import Image from 'next/image'
import Img from '../../../public/Group 117.png'
import { SiEthereum } from 'react-icons/si'
import { BiDollar } from 'react-icons/bi'
import { Progress, Space } from 'antd';

const Earnsigil = () => {

  const customFormat = (percent) => <span style={{ color: 'white' }}>{`${percent}%`}</span>;

  return (
    <>
    <div className='flex flex-col justify-center items-center mb-10'>
        <div className='px-8 flex flex-col justify-center items-center sm:w-2/3'>
            <h1 className='mt-10 font-medium text-4xl sm:font-semibold'>EARN $SIGIL TOKENS</h1>
            <p className='py-8 text-center text-xl font-normal sm:text-center sm:py-5'>$SIGIL Holders can stake their tokens to earn a portion of every trade that takes place on the Sigil Finance platform. Staking is a great way to effortlessly gain $SIGIL tokens.</p>
            <button className='bg-blue-600 rounded-3xl w-60 h-14 sm:bg-blue-600 sm:rounded-3xl sm:w-44 sm:h-10'>Learn More</button>
        </div>

        <div className='mt-14 w-72 sm:mt-10 sm:flex sm:w-4/5'>
          <div className='col-3 sm:w-full'>
            <div className="border border-sky-300 rounded-2xl">
              <p className='mt-5 ml-10 text-xl font-bold'>TVL</p>
              <div className='flex flex-col my-3'>
                <div className='flex ml-10'>
                  <span><Image src={Img}/></span>
                  <p className='ml-5 text-xl font-bold'>98,372,011</p> 
                </div>
                <div className='flex ml-10 mt-2'>
                  <SiEthereum className='bg-blue-600 rounded-full h-7 w-7 py-1'/>
                  <p className='ml-5 text-xl font-bold'>10,399,88</p> 
                </div>
                <div className='flex ml-10 mt-2'>
                  <BiDollar className='bg-blue-600 rounded-full h-7 w-7 py-1'/>
                  <p className='ml-5 text-xl font-bold'>18,925.19</p> 
                </div>
              </div>
            </div>
          </div>
          <div className='col-3 w-full '>
            <p className='mt-14 ml-28'>APY</p>
            <h1 className='ml-24 sm:ml-20 text-3xl font-semibold'>3.48%</h1>
          </div>
          <hr className='my-20' />
          <div className='col-3 w-full '>
            <p className='mt-14 ml-24'>STAKERS</p>
            <h1 className='ml-28 text-4xl font-semibold'>44</h1>
          </div>
          <hr className='my-20' />
          <div className='col-3 w-full'>
            <p className='mt-14 ml-32 '>STAKED</p>
            <h1 className='ml-28 text-4xl font-semibold'>9.84%</h1>
          </div>
        </div>

        <div className='mt-20 mx-10 flex flex-col md:flex-row sm:flex sm:mt-20 sm:w-4/5 sm:mx-0'>
          <div className='col-3 w-full border border-gray-500 rounded-lg'>
            <div className='my-10 px-11 sm:px-5'>
              <h1 className='text-xl font-bold'>New Stake</h1>
              <input type="text" className='border border-gray-500 bg-transparent mt-5 rounded-lg h-11' placeholder='Your Amount' />
              <p className='my-2'>Your balance:00.000</p>
              <button className='rounded-lg font-medium bg-blue-600 w-64 h-10'>STAKE</button>
              <p className='mt-3'>Your tokens will be locked away for at least 60 days.</p>
            </div>
          </div>
          <div className='my-8 col-3 w-full border border-gray-500 sm:mx-5 sm:my-0 rounded-lg'>
            <div className='flex  flex-col justify-center text-center px-11 sm:px-5'>
              <h1 className='mt-5 text-xl font-medium'>1000.00 $Sigil</h1>
              <p>+2483.99 $Sigil</p>
              <div className='my-4'>
                <Space wrap >
                  <Progress type="circle" percent={49.98} trailColor='grey' format={customFormat} />
                </Space>
              </div>
              <p>2days 3hours 48minutes</p>
              <button className='rounded-lg font-medium bg-blue-600 w-64 h-10 my-4 sm:my-2'>End Stake</button>
            </div>
          </div>
          <div className='col-3 w-full border border-gray-500 rounded-lg'>
            <div className='flex  flex-col justify-center text-center px-11 sm:px-5'>
              <h1 className='mt-5 text-xl font-medium'>3600.00 $Sigil</h1>
              <p>+283.99 $Sigil</p>
              <div className='my-4'>
                <Space wrap >
                  <Progress type="circle" percent={69.75} trailColor='grey' format={customFormat} />
                </Space>
              </div>
              <p>10days 6hours 48minutes</p>
              <button className='rounded-lg font-medium bg-blue-600 w-64 h-10 my-4 sm:my-2'>End Stake</button>
            </div>
          </div>
          <div className='my-8 col-3 w-full border border-gray-500 sm:mx-5 sm:my-0 rounded-lg'>
            <div className='flex  flex-col justify-center text-center px-11 sm:px-5'>
              <h1 className='mt-5 text-xl font-medium'>300.00 $Sigil</h1>
              <p>+283.99 $Sigil</p>
              <div className='my-4'>
                <Space wrap >
                  <Progress type="circle" percent={25.54} trailColor='grey' format={customFormat} />
                </Space>
              </div>
              <p>2days 3hours 48minutes</p>
              <button className='rounded-lg font-medium bg-blue-600 w-64 h-10 my-4 sm:my-2'>End Stake</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Earnsigil