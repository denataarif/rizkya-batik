import React, { useEffect, useRef, useState } from 'react'
import assets from '../../Assets'
import Mainlayout from '../../Component/Organisms/Layout/Mainlayout'
import Typhograph from '../../Component/atoms/Typhograph/Typhograph'
const Highlight = () => {
  
    const imgRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [assets.Srikandi3, assets.Srikandi6]
    

    useEffect( () => {
        const ul = imgRef.current
        if(ul){
            const clone = ul.cloneNode(true)
            clone.setAttribute('aria-hidden', 'true')
            ul.parentNode.appendChild(clone)
        }
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex+1
            )
        }, 3000)
        return () => clearInterval(intervalId)
    }, [images.length] )

    return (
    <>
        <Mainlayout>
            <div classname="flex flex-col gap-y-12 overflow-x-hidden">
                <section className='flex justify-center items-center my-6'>
                    <Typhograph children="HIGHLIGHT" className="font-bold text-center text-5xl"/>
                </section>
                <section className='flex flex-col gap-y-6'>
                    <div className='flex flex-col gap-y-10'>
                    <img src={assets.Background_Newdrop} alt='New drop'/>
                    <div className='flex justify-center items-center gap-y-4'>
                        <div className='flex flex-col'>
                        <Typhograph children="NEW DROP" className="text-5xl font-bold text-[#82807D]"/>
                        <Typhograph children="ADAMA ANDIN" className="text-4xl font-bold -mt-3"/>
                            <Typhograph children="Blouse berbahan katun dengan" className=" text-xl text-[#82807D]"/>
                            <Typhograph children="motif batik cap dari solo. Bagian " className=" text-xl text-[#82807D]"/>
                            <Typhograph children="dalam blouse dan celana, dilapisi " className=" text-xl text-[#82807D]"/>
                            <Typhograph children="trikot premium yang lembut dikulit." className="text-xl text-[#82807D]"/>
                            <Typhograph children="Kualitas jahit sangat rapi dan kuat." className=" text-xl text-[#82807D]"/>
                            <Typhograph children="Fitting dibuat khusus dengan tubuh " className=" text-xl text-[#82807D]"/>
                            <Typhograph children="wanita Indonesia." className=" text-xl text-[#82807D]"/>
                        </div>
                        <div className='flex gap-x-3'>
                        <img src={assets.Baju_Newdrop1} alt='' className='size-96'/>
                        <img src={assets.Baju_Newdrop2} alt='' className='size-96'/>
                        </div>
                    </div>
                    </div>
                </section>
                <section className='pb-12 bg-gradient-to-t from-[#C68913] to-[#F1F0EF]'>
                    <img src={assets.Aksamala} alt=''/>
                    <div className='flex'>
                        <img src={assets.Aksamala1} alt='' className='size-[340px]'/>
                        <img src={assets.Aksamala2} alt='' className='size-[340px]'/>
                        <img src={assets.Aksamala3} alt='' className='size-[340px]'/>
                        <img src={assets.Aksamala4} alt='' className='size-[340px]'/>
                        <img src={assets.Aksamala5} alt='' className='size-[340px]'/>
                    </div>
                </section>
                <section className='flex flex-col gap-y-6'>
                    <img src={assets.Background_Srikandi} alt='background-srikandi'/>
                    <div className='flex justify-around items-center gap-x-10'>
                        <div>
                        <img src={images[currentIndex]} alt='srikan' className='h-[400px] '/>
                        </div>
                        <div className='flex justify-items-stretch items-center ' >
                        <img src={assets.Srikandi1} alt='' className='h-[400px]'/>
                        <img src={assets.Srikandi2} alt='' className='h-[400px]'/>
                        <img src={assets.Srikandi4} alt='' className='h-[400px]'/>
                        <img src={assets.Srikandi5} alt='' className='h-[400px]'/>
                        </div>
                        <div className='flex flex-col '>
                        <Typhograph children="SEEN FROM" className="text-5xl font-bold text-[#82807D]"/>
                        <Typhograph children="BEHIND" className="text-4xl font-bold -mt-3"/>
                        <Typhograph children="Dua sisi tentang kegigihan" className="text-xl text-[#82807D] mt-3"/>
                        <Typhograph children=" dan kelembutan, desain modern" className="text-xl text-[#82807D]"/>
                        <Typhograph children=" dari srikandi menggambarkan" className="text-xl text-[#82807D]"/>
                        <Typhograph children=" wanita yang lembut namun tegas." className="text-xl text-[#82807D]"/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='flex justify-center items-center my-6'>
                        <Typhograph children="CURATED PICKS" className="font-bold text-center text-5xl "/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex relative'>
                            <div className='hover:blur-sm'>
                                <img src={assets.Regular} alt='regukar' className='size-[337px]'/> 
                            </div>
                            <div className='absolute flex flex-col justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30'>
                                <Typhograph children="REGULAR" className="font-bold text-2xl text-white "/>
                                <Typhograph children="COLLECTION" className="font-bold text-2xl text-white -mt-3"/>
                            </div>
                        </div>
                        <div className='flex relative'>
                            <div className='hover:blur-sm'>
                                <img src={assets.Sekar} alt='regukar' className='size-[337px]'/> 
                            </div>
                            <div className='absolute flex flex-col justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30'>
                                <Typhograph children="SEKAR" className="font-bold text-2xl text-white "/>
                                <Typhograph children="WUNGU" className="font-bold text-2xl text-white -mt-3"/>
                            </div>
                        </div>
                        <div className='flex relative'>
                            <div className='hover:blur-sm'>
                                <img src={assets.Srikandi} alt='regukar' className='size-[337px]'/> 
                            </div>
                            <div className='absolute flex flex-col justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30'>
                                <Typhograph children="SRIKANDI" className="font-bold text-2xl text-white "/>
                            </div>
                        </div>  
                        <div className='flex relative'>
                            <div className='hover:blur-sm'>
                                <img src={assets.Feature} alt='regukar' className='size-[337px]'/> 
                            </div>
                            <div className='absolute flex flex-col justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30'>
                                <Typhograph children="FEATURE" className="font-bold text-2xl text-white "/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Mainlayout>
    </>
  )
}

export default Highlight