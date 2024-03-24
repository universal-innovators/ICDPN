import Notices from "@/components/Notices";
import Body from "../components/Body";
import Conference from "../components/Conference";
import ImpDates from "../components/ImpDates";
import Slider from "../components/Slider";
import Speaker from "../components/Speaker";

const Home = () => {
  return (
    <>
      <Slider />
      <Body />
      <Conference />
      <Speaker />
      <div className="flex mt-20">
        <ImpDates />
        <Notices />
      </div>
    </>
  );
};

export default Home;
