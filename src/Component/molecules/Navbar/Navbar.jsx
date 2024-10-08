import React, { useState } from 'react'
import assets from '../../../Assets'
import Typhograph from '../../atoms/Typhograph/Typhograph'
import Select from '../../atoms/Select/Select'
import { Link } from 'react-router-dom'
const Navbar = ({modalLogin}) => {
  const [Dropdown, setDropdown] = useState(false)
  const [isSearch, setIsSeacrh] = useState(false)
  const Catagories = ["NEW IN", "WOMEN", "MEN", "REGULAR COLLECTION", "DRESS", "OUTWEAR"]
 

  return (
    <>
        <div className='w-full bg-black py-5 flex justify-around items-center '>
            <Link to="/">
              <div className="Logo rounded-[97px]"><img src={assets.Logo} alt='logo'className='w-[150px] h-[72px]'/></div>
            </Link>
            <div className="Catagories flex justify-around items-center gap-x-4">
                <Link to="/Newdrop">
                  <Typhograph children="NEW DROP" className="text-primary hover:text-isActive hover:cursor-pointer"/>
                </Link>
                <Link to="/Shopall">
                  <Typhograph children="SHOP ALL" className="text-primary hover:text-isActive hover:cursor-pointer"/>
                </Link>
                <Link to="/Highlight">
                  <Typhograph children="HIGHLIGHT" className="text-primary hover:text-isActive hover:cursor-pointer"/>
                </Link>
                <Link to="/catagories">
                  <div className='hover:cursor-pointer text-primary ' onClick={() => setDropdown(!Dropdown)}>
                    <Select label="CATAGORIES" Catagories={Catagories} Toggle={Dropdown}/>
                  </div>
                </Link>
            </div>
            <div className="Icons flex justify-between items-center gap-x-6">
                <div >
                  {
                    isSearch === false ? 
                    <img src={assets.Search} alt="Icon-Search" className='h-6 w-6' onClick={() => setIsSeacrh(!isSearch)}/> :  
                    <div className='flex justify-around items-center'>
                      <input type="text" name="" id="" className='relative z-10 gap-2 bg-transparent outline-none caret-white text-white border border-isActive border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-isActive'/>
                      <img src={assets.activeSearch} alt="Icon-Search" className='h-6 w-6' onClick={() => setIsSeacrh(!isSearch)}/>
                    </div>
                  }
                </div>
                <img src={assets.Cart} alt="Icon-Cart" className='h-6 w-6'/>
                <div onClick={modalLogin} className='hover:cursor-pointer'>
                  <img src={assets.Profile} alt="Icon-Profile" className='h-6 w-6'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar