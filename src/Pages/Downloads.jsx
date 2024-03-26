import ImpDates from "@/components/ImpDates";
import { Download } from "@mui/icons-material";

const Downloads = () => {
  return (
    <div className="container">
      <hr />
      <h1 className="sponsor-heading">Downloads</h1>
      <hr />

      <div className="flex flex-wrap gap-7 justify-around">
        <div className="mt-8 sm:ml-[2rem] download-blocks">
          <div className="flex gap-2 flex-wrap  mb-5">
            <div className=" relative">
              <a
                href="https://icicc-conf.com/static/media/ICICC2024%20POSTER.842bd5eacfa35fbbd8e2.pdf"
                target="_blank"
              >
                <button className=" sm:w-[23rem]  w-[17rem] bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto px-[4rem] p-[2rem] text-white">
                    ICICC-2024
                  </div>
                </button>
                <Download className="absolute sm:right-[7rem] right-9 top-9" />
              </a>
            </div>
            <div className="relative">
              <a
                href="https://icicc-conf.com/static/media/ManuscriptguidelinesforEnglishbooks.b4c0e227c2235ee1639f.pdf"
                target="_blank"
              >
                <button className=" sm:w-[23rem]  w-[17rem] bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto  px-[4rem] p-[2rem] text-white">
                    Manuscript Guidelines
                  </div>
                </button>
                <Download className="absolute sm:right-[10rem] sm:top-[3.2rem] right-14 top-11" />
              </a>
            </div>
          </div>
          <div className="flex gap-2  mb-5 flex-wrap">
            <div className=" relative">
              <a
                href="https://icicc-conf.com/static/media/Checklist.53f333387521d291e859.pdf"
                target="_blank"
              >
                <button className="sm:w-[23rem] w-[17rem]   bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto px-[4rem] p-[2rem] text-white">
                    Checklist
                  </div>
                </button>
                <Download className="absolute sm:right-[8rem] right-[4rem] top-9" />
              </a>
            </div>
            <div className="relative">
              <a
                href="src\assets\Special_Session_Proposal_Template.31f347006f168f90d745 (1).docx"
                download={"Special_Session_Proposal_Template.docx"}
                target="_blank"
              >
                <button className=" w-[17rem] sm:w-[23rem] bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto p-[2rem] text-white sm:px-[4rem]">
                    Special Session Proposal Template
                  </div>
                </button>
                <Download className="absolute sm:right-[8rem] sm:top-14 top-14 right-14" />
              </a>
            </div>
          </div>
          <div className="flex gap-2 mb-5 flex-wrap">
            <div className="relative">
              <a
                href="https://icicc-conf.com/static/media/Market_Material.6378d6a85c825d4bf227.pdf"
                target="_blank"
              >
                <button className=" sm:w-[23rem] w-[17rem]  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto p-[2rem] text-white px-[4rem]">
                    ICICC Brochure
                  </div>
                </button>
                <Download className="absolute sm:right-[6rem] right-[3.2rem] top-8" />
              </a>
            </div>
            <div className="relative w-[20rem]">
              <a
                href="src\assets\Workshop_Proposal_Template.d18afe1b387bf6e93015.docx"
                target="_blank"
                download={"Workshop_Proposal_Template.docx"}
              >
                <button className="sm:w-[23rem] w-[17rem] bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="  m-auto p-[2rem] text-white">
                    Workshop Proposal Template
                  </div>
                </button>
                <Download className=" absolute right-[10rem] top-14" />
              </a>
            </div>
          </div>
          <div className="flex gap-2 mb-5 flex-wrap">
            <div className="relative">
              <a
                href="src\assets\INTERNATIONAL WORKSHOP -2024.54c7fb366801469b55a8 (1).docx"
                target="_blank"
                download={"INTERNATIONAL WORKSHOP-2024.docx"}
              >
                <button className=" sm:w-[23rem] w-[17rem]  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto p-[2rem]  text-white">
                    International Workshop-2024
                  </div>
                </button>
                <Download className="absolute right-[10rem] top-14" />
              </a>
            </div>
            <div className="relative">
              <a
                href="src\assets\License to Publish Agreement form 2024.77a3e6fd19ec29d60036 (1).docx"
                target="_blank"
                download={"License to Publish Agreement form 2024.docx"}
              >
                <button className="sm:w-[23rem] w-[17rem]  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto p-[2rem]  text-white">
                    License to Publish Agreement Form 2024
                  </div>
                </button>
                <Download className="absolute sm:right-[10rem] right-9 top-14" />
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
