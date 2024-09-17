import React, { useState } from 'react'
import assets from '../../../Assets'
import Typhograph from '../../atoms/Typhograph/Typhograph'
import Select from '../../atoms/Select/Select'
const Navbar = () => {
  const [isHover, Setishover] = useState(false)
  const Catagories = ["NEW IN", "WOMEN", "MEN", "REGULAR COLLECTION", "DRESS", "OUTWEAR"]
  return (
    <>
        <div className='w-full bg-black py-5 flex justify-around items-center'>
            <div className="Logo rounded-[97px]"><img src={assets.Logo} alt='logo'className='w-[150px] h-[72px]'/></div>
            <div className="Catagories flex justify-around items-center gap-x-4">
                <Typhograph children="NEW DROP" className="text-primary hover:text-isActive hover:cursor-pointer"/>
                <Typhograph children="SHOP ALL" className="text-primary hover:text-isActive hover:cursor-pointer"/>
                <Typhograph children="HIGHLIGHT" className="text-primary hover:text-isActive hover:cursor-pointer"/>
                <div className='flex gap-x-2 items-center hover:cursor-pointer text-primary hover:text-isActive focus:text-isActive'>
                  <select name="" id="" className='bg-transparent border-none hover:border-none focus:outline-none active:outline-none font-normal' >
                    <option selected hidden >CATAGOREIS</option>
                    {
                      Catagories.map((items, index) => {
                        return(
                          <option key={index} className='bg-black'>
                            {items}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
                <Select/>
            </div>
            <div className="Icons flex justify-between items-center gap-x-6">
                <img src={assets.Search} alt="Icon-Search" className='h-6 w-6'/>
                <img src={assets.Cart} alt="Icon-Cart" className='h-6 w-6'/>
                <img src={assets.Profile} alt="Icon-Profile" className='h-6 w-6'/>
            </div>
        </div>
    </>
  )
}

export default Navbar