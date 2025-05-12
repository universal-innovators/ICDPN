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
  {
    title: "Session - 2: Recent Advances in Intelligent Systems and Communication & Machine Learning",
    organisers: [
      "Dr. Vikash Yadav, Department of Technical Education, UP, India",
      "Ms. Sonam Gupta, Ajay Kumar Garg Engineering College, Ghaziabad, India",
      "Mr. Navjot Singh Talwandi, Chandigarh University, Mohali, Punjab, India"
    ],
    file: ss2,
    fileName: "SS 002.pdf",
  },
  {
    title: "Session - 3: Intelligent Computing and Analytic using MACHINE LEARNING and DEEP LEARNING",
    organisers: [
      "Dr. Preeti Nagrath, Associate Professor, Bharati Vidyapeeth’s college of Engineering, Delhi, India",
      "Dr. Rachna Jain, Associate Professor, Bhagwan Parshuram Institute of Technology, Delhi, India"
    ],
    file: ss3,
    fileName: "SS 003.pdf",
  },
  {
    title: "Session - 4: Smart Technologies for Human Well-Being: The Role of IoT and AI",
    organisers: [
      "Dr. Divya Agarwal, Assistant Professor, Vivekananda Institute of Professional Studies-Technical campus, Delhi, India",
      "Dr. Sandhya Tarwani, Assistant Professor, Vivekananda Institute of Professional Studies-Technical campus, Delhi, India",
    ],
    file: ss4,
    fileName: "SS 004.pdf",
  },
  {
    title: "Session - 5: Cutting-edge Technologies in Social Sustainable Development",
    organisers: [
      "Dr. Rajendra Kumar, Sharda School of Computing Science & Engineering, Sharda University, Greater Noida, India",
      "Dr. Leong Wai Yie, INTI International University, Nilai, Malaysia",
      "Mr. Ankit Bansal, Omnichannel Analytics Manager, Leander, Texas, USA",
    ],
    file: ss5,
    fileName: "SS 005.pdf",
  },
  {
    title: "Session - 6: AI-Powered Cybersecurity: Advancements, Challenges, and Future Trends",
    organisers: [
      "Dr. Monica Bhutani, Associate Professor, Bharati Vidyapeeth’s College of Engineering, New Delhi",
    ],
    file: ss6,
    fileName: "SS 006.pdf",
  },
  {
    title: "Session - 7: Applied AI for Smart Data Processing and Network Security",
    organisers: [
      "Dr. Manvi Breja, The NorthCap University, Gurugram, India",
      "Dr. Prachi, The NorthCap University, Gurugram, India",
      "Dr. Gaurav Aggarwal, Amity University Tashkent, Uzbekistan"
    ],
    file: ss7,
    fileName: "SS 007.pdf",
  },
  {
    title: "Session - 8: AI in Data Processing and Networking: Innovations, Challenges, and Applications",
    organisers: [
      "Prof (Dr). Kamal Kundra, New Delhi Institute of Management, New Delhi",
      "Dr Deepti Khanna, Jagan Institute of Management Studies, Rohini, New Delhi",
      "Mr. Naveen ananda Kumar Joseph annaiah, Data Engineer, Tekinvaderz, LLC, FLORIDA, USA",
    ],
    file: ss8,
    fileName: "SS 008.pdf",
  },
  {  title: "Session - 9: Emerging Intelligent Computing Techniques and their Applications (EICTA)",
    organisers: [
      "Dr. Nitish Pathak, Associate Professor, Bhagwan Parshuram Institute of Technology (BPIT), Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi, India",
      "Dr. Neelam Sharma, Maharaja Agrasen Institute of Technology (MAIT), Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi, India",
    ],
    file: ss9,
    fileName: "SS 009.pdf",
  },
  {  title: "Session - 10: Innovation in Biomedical Engineering and Role of AL and ML In health care",
    organisers: [
      "Dr. Gurmeet Singh, Associate Professor, Guru Tegh Bahadur Institute of technology, GGSIPU , New Delhi , India)",
    ],
    file: ss10,
    fileName: "SS 010.pdf",
  },
  {  title: "Session - 11: Intelligent Data Systems and Resilient Network Security: Bridging AI and Cybersecurity",
    organisers: [
      "Dr. Nikhil Kumar Marriwala, Associate Professor, Dept. of ECE, Kurukshetra University, Kurukshetra, India",
      "Dr. Vinod Kumar Shukla, Amity University Dubai, UAE",
      "Dr. Shruti Jain, Professor, Department of ECE, Jaypee University of Information Technology, Waknaghat Distt. Solan, Himachal Pradesh, INDIA",
    ],
    file: ss11,
    fileName: "SS 011.pdf",
  },
  {  title: "Session - 12: Redefining Data Management: Pioneering the Future with AI, ML, and Deep Learning for Next-Gen Innovation",
    organisers: [
      "Dr. Lokesh Jain, Department of Information Technology, Jagan Institute of Management Studies, Rohini, Delhi, India,"
    ],
    file: ss12,
    fileName: "SS 012.pdf",
  },
  {  title: "Session - 13: Artificial Intelligence in Society: Broad-Spectrum Innovations in Analytics, Generative Intelligence, and Agentic Systems",
    organisers: [
      "Dr. Biswadip Basu Mallik, Institute of Engineering & Management (School of University of Engineering and Management), Kolkata, India",
      "Ms. Swarnamouli Majumdar, CIISE, Concordia University, Canada"
    ],
    file: ss13,
    fileName: "SS 013.pdf",
  }
  ,
  {  title: "Session - 14: Intelligent Wireless Systems: Integrating Sensor Networks, Cognitive Communication, and Neuro-Adaptive Power Transfer",
    organisers: [
      "Dr. Anupam Das PhD, (Gauhati University) Associate Professor, Department of CSE, The Assam Royal Global University",
      "Dr. Raghavendra Prasad PhD, (NIT) Associate Professor, Department of CSE, The Assam Royal Global University"
    ],
    file: ss14,
    fileName: "SS 014.pdf",
  },
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
