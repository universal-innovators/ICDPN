
import { Pages } from "@mui/icons-material";
import AutoScroller from "./AutoScroller";
import { Paper } from "@mui/material";


const Conference = () => {
  return (
// <<<<<<< HEAD
//     <div className='flex md:flex-nowrap flex-wrap  justify-around mr-10 mt-8 '>
//     <div className='border-2 border-black mr-6 gap-[4rem]'>
//     <h1 className='font-bold  text-[35px] underline'>About   Conference</h1>
//     <p className='mt-10'>International Conference on Innovative Computing and Communication (ICICC 2025) is organized to bring together innovative scientists,<br/> professors, research scholars, students, and industrial experts in the field of Computing and Communication to a common forum. The<br/> primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers<br/>, students, and practitioners. Another goal is to promote the transformation of fundamental research into institutional and industrialized<br/> research and to convert applied exploration into the real-time application. Overall, the conference will provide the researchers and attendees<br/> with prospects for national and international collaboration and networking among universities and institutions from India and abroad for<br/> promoting research. ICICC- 2025 will be held at Shaheed Sukhdev College of Business Studies, University of Delhi, New Delhi. All the accepted<br/> papers (after double-blinded peer review) will be published as proceedings of ICICC-2025 in Springer LNNS Series (Accepted)</p>
//     <div className='flex mt-7'>Paper Submission Link :
//     <a href='https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICICC2025%2FSubmission%2FIndex' className=' underline hover:shadow-lg text-blue-600' >Paper Submission</a></div>
// =======
    <div className="flex md:flex-nowrap flex-wrap container mt-10 justify-around ">
      <div className=" mr-6 gap-[4rem]">
        <h1 className="font-bold  text-[35px] underline">About Conference</h1>
        <Paper elevation={10}>
        <p className="mt-10 p-5 text-justify ">
          International Conference on Innovative Computing and Communication
          (ICICC 2025) is organized to bring together innovative scientists,
          professors, research scholars, students, and industrial experts in the
          field of Computing and Communication to a common forum. The primary
          goal of the conference is to promote the exchange of innovative
          scientific information between researchers, developers, engineers,
          students, and practitioners. Another goal is to promote the
          transformation of fundamental research into institutional and
          industrialized research and to convert applied exploration into the
          real-time application. Overall, the conference will provide the
          researchers and attendees with prospects for national and
          international collaboration and networking among universities and
          institutions from India and abroad for promoting research. ICICC- 2025
          will be held at Shaheed Sukhdev College of Business Studies,
          University of Delhi, New Delhi. All the accepted papers (after
          double-blinded peer review) will be published as proceedings of
          ICICC-2025 in Springer LNNS Series (Accepted)
        </p></Paper>
        <div className="flex mt-7">
          Paper Submission Link: &nbsp;
          <a
            href="https://cmt3.research.microsoft.com/ICICC2025/Submission/Index"
            className=" underline cursor-pointer hover:shadow-lg text-blue-600"
          >
            Paper Submission
          </a>
        </div>
      </div>
      <div>
        <AutoScroller />
      </div>
{/* >>>>>>> dab8f0c640502de528439c38b0f98f9333948b38 */}
    </div>
  );
};

export default Conference;
