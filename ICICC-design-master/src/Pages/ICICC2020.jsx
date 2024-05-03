import ImpDates from '@/components/ImpDates'

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
 import 'swiper/css/effect-coverflow';
import './slider.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination,Navigation,Autoplay } from 'swiper/modules';

const ICICC2020 = () => {
  return (
    <div className='container'>
      <hr />
    <h1 className='sponsor-heading'>ICICC 2020</h1>
    <hr />

    <div className='relative sm:flex justify-around gap-7'>
    <div className=' mt-10 flex-col '>
    <p>Third version of International Conference in innovative Computing and Communication (ICICC-2020) was organized at Shaheed Sukhdev College of Business Studies in association with National institute of Technology Patna and University of Valladolid, Spain on 21-23 rd February 2020 at New Delhi, India. ICICC-2020 received 803 papers from approximately 3212 authors and a total of 196 papers were accepted with an acceptance ratio of 24%. All accepted papers were published in Springer’s Advances in Intelligent Systems and Computing, an scopus indexed series. A total of 544 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2020 received papers from 29 countries.</p>
    <h1 className=' text-blue-950 text-3xl mt-11'>LINK OF PROCEEDINGS OF ICICC 2020</h1><br/>
    <div className='overflow-scroll sm:overflow-hidden'>
    <table className='mb-6 mt-7'>
    <tbody>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 1:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811551123'>https://www.springer.com/gp/book/9789811551123</a></td>
        </tr>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 2:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811551475'>https://www.springer.com/gp/book/9789811551475</a></td>
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
        className="mySwiper sm:ml-[5rem] mt-3 width-[10rem]"
      >
        
        
        
        
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-1.6c5ffab27b2756a8e496.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900' >
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-2.106d5264c37be46840af.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-3.33d60b39601c661ce306.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900' >
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-4.39782fac6e1de4e3c8f3.jpeg" />
         
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-5.bc6c58a1369ffbb04f19.jpeg" />
          
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-6.20b3167040231c9f69e7.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-7.2fbf67117f64fea58d40.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-8.169ed6cf2bbe2819941b.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/ic20-9.7dd574d5d834c4537ca3.jpeg" />
          
        </SwiperSlide>
        
        
        
      </Swiper>


    </div>
    
    
  )
}

export default ICICC2020