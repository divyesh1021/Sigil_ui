import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

const Layout = ({ children, darkMode, setDarkMode }) => {
  return (
    <>
        <div >
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <div>
                {children}
            </div>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
    </>
  )
}

export default Layout