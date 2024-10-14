import Nav from "./Nav";

export default function Header() {
  return (
    <>

      <Nav />


      <div className="sm:flex testimonials max-w-fit py-4 px-auto bg-neutral-100 container sm:mt-[8rem] mt-[5rem] mb-8  items-center  gap-[30px] md:flex-col">
        <div className="flex">
          <img
            className="sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] m-[10px]"
            src="vste-logo.jpg"
            alt=""
          />

          <div className="header-text text-center tracking-wide text-l ">
            <p className=" sm:mt-[5rem] md:mt-3 mb-3 font-medium">
              International Conference on Data-Processing and Networking
              <br /> (ICDPN-2024)
              <br />
              <p className=" sm:mt-[5rem] md:mt-3 mb-3 font-medium text-lg text-blue-800">Date: 25th-26th October, 2024</p>
            </p>
            <p className="text-red-500 ">
              <span className="text-black">ORGANISED BY : </span><span className="font-medium">Institute of Technology and Business in České Budějovice, Near
                Prague, Czech Republic, Europe (Venue)</span>

            </p>
            Springer LNNS Approved Conference (Indexed in Scopus, EI, WoS and Many More)
          </div>
          {/* <img
          className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] m-[10px]"
          src="bpit.jpeg"
          alt=""
        /> */}
          {/* <div className="logo ">
          <img
          className=" sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] mx-auto "
            src="sdcn.png"
            alt=""
          />
        </div> */}
        </div>
        <div className="h-full w-full justify-around">
          <div className="font-bold text-center mb-2 text-xl">OUR SPONSORS</div>
          <div className="flex justify-around">
            <div className="w-1/6 flex flex-col justify-center items-center">
              <img className="w-36 object-contain" src="sponsor1.jpg" alt="Sponsor 1" />
              <p className="text-center">LINAMAR</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <img className="w-36 object-contain" src="sponsor2.png" alt="Sponsor 2" />
              <p className="text-center">Česke Centrum</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <img className="w-36 object-contain" src="sponsor3.png" alt="Sponsor 3" />
              <p className="text-center">Česká Strojnická Společnost</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <img className="w-36 object-contain" src="sponsor4.jpeg" alt="Sponsor 4" />
              <p className="text-center">WTi</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <img className="w-36 object-contain" src="sponsor5.png" alt="Sponsor 5" />
              <p className="text-center">zbMATH Open</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <img className="w-36 object-contain" src="sponsor6.jpg" alt="Sponsor 5" />
              <p className="text-center">Servis</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <img className="w-36 object-contain" src="sponsor7.jpg" alt="Sponsor 5" />
              <p className="text-center">Kovo</p>
            </div>
          </div>
        </div>

      </div>
    </>

  );
}
