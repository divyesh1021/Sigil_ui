import React,{ useState } from 'react';
import Header from "../components/Header";
import SecondComponent from "../components/secondcomponent/SecondComponent";
import ThirdComponent from "../components/thirdcomponent/ThirdCompent";
import Fcontent from "../components/fourthcomponent/Fcontent";
import Fifthcontent from "../components/fifthcomponent/Fifthcomponent";
import Sixcontent from "../components/sixcomponent/Sixcomponent";
import Sevencontent from "../components/sevencomponent/Sevenconent";
import Eightcontent from "../components/eightcomponent/Eightcontent";
import Ninecontent from "../components/ninecomponent/Ninecontent";
import Footer from "../components/Footer";
import { useSelector } from 'react-redux';

// import Button from "../components/Button";

// import { toggleDarkMode } from "../actions/index"

// import { connect } from 'react-redux';


const index = () => {

  // const [Dark,setDark] = useState(false);

  // const DarkMode = () => {
  //   setDark(!Dark);
  // };

  const Mode = useSelector((state)=>state.question)

  return (
    <>
    {/* <div className={Dark ? "px-8 sm:px-0 sm:bg-white sm:text-black sm:flex sm:place-items-center flex flex-col place-items-center  bg-white text-black": "px-8 sm:px-0 sm:bg-black sm:text-white sm:flex sm:place-items-center flex flex-col place-items-center bg-black text-white"}> */}
      {/* <Header Dark={Dark} setDark={setDark} DarkMode={DarkMode}/> */}
      {/* <Button/> */}
      {/* <SecondComponent Dark={Dark} setDark={setDark} DarkMode={DarkMode}/>
      <ThirdComponent Dark={Dark} setDark={setDark} DarkMode={DarkMode}/>
      <Fcontent Dark={Dark} setDark={setDark} DarkMode={DarkMode}/>
      <Fifthcontent Dark={Dark} setDark={setDark} DarkMode={DarkMode}/>
      <Sixcontent Dark={Dark} setDark={setDark} DarkMode={DarkMode}/>
      <Sevencontent Dark={Dark} setDark={setDark} DarkMode={DarkMode}/>
      <Eightcontent Dark={Dark} setDark={setDark} DarkMode={DarkMode}/>
      <Ninecontent/>
      <Footer Dark={Dark} setDark={setDark} DarkMode={DarkMode}/> */}


      <div className={`content ${Mode.theme == 'light' ? `bg-black text-white` : `bg-white text-black`} px-8 sm:px-0 sm:flex sm:place-items-center flex flex-col place-items-center`}>
      {/* <div className={`${Mode.theme == 'light' ? `bg-black text-white` : `bg-white text-black`}`}> */}
      {/* <button
        className="text-blue-500 hover:text-blue-700"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button> */}

      {/* <div className={`content ${darkMode ? 'bg-white' : 'bg-black'}`}> */}
        <Header />
        {/* <Button/> */}
        <SecondComponent />
        <ThirdComponent />
        <Fcontent />
        <Fifthcontent />
        <Sixcontent />
        <Sevencontent />
        <Eightcontent />
        <Ninecontent/>
        <Footer />
      {/* </div> */}
    </div>
    </>
  )
}


// const mapStateToProps = (state) => ({
//   darkMode: state.darkMode.darkMode,
// });

// const mapDispatchToProps = {
//   toggleDarkMode,
// };

export default index;
// export default connect(mapStateToProps, mapDispatchToProps)(index);
