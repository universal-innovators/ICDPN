import { useState } from "react";
import { Menu} from "@mui/icons-material";
import { GrClose } from "react-icons/gr";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "About", link: "/" },
    { name: "Papers", link: "/" },
    { name: "Poster Paper Presentation", link: "/" },
    { name: "Special Sessions", link: "/" },
    { name: "Workshops", link: "/" },
    { name: "Registration", link: "/" },
    { name: "Sponsorships", link: "/" },
    { name: "Publications", link: "/" },
    { name: "Committee", link: "/" },
    { name: "Awards", link: "/" },
    { name: "Conference Venue", link: "/" },
    { name: "Downloads", link: "/" },
    { name: "Previous Conferences", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="sm:h-8 w-full top-0 left-0 fixed z-10">
      <div className="navbar shadow-lg w-full h-16 md:h-24 md:flex items-center md:justify-around text-[15px] bg-white py-4  left-0">
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <GrClose /> : <Menu />}
        </div>
        {/* linke items */}
        <ul
          className={`navbar md:flex md:justify-between md:items-center md:pb-0 pb-12 md:static bg-white md:z-auto z-[-1] 
          left-0 w-full md:full md:pl-0  transition-all duration-500 ease-in
          ${open?'visible':'hidden'}`}
        >
          {Links.map((link) => (
            <li key={link.name} className=" md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">{link.name}</p>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
