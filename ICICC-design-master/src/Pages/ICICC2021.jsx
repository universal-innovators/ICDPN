import ImpDates from '@/components/ImpDates'

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
 import 'swiper/css/effect-coverflow';
import './slider.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination,Navigation,Autoplay } from 'swiper/modules';

const ICICC2021 = () => {
  return (
    <div className='container'>
    <hr />
    <h1 className='sponsor-heading'>ICICC 2021</h1>
<hr />
    <div className='relative sm:flex  justify-around gap-7'>
    <div className=' mt-10 flex-col    '>
    <p>Fourth version of International Conference in innovative Computing and Communication (ICICC-2021) was organized at Shaheed Sukhdev College of Business Studies in association with National institute of Technology Patna and University of Valladolid, Spain on 20-21 February 2021 at New Delhi, India. ICICC-2021 received 900 papers from approximately 3600 authors and a total of 210 papers were accepted with an acceptance ratio of 23%. All accepted papers were published in Springer’s Advances in Intelligent Systems and Computing, an scopus indexed series. A total of 590 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2021 received papers from 28 countries. Due to unexpected COVID-19, ICICC-2021 was organized in virtual mode.</p>
    <h1 className=' text-blue-950 text-xl sm:text-3xl mt-11'>LINK OF PROCEEDINGS OF ICICC 2021</h1><br/>
    <div className=' overflow-scroll sm:overflow-hidden'>
    <table className='mb-6 mt-7'>
    <tbody>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 1:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811625930'>https://www.springer.com/gp/book/9789811625930</a></td>
        </tr>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 2:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811625961'>https://www.springer.com/gp/book/9789811625961</a></td>
        </tr>
        <tr>
            <td><b>Volume 3:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811630705'>https://www.springer.com/gp/book/9789811630705</a></td>
        </tr></tbody>
        
    </table></div>
    <h1 className=' absolute gallery bottom-0 sm:left-[18rem] font-bold text-blue-950 text-4xl '>IMAGE GALLERY</h1><br/>

    
    
      
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
        className="mySwiper sm:ml-[5rem]  mt-3 sm:width-[10rem]"
      >
        
        
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-1.0149f916a43707384814.jpeg" />
          
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-2.923018b3951ee2efc7cd.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900' >
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-3.edfee2fabbedf3311050.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-4.e6fe4d48a4fe1e417556.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900' >
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-5.33d07882f52fd89341fd.jpeg" />
         
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-6.2ea020b62a69007dd3c5.jpeg" />
          
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-7.65b75929f74ebfedd57b.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-8.49d0692d41ebb3c7ee90.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-9.90c646107ca92c2e802d.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-10.bc866a534be0e06416e1.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-11.dcdd228ac79c1126fc2e.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-12.d478791b0d44cbb8e1f4.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-13.fa1df39ef75030b5b232.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
        <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-14.6780e3ff8ba7ebea5b92.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-full w-full object-fill' src="https://icicc-conf.com/static/media/icicc-21-15.fe610bcc5e3892844210.jpeg" />
          
        </SwiperSlide>
        
      </Swiper>


    </div>
    
  )
}

export default ICICC2021