import React from 'react'
import Mainlayout from '../../Component/Organisms/Layout/Mainlayout'
import Typhograph from '../../Component/atoms/Typhograph/Typhograph'
import assets from '../../Assets'
const Catagories = () => {

  const catagori = [
    {id:1, images:`${assets.Newcollector}`, caption:"NEW COLLECTOR"},
    {id:2, images:`${assets.Woman}`, caption:"WOMEN"},
    {id:3, images:`${assets.Men}`, caption:"MEN"},
    {id:4, images:`${assets.Regular}`, caption:"REGULAR COLLECTION"},
    {id:5, images:`${assets.Dress}`, caption:"DRESS"},
    {id:6, images:`${assets.Outer}`, caption:"OUTERWEAR"},
    {id:7, images:`${assets.Blouse}`, caption:"BLOUSE"},
    {id:8, images:`${assets.set}`, caption:"SET"},
    {id:9, images:`${assets.Accessories}`, caption:"ACCESSORIES"},
    {id:10, images:`${assets.Sekar}`, caption:"SEKAR WUNGU"},
    {id:11, images:`${assets.Srikandi}`, caption:"SRIKANDI"},
  ]

  return (
    <>
        <Mainlayout>
          <div className='flex flex-col justify-center items-center gap-10 mt-10'>
            <Typhograph children="CATAGORIES" className="font-bold text-center text-5xl"/>
            <div className='grid grid-cols-3 gap-8 justify-center items-center mx-10'>
              {
                catagori.map((items, index) => {
                  return(
                    <div className='flex relative'>
                      <div className='hover:blur-sm'>
                        <img key={index} src={items.images} alt='catagories' className=''/> 
                      </div>
                      <div className='absolute flex justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30 border '>
                          <Typhograph children={items.caption} className="font-bold text-2xl text-white "/>
                      </div>
                    </div>
                  )
                })
              }
              <div className='bg-[#5E5C5A] flex justify-center items-center size-full hover:bg-isActive'>
                <Typhograph children="SHOP ALL" className="text-5xl font-bold text-white "/>
              </div>
            </div>
          </div>
        </Mainlayout>
    </>
  )
}

export default Catagories