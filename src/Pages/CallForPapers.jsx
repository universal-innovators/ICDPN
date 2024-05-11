import ImpDates from "@/components/ImpDates";

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
          <p className=" text-center font-semibold bg-lime-400 text-lg p-3 rounded-tl-3xl rounded-br-3xl">
            ICDPN 2024 TRACKS:
          </p>
          <br />
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              1. Artificial Intelligence and Machine Learning
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Deep learning algorithms</li>
            <li>Natural language processing</li>
            <li>Pattern recognition and computer vision</li>
            <li>Intelligent systems and robotics</li>
            <li>Data Science and Analytics</li>
          </ul>
          <div className="border-l-[5px] border-red-800">
            <p className=" tracking-wide mb-2 text-lg font-semibold pl-5">
              2. Big data processing and management
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Data mining and knowledge discovery</li>
            <li>Predictive modeling and analysis</li>
            <li>Data visualization and exploration</li>
            <li>Cybersecurity and Privacy</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">

          <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
            3. Network security and intrusion detection
          </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Cryptography and encryption techniques</li>
            <li>Environmental Monitoring</li>
            <li>Secure software development</li>
            <li>Cloud Computing and Distributed Systems</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              4. Cloud infrastructure and services
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Virtualization technologies</li>
            <li>Edge and fog computing</li>
            <li>Distributed algorithms and systems</li>
            <li>Human-Computer Interaction</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              5. User interface design and evaluation
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>User experience and usability</li>
            <li>Interaction techniques and technologies</li>
            <li>Accessibility and assistive technologies</li>
            <li>Internet of Things and Sensor Networks</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              6. IoT architectures and protocols
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Wireless sensor networks</li>
            <li>IoT data analytics and applications</li>
            <li>Security and privacy in IoT</li>
            <li>Software Engineering and Agile Development</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              7. Software testing and quality assurance
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Agile methodologies and practices</li>
            <li>Requirements engineering</li>
            <li>Software maintenance and evolution</li>
            <li>Computer Networks and Communications</li>
          </ul>
          <div className="border-l-[5px] border-red-800 ">
            <p className="tracking-wide mb-2 text-lg font-semibold pl-5">
              8. Network protocols and architectures
            </p>
          </div>
          <ul className="list-disc list-inside tracking-wide text-base font-light mt-2 mb-5 ">
            <li>Wireless and mobile networks</li>
            <li>Network performance analysis</li>
            <li>Internet of Everything (IoE)</li>
          </ul>

          <p>
            <br />
            <p className="tracking-wide text-lg font-semibold">
              The papers submitted to the conference will be peer reviewed and
              published as proceedings in Springer(Proposed)
            </p>
            <br />
            <hr />
            <br />
            <p className=" bg-black p-3 text-white rounded-tl-3xl rounded-br-3xl">
              All papers will undergo a blind peer review process and all
              accepted papers will be published in the SHORT NAME conference e
              proceedings with an e ISBN number. The conference organizer
              encourages submissions of academic and research papers that
              consider the multidisciplinary/interdisciplinary themes covering
              the Management, Science and Social Studies, through one of the
              following sub themes, although submissions of other topics for
              consideration are also welcome.
            </p>
            <p className=" mt-7 bg-black p-3 text-white rounded-tl-3xl rounded-br-3xl">
              Join us at ICDPN to connect with researchers, industry experts,
              and fellow enthusiasts from around the world. Together, let's
              advance the frontiers of computer science and information
              technology. For more information, please visit the conference
              website . Should you have any inquiries, feel free to contact us
              at{" "}
              <span className="text-blue-400 cursor-pointer">
                icdpn.conf@gmail.com
              </span>
              <p className="text-lime-400">
                We look forward to your valuable contributions and your presence
                at ICDPN 2024.
              </p>
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
