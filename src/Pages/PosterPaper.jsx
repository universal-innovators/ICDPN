import ImpDates from "../components/ImpDates";

const PosterPaper = () => {
  return (
    <div className="flex container flex-wrap md:flex-nowrap mb-10 gap-6">
      <div className="ml-[3rem]">
        <h1 className=" underline font-bold text-blue-950 text-4xl">
          Call For Poster Paper Presentation
        </h1>
        <p className="mt-8">
          The scope of this conference is to provide a platform for researchers,
          engineers, academicians, and industry professionals from all <br />{" "}
          over the world to present their research results and development
          activities in various topics of Engineering and Technology. It <br />
          allows participants to discuss the recent developments in the
          solidification of computer science and management and review <br />
          challenges faced by the community in the 21st century.
          <br />
          1.The Original unpublished Research Papers, Articles and working
          papers having a maximum length of 8 pages on the topics related to the
          theme are invited for Poster Paper presentations in the conference
          proceedings.
          <br />
          2.Kindly ensure your paper is formatted s (not exceeding 8 pages
          written in A4 size).
          All papers must be submitted online via{" "}
          <a
            className="text-blue-500 underline"
            href="https://cmt3.research.microsoft.com/ICDPN2024"
          >
            Microsoft CMT Submission Portal
          </a>{" "}
          <br />
          3.All submissions will be thoroughly peer-reviewed by experts based on
          originality, significance and clarity.
          <br />
          4,Only papers presenting original content with novel research results
          or successful innovative applications will be considered for Poster
          Paper Presentation.
        </p>
        <h1 className=" font-bold text-blue-950 text-3xl mt-8 mb-4">
          Plagiarism Policy
        </h1>
        <p>
          1)The paper prior to submission should be checked for plagiarism from
          licensed plagiarism softwares like Turnitin/iAuthenticate etc. The
          similarity content should not exceed 20% (in any case either self
          contents or others). Further, you have to strictly implement the
          following ethical guidelines for publication.
          <br />
          2)Any form of self-plagiarism or plagiarism from others work(s) should
          not be there in an article. If any model / concept / figure / table /
          data / conclusive comment by any previously published work is used in
          your article, you should properly cite a reference to the original
          work.
          <br />
          3)Also language of explaining it should not be same as language of the
          work from which you have adopted it. If you are using any copyrighted
          material, you should acquire prior permission from the copyright
          holder.
        </p>
      </div>
      <div>

      <ImpDates />
      </div>
    </div>
  );
};

export default PosterPaper;
