import advcm from "@/static/advcm";

const AdvCom = () => {
  return (
    <div className="container">
      <hr />
      <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className=" font-extrabold text-xl tracking-wider">Advisory Committee</b>
      </div>
      <hr />
      <div className="sm:flex justify-around gap-7">
        <div className="flex flex-wrap justify-around mt-8 mb-8 gap-[16px]">
        {advcm.map((member)=>{
          return <div className="testimonials w-[385px] bg-neutral-100 text-secondary-400">
            <p>
             {member.name} , {member.info}
            </p>
          </div>
        })}
          
        </div>
        
      </div>
    </div>
  );
};

export default AdvCom;
