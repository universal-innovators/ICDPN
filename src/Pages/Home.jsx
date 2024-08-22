import ImpDates from "@/components/ImpDates";
import Conference from "../components/Conference";
import Slider from "../components/Slider";
import Notices from "@/components/Notices";
//import Marquee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";
const Home = () => {

  return (
    <>
      <Slider />
      <Conference />


      {/* Keynote Speakers */}
      <h1 className="pl-[20px] text-gray-600 text-3xl tracking-wide text-center mt-5">Keynote Speakers</h1>
      <div className="flex flex-wrap items-center  justify-around mt-10">


        <Card className=" duration-1000 w-[300px] m-1">
          <CardContent>
            <p className="text-center flex flex-col items-center">

              <img src="./balVirdee.jpeg" className="h-48 object-cover  mb-1 mt-2" />
              <strong> Prof. Bal Virdee</strong>
              <br />
              Director of the Centre for Communications Technology, London Metropolitan University, London, UK
            </p>
          </CardContent>
        </Card>
        <Card className=" duration-1000 w-[300px] m-1">
          <CardContent>
            <p className="text-center flex flex-col items-center">
              <img src="./zdzislaw.jpeg" className="h-48 object-cover  mb-1 mt-2" />
              <strong> Prof. WSG Dr. Eng. Zdzislaw Polkowski</strong>
              <br />
              WSG University, Bydgoszcz, Poland
            </p>
          </CardContent>
        </Card>
        <Card className=" duration-1000 w-[300px] m-1">
          <CardContent>
            <p className="text-center flex flex-col items-center">
              <img src="./aninda.jpeg" className="h-48 object-cover  mb-1 mt-2" />
              <strong> Mr. Aninda Bose</strong>
              <br />
              Executive Editor Interdisciplinary Applied Sciences, Computational Intelligence, Energy             Springer Nature London
            </p>
          </CardContent>
        </Card>
        <Card className=" duration-1000 w-[300px] m-1">
          <CardContent>
            <p className="text-center flex flex-col items-center">
              <img src="./stanislaw.jpg" className="h-48 object-cover  mb-1 mt-2" />
              <strong> Prof. Ph.D. engineer Stanisław Duer
              </strong>
              <br />
              PhD. Electronics Engineering
            </p>
          </CardContent>
        </Card>
        <Card className=" duration-1000 w-[300px] m-1">
          <CardContent>
            <p className="text-center flex flex-col items-center">
              <img src="./biswajit.jpg" className="h-48 object-cover  mb-1 mt-2" />
              <strong> Dr. Biswajit Brahma
              </strong>
              <br />
              Data Expert, McKesson Corporation, USA.
              Over 40 Publications in SCI/Scopus journals.
              10+ patents and copyrights
            </p>
          </CardContent>
        </Card>
      </div>
      <marquee className="mt-9 sm:mx-11 text-2xl text-violet-600">CONFERENCE WILL BE ORGANISED IN HYBRID MODE. PAPER REGISTERED FOR ONLINE PRESENTATION WILL BE GIVEN 40% DISCOUNT ON REGISTRATION FEES.</marquee>
      <figure className="w-[20rem] border rounded-md shadow-xl shadow-gray-600 m-10 p-10 border-black h-[20rem] mx-auto"><img src="https://icdam-conf.com/assets/images/oneAPI.jpg" className=""></img>
        <figcaption className="mx-auto text-center">Intel® oneAPI<br /></figcaption>
      </figure>
      <div className=" p-11 rounded-tl-3xl rounded-br-3xl m-11 sm:mx-[4rem] mx-[2rem] bg-violet-600 text-white text-lg"><b className="text-2xl">Highlights</b><br />
        1)The conference focusses in bridging the gap between Industry and academia by organizing the workshops by the industry experts on latest technologies for the participants.<br />
        2)The conference is anticipated to attract a large number of high quality submissions and stimulate the cutting-edge research discussions among many academic pioneering researchers, scientists, industrial engineers, students from all around the world.<br />
        3)Another goal of this conference is to provide opportunities for academics to receive informal in-depth feedback through discussions, and to enable them to establish contact with professionals in various countries and institutions and also to encourage regional and international communication and collaboration.<br />
        4)Provide common platform for academic pioneering researchers, scientists, engineers and students to share their views and achievements.<br />
        5)Focus on innovative issues at international level by bringing together the experts from different countries.</div>
      <marquee className=" sm:mx-11 text-2xl text-violet-600">ALL REGISTERED PAPERS WILL BE PUBLISHED IN SCOPUS PROCEEDING AND EXTENDED PAPERS WILL BE SENT TO SCI AND SCOPUS JOURNALS.</marquee>

      <div className="container dateNotice">
        <ImpDates />
        <Notices />
      </div>
    </>
  );
};

export default Home;
