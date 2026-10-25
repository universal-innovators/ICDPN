import ImpDates from "../components/ImpDates";

const Publications = () => (
  <div className="container">
    <hr />
    <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl"><b className="font-extrabold text-xl tracking-wider">Publications</b></div>
    <hr />
    <div className="sm:flex justify-around mt-10 gap-7">
      <div className="sponsor-text-container">
        <h4 className="text-center">PUBLICATION-PROCEEDINGS</h4>
        <br />
        <p className="mb-4">All the papers of ICDPN 2027 will be published in the Springer LNNS series (SCOPUS, DBLP, EI Compendex, INSPEC, SCImago, and zbMATH). Selected extended papers may be invited for publication in special issues of high-quality journals.</p>
        <img src="lnns.jpg" alt="Springer LNNS" className="mx-auto max-w-xs" />
        <p className="mt-6">The conference proceedings and publication information will be updated as the 2027 program is finalized.</p>
      </div>
      <div className="w-full"><ImpDates /></div>
    </div>
  </div>
);

export default Publications;
