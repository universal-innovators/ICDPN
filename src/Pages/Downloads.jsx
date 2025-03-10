import ImpDates from "@/components/ImpDates";
import { Download } from "@mui/icons-material";
// import zipFile from "./Docs/Word+Template.zip"
import zipFile from "./Docs/splnproc1703s.docx"
import PAfile from "./Docs/LICENSE_TO_PUBLISH_AGREEMENT_FORM.docx"





const Downloads = () => {
  return (
    <div className="container">
      <hr />

      <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className=" font-extrabold text-xl tracking-wider">Downloads</b>
      </div>
      <hr />

      <div className="sm:flex flex-wrap gap-7 justify-around">
        <div className="  ml-0  p-6 rounded-3xl mt-8 sm:ml-[2rem] download-blocks">
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

              </a>
            </div>
            <div className=" relative">
              <a
                href={zipFile}                
              >
                <button className="sm:w-[23rem] w-[17rem] rounded-tl-3xl rounded-br-3xl   bg-blue-600  hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto px-[4rem] p-[2rem] text-white">
                    Springer Word Template
                  </div>
                </button>

              </a>
            </div>
          </div>
          <div className="flex gap-2  mb-5 flex-wrap">

            <div className="relative">
              <a
                href="SPECIAL SESSION -ICPDN 2025.docx"
                download={"SPECIAL SESSION -ICPDN 2025.docx"}
                target="_blank"
              >
                <button className=" w-[17rem] sm:w-[23rem] rounded-tl-3xl rounded-br-3xl bg-blue-600  hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto p-[2rem] text-white sm:px-[4rem]">
                    Special Session Proposal Template
                  </div>
                </button>

              </a>
            </div>            
          </div>
          <div className="flex gap-2  mb-5 flex-wrap">

            <div className="relative">
              <a
                href={PAfile}
                target="_blank"
              >
                <button className=" w-[17rem] sm:w-[23rem] rounded-tl-3xl rounded-br-3xl bg-blue-600  hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
                  <div className="m-auto p-[2rem] text-white sm:px-[4rem]">
                  LICENSE TO PUBLISH AGREEMENT FORM
                  </div>
                </button>

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

export default Downloads