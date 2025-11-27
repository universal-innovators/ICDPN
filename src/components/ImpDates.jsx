const ImpDates = () => {
  return (
    <div className="flex imp testimonials bg-neutral-100 flex-col gap-5">
      <div className="flex gap-2 items-center">
        <img src="calendar.svg" alt="" />
        <h2 className="font-medium tracking-wider text-2xl text-gray-600"><span className="text-red-600">Important</span>  Dates<span className="text-red-600">:</span></h2>
      </div>
      <hr />
      <div className="flex flex-col text-lg leading-loose">
        <h2 className="text-gray-600">Deadline for Manuscript submission: <span className="text-gray-500"> 28th February 2026</span></h2>
        <h2 className="text-gray-600">Notification of first review: <span className="text-gray-500"> 30th March 2026
</span></h2>
        <h2 className="text-gray-600">Submission of revised Manuscript: <span className="text-gray-500"> 20th April 2026</span></h2>
        <h2 className="text-gray-600">Notification of final acceptance: <span className="text-gray-500"> 30th April 2026</span></h2>
        <h2 className="text-gray-600">Final Manuscript due: <span className="text-gray-500"> 30th May 2026</span></h2>
        <h2 className="text-gray-600">Conference Date: <span className="text-gray-500"> 25th -26th September 2026</span></h2>
      </div>
    </div>
  );
};

export default ImpDates;
