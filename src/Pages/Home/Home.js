import React,{useRef, useEffect, useState} from 'react'
import assets from '../../Assets'
import Typhograph from '../../Component/atoms/Typhograph/Typhograph'

const Home = () => {
  const imgRef = useRef()

  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [assets.Srikandi3, assets.Srikandi6]
  useEffect( () => {
    const ul = imgRef.current
    if(ul) {
      const clone = ul.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      ul.parentNode.appendChild(clone)
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)
    return () => clearInterval(intervalId)
  }, [images.length])
  return (
    <>
      <div className='flex flex-col gap-y-12 overflow-x-hidden'>
        <section>
          <img src={assets.Background} alt='background'/>
        </section>
        <section className='flex flex-col gap-y-6'>
          <Typhograph children="CURATED PICKS" className="font-bold text-center text-5xl"/>
          <div 
            className='w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)'>
            <div className='flex items-center justify-center md:justify-start whitespace-nowrap [&_img]:max-w-none animate-infinite-scroll' ref={imgRef}>
              <img src={assets.Regular} alt='regular' className='size-[337px]'/>
              <img src={assets.Sekar} alt='sekar wungu' className='size-[337px]'/>
              <img src={assets.Srikandi} alt='srikandi' className='size-[337px]'/>
              <img src={assets.Feature} alt='feature' className='size-[337px]'/>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-y-6'>
         <Typhograph children="NEW DROP" className="font-bold text-center text-5xl"/>
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
          <img src={assets.Background_Sekar} alt='sekar wungu'/>
        </section>
        <section className='flex flex-col justify-center items-center gap-y-6'>
          <Typhograph children="WHY RIZKYA BATIK ?" className="font-bold text-center text-5xl"/>
          <div className='flex justify-center items-center'>
          
            <div className='flex relative'>
              <img src={assets.why2} alt='' className=' w-60'/>
              <div className='absolute flex flex-col justify-center items-center text-center bottom-[5%] left-0 right-0'>
                <Typhograph children="KUALITAS" className="font-bold text-2xl text-white"/>
                <Typhograph children="TERJAMIN"className="font-bold text-2xl text-white -mt-3"/>
              </div>
            </div>

            <div className='flex relative'>
              <img src={assets.why3} alt='' className=' w-60'/>
              <div className='absolute flex flex-col justify-center items-center text-center bottom-[5%] left-0 right-0'>
                <Typhograph children="KEMUDAHAN" className="font-bold text-2xl text-white"/>
                <Typhograph children="TRANSAKSI"className="font-bold text-2xl text-white -mt-3"/>
              </div>
            </div>

            <div className='flex relative'>
              <img src={assets.why1} alt='' className=' w-60'/>
              <div className='absolute flex flex-col justify-center items-center text-center bottom-[5%] left-0 right-0'>
                <Typhograph children="PELAYANAN" className="font-bold text-2xl text-white"/>
                <Typhograph children="RAMAH"className="font-bold text-2xl text-white -mt-3"/>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#1E1D1C] p-8'>
          <div className='flex justify-center items-center gap-x-20'>
            <div className='flex flex-col size-64 '>
              <Typhograph children="RIZKYA'S" className="text-5xl font-bold text-[#82807D]"/>
              <Typhograph children="STORY" className="text-4xl font-bold -mt-3"/>
              <Typhograph children="Owner Rizkya Batik yaitu Ibu Dra. Dwi Hendrarti yang kerap disapa dengan Ibu Hetty Rizkya mendapatkan undangan Talkshow di Thamrin City,Jakarta pada 2 Oktober 2023."/>
            </div>
            <div>
              <img src={assets.story} alt="" className='size-80'/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home