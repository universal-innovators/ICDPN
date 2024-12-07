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
import ss7 from "./Sessions/SS-7.pdf";
import ss8 from "./Sessions/SS-8.pdf";
import ss9 from "./Sessions/SS-9.pdf";
import ss10 from "./Sessions/SS-10.pdf";
import ss11 from "./Sessions/SS-11.pdf";
import ss12 from "./Sessions/SS-12.pdf";
import ss13 from "./Sessions/SS-13.pdf";
import ss14 from "./Sessions/SS-14.pdf";
import ss15 from "./Sessions/SS-15.pdf";
import ss16 from "./Sessions/SS-16.pdf";
import ss17 from "./Sessions/SS-17.pdf";

const sessionDetails = [
  {
    title: "Intelligent industrial design",
    organisers: [
      "Dr. Souvik Das, Assistant Professor, NIT Rourkela, INDIA",
    ],
    file: ss1,
    fileName: "SS 001.pdf",
  },
  // {
  //   title: "Session - 2: IoT Technologies for Data Networking for Sustainable Urban Advancements",
  //   organisers: [
  //     "Dr Rashmi Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, India",
  //     "Dr Inderjeet Kaur, Galgotia College of Engineering and Technology, Greater Noida, India",
  //   ],
  //   file: ss2,
  //   fileName: "SS 002.pdf",
  // },
  // {
  //   title: "Session - 3: Next-Generation AI and ML: Key Trends Shaping the Future",
  //   organisers: [
  //     "Dr. Garima Jaiswal, Assistant Professor, SCSET, Bennett University, India",
  //     "Dr. Ritu Rani, Research Associate -III (DST Curie AI Project), Indira Gandhi Delhi Technical University for Women, India",
  //   ],
  //   file: ss3,
  //   fileName: "SS 003.pdf",
  // },
  // {
  //   title: "Session - 4: Recent Advances in Intelligent Systems and Communication & Machine Learning",
  //   organisers: [
  //     "Dr. Vikash Yadav, Government Polytechnic Bighapur Unnao, Uttar Pradesh, India",
  //     "Mr. Anup Lal Yadav, Chandigarh University, Mohali, Punjab, India",
  //     "Dr. Navpreet Kaur Walia, Chandigarh University, Mohali, Punjab, India",
  //   ],
  //   file: ss4,
  //   fileName: "SS 004.pdf",
  // },
  // {
  //   title: "Session - 5: Scalable Data Processing Techniques at Enterprises for AI applications",
  //   organisers: [
  //     "Dr. Balaji Ganesh Rajagopal, SRM Institute of Science and Technology Tiruchirappalli, India",
  //     "Dr. Deebalakshmi Ramalingam, SRM Institute of Science and Technology Tiruchirappalli, India",
  //   ],
  //   file: ss5,
  //   fileName: "SS 005.pdf",
  // },
  // {
  //   title: "Session - 6: Leveraging AI, Machine Learning, and Intelligent Systems in Data Processing and Networking for Enhanced Smart Systems",
  //   organisers: [
  //     "Dr. Lokesh Jain, Department of Information Technology, Jagan Institute of Management Studies, Rohini, Delhi, India",
  //   ],
  //   file: ss6,
  //   fileName: "SS 006.pdf",
  // },
  // {
  //   title: "Session - 7: Computational Intelligence and Communication System",
  //   organisers: [
  //     "Dr. Tanweer Ali (Associate Professor), Dr. Praveen Kumar (Assistant Professor), Dr. Subramanya G Nayak (Professor), Dr. Pramod Kumar (Professor) Department of Electronics and Communication Engineering, Manipal Institute of Technology, MAHE, Manipal",
  //     "Dr. Sameena Pathan, Assistant Professor, Department of Information and Communication Technology, MAHE, Manipal",
  //   ],
  //   file: ss7,
  //   fileName: "SS 007.pdf",
  // },
  // {
  //   title: "Session - 8: Transforming the Capabilities of Unmanned Systems with Artificial Intelligence and IoT",
  //   organisers: [
  //     "Dr. Vandana Sharma, Computer Science Department, CHRIST University, Delhi NCR, Ghaziabad, India",
  //     "Dr. Ghulam E Mustafa Abro, Interdisciplinary Research Centre for Aviation and Space Exploration, King Fahd University of Petroleum and Minerals, Kingdom of Saudi Arabia",
  //   ],
  //   file: ss8,
  //   fileName: "SS 008.pdf",
  // },
  // {  title: "Session - 9: Explainable AI and large-scale data analytics models for healthcare engineering",
  //   organisers: [
  //     "Dr. Karthika Subbaraj, Associate Professor, Department of Information Technology, Sri Sivasubramaniya Nadar College of Engineering, Kalavakkam, Chennai, India.",
  //     "Dr. Balamurugan Balasamy, Associate Dean- Students, Shiv Nadar University, Delhi-NCR Campus, Noida, Indiaand Minerals, Kingdom of Saudi Arabia",
  //   ],
  //   file: ss9,
  //   fileName: "SS 009.pdf",
  // },
  // {  title: "Session - 10: Digital Technologies for Biotechnology and Bioinformatics",
  //   organisers: [
  //     "Dr. Dheeraj Chitara, Associate Professor, Department of Science, Biyani Girls College, Vidhyadhar Nagar, Jaipur, India.",
  //     "Dr. Shilpa Bhargava, Associate Professor, Department of Science, Biyani Girls College, Vidhyadhar Nagar, Jaipur, India",
  //   ],
  //   file: ss10,
  //   fileName: "SS 010.pdf",
  // },
  // {  title: "Session - 11: AI/ML in LifeSciences/Pharmaceutical and Smart Health Care",
  //   organisers: [
  //     "Mr Rohit Kumar Bondugula, University of Hyderabad, India",
  //   ],
  //   file: ss11,
  //   fileName: "SS 011.pdf",
  // },
  // {  title: "Session - 12: Integrated Modern Network Technologies",
  //   organisers: [
  //     "Dr. Tanvi Gautam, Jaypee Institute of Information and Technology, INDIA ",
  //     "Dr. Prashant K. Gupta, Bennett University, Greater Noida, Uttar Pradesh, INDIA ",
  //     "Dr. Bireshwar Dass Mazumdar, Bennett University, Greater Noida, Uttar Pradesh, INDIA ",
  //     "Dr. T S Pradeep Kumar, Vellore Institute of Technology, Chennai Campus, INDIA "
  //   ],
  //   file: ss12,
  //   fileName: "SS 012.pdf",
  // },
  // {  title: "Session - 13: Data-Processing and Networking in the field of Medical IoT",
  //   organisers: [
  //     "Dr. Vandana Sharma, Christ University, Delhi-NCR Campus",
  //     "Dr. Durgansh Sharma, Christ University, Delhi-NCR Campus"
  //   ],
  //   file: ss13,
  //   fileName: "SS 013.pdf",
  // }
  // ,
  // {  title: "Session - 14: Role of AI and Machine Learning in Biomedical Engineering",
  //   organisers: [
  //     "Dr. Gurmeet Singh, PhD IITD, Associate Professor, GTBIT",
  //     "Dr. Ramandeep Singh, Scientist-D, Neuro-engineering Lab, Department of Neurosurgery, AIIMS, New Delhi"
  //   ],
  //   file: ss14,
  //   fileName: "SS 014.pdf",
  // },
  // {  title: "Session - 15: Advancements in Empirical Artificial Intelligence",
  //   organisers: [
  //     "Dr. Deepak Sharma, Assistant Professor, Department of Computer Science, Aryabhatta College, South Campus, University of Delhi",
  //     "Dr. Ranjan Kumar, Professor, Department of Computer Science, Aryabhatta College, South Campus, University of Delhi"
  //   ],
  //   file: ss15,
  //   fileName: "SS 015.pdf",
  // },
  // {  title: "Session - 16: The AI Edge: Advanced Computing Techniques for Autonomous Innovation",
  //   organisers: [
  //     "Dr. Sumit Kumar Mishra, Assistant Professor, Galgotias University, Gr. Noida, India.",
  //     "Dr. Manish Verma, Associate Professor, Galgotias University, Gr. Noida, India.",
  //     "Ms. Divya Saxena,  Graduate  Research Assistant,  Florida International University  Miami,  USA"
  //   ],
  //   file: ss16,
  //   fileName: "SS 016.pdf",
  // },
  // {  title: "Session - 17: Digital Technologies for Biotechnology and Bioinformatics",
  //   organisers: [
  //     "Dr. Dheeraj Chitara Department of Biotechnology, School of Sciences, JECRC University, Sitapura, Jaipur, India.",
  //     "Dr. Shilpa Bhargava Department of Science, Biyani Girls College, Vidhyadhar Nagar, Jaipur, India.",
  //     "Dr. Prashant Kumar Department of Bioinformatics, Kalinga University, Raipur, India."
  //   ],
  //   file: ss17,
  //   fileName: "SS 017.pdf",
  // },
  
  
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
