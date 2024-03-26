import Marquee from "react-fast-marquee";

function Body() {
  return (
    <>
      <div className="max-w-[1400px] mt-5 w-full m-auto px-4 flex flex-col gap-5 items-center">
        <div className="card">
          <a
            href="https://scholar.google.com/citations?hl=en&user=fFvhHUAAAAAJ"
            className="card__title"
          >
            A FLAGSHIP CONFERENCE: ICICC-2025
          </a>
          <p className="card__body">
            Online presentation of papers is allowed due to pandemic
          </p>
        </div>
        <div>
          <button className="btn">
            <a href="https://cmt3.research.microsoft.com/ICICC2025">Submit Paper</a>
          </button>
        </div>
      </div>
      <div className="scroller m-auto mt-[4rem] ">
        <ul className="tag-list scroller_inner">
          <Marquee
            gradient={true}
          >
            <li>
              <p>3575</p>
              <p>Citations</p>
            </li>
            <li>
              <p>22</p>
              <p>H-Index</p>
            </li>
            <li>
              <p>22</p>
              <p>H5-Index</p>
            </li>
            <li>
              <p>1866</p>
              <p>No. of Published Papers in Proceedings</p>
            </li>
            <li>
              <p>70</p>
              <p>No. of Keynotes</p>
            </li>
            <li>
              <p>13</p>
              <p>No. of Workshops</p>
            </li>
            <li>
              <p>22%</p>
              <p>Acceptance Rate</p>
            </li>
            <li>
              <p>50</p>
              <p>No. of Participating Countries</p>
            </li>
            <li>
              <p>18</p>
              <p>No. of Volumes Published</p>
            </li>
            <li>
              <p>103</p>
              <p>No. of Published Papers in Extended Journals(Scopus)</p>
            </li>
            <li>
              <p>59</p>
              <p>No. of Published Papers in Extended Journals(SCIE)</p>
            </li>
            <li>
              <p>4790</p>
              <p>Total No. of Participation</p>
            </li>
          </Marquee>
        </ul>
      </div>
    </>
  );
}

export default Body;
