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
import ss18 from "./Sessions/SS-18.pdf";
import ss19 from "./Sessions/SS-19.pdf";
import ss20 from "./Sessions/SS-20.pdf";
import ss21 from "./Sessions/SS-21.pdf";
import ss22 from "./Sessions/SS-22.pdf";
import ss23 from "./Sessions/SS-23.pdf";
import ss24 from "./Sessions/SS-24.pdf";
import ss25 from "./Sessions/SS-25.pdf";
import ss26 from "./Sessions/SS-26.pdf";
import ss27 from "./Sessions/SS-27.pdf";
import ss28 from "./Sessions/SS-28.pdf";
import ss29 from "./Sessions/SS-29.pdf";










const sessionDetails = [

  {
    title: "Session - 1: Secure, Ethical, and Responsible Data Engineering and Analytics",
    organisers: [
      "Dr Jyoti Parashar, Associate Professor, Computer Science and Engineering, Panipat Institute of Engineering and Technology (PIET), Haryana, India",
      "Ms. Shweta, Assistant Professor, Department of Computer Science and Engineering, Bhagwan Parshuram Institute of Engineering, Rohini, New Delhi",
      "Yogendra Chhetri, Post Doctoral Researcher, Computer Science or Post Doctoral Research, Newcastle University in Singapore, Singapore"
    ],
    file: ss1,
    fileName: "SS 001.pdf",
  },
  {
    title: "Session - 2: Data Engineering 5.0: AI, Automation, and Analytics",
    organisers: [
      "Vinod Kumar , School of Engineering & Applied Science, George Washington University, Washington, DC, USA",
      "Srinivasa Rao Adapa, Software Engineer, MPART Technologies, CALIFORNIA, United States",
      "Ms. Reena Jindal, Assistant Professor, Department of Computer Applications, Panipat Institute of Engineering & Technology, Panipat, India"
    ],
    file: ss2,
    fileName: "SS 002.pdf",
  },
  {
    title: "Session - 3: Smart Technologies for Human Well-Being: The Role of IoT and AI",
    organisers: [
      "Dr. Divya Agarwal, Assistant Professor, Vivekananda Institute of Professional Studies-Technical campus, Delhi, India",
      "Dr. Sandhya Tarwani, Assistant Professor, Vivekananda Institute of Professional Studies-Technical campus, Delhi, India",
    ],
    file: ss3,
    fileName: "SS 003.pdf",
  },
  {
    title: "Session - 4: Emerging Trends in Computer Engineering, Data Processing, Artificial Intelligance and Intelligent Networking",
    organisers: [
      "Dr. Gurmeet Singh (PhD IITD), Associate Professor, Guru Tegh Bahadur Institute of technology, GGSIPU , New Delhi , India)",
    ],
    file: ss4,
    fileName: "SS 004.pdf",
  },
  {
    title: "Session - 5: Artificial Intelligence for Smart Healthcare and Sustainable Bio-Waste Utilization",
    organisers: [
      "Dr. Deepti Khanna, Associate Professor, Jagan Institute of Management Studies (JIMS), Rohini, New Delhi, India",
    ],
    file: ss5,
    fileName: "SS 005.pdf",
  },
  {
    title: "Session - 6: Language, Intelligence, and Agency: Interpretable and Generative AI Paradigms",
    organisers: [
      "Dr. Nitin Jain, Bennett University, Greater Noida, Uttar Pradesh, India",
      "Dr. Dipika Jain, Bennett University, Greater Noida, Uttar Pradesh, India",
      "Dr. Pallavi Ranjan, School of Computer Science, University of Wollongong, Dubai",
      "Dr. Aman Anand, ITS Engineering College, Greater Noida, Uttar Pradesh, India"
    ],
    file: ss6,
    fileName: "SS 006.pdf",
  },
  {
    title: "Session - 7: AI and Machine Learning: Transforming Data Analytics for Global Impact and Intelligent Systems",
    organisers: [
      "Dr. Sangeeta Kumari, University of Malta, Malta, Europe"
    ],
    file: ss7,
    fileName: "SS 007.pdf",
  },
  {
    title: "Session - 8: Research Trends in Data Science, IoT and Computational Intelligence",
    organisers: [
      " Dr. Shruti Aggarwal, Department of Computer Science & Engineering, Thapar Institute of Engineering and Technology, India",
      "Dr. Syed Anar Ansar, Associate Professor , School of Computer Science and Engineering , Sandip University, Sijoul, Madhubani, Bihar",
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
  {  title: "Session - 10: Next-Generation Data Processing for Smart and Sustainable Healthcare",
    organisers: [
      "Dr. Sandip Mandal, Karolinska Institutet, Stockholm, Sweden",
      "Dr. Sakshi Gupta, Dronacharya College of Engineering, Gurugram, India",
      "Mr. Hilal Ahmad Shah, IILM University, Greater Noida, India"
    ],
    file: ss10,
    fileName: "SS 010.pdf",
  },
  {  title: "Session - 11: Agentic AI for Healthcare Systems: Autonomous Systems for Intelligent Care Delivery",
    organisers: [
      "Shaurya Gupta, Associate Professor,UPES Dehradun India",
"Sonali Vyas, Professor, JK Lakshmipat, University, Jaipur, India",
"Sourabh Singh Verma, Associate Professor, IoT & IS Department, Manipal University Jaipur, Jaipur."
    ],
    file: ss11,
    fileName: "SS 011.pdf",
  },
   {  title: "Session - 12: Artificial Intelligence and Machine Learning in Cybersecurity",
     organisers: [
       "Dr Mohammad Tabrez Quasim, Associate Professor, Department of Computer Science and Artificial Intelligence, College of Computing and Information Technology, University of Bisha, Bisha, Saudi Arabia"
     ],
     file: ss12,
     fileName: "SS 012.pdf",
   },
  {  title: "Session - 13: Redefining Data Management: Pioneering the Future with AI, ML, and Deep Learning for Next-Gen Innovation",
    organisers: [
      "Dr. Lokesh Jain, Associate Professor, School of Engineering and Technology, Vivekananda Institute of Professional Studies - Technical Campus (VIPS-TC), Delhi, India"
    ],
    file: ss13,
    fileName: "SS 013.pdf",
  },
   ,
   {  title: "Session - 14: Artificial Intelligence and Deep Learning",
    organisers: [
       "Prof. (Dr.) Pooja Sharma, Director Alpha, Rayat Bahra University, India",
"Er. Narinder Kumar, Assistant Professor, Rayat Bahra University, India",
"Dr. Anita Goyal, Associate Professor, Rayat Bahra University, India"
     ],
     file: ss14,
    fileName: "SS 014.pdf",
  },
  {  title: "Session - 15: Quantitative modeling of systemic and supply chain risk",
   organisers: [
       "Dr. Deepak Sharma, Associate Director, Department of Distance and Continuing Education, School of Open Learning/Campus of Open Learning, North Campus, University of Delhi",
"Aamiruddin syed, Lead Security Engineer, Agco Corporation, USA",
     ],
    file: ss15,
    fileName: "SS 015.pdf",
  },
  //  {  title: "Session - 16: Artificial Intelligence and Networking",
  //    organisers: [
  //      "Associate Professor (Dr.) Tejinder Kaur , Department of MMICTBM, Maharishi Markandeshwar (Deemed To Be University), Mullana, Ambala-Haryana"
  //    ],
  //    file: ss16,
  //    fileName: "SS 016.pdf",
  //  },
  // {  title: "Session - 17: Quantum Computing in Stock Markets",
  //   organisers: [
  //     "Dr. Deepak Sharma, Associate Director, Department of Distance and Continuing Education School of Open Learning, Campus of Open Learning, University of Delhi",
  //     "Ms. Tripti Goel, Assistant Professor, Department of Commerce, Aryabhatta College, South Campus, University of Delhi"
  //   ],
  //   file: ss17,
  //   fileName: "SS 017.pdf",
  // },
  // {  title: "Session - 18: Applied Image Processing: Current Applications and Emerging Challenges",
  //   organisers: [
  //     "Dr. Garima Jaiswal, Assistant Professor, SCSET, Bennett University, India",
  //     "Dr. Ritu Rani, Assistant Professor, ECE, Bhagwan Parshuram Institute of Technology, Delhi"
  //   ],
  //   file: ss18,
  //   fileName: "SS 018.pdf",
  // },
  // {  title: "Session - 19: AI-Enhanced Data Processing and Intelligent Networking for Next-Generation Digital Infrastructure",
  //   organisers: [
  //     "Sathish Krishna Anumula , IBM Corporation, Detroit, USA",
  //     "Dr. Vikash Yadav, Government Polytechnic Bighapur Unnao, Board of Technical Education,Uttar Pradesh, India"
  //   ],
  //   file: ss19,
  //   fileName: "SS 019.pdf",
  // },
  // {  title: "Session - 20: Regression Learning: Theory, Methods, and Applications",
  //   organisers: [
  //     "Dr. Anima Bag, Assistant Prof. and Head, Rama Devi Women’s University, Bhubaneswar"
  //   ],
  //   file: ss20,
  //   fileName: "SS 020.pdf",
  // },
  // {  title: "Session - 21: Deep learning with mobile edge data analytics for Healthcare applications",
  //   organisers: [
  //     "Dr.S.Vimal Professor & Dean, School of Computing, Dept of CSE, KIT - Kalaignar Karunanidhi Institute Of Technology, Coimbatore, Tamilnadu",
  //     "Dr.Shriram K Vasudevan  Lead - Technical ( GenAI and AI)  Software tools and ecosystem specialist  Intel corporation, India",
  //      "Dr.Sini Raj Pulari  Program Manager- BICT -Database I EDICT Bahrain Polytechnic"
  //   ],
  //   file: ss21,
  //   fileName: "SS 021.pdf",
  // },
  // {  title: "Session - 22: Secure IoT: Cybersecurity Challenges in the building Sustainable Urban Futures",
  //   organisers: [
  //     "Dr. Nandini Prasad K S Dean- Foreign Affairs and HoD, Department of Information Science and Engineering,  Dayananda Sagar Academy of Technology and Management, Bangalore 560082. Karnataka-INDIA",
  //     "Dr. Madhumala R Bagalatti Professor, CSE in IoT, Cybersecurity including Blockchain Dayananda Sagar Academy of Technology and Management, Bangalore 560082. Karnataka-INDIA"
  //   ],
  //   file: ss22,
  //   fileName: "SS 022.pdf",
  // },
  // {  title: "Session - 23: Converging Vision and Connectivity: Intelligent Image Processing in Wireless Sensor Networks for Next-Generation Data Processing and Networking",
  //   organisers: [
  //     "Dr. Kanimozhi Suguna S, SRM Institute of Science and Technology, Faculty of Science and Humanities, Ramapuram, Chennai, Tamil Nadu, India",
  //     "Prof. Dr. Ozen Ozer, Kırklareli University Faculty of Science and Arts, Kırklareli, Turkey"
  //   ],
  //   file: ss23,
  //   fileName: "SS 023.pdf",
  // },
  // {  title: "Session - 24:Empowering Sustainability through Data Analytics and Green Innovation",
  //   organisers: [
  //         "Dr Sudeshna Chakraborty, Professor, Galgotias University, Greater Noida, India",
  //         "Dr. Rohit Bansal, Adjunct Faculty, Rockford College, Sydney, Australia",
  //         "Dr Fazla Rabby, Director, Stanford Institute of Managment and Technology, Australia"
  //   ],
  //   file: ss24,
  //   fileName: "SS 024.pdf",
  // },
  // {  title: "Session - 25:AI, Data Science &amp; Analytics",
  //   organisers: [
  //         "Abhi Desai, Research Scholar, Mumbai, Maharashtra, India, Pace University, New York, NY, USA New England College, Henniker, NH, USA Formerly, Lead Data Analyst, Saks Fifth Avenue, USA"
  //   ],
  //   file: ss25,
  //   fileName: "SS 025.pdf",
  // },
  // {  title: "Session - 26:Converging Vision and Connectivity: Intelligent Image Processing in Wireless Sensor Networks for Next-Generation Data Processing and Networking",
  //   organisers: [
  //         "Dr. Kanimozhi Suguna S, SRM Institute of Science and Technology, Faculty of Science and Humanities, Ramapuram, Chennai, Tamil Nadu, India",
  //         "Prof. Dr. Ozen Ozer, Kırklareli University Faculty of Science and Arts, Kırklareli, Turkey"
  //   ],
  //   file: ss26,
  //   fileName: "SS 026.pdf",
  // },
  // {  title: "Session - 27:Artificial Intelligence and Internet of Things in Disease Detection, Diagnosis and Prognosis",
  //   organisers: [
  //         "Dr. Alok Singh Chauhan, Professor, School of Computer Applications and Technology, Galgotias University, Greater Noida, India",
  //         "Dr. Mega Novita, Associate Professor, Postgraduate Program of Science Education, Universitas PGRI Semarang, Indonesia",
  //         "Dr. Sudeshna Chakraborty, Professor, School of  School of Computer Applications and Technology, Galgotias University, Greater Noida, India",
  //         "Dr. Prashant Johri, Professor, School of  School of Computer Applications and Technology, Galgotias University, Greater Noida, India"
  //   ],
  //   file: ss27,
  //   fileName: "SS 027.pdf",
  // },
  // {  title: "Session - 28:Protecting the Internet of Things: Challenges and Solutions",
  //   organisers: [
  //         "Dr Mohammad Tabrez Quasim, Associate Professor Department of Computer Science and Artificial Intelligence, College of Computing and Information Technology, University of Bisha, Bisha, Saudi Arabia"
  //   ],
  //   file: ss28,
  //   fileName: "SS 028.pdf",
  // },
  // {  title: "Session - 29: Harnessing Machine Learning and Deep Learning for Advancements in Healthcare, Agriculture, and Beyond”",
  //   organisers: [
  //         "Prof Shikhar Kumar Sarma, Professor & HoD-Information Technology and Dean in Technology, Gauhati University",
  //         "Prof Hiren Kumar Deva Sarma, Professor, Department of Information Technology, Gauhati University",
  //       "Dr. Anupam Das PhD, (Gauhati University) Associate Professor, Department of CSE, The Assam Royal Global University",
  //       "Dr. Samarjit Das PhD, (Gauhati University) Associate Professor, Department of CSE, The Assam Royal Global University"
  //   ],
  //   file: ss29,
  //   fileName: "SS 029.pdf",
  // }
  
  
  
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
