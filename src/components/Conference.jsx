import AutoScroller from "./AutoScroller";

const Conference = () => {
  const reasons = [
    "Publication in Springer LNNS (Approved)",
    "Extended papers to SCI / Scopus indexed journals",
    "Rigorous double-blind peer review",
    "Global networking opportunities",
    "International exposure",
  ];

  return (
    <div className="flex flex-col container mt-10 justify-around">
      <div className="mt-10 mb-7 border-l-[5px] border-red-600">
        <h1 className="pl-[20px] text-gray-600 text-3xl tracking-wide">About Conference</h1>
      </div>
      <div className="sm:flex justify-around gap-11">
        <div className="text-justify">
          <p className="tracking-wide mb-2 text-lg font-light">
            International Conference on Data-Processing and Networking (ICDPN-2027) is organised to bring together innovative scientists, professors, research scholars, students and industrial experts in Computing and Communication. ICDPN-2027 will be held at the Slovak University of Agriculture in Nitra, Slovakia, in association with Maharaja Agrasen Institute of Technology, Delhi, India.
          </p>
          <p className="tracking-wide text-lg text-red-600">
            All the papers and the proceedings of ICDPN-2027 will be published by Springer (Approved).
          </p>
          <marquee><p className="text-lg my-4 text-red-500 font-semibold">Note: 40% Discount / Custom Fees Registration for online mode registrations.</p></marquee>
          <section className="py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">WHY JOIN ICDPN 2027?</h2>
              <p className="text-gray-600 mb-8">Discover the key benefits of being part of ICDPN 2027</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {reasons.map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-3">
                    <span className="text-green-500 text-xl">✔</span>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <b className="tracking-wide text-lg mr-3">All papers must be submitted online via the conference submission system.</b>
          <button className="btn"><a href="https://cmt3.research.microsoft.com/ICDPN2027" target="_blank" rel="noreferrer">Paper Submission Link</a></button>
        </div>
        <AutoScroller />
      </div>
    </div>
  );
};

export default Conference;
