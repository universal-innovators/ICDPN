import ImpDates from '@/components/ImpDates'

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
 import 'swiper/css/effect-coverflow';
import './slider.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination,Navigation,Autoplay } from 'swiper/modules';


const ICICC2018 = () => {
  return (
    <div className='container'>
      <hr />
    <h1 className='sponsor-heading'>ICICC 2018</h1>
    <hr />

    <div className='relative sm:flex  justify-around gap-7'>
    <div className=' mt-10 flex-col '>
    <p>First International Conference on Innovative Computing and Communication (ICICC-2018) was organized at Guru Nanak Institute of Management, New Delhi, India on 5-6th May 2018. ICICC-2018 received 468 papers from approximately 1872 authors and a total of 92 papers were accepted with an acceptance ratio of 19%. All accepted papers were published in Springer’s Lecture Notes on Networks and Systems, an scopus indexed series. A total of 462 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2018 received papers from 20 countries and got lot of recommendations from the science community for the organization and the quality of papers.</p>
    <h1 className=' text-blue-950 text-3xl mt-11'>LINK OF PROCEEDINGS OF ICICC 2018</h1><br/>
    <div className=' overflow-scroll sm:overflow-hidden'><table className='mb-6 mt-7'>
    <tbody>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 1:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811323232'>https://www.springer.com/gp/book/9789811323232</a></td>
        </tr>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 2:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811323539'>https://www.springer.com/gp/book/9789811323539</a></td>
        </tr>
       </tbody>
        
    </table></div>
    <h1 className=' absolute bottom-0 sm:left-[18rem] font-bold text-blue-950 text-4xl '>IMAGE GALLERY</h1><br/>

    
    
      
       </div>
    
        <div className='mt-10'>
            <ImpDates/>
        </div>
        
    </div>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow,Autoplay, Pagination,Navigation]}
        className="mySwiper sm:ml-[5rem] mt-3 "
      >
        
        
        
        
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic18-1.9ea8e81ebcbe9b63a998.png" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900' >
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic18-2.713bc95444207a6b4983.png" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic18-3.75caca575ef3ff36e66c.png" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900' >
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic18-4.c097d3d1a865fa799795.png" />
         
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic18-5.98c7c31ddfe57df909bb.png" />
          
        </SwiperSlide>
        
        
        
        
        
        
      </Swiper>


    </div>
    
  )
}

export default ICICC2018