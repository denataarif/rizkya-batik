import React from 'react'
import Navbar from '../../molecules/Navbar/Navbar'
import Footer from '../../molecules/Footer/Footer'
const Mainlayout = (props) => {
  const {children, className} = props
    return (
    <>
        <div>
            <Navbar/>
            <div className={className}>
                {children}
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Mainlayout