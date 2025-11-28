import ImpDates from "@/components/ImpDates"

const AboutUni = () => {
 return(
    <div className="container">
      <hr />
      <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
          <b className=" font-extrabold text-xl tracking-wider">
            About Universal Inovators
          </b>
        </div>
      <hr />
      <div className="sm:flex justify-around gap-7">
        <div className="sponsor-text-container">
            <br />
          <p className=" bg-violet-700 text-white p-7 text-justify tracking-wide rounded-tl-3xl rounded-br-3xl">
          Every success story begins with a vision. The Universal Inovators (UI) is a private and autonomous body promoting research based activities all over the world. The UI aims to do non-profit collaborative research in the field of engineering, applied sciences and management. We aim to be the leading independent academic and professional body working in collaboration with academicians, faculties, students, researchers and educational institutes. This leads us to be playing a creative and critical role in the society by disseminating teaching and research on a global scale, the cornerstones of which are good, long-term relationships, a focus on real life applications necessary for the welfare of the mankind, and an ability to combine quality and innovation. The mission of Universal Inovators is to cultivate and carry out research in high- tech methodologies. We deal in conducting FDP’s, workshops, seminars, and conferences. As a recognized body, Universal Inovators (UI) seeks to facilitate the availability of academic excellence and disseminate innovative knowledge worldwide.


          </p>
          <br />
        </div>
        <div className="min-w-fit">
            <br />
            <ImpDates />
        </div>
      </div>
    </div>
  )
}
export default AboutUni