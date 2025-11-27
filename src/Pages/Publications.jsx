import ImpDates from "../components/ImpDates"

const Publications = () => {
  return (
    <div className="container">
      <hr />
      <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className=" font-extrabold text-xl tracking-wider">Publications</b>
      </div>
      <hr />
      <div className="sm:flex justify-around mt-10 gap-7">
        <div className="sponsor-text-container">
          <h4 className="text-center">PUBLICATION-PROCEEDINGS</h4>
          <br />
          <p className="mb-[1rem] ">All the papers of ICAIN 2026 will be published in Springer LNNS series (SCOPUS, DBLP, EI Compendex, INSPEC, SCImago, zbMATH) . Some of the papers will be published Springer in AIS series Indexed by zbMATH, Google Scholar. All books published in the series are submitted for consideration in Web of Science.</p>
          <br />        
          <div className="mb-[30px]">
            <ul className="books flex justify-evenly flex-wrap m-[10px] list-none">
              <li>
                <img src="lnns.jpg" alt="" />
                {/* <p>Physical Communication, Elsevier (SCIE indexed) IF 2.37</p> */}
              </li>
              <li>
                {/* <img src="ais.jpg" alt="" /> */}
                {/* <p>Computer & Electrical Engineering, Elsevier (SCIE indexed) IF 4.15</p> */}
              </li>
              
            </ul>
          </div>  
          <p className="mb-[1rem] ">Some of the High-quality selected extended papers of the conference will be invited to submit for publication in the special issues of the following journals :</p>
          <br />
          <div className="mb-[30px]">
            <ul className="books flex justify-evenly flex-wrap m-[10px] list-none">
              <li>
                <img src="physics.jpg" alt="" />
                <p>Physical Communication, Elsevier (SCIE indexed) IF 2.37</p>
              </li>
              <li>
                <img src="computer.jpg" alt="" />
                <p>Computer & Electrical Engineering, Elsevier (SCIE indexed) IF 4.15</p>
              </li>
              <li>
                <img src="expert.jpg" alt="" />
                <p>Expert Systems, Wiley (SCIE indexed) IF 2.81</p>
              </li>
              <li>
                <img src="intelligent.jpg" alt="" />
                <p>Intelligent Decision Technologies (Indexed by SCOPUS & ESCI)</p>
              </li>
               <li>
                <img src="hbet.jpg" alt="" />
                <p>Human Behavior and Emerging Technologies, Wiley- ESCI & Scopus</p>
              </li>
               <li>
                <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6221020" target="_blank">
                <img src="jbhireview.png" alt=""/>
                <p className="text-black">IEEE JOURNAL OF BIOMEDICAL AND HEALTH INFORMATICS( SCI, IF-6. 7)</p>
                </a>
              </li>
               <li>
                <a href="http://hcisj.com/" target="_blank">
                <img src="hcisj.jfif" alt=""/>
                <p className="text-black">Human-centric Computing and Information Sciences(SCI, IF-3. 9)</p>
                </a>
              </li>
              <li>
                <img src="ijs.jpg" alt="" />
                <p>International Journal of Sensors, Wireless Communications and Control, BENTHAM SCIENCE</p>
              </li>
              <li>
                <img src="iet.jpg" alt="" />
                <p>IET Signal Processing Journal, Wiley SCI</p>
              </li>
              <li>
                <img src="cmir.gif" alt="" />
                <p>Current Medical imaging, BENTHAM SCIENCE, IF: 1.1</p>
              </li>
              <li>
                <img src="das.webp" alt="" />
                <p>Discover Applied Sciences Journal, IF:2.8</p>
              </li>
              <li>
                <img src="fai.png" alt="" />
                <p>Frontiers in Artificial Intelligence Journal, SCI-IF 3.0</p>
              </li>
              {/*<li>
                <img src="human.jpeg" alt="" />
                <p>Human-centric Computing and Information Sciences Journal, SCI -IF 6.6</p>
              </li>
              <li>
                <img src="itl.jpg" alt="" />
                <p>Internet Technology letters , Wiley-ESCI & SCOPUS</p>
              </li>
              <li>
                <img src="slas.jpg" alt="" />
                <p>SLAS TECHNOLOGY, ELSEVIER-SCIE (IF-2.8)</p>
              </li> */}
            </ul>
          </div>
          <h4 className="text-center">INDEXING</h4>
          <br />
          <div className="indexing flex justify-around flex-wrap gap-3">
            <img src="scopus.png" alt="" />
            <img src="iet.jpeg" alt="" />
            {/* <img src="wti.jpeg" alt="" /> */}
            <img src="eg.png" alt="" />
            <img src="scimago.png" alt="" />
            <img src="zbmath.png" alt="" />
            <img src="scholar.png" alt="" />
            <img src="isi.png" alt="" />
          </div>
        </div>
        <div className="w-full">
          <ImpDates />
        </div>
      </div>
    </div>
  )
}

export default Publications