import ImpDates from "@/components/ImpDates";
import img1 from "./prevImg/ICDPN2024/img1.jpeg";
import img2 from "./prevImg/ICDPN2024/img2.jpeg";
import img3 from "./prevImg/ICDPN2024/img3.jpeg";
import img4 from "./prevImg/ICDPN2024/img4.jpeg";
import img5 from "./prevImg/ICDPN2024/img5.jpeg";
import img6 from "./prevImg/ICDPN2024/img6.jpeg";
import img7 from "./prevImg/ICDPN2024/img7.jpeg";
import img8 from "./prevImg/ICDPN2024/img8.jpeg";
import img9 from "./prevImg/ICDPN2024/img9.jpeg";
import img10 from "./prevImg/ICDPN2024/img10.jpeg";
import img11 from "./prevImg/ICDPN2024/img11.jpeg";
import img12 from "./prevImg/ICDPN2024/img12.jpeg";
import img13 from "./prevImg/ICDPN2024/img13.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import PrevVolumes from "@/components/PrevVolumes";

const ICDPN2024 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <hr className="mb-4" />
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-4">
        ICDPN 2024
      </h1>
      <hr className="mb-8" />

      <div className="relative flex flex-col sm:flex-row justify-center items-start sm:justify-between gap-10">
        {/* Left Section */}
        <div className="p-4">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The <strong>International Conference on Data-Processing and Networking (ICDPN-2024)</strong> was successfully organized on <strong>25th-26th October 2024</strong> by the <strong>Institute of Technology and Business</strong> in České Budějovice, located near Prague, Czech Republic, Europe. The conference brought together researchers, academicians, and industry professionals from around the globe to discuss advancements and innovations in data processing and networking.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Key Highlights</h2>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 mb-6">
            <li>
              <strong>Venue:</strong> Institute of Technology and Business in České Budějovice, near Prague, Czech Republic.
            </li>
            <li>
              <strong>Collaboration:</strong> Supported by various international academic and industrial partners.
            </li>
            <li>
              <strong>Participation:</strong> Over 200+ participants attended in a hybrid format, including distinguished keynote speakers, authors, and delegates.
            </li>
            <li>
              <strong>Social Events:</strong> Networking sessions, musical night, and a one-day city tour of Ceske Krumnov were organized.
            </li>
          </ul>
          <PrevVolumes year={2024} links={["https://link.springer.com/book/9789819631018","https://link.springer.com/book/9789819655342"]}/>
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Submissions and Acceptance Rate
          </h2>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 mb-6">
            <li>
              <strong>Submissions:</strong> The conference received <strong>500+</strong> paper submissions from 30+ countries.
            </li>
            <li>
              <strong>Acceptance Rate:</strong> 100 papers were accepted, reflecting a <strong>20% acceptance rate</strong>.
            </li>
            <li>
              <strong>Publication:</strong> Accepted papers were published in <strong>Springer’s Lecture Notes on Networks and Systems</strong> (Scopus-indexed series).
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Topics Covered</h2>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 mb-6">
            <li>Advanced algorithms for data processing</li>
            <li>Machine learning in networking systems</li>
            <li>Big data analytics and applications</li>
            <li>IoT and smart networking solutions</li>
            <li>Cybersecurity in data communication</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Keynote Speakers
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Notable experts in data processing and networking shared their insights into cutting-edge research and industrial trends, enriching the conference experience.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Conclusion
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            ICDPN-2024 was a resounding success, fostering collaboration and knowledge exchange. We look forward to continuing this legacy in the next edition of ICDPN!
          </p>
        </div>

        
      </div>

      {/* Swiper Section */}
      <div className="mt-12">
        <h2 className="text-lg sm:text-xl font-bold text-center text-blue-800 mb-4">
          Image Gallery
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          slidesPerView={1}
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
          className="mySwiper"
        >
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13].map(
            (image, index) => (
              <SwiperSlide
                key={index}
                className="bg-gradient-to-r from-cyan-300 to-blue-900 rounded-lg overflow-hidden"
              >
                <img className="w-full h-full object-cover" src={image} alt={`Conference Image ${index + 1}`} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ICDPN2024;
