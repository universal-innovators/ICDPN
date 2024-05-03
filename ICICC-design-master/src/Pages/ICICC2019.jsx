import ImpDates from "@/components/ImpDates";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./slider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const ICICC2019 = () => {
  return (
    <div className="container">
      <hr />
      <h1 className="sponsor-heading">ICICC 2019</h1>
      <hr />
      <div className="relative sm:flex  justify-around gap-7">
        <div className=" mt-10 flex-col ">
          <p>
            Second version of International Conference in innovative Computing
            and Communication (ICICC-2019) was organized at VSB-Technical
            University of Ostrava, Czech Republic, Europe on 21-22nd March 2019
            with a pre-conference symposium at New Delhi, India on 16th March
            2019. ICICC-2019 received 552 papers from approximately 2208 authors
            and a total of 125 papers were accepted with an acceptance ratio of
            22%. All accepted papers were published in Springer’s Advances in
            Intelligent Systems and Computing, an scopus indexed series. A total
            of 524 participants attended the conference and pre-conference
            symposium including authors, keynotes, delegates, academicians, and
            industry experts. ICICC-2019 received papers from 25 countries.
          </p>
          <h1 className=" text-blue-950 text-3xl mt-11">
            LINK OF PROCEEDINGS OF ICICC 2019
          </h1>
          <br />
          <div className="overflow-scroll sm:overflow-hidden">
          <table className="mb-6 mt-7">
            <tbody>
              <tr className="hover:bg-gray-300">
                <td>
                  <b>Volume 1:</b>
                </td>
                <td>
                  <a
                    className="text-blue-500"
                    href="https://www.springer.com/gp/book/9789811512858"
                  >
                    https://www.springer.com/gp/book/9789811512858
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-gray-300">
                <td>
                  <b>Volume 2:</b>
                </td>
                <td>
                  <a
                    className="text-blue-500"
                    href="https://www.springer.com/gp/book/9789811503238"
                  >
                    https://www.springer.com/gp/book/9789811503238
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <h1 className=" absolute bottom-0 sm:left-[18rem] font-bold text-blue-950 text-4xl ">
            IMAGE GALLERY
          </h1>
          <br />
        </div>

        <div className="mt-10">
          <ImpDates />
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={"2"}
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
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper sm:ml-[5rem] mt-3 "
      >
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/1.8584d835df2e69254ccb.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/2.29e40904a5473a98619c.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/3.8e59b246a6ecea6c787f.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide  bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/4.ef916ba54d81ed2922c5.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/5.ae2f6ba249663f4811cf.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/6.646fb128f69a22b3c001.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/7.4ab865efe38574438393.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/8.5a48266d4b02381f89d7.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/9.aa2cab65ed26d9469f15.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/10.f08424998d89826fb5b3.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/11.51ea402e7a5ea413334d.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/12.277c9f45e7fdbfd8b292.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/13.973c90e54d11974e2a90.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/14.720356f386951f01ad12.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/15.a026333a82faf6ce5f11.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/16.8fa56d253d1a7b6fbe48.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/17.7d40aa4f2acf0355696c.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/18.8095bedb323ff7266b57.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/19.d60d05127bca68525070.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/20.48b160f439c1c28f19ad.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/21.b45c7c37ef7ea7e6c4de.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide bg-gradient-to-r from-cyan-300 to-blue-900">
          <img
            className="h-full w-full object-fill"
            src="https://icicc-conf.com/static/media/22.e8912342a1835f017220.jpeg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ICICC2019;
