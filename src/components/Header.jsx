import Nav from "./Nav";

export default function Header() {
  return (
    <div>
      <Nav />

      <div className=" sm:flex testimonials max-w-fit py-7 px-auto bg-neutral-100 container sm:mt-[8rem]  mt-[5rem] mb-8  items-center  gap-[30px]">
        <img
          className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] m-[10px]"
          src="vste-logo.jpg"
          alt=""
        />

        <div className="header-text text-center tracking-wide text-xl ">
          <p className=" sm:mt-[5rem] md:mt-3 mb-3 font-medium">
            International Conference on Data-Processing and Networking
            <br /> (ICDPN-2024)
            <br/>
            <p className=" sm:mt-[5rem] md:mt-3 mb-3 font-medium text-lg text-blue-800">Date: 25th-26th October, 2024</p>
          </p>
          <p className="text-red-500 ">
            <span className="text-black">ORGANISED BY : </span><span className="font-medium">Institute of Technology and Business in České Budějovice, Near
            Prague, Czech Republic, Europe (Venue)</span>
            , <span className="text-black ">in association with </span> 
            <span className="text-blue-800 font-medium">Bhagwan Parshuram Institute of Technology, Delhi, India</span>
            
          </p>
        </div>
        <img
          className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] m-[10px]"
          src="bpit.jpeg"
          alt=""
        />
        {/* <div className="logo ">
          <img
          className=" sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] mx-auto "
            src="sdcn.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
