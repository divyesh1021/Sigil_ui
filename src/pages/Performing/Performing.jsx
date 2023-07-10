import React from 'react'
import { SiEthereum } from 'react-icons/si'
import { CiSearch } from 'react-icons/ci'
import { useSelector } from 'react-redux'

const Performing = () => {

    const Mode = useSelector((state)=>state.question)
    
  return (
    <>
    <div className='w-full sm:w-2/3'>
        <div className='w-full'>
            <h1 className='mt-20 text-3xl font-bold'>Top Performing Pools</h1>
            <div className='mt-10 sm:flex sm:mt-10'>
                <div className='sm:w-full border border-blue-500 rounded-lg px-5 py-4'>
                    <h1 className='text-center text-xl font-bold'>QuamfyWhale's Low...</h1>
                    <div>Chart</div>
                    <div className='flex'>
                        <div className='w-full'>
                            <h1 className='text-xl font-medium text-green-500'>+11.99%</h1>
                            <p>Total Profit</p>
                        </div>
                        <div className='w-full'>
                            <h1>45</h1>
                            <p>Active Days</p>
                        </div>
                    </div>
                    <div className='flex my-5'>
                        <div className='w-full'>
                            <div className='flex'>
                                <span><SiEthereum className='text-xl mt-1 '/></span>
                                <h1 className='text-xl font-medium'>11.99</h1>
                            </div>
                            <p>AUM</p>
                        </div>
                        <div className='w-full'>
                            <h1>$21,916.00</h1>
                            <p>AUM</p>
                        </div>
                    </div>
                    <button className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} font-bold w-full bg-blue-600 rounded-xl h-12`}>Explore Pool</button>
                </div>
                <div className='w-full border border-blue-500 rounded-lg px-5 py-4 my-10 sm:my-0 sm:mx-2'>
                    <h1 className='text-center text-xl font-bold'>Callisto Capital</h1>
                    <div>chart</div>
                    <div className='flex'>
                        <div className='w-full'>
                            <h1 className='text-xl font-medium text-green-500'>+0.23%</h1>
                            <p>Total Profit</p>
                        </div>
                        <div className='w-full'>
                            <h1>43</h1>
                            <p>Active Days</p>
                        </div>
                    </div>
                    <div className='flex my-5'>
                        <div className='w-full'>
                            <div className='flex'>
                                <span><SiEthereum className='text-xl mt-1 '/></span>
                                <h1 className='text-xl font-medium'>0.24 ETH</h1>
                            </div>
                            <p>AUM</p>
                        </div>
                        <div className='w-full'>
                            <h1>$438.00</h1>
                            <p>AUM</p>
                        </div>
                    </div>
                    <button className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} font-bold w-full bg-blue-600 rounded-xl h-12`}>Explore Pool</button>
                </div>
                <div className='w-full border border-blue-500 rounded-lg px-5 py-4'>
                    <h1 className='text-center text-xl font-bold'>ZEdge Capital | Thema...</h1>
                    <div>chart</div>
                    <div className='flex'>
                        <div className='w-full'>
                            <h1 className='text-xl font-medium text-green-500'>+0.209%</h1>
                            <p>Total Profit</p>
                        </div>
                        <div className='w-full'>
                            <h1>42</h1>
                            <p>Active Days</p>
                        </div>
                    </div>
                    <div className='flex my-5'>
                        <div className='w-full'>
                            <div className='flex'>
                                <span><SiEthereum className='text-xl mt-1 '/></span>
                                <h1 className='text-xl font-medium'>0.208 ETH</h1>
                            </div>
                            <p>AUM</p>
                        </div>
                        <div className='w-full'>
                            <h1>$379.00</h1>
                            <p>AUM</p>
                        </div>
                    </div>
                    <button className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} font-bold w-full bg-blue-600 rounded-xl h-12`}>Explore Pool</button>
                </div>
            </div>
        </div>
        <div className='hidden sm:block'>
            <div className='sm:flex sm:mt-14'>
                <div className='sm:w-full'>
                    <h1 className='sm:text-3xl sm:font-semibold'>Discover Pools</h1>
                </div>
                <div className='sm:flex sm:w-full'>
                    <div className='sm:flex sm:w-full'>
                        <input type="text" placeholder='Search Pool' name="" id="" className='sm:bg-transparent border-y-2 border-l-2 border-blue-600 rounded-l-xl sm:h-12 sm:ml-14'/>
                        <div className='border-y-2 border-r-2 sm:border-blue-600 sm:rounded-r-xl'><CiSearch className='sm:text-3xl sm:mt-1'/></div>
                    </div>
                    <div className='sm:flex sm:justify-end sm:w-full'>
                        <input type="checkbox" className='sm:text-end' />
                        <h1 className='sm:mt-3 sm:ml-3'>Show Empty Pools</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className='hidden sm:block sm:w-full sm:mt-10'>
            <table>
                <thead>
                    <tr className='sm:border-y-2 sm:border-blue-600 sm:h-16'>
                        <th>Name</th>
                        <th><div className='sm:mx-36'>AUM</div></th>
                        <th>1h %</th>
                        <th><div className='sm:mx-24'>24h %</div></th>
                        <th>7d %</th>
                        <th><div className='sm:mx-24'>Total %</div></th>
                        <th>Days Active</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`${Mode.theme == 'light' ? 'sm:bg-slate-700 sm:text-white sm:border-8 sm:border-black' : 'sm:bg-white sm:text-black sm:border-8 sm:border-white'} sm:h-20 sm:border-x-8 `}>

                    {/* <tr className='sm:bg-slate-700 sm:h-20 sm:border-x-8 sm:border-black'> */}
                        <td>QuamfyWhale's Low Cap Gems</td>
                        <td>
                            <div className='sm:text-center'>
                                <div className='sm:flex'>
                                    <SiEthereum className='sm:ml-24 sm:text-xl' />
                                    <h1>11.9994 ETH</h1>
                                </div>
                                <div>
                                    <button className='sm:w-36 sm:mt-1 sm:border-2 sm:border-blue-700 sm:rounded-xl sm:px-2'>$21,916.00</button>
                                </div>
                            </div>
                        </td>
                        <td><div className='sm:text-center sm:text-green-500'>+47.18</div></td>
                        <td><div className='sm:text-center text-red-500'>-5.42</div></td>
                        <td><div className='sm:text-center text-green-500'>+56.37</div></td>
                        <td><div className='sm:text-center text-green-500'>+11.99</div></td>
                        <td><div className='sm:text-center'>45</div></td>
                    </tr>

                    {/* <tr className='sm:bg-slate-700 sm:h-20 sm:border-8 sm:border-black'> */}
                    <tr className={`${Mode.theme == 'light' ? 'sm:bg-slate-700 sm:text-white sm:border-8 sm:border-black' : 'sm:bg-white sm:text-black sm:border-8 sm:border-white'} sm:h-20 sm:border-x-8 `}>
                        <td>Callisto Capital</td>
                        <td>
                            <div className='sm:text-center'>
                                <div className='sm:flex'>
                                    <SiEthereum className='sm:ml-24 sm:text-xl' />
                                    <h1>0.24 ETH</h1>
                                </div>
                                <div>
                                    <button className='sm:w-36 sm:mt-1 sm:border-2 sm:border-blue-700 sm:rounded-xl sm:px-2'>$438.00</button>
                                </div>
                            </div>
                        </td>
                        <td><div className='sm:text-center sm:text-green-500'>+0.27</div></td>
                        <td><div className='sm:text-center text-green-500'>+4.79</div></td>
                        <td><div className='sm:text-center text-red-500'>-3.13</div></td>
                        <td><div className='sm:text-center text-green-500'>+0.23</div></td>
                        <td><div className='sm:text-center'>43</div></td>
                    </tr>

                    {/* <tr className='sm:bg-slate-700 sm:h-20 sm:border-8 sm:border-black'> */}
                    <tr className={`${Mode.theme == 'light' ? 'sm:bg-slate-700 sm:text-white sm:border-8 sm:border-black' : 'sm:bg-white sm:text-black sm:border-8 sm:border-white'} sm:h-20 sm:border-x-8 `}>
                        <td>ZEdge Capital | Thematics: Artificial Intelligence</td>
                        <td>
                            <div className='sm:text-center'>
                                <div className='sm:flex'>
                                    <SiEthereum className='sm:ml-24 sm:text-xl' />
                                    <h1>0.208 ETH</h1>
                                </div>
                                <div>
                                    <button className='sm:w-36 sm:mt-1 sm:border-2 sm:border-blue-700 sm:rounded-xl sm:px-2'>$379.00</button>
                                </div>
                            </div>
                        </td>
                        <td><div className='sm:text-center sm:text-red-500'>-0.15</div></td>
                        <td><div className='sm:text-center text-red-500'>-16.22</div></td>
                        <td><div className='sm:text-center text-red-500'>-9.42</div></td>
                        <td><div className='sm:text-center text-green-500'>+0.20</div></td>
                        <td><div className='sm:text-center'>42</div></td>
                    </tr>

                    {/* <tr className='sm:bg-slate-700 sm:h-20 sm:border-8 sm:border-black'> */}
                    <tr className={`${Mode.theme == 'light' ? 'sm:bg-slate-700 sm:text-white sm:border-8 sm:border-black' : 'sm:bg-white sm:text-black sm:border-8 sm:border-white'} sm:h-20 sm:border-x-8 `}>
                        <td>Kujis swimming pool</td>
                        <td>
                            <div className='sm:text-center'>
                                <div className='sm:flex'>
                                    <SiEthereum className='sm:ml-24 sm:text-xl' />
                                    <h1>0.1708 ETH</h1>
                                </div>
                                <div>
                                    <button className='sm:w-36 sm:mt-1 sm:border-2 sm:border-blue-700 sm:rounded-xl sm:px-2'>$311.00</button>
                                </div>
                            </div>
                        </td>
                        <td><div className='sm:text-center sm:text-green-500'>0.00</div></td>
                        <td><div className='sm:text-center text-red-500'>-1.02</div></td>
                        <td><div className='sm:text-center text-green-500'>+0.50</div></td>
                        <td><div className='sm:text-center text-green-500'>+0.16</div></td>
                        <td><div className='sm:text-center'>81</div></td>
                    </tr>

                    {/* <tr className='sm:bg-slate-700 sm:h-20 sm:border-8 sm:border-black'> */}
                    <tr className={`${Mode.theme == 'light' ? 'sm:bg-slate-700 sm:text-white sm:border-8 sm:border-black' : 'sm:bg-white sm:text-black sm:border-8 sm:border-white'} sm:h-20 `}>
                        <td>WealthWave's AstralAssets: TokenTreasure& DeFiDynasty</td>
                        <td>
                            <div className='sm:text-center'>
                                <div className='sm:flex'>
                                    <SiEthereum className='sm:ml-24 sm:text-xl' />
                                    <h1>0.0637 ETH</h1>
                                </div>
                                <div>
                                    <button className='sm:w-36 sm:mt-1 sm:border-2 sm:border-blue-700 sm:rounded-xl sm:px-2'>$116.00</button>
                                </div>
                            </div>
                        </td>
                        <td><div className='sm:text-center sm:text-red-500'>-0.06</div></td>
                        <td><div className='sm:text-center text-green-500'>+1.94</div></td>
                        <td><div className='sm:text-center text-red-500'>-11.52</div></td>
                        <td><div className='sm:text-center text-green-500'>+0.05</div></td>
                        <td><div className='sm:text-center'>47</div></td>
                    </tr>
                </tbody>
            </table>
            <button className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} sm:w-full sm:rounded-lg sm:bg-blue-700 sm:h-12 sm:font-semibold sm:mb-16`}>Load More</button>
        </div>

        <div className='sm:hidden block mb-7'>
            <h1 className='text-xl font-bold my-14'>Discover Pools</h1>
            <div className='border border-blue-700 py-5'>
                <div className='flex px-6'>
                    <h1 className='text-lg w-44 font-medium'>Name:</h1>
                    <h1 className='text-lg w-full font-medium'>Callisto Capital</h1>
                </div>
                <div className='flex px-6 my-4'>
                    <h1 className='text-lg w-44 font-medium'>AUM:</h1>
                    <div className='flex w-full'>
                        <SiEthereum className='mt-1 text-xl mr-1'/>
                        <h1 className='text-lg font-medium'>0.24 ETH</h1>
                        <button className='border-2 border-blue-700 rounded-lg ml-5 w-28 h-9 text-lg font-semibold'>$438.00</button>
                    </div>
                </div>
                <div className='flex px-6'>
                    <h1 className='text-lg w-44 font-medium'>1h %:</h1>
                    <h1 className='text-lg w-full font-medium text-green-500'>+0.27</h1>
                </div>
                <div className='flex px-6 my-4'>
                    <h1 className='text-lg w-44 font-medium'>24h %:</h1>
                    <h1 className='text-lg w-full font-medium text-green-500'>+4.79</h1>
                </div>
                <div className='flex px-6'>
                    <h1 className='text-lg w-44 font-medium'>7d %:</h1>
                    <h1 className='text-lg w-full font-medium text-red-500'>-3.13</h1>
                </div>
                <div className='flex px-6 my-4'>
                    <h1 className='text-lg w-44 font-medium'>Total %:</h1>
                    <h1 className='text-lg w-full font-medium text-green-500'>+0.23</h1>
                </div>
                <div className='flex px-6'>
                    <h1 className='text-lg w-44 font-medium'>Days Active :</h1>
                    <h1 className='text-lg w-full font-medium'>43</h1>
                </div>
            </div>

            <div className='border border-blue-700 py-5 my-7'>
                <div className='flex px-6'>
                    <h1 className='text-lg w-44 font-medium'>Name:</h1>
                    <h1 className='text-lg w-full font-medium'>Callisto Capital</h1>
                </div>
                <div className='flex px-6 my-4'>
                    <h1 className='text-lg w-44 font-medium'>AUM:</h1>
                    <div className='flex w-full'>
                        <SiEthereum className='mt-1 text-xl mr-1'/>
                        <h1 className='text-lg font-medium'>0.24 ETH</h1>
                        <button className='border-2 border-blue-700 rounded-lg ml-5 w-28 h-9 text-lg font-semibold'>$438.00</button>
                    </div>
                </div>
                <div className='flex px-6'>
                    <h1 className='text-lg w-44 font-medium'>1h %:</h1>
                    <h1 className='text-lg w-full font-medium text-green-500'>+0.27</h1>
                </div>
                <div className='flex px-6 my-4'>
                    <h1 className='text-lg w-44 font-medium'>24h %:</h1>
                    <h1 className='text-lg w-full font-medium text-green-500'>+4.79</h1>
                </div>
                <div className='flex px-6'>
                    <h1 className='text-lg w-44 font-medium'>7d %:</h1>
                    <h1 className='text-lg w-full font-medium text-red-500'>-3.13</h1>
                </div>
                <div className='flex px-6 my-4'>
                    <h1 className='text-lg w-44 font-medium'>Total %:</h1>
                    <h1 className='text-lg w-full font-medium text-green-500'>+0.23</h1>
                </div>
                <div className='flex px-6'>
                    <h1 className='text-lg w-44 font-medium'>Days Active :</h1>
                    <h1 className='text-lg w-full font-medium'>43</h1>
                </div>
            </div>
            <button className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} bg-blue-600 font-bold text-xl rounded-lg w-full h-14`}>Load More</button>
        </div>
    </div>
    </>
  )
}

export default Performing