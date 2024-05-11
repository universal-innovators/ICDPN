import ImpDates from "@/components/ImpDates"


const ConferenceVenue = () => {
  return (
    <div className="container">
      <hr />
      <h2 className="sponsor-heading">We are located at ...</h2>
      <hr />
      <div className="sm:flex justify-around mt-10 gap-7">
        <div className="sponsor-text-container">
          <div className="venue">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Budova_V%C5%A0TE.jpg?20130205080157" alt="" />
          </div>
          <br />
          <div className="mt-7  hover:scale-105 duration-1000 p-4 text-white bg-black rounded-xl ">
           <div className=" bg-cyan-200 border-blue-600 border-2 text-center  rounded-tr-3xl rounded-bl-3xl font-bold  text-black text-xl p-1 ">Venue:
            </div>                                                                               
            <br />
            <ul>
            <li><p>Institute of Technology and Business in České Budějovice</p></li>
            <li><p>Okružní 517/10,</p></li>
            <li><p>370 01 České Budějovice</p></li>
            <li><p>Around 1 Hr distance from Prague, Czech Airport</p></li>
            </ul>
            <div className=" bg-cyan-200 border-blue-600 border-2 text-center  rounded-tr-3xl rounded-bl-3xl font-bold  text-black text-xl p-1 ">Accomodation Partner
            </div>                                                                               
            <br />
            <ul>
            <li><p>VSTE has agreement with CB Royal hotel in České Budejovice</p></li>
            <li><p>Affordable Good Hotel</p></li>
            <li><p>Located 10 minutes’ walk to the old city centre and 20 minutes by bus to the university</p></li>
            
            </ul>
            
          </div>
          
        </div>
        <div>
          <ImpDates />
        </div>
      </div>
    </div>
  );
};

export default ConferenceVenue;
