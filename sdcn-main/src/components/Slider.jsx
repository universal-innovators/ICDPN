// import React, { useEffect, useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

//  export default function Slider() {
//   const slides = [
    
    
//     {
//       url: 'https://icicc-conf.com//static/media/1.f059748b3f124b434563.jpg',
//     },

    
//     {
//       url: 'https://icicc-conf.com/static/media/venue.7294c26c94d75d5faf38.png',
//     },
//     {
//         url: 'https://icicc-conf.com//static/media/Untitled%20design.e6b88a50ab17ec656e78.png',
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
  
  
//   useEffect(()=> {setTimeout(()=>{
//     const isLast = currentIndex === slides.length - 1;

//     const newIndex = isLast ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   },5000)})

//   return (
    
//     <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className='w-full h-full rounded-2xl bg-center bg-cover duration-1000 '
//       ></div>
//       {/* Left Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-4xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className='flex top-4 justify-center py-2'>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className='text-2xl cursor-pointer'
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
//import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  
  
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="  rounded-lg w-[100%] md:h-[40rem]"
      >
        <SwiperSlide className='myswiper-slide'><img className='myswiper-slide img ' src='https://d3iso9mq9tb10q.cloudfront.net/wysiwyg/prague/05-routes-and-maps/Prague-Routes-and-Maps-Hero-Image.jpg' alt='kk'/></SwiperSlide>
        <SwiperSlide className='myswiper-slide'><img className='myswiper-slide img ' src='https://cdn.getyourguide.com/img/tour/a32fde769a5610171f3d9889bd5b752fd668a0622a9b46e09a32780a02be7bb8.jpeg/98.jpg' alt=''/></SwiperSlide>
        <SwiperSlide className='myswiper-slide'><img className='myswiper-slide img ' src='https://allindiapackages.com/public/uploads/1550907613shirdi_varanasi_kashmir_gt_tour.jpg' alt=''/></SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Slider
