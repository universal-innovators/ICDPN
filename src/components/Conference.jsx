import AutoScroller from "./AutoScroller";

const Conference = () => {
  const reasons = [
  "Publication in Springer LNNS (Proposed)",
  "Extended papers to SCI / Scopus indexed journals",
  "Rigorous double-blind peer review",
  "Global networking opportunities",
  "International exposure",
];

  return (
    <div className="flex flex-col md:flex-nowrap  container mt-10 justify-around ">
      <div className="mt-10 mb-7 border-l-[5px] border-red-600">
        <h1 className="pl-[20px] text-gray-600 text-3xl tracking-wide">About Conference</h1>
      </div>
      <div className="sm:flex justify-around gap-11">
        <div className="text-justify">
          <p className="tracking-wide mb-2 text-lg font-light">
            International Conference on Data-Processing 
             and Networking (ICDPN-2026) is organised with the
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
            for promoting research. ICDPN- 2026 will be held at Institute of
            Technology and Business in České Budějovice, Near Prague, Czech
            Republic, Europe (Venue).
          </p>
          <p className="tracking-wide text-lg text-red-600">
          All the papers and the proceedings of ICDPN-2026 will be published by Springer (Approved).
          </p>
          <marquee><p className="text-lg my-4 text-red-500 font-semibold">Note: 40% Discount / Custom Fees Registration (Amount based on category of participation or the information conveyed) for online mode registrations</p></marquee>
           <section className=" py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          WHY JOIN ICDPN 2026?
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mb-8">
          Discover the key benefits of being part of ICDPN 2026
        </p>

        {/* Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-3"
            >
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
          <b className="tracking-wide text-lg mr-3">All papers must be submitted online via this link. Submit Your Breakthrough Work in Data Processing, Analytics, and Networking:</b>
          <button className="btn"><a 
          href="https://cmt3.research.microsoft.com/ICDPN2026"
           target="_blank" >Paper Submission Link</a></button>
         
          
        </div>
        
        <div>
        
          <AutoScroller />
        </div>
      </div>
    </div>
  );
};

export default Conference;
