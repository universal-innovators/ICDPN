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
          <p className="mb-[1rem] ">All the accepted papers of ICDPN-2024 will be published as proceedings of ICDPN - 2024 indexed by Scopus, Ei, WoS, and other reputed databases. High-quality selected extended conference papers will be invited to submit for publication in the special issues.</p>
          <br />
          <div className="mb-[30px]">
            <ul className="books flex justify-between flex-wrap m-[10px] list-none">
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
              {/* <li>
                <img src="cmes.jpeg" alt="" />
                <p>Computer Modeling in Engineering & Sciences (SCIE Indexed IF 2.0)</p>
              </li>
              <li>
                <img src="jmm.jpg" alt="" />
                <p>Journal of Mobile Multimedia(River)(Scopus and ESCI)</p>
              </li>
              <li>
                <img src="scpe.png" alt="" />
                <p>SCPE( ESCI, SCOPUS)</p>
              </li>
              <li>
                <img src="j-bhii.jpg" alt="" />
                <p>IEEE JOURNAL OF BIOMEDICAL AND HEALTH INFORMATICS, SCI,IF-7.7</p>
              </li>
              <li>
                <img src="ctsoc.jpg" alt="" />
                <p>IEEE Transactions on Consumer Electronics, SCI, IF-4.3</p>
              </li>
              <li>
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
            <img src="wti.jpeg" alt="" />
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