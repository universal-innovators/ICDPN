

import { useState } from "react";

import { Menu } from "@mui/icons-material";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Nav = () => {

  let [open, setOpen] = useState(false);
  const closeHandler=()=>{
    open?setOpen((prev)=>!prev):setOpen((prev)=>prev)
  }


  return (
    <div className="sm:h-8  w-full top-0 left-0 fixed z-10">
      <div className="navbar shadow-lg w-full h-16 md:h-24 md:flex items-center md:justify-around text-[15px] bg-white py-4  left-0">
        <div
          onClick={() => setOpen(!open)}
          className="absolute left-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <GrClose /> : <Menu/>}
        </div>
        {/* linke items */}
        <ul
          className={`navbar md:flex md:justify-between md:items-center md:pb-0 pb-12 md:static bg-white md:z-auto z-[-1] 
          left-0 w-full md:full md:pl-0  transition-all duration-500 ease-in 
          ${open ? "visible" : "hidden"}`}
        >
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-400 duration-500"
              onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Home</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold mx-3 text-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white custom">About</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    to="/about-institute"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        About Institute
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/about-uni"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        About Universal Innovators
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/policy"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Policy
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className=" md:my-0 my-7 font-semibold mx-3 text-center">
          <DropdownMenu>
          <DropdownMenuTrigger className="text-white custom">Papers</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    to="/Call-For-Papers" 
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Call for Papers
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/Paper-Submission"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Paper Submission
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/Call-For-Special-Sessions"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Call for Special Sessions
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/call_for_international_workshops"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Call for International Workshops
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className=" md:my-0 my-7 font-semibold text-center">
            <Link
              to="/Poster-Paper-Presentation"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Poster Paper Presentation</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/Special-Sessions"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Special Sessions</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/Workshops"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Workshops</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/Registration"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Registration</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/Sponsorships"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Sponsorships</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/Publications"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Publications</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold text-center">
          <DropdownMenu>
          <DropdownMenuTrigger className="text-white custom mx-3">Committee</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    to="/steering-committee"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Steering Committee
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/technical-program-committee"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Technical Program Committee
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/industry-experts"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Industry Experts
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/advisory-committee"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className="custom px-[2.5px] text-gray-800">
                        Advisory Committee
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/Awards"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Awards</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/ConferenceVenue"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Conference Venue</p>

              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold">
            <Link
              to="/Downloads"
              className="text-gray-800 hover:text-blue-400 duration-500"
               onClick={closeHandler}
            >
              <p className="m-[10px] text-center">
                <p className="custom px-[2.5px]">Downloads</p>
              </p>
            </Link>
          </li>
          <li className=" md:my-0 my-7 font-semibold mx-3 text-center">
          <DropdownMenu >
          <DropdownMenuTrigger className="text-white custom">Previous Conferences</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem >
                  <Link
                    to="/ICICC2024"
                    className="text-gray-800 hover:text-blue-400 duration-500" 
                    onClick={closeHandler}
                  >
                    <p className="m-[10px] text-center ">
                      <p className=" px-[2.5px] text-gray-800">
                        ICICC 2024
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link
                    to="/ICICC2023"
                    className="text-gray-800 hover:text-blue-400 duration-500 "

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className=" px-[2.5px] text-gray-800">
                        ICICC 2023
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/ICICC2022"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className=" px-[2.5px] text-gray-800">
                        ICICC 2022
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/ICICC2021"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className=" px-[2.5px] text-gray-800">
                        ICICC 2021
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/ICICC2020"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className=" px-[2.5px] text-gray-800">
                        ICICC 2020
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/ICICC2019"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className=" px-[2.5px] text-gray-800">
                        ICICC 2019
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/ICICC2018"
                    className="text-gray-800 hover:text-blue-400 duration-500"

                    onClick={closeHandler}

                    // onClick={<DropdownMenu close/>}

                  >
                    <p className="m-[10px] text-center ">
                      <p className=" px-[2.5px] text-gray-800">
                        ICICC 2018
                      </p>
                    </p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
