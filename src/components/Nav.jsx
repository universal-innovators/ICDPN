import  { useState } from "react";
import { Menu } from "@mui/icons-material";
import { GrClose } from "react-icons/gr";


const Nav = () => {
  
  let [open, setOpen] = useState(false);

  return (
    <div className=" sm:h-8 w-full top-0 left-0 fixed z-10">
      <div className="shadow-lg w-full h-16 md:h-24 md:flex items-center md:justify-around text-[15px] bg-white py-4  left-0">
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <GrClose /> : <Menu />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:justify-between md:items-center md:pb-0 pb-12 md:static bg-white md:z-auto z-[-1] 
          left-0 w-full md:full md:pl-0  transition-all duration-500 ease-in
          ${open?'visible':'hidden'}`}
        >
          
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Home</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
             
                  {/* <label htmlFor="About" className="custom px-[2.5px]">About
                  <select name="About">
                    <option value='About institute'><a href="/"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">About institute</p></a> </option>
                    <option value='about'>About Universal Innovator</option>
                    
                    <option value='about'>Policy</option>
                  </select> */}
                  
                  
                
              
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Home</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/Poster-Paper Presentation"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Poster Paper Presentation</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/Special-Sessions"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Special Sessions</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/Workshops"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Workshops</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/Registration"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Registration</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/Sponsorships"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Sponsorships</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/Publications"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Publications</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Home</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/Awards"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Awards</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/ConferenceVenue"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Conference Venue</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/Downloads"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Downloads</p>
                </p>
              </a>
            </li>
            <li  className=" md:my-0 my-7 font-semibold">
              <a
                href="/"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                <p className="m-[10px] text-center">
                  <p className="custom px-[2.5px]">Home</p>
                </p>
              </a>
            </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Nav;
