import Nav from "./Nav";


export default function Header() {
  return (
    <div>
    <Nav/>
      <div className=" flex container w-full mt-[10rem] justify-around items-center ml-10 gap-[30px]">
        <div className="logo">
          <img
            src="https://icicc-conf.com/static/media/icicc.8fdf59f44e037ad83293.jpg"
            alt=""
          />
        </div>
        <div className="header-text text-center">
          <p className="font-bold sm:mt-[5rem] md:mt-3">
            7th INTERNATIONAL CONFERENCE ON INNOVATIVE COMPUTING AND<br/>
            COMMUNICATION<br/> (ICICC 2024)
          </p>
          <br/>
          <p className="font-bold">
            ORGANISED BY : SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES,
            UNIVERSITY OF DELHI, NEW DELHI IN ASSOCIATION WITH <br/>NATIONAL
            INSTITUTE OF TECHNOLOGY,PATNA &<br/> UNIVERSITY OF VALLADOLID SPAIN
          </p>
        </div>
        <div className="logos">
            <div className="set1 flex">
                <img className="w-[100px] h-[100px] m-[10px]" src="https://icicc-conf.com/static/media/logo.844ec7fc649a50eba5a3.png" alt="" />
                <img className="w-[100px] h-[100px] m-[10px]" src="https://icicc-conf.com/static/media/logo2.408dbd4beaf34f2a2a21.jpeg" alt="" />
            </div>
            <div className="set2 flex">
                <img className="w-[100px] h-[100px] m-[10px]" src="https://icicc-conf.com/static/media/logospain.8d22e3a92a5c92f69b26.png" alt="" />
                <img className="w-[100px] h-[100px] m-[10px]" src="https://icicc-conf.com/static/media/logospain.8d22e3a92a5c92f69b26.png" alt="" />
            </div>
        </div>
      </div>
      
    </div>
    
  );
}
