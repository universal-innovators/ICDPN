import ImpDates from "@/components/ImpDates";

const CallForPapers = () => {
  return (
    <div className="container">
      <hr />
      <div className="text-center  bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className="underline font-extrabold text-xl ">
          Paper Submission
        </b></div>
      <hr />
      <br />
      <div className="sm:flex justify around gap-7 mt-5">
        <div className="sponser-text-container mb-8">
          <p>
            The scope of this conference is to provide a platform for
            researchers, engineers, academicians, and industry professionals
            from all over the world to present their research results and
            development activities in various topics of Engineering and
            Technology. It allows participants to discuss the recent
            developments in the solidification of computer science and
            management and review challenges faced by the community in the 21st
            century. The conference consists of invited.
          </p>
          <br />
          <hr />
          <br />
          <p className=" text-center bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl" >
            <b >
              ICDPN 2024 TRACKS:
            </b>
            
          </p>
          <br />
          <b className=" bg-black p-3 text-white rounded-tl-3xl rounded-br-3xl">

              Innovative
              Communication Networks and Security
            </b>
          <ul className="list-disc list-inside text-white mt-2 mb-5 bg-violet-700">
            <li>Wireless sensor networks</li>
            <li>Mobile ad hoc networks</li>
            <li>Software defined networks</li>
            <li>Information theory and coding</li>
            <li>Cloud communications and networking</li>
            <li>Wearable network and systems</li>
            <li>Personal communication systems</li>
            <li>Vehicular networks and applications</li>
            <li>Wireless communications</li>
            <li>Future Internet</li>
            <li>Architecture Satellite Communication</li>
            <li>Next Generation Networking</li>
            <li>Quantum Networking</li>
            <li>QoS Provisioning and Architectures</li>
            <li>Telecommunication Services and Applications</li>
            <li>Optical Communication</li>
            <li>Network Performance</li>
            <li>Computer Security</li>
            <li>Digital Signature</li>
            <li>Information Security</li>
            <li>Network Security</li>
            <li>Cyber Security MANET’s</li>
          </ul>
          <b className=" bg-black p-3 text-white rounded-tl-3xl rounded-br-3xl">Innovative Computing</b>
          <ul className="list-disc list-inside text-white mt-2 mb-5 bg-violet-700">
            <li>Computational Intelligence</li>
            <li>Machine Learning</li>
            <li>Artificial Intelligence</li>
            <li>Signal Processing</li>
            <li>Computer vision</li>
            <li>Soft Computing</li>
            <li>Decision Support and Decision making</li>
            <li>Parallel computing</li>
            <li>Distributed computing</li>
            <li>Grid computing</li>
            <li>Cloud computing</li>
            <li>Mobile computing</li>
            <li>Biomedical computing</li>
            <li>Ubiquitous computing</li>
            <li>Image processing</li>
            <li>Information retrieval</li>
            <li>Deep learning</li>
            <li>Expert system</li>
            <li>Internet computing</li>
            <li>High performance computing</li>
          </ul>
          <b className="  bg-black p-3 text-white rounded-tl-3xl rounded-br-3xl">Internet of things</b>
          <ul className="list-disc list-inside text-white mt-2 mb-5 p-3 bg-violet-700  ">
          <li>Intelligent Systems for IoT</li>
            <li>Environmental Monitoring</li>
            <li>Machine to Machine/Device Communications</li>
            <li>Network Design and Architecture</li>
            <li>Wireless Systems and Applications</li>
            <li>Infrastructure Management</li>
            <li>IoT and Big Data</li>
            <li>Home Automation</li>
            <li>Security and Privacy</li>
            <li>Social Implications of IoT</li>
            <li>Technological focus for Smart Environments</li>
            <li>Smart City Case Studies</li>
            <li>Data Analysis and Visualization</li>
            <li>Architecture for secure and interactive IoT</li>
            <li>Sensor, Wireless Technologies and APIs</li>
            <li>Emerging IoT</li>
          </ul>

           <p>

            
            <br />
            <b>
              The papers submitted to the conference will be peer reviewed and
              published as proceedings in Springer(Proposed)
            </b>
            <br />
            <hr />
            <br />
            <p className=" bg-black p-3 text-white rounded-tl-3xl rounded-br-3xl">

            All papers will undergo a blind peer review process and all accepted
            papers will be published in the SHORT NAME conference e proceedings
            with an e ISBN number. The conference organizer encourages
            submissions of academic and research papers that consider the
            multidisciplinary/interdisciplinary themes covering the Management,
            Science and Social Studies, through one of the following sub themes,
            although submissions of other topics for consideration are also
            welcome.
            </p>
            <p className=" mt-7 bg-black p-3 text-white rounded-tl-3xl rounded-br-3xl">

            Join us at ICDPN to connect with researchers, industry experts, and fellow enthusiasts from around the world. Together, let's advance the frontiers of computer science and information technology. For more information, please visit the conference website . Should you have any inquiries, feel free to contact us at <span className="text-blue-400 cursor-pointer">icdpn.conf@gmail.com</span>

<p className="text-violet-400">We look forward to your valuable contributions and your presence at ICDPN 2024.</p>
            </p>
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
