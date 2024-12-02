
const Notices = () => {
  return (
    <div className="flex imp testimonials bg-neutral-100 flex-col gap-5">
      <div className="flex gap-2 items-center">
        <img src="notice.svg" alt="" />
        <h2 className="font-medium tracking-wider text-2xl text-gray-600"><span className="text-red-600">Important</span>  Notice<span className="text-red-600">:</span></h2>
      </div>
      <hr />
      <div className="flex flex-col text-lg">
        <p className="text-gray-600">
        ICDPN-2025 will be organised by Institute of Technology and Business in České Budějovice, Near Prague, Czech Republic, Europe (Venue) on 31st October - 1st November, 2025.
        </p>
        
      </div>
    </div>
  )
}

export default Notices