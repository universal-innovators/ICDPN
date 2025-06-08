import Nav from "./Nav";

export default function Header() {
  return (
    <>

      <Nav />


      <div className="sm:flex testimonials w-full px-4 px-auto bg-neutral-100 sm:mt-[8rem] mt-[5rem] mb-8  items-center md:flex-col">
        <div className="md:flex">
        <div className="grid grid-cols-2 gap-4 m-4 md:w-[20vw]">
        <img
            class="w-full h-28 object-contain"
            src="vste-logo.jpg"
            alt=""
          />
          <img
            class="w-full h-28 object-contain"
            src="spu_1.jpg"
            alt=""
          />
          <img
            class="w-full h-28 object-contain"
            src="spu_2.jpg"
            alt=""
          />
          <img
            class="w-full h-28 object-contain"
            src="du.jpg"
            alt=""
          />
          </div>

          <div className="header-text text-center tracking-wide text-l ">
            <p className="mb-3 text-xl">
              International Conference on Data-Processing and Networking
              <br /> (ICDPN-2025)
              <br />
              <p className=" sm:mt-[5rem] md:mt-3 mb-3 font-medium text-lg text-blue-800">Date: 7th - 8th November, 2025</p>
            </p>
            <p className="text-red-500 ">
              <span className="text-black">ORGANISED BY : </span><span className="font-medium">
                 Institute of Technology and Business in České Budějovice, Near Prague, Czech Republic, Europe (Venue) <br/>in association with <br/>Slovak University of Agriculture in Nitra, Slovakia <br/>& <br/>Mata Sundri College for Women( University of Delhi) 
</span>

            </p>
            Springer LNNS (Proposed) Conference (Indexed in Scopus, EI, WoS and Many More)
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
        {/* <div className="h-full w-full justify-around p-4">
          <div className="font-bold text-center mb-2 text-xl">OUR SPONSORS</div>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-4">
              <img className="sm:w-36 w-24 object-contain" src="sponsor1.jpg" alt="LINAMAR" />
              <p className="text-center">LINAMAR</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-4">
              <img className="sm:w-36 w-24 object-contain" src="sponsor2.png" alt="Česke Centrum" />
              <p className="text-center">Česke Centrum</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-4">
              <img className="sm:w-36 w-24 object-contain" src="sponsor3.png" alt="Česká Strojnická Společnost" />
              <p className="text-center">Česká Strojnická Společnost</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-4">
              <img className="sm:w-36 w-24 object-contain" src="sponsor4.jpeg" alt="WTi" />
              <p className="text-center">WTi</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-4">
              <img className="sm:w-36 w-24 object-contain" src="sponsor5.png" alt="zbMATH Open" />
              <p className="text-center">zbMATH Open</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-4">
              <img className="sm:w-36 w-24 object-contain" src="sponsor6.jpg" alt="Servis" />
              <p className="text-center">Servis</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-4">
              <img className="sm:w-36 w-24 object-contain" src="sponsor7.jpg" alt="Kovo" />
              <p className="text-center">Kovo</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-4">
              <img className="sm:w-36 w-24 object-contain" src="sponsor8.jpeg" alt="4Rail" />
              <p className="text-center">4Rail</p>
            </div>
          </div>

        </div> */}



      </div>
    </>

  );
}
