import Marquee from "react-fast-marquee";

const AutoScroller = () => {
  // const[open,setOpen]=useState(false)
  return (
    //
    <div className="flex-col justify-between items-center max-w-[418px] m-auto mt-8 mb-9 h-[40rem] ">
      <div
        className={`sm:w-[418px] text-center bg-slate-900 downloads text-white h-8 font-bold text-xl p-12 `}
      >
        Downloads
      </div>
      <div className={`overflow-hidden bg-slate-900	clicks text-white flex-col  `}>
        <Marquee
          direction="up"
          speed={50}
          pauseOnHover="true"
          className="marquee"
          style={{ textAlign: "center", width: "27rem", height: "30rem" }}
        >
          <div className="flex-col items-center h-[20rem] ">
            <ul>
              <li>
                <a
                  className="text-neutral-100 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor-pointer"
                  href="https://icicc-conf.com/static/media/ManuscriptguidelinesforEnglishbooks.b4c0e227c2235ee1639f.pdf"
                  target="_blank"
                >
                  Manuscript Guidelines
                </a>
                <br />
              </li>
              <li>
                <a
                  className="text-neutral-100 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor-pointer"
                  href="https://icicc-conf.com/static/media/Checklist.53f333387521d291e859.pdf"
                  target="_blank"
                >
                  Checklist
                </a>
                <br />
              </li>
              <li>
                <a
                  className="text-neutral-100 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor-pointer"
                  href="Special_Session_Proposal_Template.31f347006f168f90d745 (1).docx"
                  download={"Special_Session_Proposal_Template.docx"}
                >
                  Special Session Proposal Template
                </a>
                <br />
              </li>
              <li>
                <a
                  className="text-neutral-100 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor-pointer"
                  href="https://icicc-conf.com/static/media/ICICC_Brochure.673f10fb281cdd1d8593.pdf"
                  target="_blank"
                >
                  Icicc Brochure
                </a>
                <br />
              </li>
              <li>
                <a
                  className="text-neutral-100 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor-pointer"
                  href="https://icicc-conf.com/static/media/sponsorship_Proposal.cd95a369821042f3f018.pdf"
                  target="_blank"
                >
                  Sponsorship Proposal
                </a>
                <br />
              </li>
            </ul>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default AutoScroller;
