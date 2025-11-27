import ImpDates from "@/components/ImpDates";

import img1 from "./prevImg/ICDPN2025/img1.jpeg";
import img2 from "./prevImg/ICDPN2025/img2.jpeg";
import img3 from "./prevImg/ICDPN2025/img3.jpeg";
import img4 from "./prevImg/ICDPN2025/img4.jpeg";
import img5 from "./prevImg/ICDPN2025/img5.jpeg";
import img6 from "./prevImg/ICDPN2025/img6.jpeg";
import img7 from "./prevImg/ICDPN2025/img7.jpeg";
import img8 from "./prevImg/ICDPN2025/img8.jpeg";
import img9 from "./prevImg/ICDPN2025/img9.jpeg";
import img10 from "./prevImg/ICDPN2025/img10.jpeg";
import img11 from "./prevImg/ICDPN2025/img11.jpeg";
import img12 from "./prevImg/ICDPN2025/img12.jpeg";
import img13 from "./prevImg/ICDPN2025/img13.jpeg";
import img14 from "./prevImg/ICDPN2025/img14.jpeg";
import img15 from "./prevImg/ICDPN2025/img15.jpeg";
import img16 from "./prevImg/ICDPN2025/img16.jpeg";
import img17 from "./prevImg/ICDPN2025/img17.jpeg";
import img18 from "./prevImg/ICDPN2025/img18.jpeg";
import img19 from "./prevImg/ICDPN2025/img19.jpeg";
import img20 from "./prevImg/ICDPN2025/img20.jpeg";
import img21 from "./prevImg/ICDPN2025/img21.jpeg";
import img22 from "./prevImg/ICDPN2025/img22.jpeg";
import img23 from "./prevImg/ICDPN2025/img23.jpeg";
import img24 from "./prevImg/ICDPN2025/img24.jpeg";
import img25 from "./prevImg/ICDPN2025/img25.jpeg";
import img26 from "./prevImg/ICDPN2025/img26.jpeg";
import img27 from "./prevImg/ICDPN2025/img27.jpeg";
import img28 from "./prevImg/ICDPN2025/img28.jpeg";
import img29 from "./prevImg/ICDPN2025/img29.jpeg";
import img30 from "./prevImg/ICDPN2025/img30.jpeg";
import img31 from "./prevImg/ICDPN2025/img31.jpeg";
import img32 from "./prevImg/ICDPN2025/img32.jpeg";
import img33 from "./prevImg/ICDPN2025/img33.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import PrevVolumes from "@/components/PrevVolumes";

const ICDPN2025 = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
    img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24,
    img25, img26, img27, img28, img29, img30, img31, img32, img33
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <hr className="mb-4" />
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-4">
        ICDPN 2025
      </h1>
      <hr className="mb-8" />

      <div className="relative flex flex-col sm:flex-row justify-center items-start sm:justify-between gap-10">
        {/* Left */}
        <div className="p-4">

          {/* Updated Conference Intro */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The <strong>Second International Conference on Data-Processing and Networking (ICDPN-2025)</strong>
            was successfully organized on <strong>7th–8th November 2025</strong> at the
            <strong> Institute of Technology and Business</strong> in České Budějovice, near Prague, Czech Republic.
            The conference served as a premier international platform for researchers, academicians,
            industry professionals, and practitioners to discuss cutting-edge innovations, trends, and research challenges.
          </p>

          {/* Organizing & Collaborations */}
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Organizing & Academic Collaborations
          </h2>

          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 mb-6">
            <li>Slovak University of Agriculture in Nitra, Slovakia</li>
            <li>National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”</li>
            <li>Research Center for Industrial Problems of Development (NAS of Ukraine)</li>
            <li>Mata Sundri College for Women (University of Delhi), India</li>
            <li>Canadian Institute of Technology, Tirana, Albania, Canada</li>
          </ul>

          <p className="text-sm text-gray-700 mb-6">
            These collaborations strengthened academic quality and ensured global participation.
          </p>

          {/* Key Highlights */}
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Key Highlights
          </h2>

          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 mb-6">
            <li><strong>Venue:</strong> Institute of Technology and Business, České Budějovice, Czech Republic.</li>
            <li><strong>Conference Series:</strong> Springer LNNS (Approved) – Indexed in Scopus, EI, WoS.</li>
            <li><strong>Submissions:</strong> 900+ papers from 30+ countries.</li>
            <li><strong>Acceptance Rate:</strong> ~18%, highly selective.</li>
            <li><strong>Participation:</strong> 50+ offline attendees; remaining joined online.</li>
            <li><strong>Engagements:</strong> Technical sessions, keynote talks & networking events.</li>
          </ul>

          {/* Proceedings */}
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Proceedings of ICDPN-2025
          </h2>

          <p className="text-sm text-gray-700 mb-2">
            Accepted & presented papers were published in:
            <strong> Lecture Notes in Networks and Systems (LNNS), Springer</strong>.
          </p>

          <ul className="list-disc pl-6 text-sm text-gray-700 mb-6">
            <li>Volume 1: will be updated soon</li>
            <li>Volume 2: will be updated soon</li>
            <li>Volume 3: will be updated soon</li>
            <li>Volume 4: will be updated soon</li>
          </ul>

          {/* Topics Covered */}
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Topics Covered
          </h2>

          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 mb-6">
            <li>Advanced algorithms for data processing</li>
            <li>Machine learning & deep learning for networking</li>
            <li>Big data analytics & intelligent systems</li>
            <li>IoT architectures & smart networking technologies</li>
            <li>Cybersecurity frameworks for data communication</li>
            <li>Cloud, edge & fog computing</li>
            <li>Intelligent communication networks</li>
          </ul>

          {/* Keynote Speakers */}
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Keynote Speakers
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Renowned experts delivered keynote sessions highlighting emerging research,
            industrial applications, and future directions in data processing & networking.
          </p>

          {/* Conclusion */}
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
            Conclusion
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6">
            ICDPN-2025 concluded as a highly impactful and globally engaging event.
            With strong institutional partnerships, high-quality submissions, and worldwide participation,
            ICDPN continues its legacy of promoting research excellence and international collaboration.
            We look forward to welcoming participants to the next edition!
          </p>

          {/* <p className="text-sm sm:text-base text-blue-700 font-medium mb-6">
            <strong>YOUTUBE LINK OF ICDPN 2025: </strong> Will be provided soon.
          </p> */}
        </div>

        
      </div>

      {/* Image Gallery */}
      <div className="mt-12">
        <h2 className="text-lg sm:text-xl font-bold text-center text-blue-800 mb-4">
          Some Glimpses of ICDPN 2025
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
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="bg-gradient-to-r from-cyan-300 to-blue-900 rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Conference Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ICDPN2025;
