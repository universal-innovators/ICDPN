
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
        ICDPN-2027 will be organised by Slovak University of Agriculture in Nitra, Slovakia, in association with Maharaja Agrasen Institute of Technology, Delhi, India, on 24th - 25th September, 2027.
        </p>
        
      </div>
    </div>
  )
}

export default Notices
