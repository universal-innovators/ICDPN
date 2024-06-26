import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ss1 from "./Sessions/SS-1.pdf";
import ss2 from "./Sessions/SS-2.pdf";
import ss3 from "./Sessions/SS-3.pdf";
import ss4 from "./Sessions/SS-4.pdf";
import ss5 from "./Sessions/SS-5.pdf";
import ss6 from "./Sessions/SS-6.pdf";

const sessionDetails = [
  {
    title: "Session - 1: Recent Advances in AI and Machine Learning: Innovations, Environmental Sustainability, and Healthcare",
    organisers: [
      "Dr. Sangeeta Kumari, Bennett University (The Times Group), Greater Noida, U.P., India",
    ],
    file: ss1,
    fileName: "SS 001.pdf",
  },
  {
    title: "Session - 2: IoT Technologies for Data Networking for Sustainable Urban Advancements",
    organisers: [
      "Dr Rashmi Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, India",
      "Dr Inderjeet Kaur, Galgotia College of Engineering and Technology, Greater Noida, India",
    ],
    file: ss2,
    fileName: "SS 002.pdf",
  },
  {
    title: "Session - 3: Next-Generation AI and ML: Key Trends Shaping the Future",
    organisers: [
      "Dr. Garima Jaiswal, Assistant Professor, SCSET, Bennett University, India",
      "Dr. Ritu Rani, Research Associate -III (DST Curie AI Project), Indira Gandhi Delhi Technical University for Women, India",
    ],
    file: ss3,
    fileName: "SS 003.pdf",
  },
  {
    title: "Session - 4: Recent Advances in Intelligent Systems and Communication & Machine Learning",
    organisers: [
      "Dr. Vikash Yadav, Government Polytechnic Bighapur Unnao, Uttar Pradesh, India",
      "Mr. Anup Lal Yadav, Chandigarh University, Mohali, Punjab, India",
      "Dr. Navpreet Kaur Walia, Chandigarh University, Mohali, Punjab, India",
    ],
    file: ss4,
    fileName: "SS 004.pdf",
  },
  {
    title: "Session - 5: Scalable Data Processing Techniques at Enterprises for AI applications",
    organisers: [
      "Dr. Balaji Ganesh Rajagopal, SRM Institute of Science and Technology Tiruchirappalli, India",
      "Dr. Deebalakshmi Ramalingam, SRM Institute of Science and Technology Tiruchirappalli, India",
    ],
    file: ss5,
    fileName: "SS 005.pdf",
  },
  {
    title: "Session - 6: Leveraging AI, Machine Learning, and Intelligent Systems in Data Processing and Networking for Enhanced Smart Systems",
    organisers: [
      "Dr. Lokesh Jain, Department of Information Technology, Jagan Institute of Management Studies, Rohini, Delhi, India",
    ],
    file: ss6,
    fileName: "SS 006.pdf",
  },
  
];

const SpecialSessions = () => {
  return (
    <div>
      <div className="w-[90%] mt-6 mx-auto text-center text-blue-950 font-bold text-3xl bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        Special Sessions
      </div>
      <div className="w-10/12 h-[1px] ml-10 mt-4 bg-gray-400"></div>
      <br />
      <div className="grid gap-y-11 sm:grid-cols-4 ml-6 mb-10">
        {sessionDetails.map((session, index) => (
          <Card key={index} className="hover:scale-110 bg-blue-900 shadow-xl shadow-violet-950 text-white duration-1000 w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl">
            <CardHeader>
              <CardTitle className="text-sm">{session.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Organisers
                <br />
                {session.organisers.map((organiser, i) => (
                  <span key={i}>
                    {organiser}
                    {i < session.organisers.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Listing
                <br />
                <a href={session.file} target="_blank">
                  {session.fileName}
                </a>
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SpecialSessions;
