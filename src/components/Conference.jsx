import AutoScroller from "./AutoScroller";

const Conference = () => {
  return (
    <div className="flex flex-col md:flex-nowrap  container mt-10 justify-around ">
      <div className="mt-10 mb-7 border-l-[5px] border-red-600">
        <h1 className="pl-[20px] text-gray-600 text-3xl tracking-wide">About Conference</h1>
      </div>
      <div className="sm:flex justify-around gap-11">
        <div className="text-justify">
          <p className="tracking-wide mb-2 text-lg font-light">
            International Conference on Data-Processing 
             and Networking (ICDPN-2025) is organised with the
            objective of bringing together innovative scientists, professors,
            research scholars, students and industrial experts in the field of
            Computing and Communication to a common forum. The primary goal of
            the conference is to promote the exchange of innovative scientific
            information between researchers, developers, engineers, students,
            and practitioners. Another goal is to promote the transformation of
            fundamental research into institutional and industrialized research
            and to convert applied exploration into real time application.
            Overall, the conference will provide the researchers and attendees
            with prospects for national and international collaboration and
            networking among universities and institutions from India and abroad
            for promoting research. ICDPN- 2025 will be held at Institute of
            Technology and Business in České Budějovice, Near Prague, Czech
            Republic, Europe (Venue).
          </p>
          <p className="tracking-wide text-lg text-red-600">
          All the papers and the proceedings of ICDPN-2025 will be published by Springer (Approved).
          </p>
          <br />
          
          {/* <b className="tracking-wide text-lg mr-3">All papers must be submitted online via this link:</b>
          <button className="btn"><a href="https://cmt3.research.microsoft.com/ICDPN2025" target="_blank" >Paper Submission Link</a></button> */}
        </div>
        <div>
          <AutoScroller />
        </div>
      </div>
    </div>
  );
};

export default Conference;
