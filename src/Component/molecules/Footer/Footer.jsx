import React from 'react'
import Typhograph from '../../atoms/Typhograph/Typhograph'

const Footer = () => {
  return (
    <>
        <div className='flex justify-around items-center py-12'>
            <div className='flex flex-col justify-around'>
                <Typhograph children="About Us" className="text-[#82807D]"/>
                <Typhograph children="FAQ"/>
                <Typhograph children="Rizkya's Daily (Blog)"/>
                <Typhograph children="Zalora"/>
                <Typhograph children="Tokopedia"/>
                <Typhograph children="Shopee"/>
            </div>
            <div className='flex flex-col justify-around '>
                <Typhograph children="INFO" className="text-[#82807D]"/>
                <Typhograph children="Belanja & Retail"/>
                <Typhograph children="Chek Our Catalog"/>
                <Typhograph children="Spesial Indonesian Heritage"/>
                <Typhograph children="#RizkyaBatikKebanggaanNusantara"/>
                <br/>
            </div>
            <div className='flex flex-col justify-around'>
                <Typhograph children="CUSTOMER CARE" className="text-[#82807D]"/>
                <Typhograph children="Contact Us"/>
                <Typhograph children="Shipping"/>
                <Typhograph children="Hor To Order"/>
                <Typhograph children="Term Of Service"/>
                <Typhograph children="Refund Policy"/>
            </div>
            <div className='flex flex-col justify-around'>
                <Typhograph children="Persyaratan Layanan" />
                <Typhograph children="Kebijakan Privasi"/>
                <Typhograph children="Kebijakan Pengiriman"/>
                <Typhograph children="Kebijakan Pengembalian"/>
                <Typhograph children="Kebijakan Kekayaan Intelektual"/>
            </div>
        </div>
    </>
  )
}

export default Footer
