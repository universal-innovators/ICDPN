
import AutoScroller from "./AutoScroller";

const Conference = () => {
  return (
    <div className="flex container mt-10 justify-around ">
      <div className=" mr-6 gap-[4rem]">
        <h1 className="font-bold  text-[35px] underline">About Conference</h1>
        <p className="mt-10 text-justify">
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
        </p>
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
    </div>
  );
};

export default Conference;
