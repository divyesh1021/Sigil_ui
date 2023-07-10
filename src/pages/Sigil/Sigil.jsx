import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import { SiEthereum } from "react-icons/si"
import { MdOutlineSwapVert } from "react-icons/md"
import Image from 'next/image'
import img from '../../../public/Group 118.png'



const Sigil = () => {
    
    const Mode = useSelector((state)=>state.question)

    const[isSwapped,setIsSwapped] = useState(false)

    const handleswap = () => {
        setIsSwapped(!isSwapped)
        console.log('hello');
    }

    const background = 'bg-blue-700';

  return (
    <>
        <div className={`${Mode.theme == 'light' ? `bg-black text-white sm:mb-24 sm:mt-14` : `bg-white text-black sm:mb-24 sm:mt-14` } sm:w-2/3 `}>
            <div className='text-center sm:text-center sm:py-5'>
                <h1 className='mt-10 text-3xl sm:font-bold sm:mt-0'>Swap for $SIGIL</h1>
                <p className=''>MATIC is used to pay the transactions fee.</p>
            </div>
            <div className='mt-16 sm:mx-72 rounded-2xl border-indigo-500 border-2 sm:py-8 '>
                {isSwapped ? 
                <div className={`${Mode.theme == 'light' ? `bg-slate-800 rounded-lg m-6 -mb-4 sm:bg-slate-800 sm:rounded-lg sm:mx-10 sm:-mb-4`:`rounded-lg m-6 -mb-4 bg-white text-black sm:rounded-lg sm:mx-10 sm:-mb-4`}`}>
                    <div className='px-4 py-6 sm:flex flex-col sm:mx-7 sm:py-5 '>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>To</label>
                        <div className='mt-1 flex sm:flex'>
                            <div className={`${Mode.theme == 'light' ? `bg-white py-3 rounded-l-xl sm:bg-white sm:py-3` : `bg-slate-100 py-3 rounded-l-xl sm:bg-slate-100 sm:py-3`}`}>
                                <Image src={img} className='h-8 w-9 mx-3'/>
                            </div>
                            <select name="" className={`${Mode.theme == 'light' ? `bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                             <option value="" className=''>SIGIL</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 sm:w-4/5 rounded-r-xl h-14' placeholder='SIGIL Amount' />
                        </div>
                        <p className='my-2'>$SIGIL Balance: 0</p>
                    </div>     
                </div> :
                <div className={`${Mode.theme == 'light' ? `bg-slate-800 rounded-lg m-6 -mb-4 sm:bg-slate-800 sm:rounded-lg sm:mx-10 sm:-mb-4`:`bg-white text-black rounded-lg m-6 -mb-4 sm:rounded-lg sm:mx-10 sm:-mb-4`}`}>
                    <div className='px-4 py-6 sm:flex flex-col sm:mx-7 sm:py-5'>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>From</label>
                        <div className='mt-1 flex sm:flex'>
                            <span className={`${Mode.theme == 'light' ? `bg-white sm:bg-white sm:py-3 rounded-l-xl`:`bg-slate-100 sm:py-3 rounded-l-xl`}`}><SiEthereum className='ml-3 mr-1 bg-blue-600 mt-3 sm:bg-blue-600 rounded-full w-8 h-8 py-1 sm:mt-0' /></span>
                            <select name="" className={`${Mode.theme == 'light' ? `bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                                <option value="" className='sm:w-'>ETH</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 sm:w-4/5 rounded-r-xl h-14' placeholder='ETH Amount' />
                        </div>
                        <p className='my-2'>ETH Balance: 0</p>
                    </div>     
                </div>
                }
                {/* <div className={`${Mode.theme == 'light' ? `sm:bg-slate-800 sm:rounded-lg sm:mx-10 -mb-4`:`sm:bg-white text-black sm:rounded-lg sm:mx-10 -mb-4`}`}>
                    <div className='sm:flex flex-col sm:mx-7 sm:py-5'>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>From</label>
                        <div className='sm:flex'>
                            <span className={`${Mode.theme == 'light' ? `sm:bg-white sm:py-3 rounded-l-xl`:`bg-slate-100 sm:py-3 rounded-l-xl`}`}><SiEthereum className='sm:bg-blue-600 rounded-full w-8 h-8 py-1 sm:mx-3' /></span>
                            <select name="" className={`${Mode.theme == 'light' ? `bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                                <option value="" className='sm:w-'>ETH</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 sm:w-4/5 rounded-r-xl' placeholder='ETH Amount' />
                        </div>
                        <p className='my-2'>ETH Balance: 0</p>
                    </div>     
                </div> */}
                <div className='flex sm:flex justify-center'>
                    <div className={`${Mode.theme == 'light' ? `text-black bg-white rounded-full w-12` : `bg-blue-600 text-white rounded-full w-12`}`}>
                        <MdOutlineSwapVert className='text-5xl' onClick={handleswap}/>
                    </div>
                </div>

                {isSwapped ?
                <div className={`${Mode.theme == 'light' ? `bg-slate-800 rounded-lg m-6 -mt-4 sm:bg-slate-800 sm:rounded-lg sm:mx-10 sm:-mt-4`:`rounded-lg m-6 -mt-4 bg-white text-black sm:rounded-lg sm:mx-10 sm:-mt-4`}`}>
                    <div className='px-4 py-6 sm:flex flex-col sm:mx-7 sm:py-5'>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>From</label>
                        <div className='mt-1 flex sm:flex'>
                            <span className={`${Mode.theme == 'light' ? `bg-white sm:bg-white sm:py-3 rounded-l-xl`:`bg-slate-100 sm:bg-slate-100 sm:py-3 rounded-l-xl`}`}><SiEthereum className='ml-3 mr-1 bg-blue-600 mt-3  sm:bg-blue-600 rounded-full w-8 h-8 py-1 sm:mt-0' /></span>
                            <select name="" className={`${Mode.theme == 'light' ? ` bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                                <option value="" className=''>ETH</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 h-14 sm:w-4/5 rounded-r-xl' placeholder='ETH Amount' />
                        </div>
                        <p className='my-2'>ETH Balance: 0</p>
                    </div>     
                </div>:
                <div className={`${Mode.theme == 'light' ? `bg-slate-800 rounded-lg m-6 -mt-4 sm:bg-slate-800 sm:rounded-lg sm:mx-10 sm:-mt-4`:`bg-white text-black rounded-lg m-6 -mt-4 sm:rounded-lg sm:mx-10 sm:-mt-4`}`}>
                    <div className='px-4 py-6 sm:flex flex-col sm:mx-7 sm:py-5'>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>To</label>
                        <div className='mt-1 flex sm:flex'>
                            <div className={`${Mode.theme == 'light' ? `bg-white py-3 sm:bg-white  sm:py-3 rounded-l-xl` : `bg-slate-100 py-3 sm:bg-slate-100 sm:py-3 rounded-l-xl`}`}>
                                <Image src={img} className='h-8 w-9 mx-3 '/>
                            </div>
                            <select name="" className={`${Mode.theme == 'light' ? `bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                                <option value="" className=''>SIGIL</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 sm:w-4/5 rounded-r-xl h-14' placeholder='SIGIL Amount' />
                        </div>
                        <p className='my-2'>$SIGIL Balance: 0</p>
                    </div>     
                </div>
                }
                <div className='sm:mx-10'>
                    <button className={`bg-blue-700 w-11/12 mx-5 my-3 sm:my-0 sm:mx-0 sm:mt-7 sm:w-full h-14 rounded-lg`}>SWAP</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sigil

// import React,{ useState } from 'react'
// import { SiEthereum } from "react-icons/si";
// import { MdOutlineSwapVert } from "react-icons/md";
// import Image from 'next/image';
// import img from '../../../public/Group 117.png'


// const Sigil = () => {

//   const [isSwapped, setIsSwapped] = useState(false);

//   const handleSwap = () => {
//     setIsSwapped(!isSwapped);
//     console.log('hello');
//   };

//   return (
//     <>
//     <div className='sm:flex sm:flex-col sm:w-2/3'>
//       <div className='sm:text-center'>
//           <h1 className='sm:text-3xl sm:font-bold'>Swap for $SIGIL</h1>
//           <p>MATIC is used to pay the transactions fee.</p>
//       </div>

//       <div className='sm:mx-auto sm:rounded-2xl sm:border-2 sm:w-1/2'>

//       {isSwapped ? <div className='sm:mx-auto sm:w-11/12 sm:bg-slate-800 sm:mt-8'>
//         <div className='sm:mt-5'>
//           <label className='sm:ml-5'>To</label>
//           <div className='sm:flex'>
//             <div>
//               <Image src={img} alt="" />
//             </div>
//             <select>
//               <option value="option1">SIGIL</option>
//             </select>
//             <input className='' type="text" placeholder='SIGIL Amount'/>
//           </div>
//           <p>$SIGIL Balance:0</p>
//         </div>
//         </div> :
//         <div id={isSwapped ? 'div2' : 'div1'} className='sm:mx-auto sm:w-11/12 sm:bg-slate-800'>
//         <label htmlFor="">From</label>
//         <div className='sm:flex sm:mx-auto'>
//           <span  id="basic-addon1"><SiEthereum /></span>
//           <select  id="" >
//             <option value="option1">ETH</option>
//           </select>
//           <input className='' type="text" placeholder='ETH Amount'/>
//           {/* <span className="">ETH Amount</span> */}
//         </div>
//         <p>ETH Balance:0</p>
//       </div>
//         }
        
//         {/* <div div className='Swapfrom' id={isSwapped ? 'div2' : 'div1'}>
//           <label htmlFor="">From</label>
//           <div className='Swapfrominput'>
//             <span className="input-group-text " id="basic-addon1"><SiEthereum style={{backgroundColor:"#006DF8",fontSize:"27px",borderRadius:"30px",marginTop:"15px",height:"24px",padding:"4px",width:"24px"}}/></span>
//             <select className='selectClass' id="" style={{height:"55px",width:"137.22px",color:"black"}}>
//               <option value="option1">ETH</option>
//             </select>
//             <input className='' type="text" placeholder='ETH Amount'/>
           
//           </div>
//           <p>ETH Balance:0</p>
//         </div> */}
//         <div  onClick={handleSwap}>
//           <MdOutlineSwapVert />
//         </div>

// {/*         
//         <div div className='Swapfrom' id={isSwapped ? 'div1' : 'div2'}>
//           <label htmlFor="">To</label>
//           <div className='Swapfrominput'>
//               <div className='hello' style={{height:"55px",width:"40px",backgroundColor:"#EEEEEE",paddingTop:"15px",paddingLeft:"10px"}}>
//               <Image src={img} alt="" style={{minHeight:"90%"}}/>
//             </div>
//             <select className='selectClass' id="" style={{height:"55px",width:"137.22px",color:"black"}}>
//               <option value="option1">SIGIL</option>
//             </select>
//             <input className='' type="text" placeholder='SIGIL Amount'/>
//           </div>
//           <p>$SIGIL Balance:0</p>
//         </div> */}

//       {isSwapped ? 
//       <div  id={isSwapped ? 'div2' : 'div1'} className='sm:mx-auto sm:w-11/12 sm:bg-slate-800'>
//       <label htmlFor="" className=''>From</label>
//       <div className='sm:flex'>
//         <span id="basic-addon1"><SiEthereum /></span>
//         <select id="" >
//           <option value="option1">ETH</option>
//         </select>
//         <input className='' type="text" placeholder='ETH Amount'/>
//         {/* <span className="">ETH Amount</span> */}
//       </div>
//       <p>ETH Balance:0</p>
//       </div>
//       :
//       <div id={isSwapped ? 'div1' : 'div2'} className='sm:mx-auto sm:w-11/12 sm:bg-slate-800'>
//         <label htmlFor="">To</label>
//         <div className='sm:flex '>
//           <div >
//             <Image src={img} alt=""/>
//           </div>
//           <select  id="" >
//             <option value="option1">SIGIL</option>
//           </select>
//           <input className='' type="text" placeholder='SIGIL Amount'/>
//         </div>
//         <p>$SIGIL Balance:0</p>
//       </div>     
//         }
//         {isSwapped ? <button className='b1'>APPROVE</button> : <button className=''>SWAP</button> }
//         {/* <button className='b1'>SWAP</button> */}
//       </div>
//     </div>
//     </>
//   )
// }

// export default Sigil