import React from 'react'
import assets from '../../../Assets'
import Typhograph from '../../atoms/Typhograph/Typhograph'
const Navbar = () => {
  return (
    <>
        <div className='w-full bg-black py-5 flex justify-around items-center'>
            <div className="Logo rounded-[97px]"><img src={assets.Logo} alt='logo'className='w-[150px] h-[72px]'/></div>
            <div className="Catagories flex justify-around items-center ">
                <Typhograph children="NEW DROP" className="text-primary hover:text-isActive hover:cursor-pointer"/>
                <Typhograph children="SHOP ALL" className="text-primary mx-4 hover:text-isActive hover:cursor-pointer"/>
                <Typhograph children="HIGHLIGHT" className="text-primary mr-4 hover:text-isActive hover:cursor-pointer"/>
                <Typhograph children="CATAGORIES" className="text-primary hover:text-isActive hover:cursor-pointer"/>
            </div>
            <div className="Icons flex justify-between items-center ">
                <img src={assets.Search} alt="Icon-Search" className='h-6 w-6'/>
                <img src={assets.Cart} alt="Icon-Cart" className='h-6 w-6 mx-8'/>
                <img src={assets.Profile} alt="Icon-Profile" className='h-6 w-6'/>
            </div>
        </div>
    </>
  )
}

export default Navbar