import ImpDates from "@/components/ImpDates";
import Conference from "../components/Conference";
import Slider from "../components/Slider";
import Notices from "@/components/Notices";

const Home = () => {
  
  return (
    <>
      <Slider />
      <Conference />
      <div className="container dateNotice">
        <ImpDates />
        <Notices />
      </div>
    </>
  );
};

export default Home;
