import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ss1 from "./Sessions/SS-1.pdf";
import ss2 from "./Sessions/SS-2.pdf";

const SpecialSessions = () => {
  return (
    <div>
      <div className="w-[90%] mt-6 mx-auto text-center text-blue-950 font-bold text-3xl bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        Special Sessions
      </div>
      <div className="w-10/12 h-[1px] ml-10 mt-4 bg-gray-400"></div>
      <br />
      <div className="grid gap-y-11 sm:grid-cols-4 ml-6 mb-10">
        <Card className="hover:scale-110 h-[300px] bg-blue-900 shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl">
          <CardHeader>
            <CardTitle className="text-sm">
              Session - 1:Recent Advances in AI and Machine Learning: Innovations, Environmental Sustainability, and Healthcare
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Organisers
              <br />
              Dr. Sangeeta Kumari, Bennett University (The Times Group), Greater Noida, U.P., India
            </p>
          </CardContent>
          <CardFooter>
            <p>
              Listing
              <br />
              <a href={ss1} target="_blank">
              SS 001.pdf
              </a>
            </p>
          </CardFooter>
        </Card>
        <Card className="hover:scale-110 h-[300px] bg-blue-900 shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl">
          <CardHeader>
            <CardTitle className="text-sm">
              Session - 2:IoT Technologies for Data Networking for Sustainable Urban Advancements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Organisers
              <br />
              Dr Rashmi Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, India,
              Dr Inderjeet Kaur, Galgotia College of Engineering and Technology, Greater Noida, India
            </p>
          </CardContent>
          <CardFooter>
            <p>
              Listing
              <br />
              <a href={ss2} target="_blank">
              SS 002.pdf
              </a>
            </p>
          </CardFooter>
        </Card>
        
      </div>
    </div>
  );
};

export default SpecialSessions;
