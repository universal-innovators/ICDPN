import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col flex gap-4">
            <img className="w-[80px] h-[80px] rounded-lg" src="vste-logo.jpg" alt="" />
            {/* <img className="w-[80px] h-[80px] rounded-lg" src="bpit.jpeg" alt="" /> */}
        </div>
        <div className="flex flex-col">
          <div className="col">
            <h3>Contact Details</h3>
            <p className="email-id flex gap-[8px]">
              <img className="w-[20px]" src="/envelope-solid.svg" alt="" />
              <p>icdpn.conf@gmail.com</p>
            </p>
          </div>
          <div className="col">
            <h3>Social Media</h3>
            <div className="flex gap-3 items-center justify-between">
              <a href="mailto:icicc.ui@gmail.com">
                <img className=" h-[31px]" src="/envelope-solid.svg" alt="" />
              </a>
              <a href="https://www.linkedin.com/in/icdpn-conf-839527308">
                <img className="w-[31px] h-7" src="linkedin.svg" alt="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61559587830249">
                <img
                  className="w-[31px] h-7"
                  src="square-facebook.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/Call-For-Papers">Call for Papers</Link>
            </li>
            <li>
              <Link to="/">Publications & Important Dates</Link>
            </li>
            <li>
              <Link to="/ConferenceVenue">Conference Venue</Link>
            </li>
            <li>
              <Link to="/Downloads">Downloads</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
