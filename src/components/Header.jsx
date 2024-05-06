import Nav from "./Nav";

export default function Header() {
  return (
    <div>
      <Nav />

      <div className=" sm:flex  container text-lg sm:mt-[8rem]  mt-[5rem] mb-8 justify-around items-center  gap-[30px]">
        <div className="logos  ">
          <div className="set1 flex">
            <img
              className="w-[100px] h-[100px] m-[10px]"
              src="vste-logo.jpg"
              alt=""
            />
            <img
              className="w-[100px] h-[100px] m-[10px]"
              src="portagal-logo.jpg"
              alt=""
            />
          </div>
          <div className="set2 flex">
            <img
              className="w-[100px] h-[100px] m-[10px]"
              src="ksmv-logo.png"
              alt=""
            />
            <img
              className="w-[100px] h-[100px] m-[10px]"
              src="gtbit-logo.png"
              alt=""
            />
          </div>
        </div>

        <div className="header-text text-center">
          <p className=" sm:mt-[5rem] md:mt-3">
            SmartDataCom: International Conference on Smart Data-Processing,
            Communication and Networking
            <br /> (SDCN-2024)
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
          className="w-[150px] h-[150px] mx-auto "
            src="sdcn.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
