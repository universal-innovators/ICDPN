import ImpDates from "@/components/ImpDates";

const AboutInstitute = () => {
  return (
    <div className="container">
      <hr />
      <div className="text-center  bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className="underline font-extrabold text-xl ">
          About Institute
        </b></div>
      <hr />
      <div className="sm:flex justify-around gap-7">
        <div className="sponsor-text-container">
          <h4 className="text-center  bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl" >About Institute of Technology and Business in České Budějovice, Near Prague, Czech Republic, Europe</h4>
          
          <br />
          <p className=" bg-violet-700 text-white p-3 rounded-tl-3xl rounded-br-3xl">
          From the very beginning, VSTE has profiled itself as a professionally-oriented technical and economic college, which offers study programmes based on the current requirements of the labour market not only in South Bohemian region. The institute therefore closely cooperates with more than 1600 companies from the Czech Republic and puts great emphasis on the students’ work experience that is carried out in the partner organizations for one semester, in the extent of 520 hours.
VSTE students thus gain not only academic but also professional experience and contacts and after their graduation, they are very successful in terms of their employability in the labour market. In the area of graduates’ employability, VSTE has been one of the most successful colleges and universities in the Czech Republic in the long run.
During the years of its existence, the school has undergone a major transformation that took decades at other schools. During this short period, VSTE received a number of regional, national, and international awards. This is largely due to its employees and students numbering about 4,500.
VSTE has thus become an important trans-regional academic institution, which, compared to other universities and colleges, shows a significantly faster growth, with a strong focus on students’ practical skills and high graduates employability in the labour market. —
Institute of Technology and Business (VSTE) was founded in 2006, thus  becoming the youngest public college in the Czech Republic.
There are only two public institutes in the Czech Republic where the programmes focus on the applicability of knowledge rather than just theory and VŠTE is one of them. During the last study year, all programs include one semester of professional work experience.
The primary focus of VŠTE activities is the implementation of full-time and part-time studies for professional bachelor’s and master’s degree programmes. The professional study programmes are supported by cooperation with regional entrepreneurs. Other priorities of VŠTE include applied research, the implementation of innovative technologies and knowledge transfer into areas that are current and crucial with regards to the regions 
          </p>
          <br />
        </div>
        <div className="mt-7 min-w-fit">
            <ImpDates />
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;
