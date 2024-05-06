const AutoScroller = () => {
  return (
    <div className=" w-[20rem] testimonials bg-neutral-100  h-[17rem]">
      <div className="flex items-end justify-center mb-2">
        <h3 className="tracking-wide text-xl">Downloads</h3>
        <img className="" src="down.svg" alt="" />
      </div>
      <hr />
      <div className="text-center m-8 flex flex-col gap-2">
        <p className="text-gray-600 tracking-wide hover:text-gray-800">
          <a href="">Manuscript Guidelines</a>
        </p>
        <p className="text-gray-600 tracking-wide hover:text-gray-800">
          <a href="">Checklist</a>
        </p>
        <p className="text-gray-600 tracking-wide hover:text-gray-800">
          <a href="">Special session Proposal Template</a>
        </p>
      </div>
    </div>
  );
};

export default AutoScroller;
