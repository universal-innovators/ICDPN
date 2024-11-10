import ImpDates from "@/components/ImpDates";
import { Link } from "react-router-dom";

const CallForPapers = () => {
  return (
    <div className="container">
      <hr />
      <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className="tracking-wider font-bold text-xl ">Call for Papers</b>
      </div>
      <hr />
      <br />
      <div className="sm:flex justify around gap-7 mt-5">
        <div className="sponser-text-container mb-8">
          <p className="text-justify tracking-wide mb-2 text-lg font-light">
            INTERNATIONAL CONFERENCE ON DATA PROCESSING & NETWORKING (ICDPN-2025) invites original work in the broad areas of Computer Engineering and Communication Systems. The aim of this conference is to create a forum where researchers, engineers, academics, and industry experts worldwide can share their research findings and advancements in Engineering and Technology. It offers participants a chance to delve into recent progress in computer science, and communication while addressing the challenges encountered by the community in the modern era. 
          </p>
          <p className="text-justify tracking-wide mb-2 text-lg font-light">
            <span className="font-bold">All accepted, registered and presented papers will be published in Springer Nature. </span>
            All books published in the series are submitted for consideration in Springer (Approved).
          </p>
          <p className="text-justify tracking-wide mb-2 text-lg font-light">ICDPN-2025 will feature five parallel Tracks, each focusing on distinct areas. The major themes are identified (but not limited to) and listed below under the Conference Tracks.</p>
          <br />
          <hr />
          <br />
          <p className=" text-center font-semibold bg-lime-400 text-lg p-3 rounded-tl-3xl rounded-br-3xl">
            ICDPN 2025 TRACKS:
          </p>
          <br />
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              1. Data Processing & Analytics
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Big Data Processing and Analytics</li>
            <li>Data Mining and Machine Learning</li>
            <li>Database Management and Optimization</li>
            <li>High-Performance Computing</li>
            <li>Cloud Computing and Data Center Architectures</li>
            <li>Data Visualization and Interactive Data Exploration</li>
            <li>Artificial Intelligence and Deep Learning</li>
            <li>Soft computing</li>
          </ul>
          <div className="border-l-[5px] border-red-800">
            <p className=" tracking-wide mb-2 text-lg font-semibold pl-5">
              2. Networking
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Network Architectures and Protocols</li>
            <li>Wireless, Mobile, and Ad Hoc Networks</li>
            <li>Network Security and Privacy</li>
            <li>Software-Defined Networking (SDN) and Network Function Virtualization (NFV)</li>
            <li>Internet of Things (IoT) and Sensor Networks</li>
            <li>Edge and Fog Computing</li>
            <li>Drone Communication and Security</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">

          <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
            3. Data Communication
          </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Communication Theory and Systems</li>
            <li>Optical and Quantum Communications</li>
            <li>Signal Processing for Communications</li>
            <li>Network Management and Operations</li>
            <li>5G and Beyond Networks</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              4. Computer Vision and Image Processing Track:
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Object detection, recognition, and tracking</li>
            <li>Image segmentation and classification</li>
            <li>Image enhancement, restoration, and reconstruction</li>
            <li>Computer vision in autonomous vehicles & surveillance</li>
            <li> Medical imaging</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              5. Applications and Services
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Smart Cities and Smart Grids</li>
            <li>Blockchain and Distributed Ledger Technologies</li>
            <li>Artificial Intelligence for healthcare</li>
            <li>Collaborative and Social Computing</li>
            <li>E-health and Biomedical Application</li>
            <li>Artificial Intelligence in Drone Technology</li>
          </ul>
          <hr />
          <p className="text-justify mt-5 tracking-wide mb-6 text-lg font-light">All submissions must be original and may not be under review by another publication. INTERESTED AUTHORS SHOULD CONSULT THE CONFERENCE’S GUIDELINES FOR MANUSCRIPT SUBMISSIONS at <Link to="/Paper-Submission" className="underline font-semibold">https://icdpn-conf.com/Paper-Submission</Link>  All submitted papers will be reviewed on a double-blind, peer review basis. 
          </p>
        </div>
        <div className="min-w-fit">
          <ImpDates />
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
