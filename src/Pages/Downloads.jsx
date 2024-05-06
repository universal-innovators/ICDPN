import ImpDates from "@/components/ImpDates";
import { Download } from "@mui/icons-material";

const Downloads = () => {
  return (
    <div className="container">
      <hr />
      
      <h1 className="text-center sponsor-heading  bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className="underline font-extrabold text-3xl ">
          Downloads
        </b></h1>
      <hr />

      <div className="flex flex-wrap gap-7 justify-around">
        <div className="    p-6 rounded-3xl mt-8 sm:ml-[2rem] download-blocks">
          <div className="flex gap-2 flex-wrap  mb-5">
            
            <div className="relative">
              <a
                href="https://icicc-conf.com/static/media/ManuscriptguidelinesforEnglishbooks.b4c0e227c2235ee1639f.pdf"
                target="_blank"
              >
                <button className=" sm:w-[23rem]  w-[17rem] bg-blue-600 rounded-tl-3xl rounded-br-3xl hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto  px-[4rem] p-[2rem] text-white">
                    Manuscript Guidelines
                  </div>
                </button>
                <Download className="absolute sm:right-[10rem] sm:top-[3.2rem] right-14 top-11" />
              </a>
            </div>
            <div className=" relative">
              <a
                href="https://icicc-conf.com/static/media/Checklist.53f333387521d291e859.pdf"
                target="_blank"
              >
                <button className="sm:w-[23rem] w-[17rem] rounded-tl-3xl rounded-br-3xl   bg-blue-600  hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto px-[4rem] p-[2rem] text-white">
                    Checklist
                  </div>
                </button>
                <Download className="absolute sm:right-[8rem] right-[4rem] top-9" />
              </a>
            </div>
          </div>
          <div className="flex gap-2  mb-5 flex-wrap">
            
            <div className="relative">
              <a
                href="Special_Session_Proposal_Template.31f347006f168f90d745 (1).docx"
                download={"Special_Session_Proposal_Template.docx"}
                target="_blank"
              >
                <button className=" w-[17rem] sm:w-[23rem] rounded-tl-3xl rounded-br-3xl bg-blue-600  hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto p-[2rem] text-white sm:px-[4rem]">
                    Special Session Proposal Template
                  </div>
                </button>
                <Download className="absolute sm:right-[8rem] sm:top-14 top-14 right-14" />
              </a>
            </div>
          </div>
          
          
        </div>
        <div className="mt-8">
          <ImpDates />
        </div>
      </div>
    </div>
  );
};

export default Downloads;
