import React, { useState } from 'react'
import Navbar from '../../molecules/Navbar/Navbar'
import Footer from '../../molecules/Footer/Footer'
import ModalLogin from '../../molecules/ModalLogin/ModalLogin'
const Mainlayout = (props) => {
  const {children, className} = props

  const [isModalLogin, setIsModalLogin] = useState(false)

  const handleModalLogin = () => {
    setIsModalLogin(!isModalLogin)
    console.log(isModalLogin);
    
  }

    return (
    <>
        <div>
            <Navbar modalLogin={()=>handleModalLogin()}/>
            <div className={className}>
                {children}
            </div>
            <Footer/>
            <ModalLogin isOpen={isModalLogin} onClose={() => handleModalLogin()}/>
        </div>
    </>
  )
}

export default Mainlayout