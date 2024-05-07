import Nav from "./Nav";

export default function Header() {
  return (
    <div>
      <Nav />

      <div className=" sm:flex  container text-lg sm:mt-[8rem]  mt-[5rem] mb-8 justify-around items-center  gap-[30px]">
        <div className="logos flex sm:flex-col ml-0   ">
          <div className="set1 flex">
            <img
              className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] m-[10px]"
              src="vste-logo.jpg"
              alt=""
            />
            <img
              className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px]  m-[10px]"
              src="portagal-logo.jpg"
              alt=""
            />
          </div>
          <div className="set2 flex">
            <img
              className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] m-[10px]"
              src="ksmv-logo.png"
              alt=""
            />
            <img
              className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] m-[10px]"
              src="gtbit-logo.png"
              alt=""
            />
          </div>
        </div>

        <div className="header-text text-center">
          <p className=" sm:mt-[5rem] md:mt-3">
             International Conference on Data-Processing and Networking
            <br /> (ICDPN-2024)
          </p>
          <br />
          <p className="">
            ORGANISED BY : Institute of Technology and Business in České
            Budějovice, Near Prague, Czech Republic, Europe (Venue)
            <br />
            &
            <br />
            Guru Tegh Bahadur Institute of Technology (GTBIT), GGSIPU, Delhi
            <br />
            in association with Portalegre Polytechnic University, Portugal &
            Keshav Mahavidyalaya, Delhi University
            <br />
            19th - 20th September 2024
            <br />
            (Indo-Czech Collaborative Conference)
          </p>
        </div>
        <div className="logo ">
          <img
          className=" sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] mx-auto "
            src="sdcn.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
