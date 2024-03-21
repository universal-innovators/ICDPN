
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Speaker = () => {
  return (
    <>
    <h1 className='text-center text-violet-800 text-5xl mb-8 mt-12'>Keynote Speakers of ICICC-2025 Conference</h1>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900' >
          <img className='h-[150px] w-[150px] m-auto mt-4 rounded-full' src="https://icicc-conf.com/static/media/Bal_Virdee.84db0adf9416088a9be5.jpg" />
          <h6 className='font-bold text-center mt-4 '>Prof Bal Virdee</h6>
          <p className='text-center'>London Metropolitan University, Centre for Communications Techology, School of Computing & Digital Media.</p>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-[150px] w-[150px] m-auto mt-4 rounded-full' src="https://icicc-conf.com/static/media/intel.1e972292c118af2957b5.jpg" />
          <h6 className='font-bold text-center mt-4'>Shriram Kris Vasudevan</h6>
          <p className='text-center'>Intel Corporation</p>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-[150px] w-[150px] m-auto mt-4 rounded-full' src="https://icicc-conf.com/static/media/sp3.ce0292e2f7d6360a430f.png" />
          <h6 className='font-bold text-center mt-4 '>Dr. Jagdish Chand Bansal</h6>
          <p className='text-center'>South Asian University, India</p>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900'>
          <img className='h-[150px] w-[150px] m-auto mt-4 rounded-full' src="https://icicc-conf.com/static/media/sp4.899282303527893daa52.jpg" />
          <h6 className='font-bold text-center mt-4 '>Prof. Vivek Bohara</h6>
          <p className='text-center'>IIIT DELHI</p>
        </SwiperSlide>
        
      </Swiper>
      </>
  )
}

export default Speaker