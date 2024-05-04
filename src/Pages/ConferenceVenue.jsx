import ImpDates from "@/components/ImpDates";

const ConferenceVenue = () => {
  return (
    <div className="container">
      <hr />
      <h2 className="sponsor-heading">We are located at ...</h2>
      <hr />
      <div className="sm:flex justify-around mt-10 gap-7">
        <div className="sponsor-text-container">
          <div className="venue">
            <img src="venue.jpeg" alt="" />
          </div>
          <br />
          <div className="mt-7">
            <p className="font-bold text-lg">Address:-</p>
            <br />
            <p>Shaheed Sukhdev College Of Business Studies(University Of Delhi)</p>
            <p>Dr. K.N. Katju Marg Rohini Sector 16,</p>
            <p>PSP Area IV, New Delhi,</p>
            <p>Delhi 110089</p>
            <p>INDIA</p>
            <p>Email: icicc.ui@gmail.com</p>
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
