const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <h3>Social Media</h3>
          <div className="flex gap-3 items-center justify-between">
            <img className=" h-[31px]" src="/envelope-solid.svg" alt="" />
            <img className="w-[31px] h-7" src="linkedin.svg" alt="" />
            <img className="w-[31px] h-7" src="square-facebook.svg" alt="" />
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
              <a href="">Important Dates</a>
            </li>
            <li>
              <a href="">Conference Venue</a>
            </li>
            <li>
              <a href="">Downloads</a>
            </li>
            <li>
              <a href="">Paper Submission</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
