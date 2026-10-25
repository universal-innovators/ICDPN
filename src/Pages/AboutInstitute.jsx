import ImpDates from "@/components/ImpDates";

const AboutInstitute = () => (
  <div className="container">
    <hr />
    <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
      <b className="font-extrabold text-xl tracking-wider">About Institute</b>
    </div>
    <hr />
    <div className="sm:flex justify-around gap-7">
      <div className="sponsor-text-container">
        <h4 className="text-center bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">About the Slovak University of Agriculture in Nitra, Slovakia</h4>
        <br />
        <p className="bg-violet-700 text-white p-3 rounded-tl-3xl rounded-br-3xl">
          The Slovak University of Agriculture in Nitra (SUA), Slovakia, officially known as Slovenská poľnohospodárska univerzita v Nitre, is a public higher education institution established in 1952. The university is recognised for its academic and research contributions in agriculture, biotechnology, food science, engineering, environmental sustainability, economics, and management. It offers Bachelor&apos;s, Master&apos;s, and doctoral programmes, including selected programmes taught in English, and actively participates in international academic cooperation, research projects, and knowledge exchange.
          <br /><br />
          SUA comprises six faculties: Agrobiology and Food Resources; Biotechnology and Food Sciences; Economics and Management; European Studies and Regional Development; Horticulture and Landscape Engineering; and Engineering. Its multidisciplinary strengths include sustainable agriculture, precision farming, food safety, biotechnology, environmental protection, automation, renewable energy, and data-driven decision-making.
          <br /><br />
          Its research and educational expertise provides opportunities for collaboration in artificial intelligence, the Internet of Things, computer vision, bioinformatics, smart agriculture, environmental monitoring, and sustainable engineering. Potential activities include joint research, co-authored publications, conferences, faculty and student exchanges, workshops, and other academic initiatives. Visit <a className="underline" href="https://www.uniag.sk/en/" target="_blank" rel="noreferrer">the official university website</a> for further information.
        </p>
      </div>
      <div className="mt-7 min-w-fit"><ImpDates /></div>
    </div>
  </div>
);

export default AboutInstitute;
