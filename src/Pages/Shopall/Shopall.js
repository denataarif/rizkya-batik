import React, { useState } from 'react'
import assets from '../../Assets'
import Mainlayout from '../../Component/Organisms/Layout/Mainlayout'
import Typhograph from '../../Component/atoms/Typhograph/Typhograph'
import Card from '../../Component/molecules/Card/Card'
const Shopall = () => {
  
    const [toggleHarga, setToggleHarga] = useState(false)
    const product = [
        {id:1, images:`${assets.Aksamala1}`, Caption:"Aksamala Dress Mala Batik tulis", Harga:2100000},
        {id:2, images:`${assets.Aksamala2}`, Caption:"Aksamala Dress Aksa Batik tulis", Harga:2000000},
        {id:3, images:`${assets.Aksamala3}`, Caption:"Aksamala Dress Aksa Batik tulis", Harga:1600000},
        {id:4, images:`${assets.Aksamala4}`, Caption:"Aksamala Dress Mala Batik tulis", Harga:2500000},
        {id:5, images:`${assets.Aksamala1}`, Caption:"Aksamala Dress Mala Batik tulis", Harga:1100000},
        {id:6, images:`${assets.Aksamala2}`, Caption:"Aksamala Dress Mala Batik tulis", Harga:1000000},
        {id:7, images:`${assets.Aksamala3}`, Caption:"Aksamala Dress Mala Batik tulis", Harga:1100000},
        {id:8, images:`${assets.Aksamala4}`, Caption:"Aksamala Dress Mala Batik tulis", Harga:2300000},
        {id:9, images:`${assets.Aksamala1}`, Caption:"Aksamala Dress Mala Batik tulis", Harga:2100000}
      ]
    const [sortedProducts, setSortedProducts] = useState([...product])
   
    const formatHarga = (price) => {
       return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
          }).format(price)
    }
    const filterMin = () => {
        setSortedProducts([...product].sort((a, b) => a.Harga - b.Harga))
    }

    const filterMax = () => {
        setSortedProducts([...product].sort((a,b) => b.Harga - a.Harga))
    }

    return (
    <>
        <Mainlayout>
            <div className='flex flex-col gap-10 mt-10'>
                <Typhograph children="Shop All" className="font-bold text-center text-5xl"/>
                <div className='flex justify-end items-center gap-x-4 mr-8'>
                    <Typhograph children="Urutkan" className="font-bold"/>
                    <Typhograph children="Unggulan" className=" font-semibold hover:text-isActive"/>
                    <Typhograph children="Terbaru" className="font-semibold hover:text-isActive"/>
                    <div className='flex'>
                        <div className='flex items-center justify-center hover:cursor-pointer' onClick={() => setToggleHarga(!toggleHarga)}>
                            <Typhograph children="Harga" className={`${toggleHarga === true ? 'font-semibold text-isActive' : 'font-semibold'}`}/>  
                            <div className={`${toggleHarga === true ? 'rotate-90' : '-rotate-90'}`}>
                                <img src={assets.Dropdown} alt='' />
                            </div>
                        </div>
                        {
                            toggleHarga === true 
                            ? 
                            <div className='flex gap-x-4 ml-4'>
                                <div onClick={() => filterMin()}>
                                    <Typhograph children="Terendah" className="text-isActive font-semibold hover:cursor-pointer" />
                                </div>
                                <div onClick={() => filterMax()}>
                                    <Typhograph children="Tertinggi" className="text-isActive font-semibold hover:cursor-pointer"/>
                                </div>
                            </div>
                            :
                            <div></div>
                        }
                        
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-8 justify-items-center'>
                    {
                        sortedProducts.map((items, index) => {
                            return(
                                <Card key={items.id} Image={items.images} Caption={items.Caption} Harga={formatHarga(items.Harga)}/>
                            )
                        })
                    }
                </div>
            </div>
        </Mainlayout>
    </>
  )
}

export default Shopall