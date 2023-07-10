import React,{ useState } from 'react'
import { IoMdCopy } from 'react-icons/io'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { SiEthereum } from 'react-icons/si'
import { BsDroplet } from 'react-icons/bs'
import { MdOutlineSwapVert } from 'react-icons/md'
import { BsCircle } from 'react-icons/bs'
import { FaChartLine } from 'react-icons/fa';
import { TbChartBar } from 'react-icons/tb';
// import { Doughnut } from 'react-chartjs-2';
// import 'chartjs-adapter-date-fns';

// import Image from 'next/image'
// import img from '../../../public/Group 118.png'

// import { Chart,registerables } from "chart.js";
import { Chart as chartjs, LineElement, CategoryScale, LinearScale, PointElement  } from 'chart.js'


// chart.register(...registerables)
chartjs.register(LineElement,CategoryScale,LinearScale,PointElement)


const CapGems = () => {

    const Mode = useSelector((state)=>state.question)

    const[isSwapped,setIsSwapped] = useState(false)

    // const chartRef = useRef(null);

    const CopyText = () => {
        let text = document.getElementById("myadd").innerHTML;
        navigator.clipboard.writeText(text);
    }


    const handleswap = () => {
        setIsSwapped(!isSwapped)
        // console.log('hello');
    }

    const data = {
        labels : ["08 Apr,6 AM","08 Apr,6 AM","08 Apr,6 AM","08 Apr,6 AM","08 Apr,6 AM","08 Apr,6 AM"],
        datasets:[{
            data:[8,9,7.8,7.9,6,7,8,6,5,7.8,5,8,6],
            // backgroundColor: [
            //     'rgba(255,26,104,0.2)',
            //     'rgba(54,162,235,0.2)',
            //     'rgba(255,206,86,0.2)',
            //     'rgba(75,192,192,0.2)',
            //     'rgba(153,102,255,0.2)',
            //     'rgba(255,159,64,0.2)',
            //     'rgba(0,0,0,0.2)',
            // ],
            backgroundColor : (context) => {
                const bgColor = [
                    'rgba(255,26,104,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(75,192,192,0.2)',
                    'rgba(153,102,255,0.2)',
                    'rgba(255,159,64,0.2)',
                    'rgba(0,0,0,0.2)',
                ]
                if(!context.chart.chartArea){
                    return;
                }
                console.log(context);
                const { ctx, data, chartArea:{top,bottom}} = context.chart;
                const gradientBg = ctx.createLinearGradient(0,top,0,bottom);
                gradientBg.addColorStop(0,bgColor[0]);
                gradientBg.addColorStop(0.5,bgColor[1]);
                gradientBg.addColorStop(1,bgColor[2]);
                return gradientBg;
            },
            borderColor: [
                'rgba(255,26,104,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',
                'rgba(0,0,0,1)',
            ],
            pointBackgroundColor: [
                'rgba(255,26,104,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',
                'rgba(0,0,0,1)',
            ],
            pointBorderWidth:4,
            tension:0.5,
            fill : true
        }],
    };

    const options = {
        plugins:{
            legend: false
        },
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                min:2,
                max:10,
                ticks:{
                    stepSize :2,
                    // callback:(value)=> value + 'k'
                },
                grid:{
                    borderDash:[10]
                }
            }
        }
    };

    // useEffect(() => {

    //     // let myChart = null;

    // const ctx = document.getElementById('ch').getContext('2d');
    //     var myChart = new Chart(ctx, {
    //         type: 'line',
    //         data: {
    //             labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    //             datasets: [{
    //                 data: [86, 114, 106, 106, 107, 111, 133],
    //                 label: "Applied",
    //                 borderColor: "rgb(62,149,205)",
    //                 backgroundColor: "rgb(62,149,205,0.1)",
    //             }, {
    //                 data: [70, 90, 44, 60, 83, 90, 100],
    //                 label: "Accepted",
    //                 borderColor: "rgb(60,186,159)",
    //                 backgroundColor: "rgb(60,186,159,0.1)",
    //             }, {
    //                 data: [10, 21, 60, 44, 17, 21, 17],
    //                 label: "Pending",
    //                 borderColor: "rgb(255,165,0)",
    //                 backgroundColor: "rgb(255,165,0,0.1)",
    //             }, {
    //                 data: [6, 3, 2, 2, 7, 0, 16],
    //                 label: "Rejected",
    //                 borderColor: "rgb(196,88,80)",
    //                 backgroundColor: "rgb(196,88,80,0.1)",
    //             }
    //             ]
    //         },
    //     });
    // },[])
    // const options = [
    //     { value: 'manage-pool', label: 'Manage Pool', icon: <BsDroplet className='bg-black' /> },
    //     { value: 'option1', label: 'Option 1' },
    //     { value: 'option2', label: 'Option 2' },
    //     { value: 'option3', label: 'Option 3' },
    //   ];


    //   const customOption = ({ innerProps, label, icon }) => (
    //     <div {...innerProps}>
    //       {icon && <span>{icon}</span>}
    //       {label}
    //     </div>
    //   );


    // const data1 = {
    //     labels: [
    //       'Red',
    //       'Green',
    //       'Yellow'
    //     ],
    //   datasets: [{
    //     data: [300, 50, 100],
    //     backgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //     ],
    //     hoverBackgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //     ]
    //     }]
    // };
    
  return (
    <>
    <div className='w-full mt-16 sm:w-2/3'>
        <div className='sm:flex'>
            <div className='w-full sm:w-3/5'>
                <h1 className='text-4xl font-bold my-8 sm:text-4xl sm:font-bold '>QuamfyWhale's Low Cap Gems</h1>
                <div className='flex sm:flex sm:mt-5'>
                    <p className='font-medium' id='myadd'>0x83e063F53D293B14FAeCc02DD8BE0F50bb4620a9</p><span className='ml-2 sm:ml-2'><IoMdCopy className='h-6 text-xl' onClick={CopyText} /></span>
                </div>
                <p className='mt-5 font-medium sm:mt-0 sm:font-medium'>About: https://quamfywhales-low-cap-gems.gitbook.io/quamfywhales-low-cap-gems/</p>
            </div>
            <div className='my-16 w-full sm:flex justify-end sm:w-2/5 sm:my-0 '>
                <select name="" id="" className='bg-transparent border border-blue-500 rounded-3xl h-12 w-full px-5 sm:bg-transparent sm:border sm:border-blue-500 sm:rounded-3xl sm:h-12 sm:w-36 sm:px-3 '>
                    <option value="" className={`${Mode.theme == 'light' ? 'sm:text-black':'sm:text-black'}`} >Manage Pool</option>
                    <option value="" className={`${Mode.theme == 'light' ? 'sm:text-black':'sm:text-black'}`}>Assets</option>
                    <option value="" className={`${Mode.theme == 'light' ? 'sm:text-black':'sm:text-black'}`}>Members</option>
                    <option value="" className={`${Mode.theme == 'light' ? 'sm:text-black':'sm:text-black'}`}>Settings</option>
                </select>
            </div>
        </div>

        <div>  
            <div className='sm:flex sm:mt-24'>
                <div className={`${Mode.theme == 'light' ? 'text-white':'text-white'} sm:w-3/5`}>
                    <button className='border rounded-lg px-2 bg-slate-800 sm:border sm:rounded-lg sm:px-4 sm:w-16 sm:bg-slate-800'>30M</button>
                    <button className='border rounded-lg px-2 bg-slate-800 mx-2 sm:border sm:rounded-lg sm:px-4 sm:w-16 sm:bg-slate-800 sm:mx-2'>1H</button>
                    <button className='border rounded-lg px-2 bg-slate-800 sm:border sm:rounded-lg sm:px-4 sm:w-16 sm:bg-slate-800'>12H</button>
                    <button className='border rounded-lg px-2 bg-slate-800 mx-2 sm:border sm:rounded-lg sm:px-4 sm:w-16 sm:bg-slate-800 sm:mx-2'>24H</button>
                    <button className='border rounded-lg px-2 bg-slate-800 sm:border sm:rounded-lg sm:px-4 sm:w-16 sm:bg-slate-800'>1D</button>
                    <button className='border rounded-lg px-2 bg-slate-800 mx-2 sm:border sm:rounded-lg sm:px-4 sm:w-16 sm:bg-slate-800 sm:mx-2'>7D</button>
                    <button className='border rounded-lg px-2 bg-slate-800 sm:border sm:rounded-lg sm:px-4 sm:w-16 sm:bg-slate-800'>1M</button>
                    <button className='border rounded-lg px-2 bg-slate-800 mx-2 sm:border sm:rounded-lg sm:px-4 sm:w-16 sm:bg-slate-800 sm:mx-2'>MAX</button>
                </div>
                <div className={`${Mode.theme == 'light' ? 'text-white':'text-white'} my-10 sm:my-0 sm:w-2/5 sm:flex justify-end`}>
                    <button className='border rounded-lg px-2 w-16 bg-slate-800 sm:border sm:rounded-lg sm:px-2 sm:w-16 sm:bg-slate-800 '>ETH</button>
                    <button className='border rounded-lg px-2 w-16 bg-slate-800 mx-2 sm:border sm:rounded-lg sm:px-2 sm:w-16 sm:bg-slate-800 sm:mx-2'>USD</button>
                    <button className='border rounded-lg px-2 w-16 bg-slate-800 sm:border sm:rounded-lg sm:px-2 sm:w-16 sm:bg-slate-800'>TOTAL</button>
                </div>
            </div>

            <div className='sm:mt-5'>
                <Line data={data} options={options}></Line>
            </div>
        </div>

        <div className='sm:flex sm:mt-14'>
            <div className='sm:w-96 sm:border sm:border-blue-500 sm:rounded-lg sm:py-5 sm:px-5'>
                <div className='flex sm:flex'>
                    <p className='w-full text-xl font-semibold sm:w-full sm:text-xl sm:font-semibold'>PRICE:</p>
                    <p className='w-full text-end text-xl sm:w-full sm:text-end sm:text-xl'>0.010038 ETH</p>
                </div>

                <div className='flex my-7 sm:flex sm:my-0'>
                    <p className='w-full sm:w-full'>YOUR POOL TOKENS :</p>
                    <p className='w-full text-end sm:w-full sm:text-end'>0.000</p>
                </div>

                <div className=''>
                {isSwapped ? 
                <div className={`${Mode.theme == 'light' ? `bg-slate-800 rounded-lg -mb-4 sm:bg-slate-800 sm:rounded-lg  sm:-mb-4`:`rounded-lg -mb-4 bg-white text-black sm:rounded-lg sm:-mb-4`}`}>
                    <div className='px-4 py-6 sm:flex flex-col sm:px-7 sm:py-5 '>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>To</label>
                        <div className='mt-1 flex sm:flex'>
                            {/* <div className={`${Mode.theme == 'light' ? `bg-white py-3 rounded-l-xl sm:bg-white sm:py-3` : `bg-slate-100 py-3 rounded-l-xl sm:bg-slate-100 sm:py-3`}`}>
                                <Image src={img} className='h-8 w-9 mx-3'/>
                            </div> */}
                            <span className={`${Mode.theme == 'light' ? `bg-white sm:bg-white sm:py-3 rounded-l-xl`:`bg-slate-100 sm:py-3 rounded-l-xl`}`}><BsDroplet className='ml-3 mr-1 bg-blue-600 mt-3 sm:bg-blue-600 rounded-full w-8 h-8 py-2 sm:mt-0' /></span>
                            <select name="" className={`${Mode.theme == 'light' ? `bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                             <option value="" className=''>Pool</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 sm:w-4/5 rounded-r-xl h-14' placeholder='0000.00' />
                        </div>
                        <p className='my-2'>$SIGIL Balance: 0</p>
                    </div>     
                </div> :
                <div className={`${Mode.theme == 'light' ? `bg-slate-800 rounded-lg -mb-4 sm:bg-slate-800 sm:rounded-lg sm:-mb-4`:`bg-white text-black rounded-lg -mb-4 sm:rounded-lg sm:-mb-4`}`}>
                    <div className='px-4 py-6 sm:flex flex-col sm:px-7 sm:py-5'>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>From</label>
                        <div className='mt-1 flex sm:flex'>
                            <span className={`${Mode.theme == 'light' ? `bg-white sm:bg-white sm:py-3 rounded-l-xl`:`bg-slate-100 sm:py-3 rounded-l-xl`}`}><SiEthereum className='ml-3 mr-1 bg-blue-600 mt-3 sm:bg-blue-600 rounded-full w-8 h-8 py-2 sm:mt-0' /></span>
                            <select name="" className={`${Mode.theme == 'light' ? `bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                                <option value="" className='sm:w-'>ETH</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 sm:w-4/5 rounded-r-xl h-14' placeholder='0000.00' />
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
                <div className={`${Mode.theme == 'light' ? `bg-slate-800 rounded-lg -mt-4 sm:bg-slate-800 sm:rounded-lg sm:-mt-4`:`rounded-lg -mt-4 bg-white text-black sm:rounded-lg sm:-mt-4`}`}>
                    <div className='px-4 py-6 sm:flex flex-col sm:px-7 sm:py-5'>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>From</label>
                        <div className='mt-1 flex sm:flex'>
                            <span className={`${Mode.theme == 'light' ? `bg-white sm:bg-white sm:py-3 rounded-l-xl`:`bg-slate-100 sm:bg-slate-100 sm:py-3 rounded-l-xl`}`}><SiEthereum className='ml-3 mr-1 bg-blue-600 mt-3  sm:bg-blue-600 rounded-full w-8 h-8 py-2 sm:mt-0' /></span>
                            <select name="" className={`${Mode.theme == 'light' ? ` bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                                <option value="" className=''>ETH</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 h-14 sm:w-4/5 rounded-r-xl' placeholder='0000.00' />
                        </div>
                        <p className='my-2'>ETH Balance: 0</p>
                    </div>     
                </div>:
                <div className={`${Mode.theme == 'light' ? `bg-slate-800 rounded-lg -mt-4 sm:bg-slate-800 sm:rounded-lg sm:-mt-4`:`bg-white text-black rounded-lg -mt-4 sm:rounded-lg sm:-mt-4`}`}>
                    <div className='px-4 py-6 sm:flex flex-col sm:px-7 sm:py-5'>
                        <label htmlFor="" className='sm:text-lg sm:font-bold'>To</label>
                        <div className='mt-1 flex sm:flex'>
                            {/* <div className={`${Mode.theme == 'light' ? `bg-white py-3 sm:bg-white  sm:py-3 rounded-l-xl` : `bg-slate-100 py-3 sm:bg-slate-100 sm:py-3 rounded-l-xl`}`}>
                                <Image src={img} className='h-8 w-9 mx-3 '/>
                            </div> */}
                            <span className={`${Mode.theme == 'light' ? `bg-white sm:bg-white sm:py-3 rounded-l-xl`:`bg-slate-100 sm:py-3 rounded-l-xl`}`}><BsDroplet className='ml-3 mr-1 bg-blue-600 mt-3 sm:bg-blue-600 rounded-full w-8 h-8 py-2 sm:mt-0' /></span>
                            <select name="" className={`${Mode.theme == 'light' ? `bg-white text-black w-20`:`bg-slate-100 w-20`}`} id="">
                                <option value="" className=''>Pool</option>
                            </select>
                            <input type="text" className='bg-transparent border-2 sm:w-4/5 rounded-r-xl h-14' placeholder='0000.00' />
                        </div>
                        <p className='my-2'>$SIGIL Balance: 0</p>
                    </div>     
                </div>
                }
                
                <div className='flex mt-5'>
                    <label htmlFor="" className='text-blue-600 font-medium'>Slippage:</label>
                    <input type="text" className='ml-4 bg-transparent w-20 border-b-2 border-blue-700' />
                    <div className='text-blue-700 ml-2 mt-1'>%</div>
                </div>
                <p className={`${Mode.theme == 'light' ? 'text-gray-300' : 'text-black'} text-center mt-5`}>Enter a slippage amount to sell instantly. If slippage is 0 or not entered, you will place a sell order.</p>
                <div className=''>
                    <button className={`bg-blue-700 w-full my-3 sm:my-3  sm:w-full h-14 rounded-lg`}>Buy</button>
                </div>
                <p className={` ${Mode.theme == 'light' ? 'text-gray-300' : 'text-black'} text-center`}>Approve your funds, submit your buy order, and wait for the pool owner to accept it. Learn more about the ordering process here.</p>
            </div>

            </div>
            <div className='sm:w-96'>
                {/* <Doughnut
                    data={data1}
                    width={400}
                    height={400}
                /> */}
            </div>
            <div className={`${Mode.theme == 'light' ? 'text-white':'text-white'} mt-10 sm:w-5/12 sm:mt-14`}>
                <table>
                    <thead className='sm:w-1/2'>
                        <tr className={`${Mode.theme == 'light' ? 'sm:border-8 sm:border-black':'sm:border-8 sm:border-white'} h-10 sm:bg-slate-700  sm:h-20`}>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Eth Value</th>
                            <th><div className='mx-4 sm:mx-6'>USD Value</div></th>
                            <th>Percentage</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={` ${Mode.theme == 'light' ? 'border-8 border-black sm:border-8 sm:border-black':'border-8 border-white sm:border-8 sm:border-white'} bg-slate-700 h-20 sm:bg-slate-700 sm:h-20 `}> 
                            <td><div className='flex sm:flex '><BsCircle className='bg-blue-700 text-blue-700 rounded-full mt-1'/><span className='ml-2'>REMIT</span></div></td>
                            <td><div className='text-center ml-1'>BlockRemit</div></td>
                            <td><div className='text-center'>2.45</div></td>
                            <td><div className='text-center'>$4,408.56</div></td>
                            <td><div className='text-center'>18.82</div></td>
                            <td><div className='flex'><TbChartBar className='mr-1 sm:mr-3'/><FaChartLine/></div></td>
                        </tr>
                        <tr className={`${Mode.theme == 'light' ? 'border-8 sm:border-8 border-black sm:border-black':'border-8 sm:border-8 border-white sm:border-white'} bg-slate-700 h-20`}> 
                            <td><div className='flex sm:flex '><BsCircle className='bg-red-700 text-red-700 rounded-full mt-1'/><span className='ml-2'>SIGIL</span></div></td>
                            <td><div className='text-center ml-1'>Sigil Finance</div></td>
                            <td><div className='text-center'>0.48</div></td>
                            <td><div className='text-center'>$868.03</div></td>
                            <td><div className='text-center'>3.71</div></td>
                            <td><div className='flex'><TbChartBar className='mr-1 sm:mr-3'/><FaChartLine/></div></td>
                        </tr>
                        <tr className={`${Mode.theme == 'light' ? 'border-8 border-black sm:border-8 sm:border-black':'border-8 border-white sm:border-8 sm:border-white'} bg-slate-700 h-20 `}> 
                            <td><div className='flex sm:flex '><BsCircle className='bg-green-400 text-green-400 rounded-full mt-1'/><span className='ml-2'>NADA</span></div></td>
                            <td><div className='text-center ml-1'>NOTHING NADA</div></td>
                            <td><div className='text-center'>0.02</div></td>
                            <td><div className='text-center'>$29.33</div></td>
                            <td><div className='text-center'>0.13</div></td>
                            <td><div className='flex'><TbChartBar className='mr-1 sm:mr-3'/><FaChartLine/></div></td>
                        </tr>
                        <tr className={`${Mode.theme == 'light' ? 'border-8 border-black sm:border-8 sm:border-black':'border-8 border-white sm:border-8 sm:border-white'} bg-slate-700 h-20 `}> 
                            <td><div className='flex sm:flex '><BsCircle className='bg-cyan-300 text-cyan-300 rounded-full mt-1'/><span className='ml-2'>Weth</span></div></td>
                            <td><div className='text-center ml-1'>Wrapped Ethereum </div></td>
                            <td><div className='text-center'>10.06</div></td>
                            <td><div className='text-center'>$1,801.91</div></td>
                            <td><div className='text-center'>60.46</div></td>
                            <td><div className='flex'><TbChartBar className='mr-1 sm:mr-3'/><FaChartLine/></div></td>
                        </tr>
                        <tr className={`${Mode.theme == 'light' ? 'border-8 border-black sm:border-8 sm:border-black':'border-8 border-white sm:border-8 sm:border-white'} bg-slate-700 h-20 `}>
                            <td><div className='ml-7 '>Total</div></td>
                            <td><div className='text-center ml-10'></div></td>
                            <td><div className='flex sm:text-center'><span><SiEthereum className='sm:h-5 sm:w-5'/></span>16.63</div></td>
                            <td><div className='text-center'>$13,651.63</div></td>
                            <td><div className='text-center'>100.00</div></td>
                            <td><div className='flex'></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} sm:flex mt-10 sm:mt-12`}>
            <div className='flex w-full bg-slate-700 h-20 sm:px-4 px-2'>
                <h1 className=' text-lg w-full font-normal mt-3 sm:mt-6'>Pool Owner</h1>
                <p className='mt-6 sm:mt-6 w-full text-end' id='myadd'>0xf108a047F721c36369dcBA5137752Bab96C532fb</p><span><IoMdCopy className='mt-7 text-lg sm:mt-6 sm:ml-2 sm:text-xl' onClick={CopyText}/></span>
            </div>
            <div className='flex mt-2 sm:mt-0 w-full bg-slate-700 h-20 sm:px-4 sm:ml-4'>
                <div className='flex w-full mt-6 px-2'>
                    <h1 className='w-full'>Creation Date</h1>
                    <p className='w-full text-end'>02/04/2023 - 04:04</p>
                </div>
            </div>
        </div>

        <div className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} sm:flex mt-2`}>
            <div className='flex sm:w-full bg-slate-700 h-20 px-2 sm:px-4'>
                <h1 className='text-lg w-full font-normal mt-6'>Pool Fee</h1>
                <p className='mt-6 w-full text-end' id='myadd'>20.00%</p>
            </div>
            <div className='flex mt-2 sm:mt-0 w-full bg-slate-700 h-20 sm:px-4 px-2 sm:ml-4'>
                <div className='flex w-full mt-6'>
                    <h1 className='w-full'>Members</h1>
                    <p className='w-full text-end'>69</p>
                </div>
            </div>
        </div>

        <div className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} sm:flex mt-2`}>
            <div className='flex w-full bg-slate-700 h-20 px-2 sm:px-4'>
                <h1 className='text-lg w-full font-normal mt-6'>Price Change - 1h</h1>
                <p className='mt-6 w-full text-end' id='myadd'>0.01 ETH</p>
            </div>
            <div className='flex mt-2 sm:mt-0 w-full bg-slate-700 h-20 px-2 sm:px-4 sm:ml-4'>
                <div className='flex w-full mt-6'>
                    <h1 className='w-full'>Total Pool Value</h1>
                    <p className='w-full text-end'>11.99945 ETH</p>
                </div>
            </div>
        </div>

        <div className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} sm:flex mt-2`}>
            <div className='flex w-full bg-slate-700 h-20 px-2 sm:px-4'>
                <h1 className='text-lg w-full font-normal mt-6'>Price Change - 24h</h1>
                <p className='mt-6 w-full text-end' id='myadd'>-5.42%</p>
            </div>
            <div className='flex mt-2 sm:mt-0 w-full bg-slate-700 h-20 px-2 sm:px-4 sm:ml-4'>
                <div className='flex w-full mt-6'>
                    <h1 className='w-full'>Total Pool Value USD</h1>
                    <p className='w-full text-end'>$ 21916.97</p>
                </div>
            </div>
        </div>

        <div className={`${Mode.theme == 'light' ? 'text-white' : 'text-white'} sm:flex mt-2 mb-16`}>
            <div className='flex w-full bg-slate-700 h-20 px-2 sm:px-4'>
                <h1 className='text-lg w-full font-normal mt-6'>Price Change - 7D</h1>
                <p className='mt-6 w-full text-end' id='myadd'>47.18%</p>
            </div>
            <div className='flex mt-2 sm:mt-0 w-full bg-slate-700 h-20 px-2 sm:px-4 sm:ml-4'>
                <div className='flex w-full mt-6'>
                    <h1 className='w-full'>Total Pool Tokens</h1>
                    <p className='w-full text-end'>1195.42</p>
                </div>
            </div>
        </div>                
    </div>
    </>
  )
}

export default CapGems