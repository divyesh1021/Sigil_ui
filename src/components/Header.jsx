import React,{ useState } from 'react'
import Image from 'next/image'
import img from "./Vector.png"
import { BsSun } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { SetTheme } from "@/redux/features/QuestionSlice";
import { useRouter } from 'next/router'
import Link from 'next/link';


const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  // const [Dark,setDark] = useState('dark');

  const dispatch = useDispatch();
  const Que = useSelector((state) => state.question); 
  // console.log('------------------------------',Que)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const router = useRouter();
  let r=router.pathname;
  // console.log('router-pathname------',r);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    dispatch(SetTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const background = 'bg-blue-700';

  return (
    <>
        <div className={`flex justify-between w-full mt-3 sm:flex  sm:w-2/3 sm:my-6 sm:justify-between ${Que.theme == "light" ? `bg-black text-white` :  `bg-white text-black`}`}>
          <div className='flex'>
            <Image className="h-10" src={img} />
            <span className='text-2xl mt-1 font-bold ml-2'>SIGIL</span><span className='text-2xl font-light mt-1'>FINANCE</span>
          </div>
          <ul className='flex sm:flex w-1/2 justify-end '>
            <div className='sm:flex w-full justify-between  sm:text-lg sm:font-normal py-2 hidden '>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">Tokenimcs</a>
              </li>
              <li>
                <a href="">Docs</a>
              </li>
              <li>
                {/* <span className=''><BsSun className='h-6 w-6' onClick={props.toggleDarkMode}/></span>
                 */}
                <span className=''><BsSun className='h-6 w-6' onClick={toggleTheme}/></span>
              </li>
              <li>
                <a href="">
                  <button className={`rounded-full ${background == 'bg-blue-700' ? `text-white` : `text-white` } bg-blue-700 h-10 w-44`}>{(r=="/")? "Launch dApp" : "Connect Wallet "}</button>
                </a>
              </li>
            </div>
            <div className='flex sm:flex py-2'>
              <li>
                <span className='sm:hidden'><BsSun className='h-6 w-6' onClick={toggleTheme}/></span>
              </li>
              <li>
                <span><HiMenu className='h-7 w-7 ms-7' onClick={toggleSidebar} /></span>
              </li>
            </div>
          </ul>
          {/* <div className="sm:w-1/3 sm:inline hidden">
            <ul className='sm:flex sm:max-w-10xl sm:justify-between sm:font-medium sm:my-2'>
              <li className=''>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Tokenomics</a>
              </li>
              <li>
                <a href="">Docs</a>
              </li>
              <li>
                <span><BsSun className='h-6 w-6' onClick={props.DarkMode}/></span>
              </li>
              <li>
                <a href="">
                  <button>Launch dApp</button>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className='flex justify-between w-full py-2'>
              <li>
                <span className='sm:hidden'><BsSun className='h-6 w-6' onClick={props.DarkMode}/></span>
              </li>
              <li>
                <span><HiMenu className='h-7 w-7' onClick={toggleSidebar} /></span>
              </li>
            </ul>
          </div> */}
        </div>
        {/* <div className={props.darkMode ? `flex fixed bg-white text-black w-1/2 bottom-0 right-0 top-6 mt-8 px-3 text-xl py-6 ease-in duration-500 sm:flex flex-col sm:bg-white sm:text-black sm:w-1/6 sm:fixed sm:bottom-0 sm:right-0 sm:top-12 sm:mt-8 sm:text-xl sm:px-3 sm:py-3 sm:ease-in sm:duration-500   ${isOpen ? 'translate-x-0 sm:translate-x-0':'translate-x-full sm:translate-x-full'}`
        :`flex fixed bg-black text-white w-1/2 bottom-0 right-0 top-12 mt-8 px-3 text-xl py-3 ease-in duration-500 sm:flex flex-col sm:bg-black sm:text-white sm:w-1/6 sm:fixed sm:bottom-0 sm:right-0 sm:top-12 sm:mt-8 sm:text-xl sm:px-3 sm:py-3 sm:ease-in sm:duration-500   ${isOpen ? 'translate-x-0 sm:translate-x-0':'translate-x-full sm:translate-x-full'}`}> */}
        <div className={`bg-white text-black sm:bg-${props.darkMode} flex fixed w-1/2 bottom-0 right-0 top-6 mt-8 px-3 text-xl py-6 ease-in duration-500 sm:flex flex-col sm:w-1/6 sm:fixed sm:bottom-0 sm:right-0 sm:top-12 sm:mt-8 sm:text-xl sm:px-3 sm:py-3 sm:ease-in sm:duration-500   ${isOpen ? 'translate-x-0 sm:translate-x-0':'translate-x-full sm:translate-x-full'}`}>
          
          <AiOutlineClose  className="absolute right-0 text-3xl	" onClick={toggleSidebar} />

          <Link href="/">Home</Link>   
          <Link href="#">Tokenimcs</Link>   
          <Link href="#">Docs</Link>
          <Link href="/Sigil">Sigil</Link>
          <Link href="/Earnsigil">Earnsigil</Link>   
          <Link href="/CapGems">CapGems</Link>   
          <Link href="/Performing">Performing</Link>   
          <Link href="/PoolSetting">Setting</Link>   
          <Link href="#"><span><BsSun className='h-6 w-6' /></span></Link>   
          <button className="text-start"> <a href="">Launch dApp</a></button>
        </div>
    </>
  )
}

export default Header