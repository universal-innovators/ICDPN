import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <h3>Social Media</h3>
          <div className="flex gap-3 items-center justify-between">
            <a href="mailto:icicc.ui@gmail.com">
              <img className=" h-[31px]" src="/envelope-solid.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/icicc-conf-31a3b6151/">
              <img className="w-[31px] h-7" src="linkedin.svg" alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100022446397656">
              <img className="w-[31px] h-7" src="square-facebook.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="col">
          <h3>Contact Us</h3>
          <p className="email-id flex gap-[8px]">
            <img className="w-[20px]" src="/envelope-solid.svg" alt="" />
            <p>icicc.ui@gmail.com</p>
          </p>
        </div>
        <div className="col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="">Call for Papers</a>
            </li>
            <li>
              <Link to="/">Important Dates</Link>
            </li>
            <li>
              <Link to="/ConferenceVenue">Conference Venue</Link>
            </li>
            <li>
              <a href="">Downloads</a>
            </li>
            <li>
              <Link to="https://cmt3.research.microsoft.com/ICICC2025">
                Paper Submission
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
