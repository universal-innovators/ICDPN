
const Notices = () => {
  return (
    <div className="flex-col justify-between items-center max-w-[418px] m-auto mt-8 mb-9 h-[40rem] ">
      <div
        className={`w-[418px] text-center bg-slate-900 downloads text-white h-8 font-bold text-xl p-12 `}
      >
        Notices
      </div>
      <div className={`overflow-hidden bg-slate-900	clicks text-white flex-col  `}>
        <marquee
          direction="up"
          style={{ textAlign: "center", width: "27rem", height: "30rem" }}
        >
          <div className="flex-col items-center p-8">
            <p>

              ICICC - 2025 will be organized by Shaheed Sukhdev College of Business Studies, Delhi university, India, on 16-17 February 2025
            </p>
              
          </div>
        </marquee>
      </div>
    </div>
  )
}

export default Notices