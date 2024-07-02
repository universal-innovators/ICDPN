import ImpDates from "@/components/ImpDates";

const SteeringCommittee = () => {
  return (
    <div className="container">
      <hr />
      <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className=" font-extrabold text-xl tracking-wider">Steering Committee</b>
      </div>
      <hr />
      <div className="sm:flex justify-around gap-7">
        <div className="flex flex-wrap justify-around mt-8 mb-8 gap-[16px]">
          <div className="testimonials w-[100%] bg-neutral-100 text-secondary-400">
            <h3>Patron(s):</h3>
            <hr />
            <p>Doc. Ing. Vojtech Stehel</p>
            <p>
              (Rector, Institute of Technology and Business in České Budějovice)
            </p>          
            
            
          </div>
          <div className="testimonials w-[100%] bg-neutral-100 text-secondary-400">
            <h3>General Chair(s):</h3>
            <hr />
            <p>Prof. Dr. Bal Virdee</p>
              <p>(London Metropolitan University)</p>
              <br />
            <p>Prof. A.K. Singh</p>
            <p>(National Institute of Technology Kurukshetra, India)</p>
            <br />
            
            
          </div>
          
          <div className="testimonials w-[100%] bg-neutral-100 text-secondary-400">
            <h3>Conference Chair(s):</h3>
            <hr />
            <p>Prof. Sergio Duarte Correia</p>
            <p>(Polytechnic Institute of Portalegre, Portugal.)</p><br/>
            <p>Prof. Dr. Isabel de la Torre Diez
</p>
            <p>(University of Valladolid, Spain)</p> 
            <br />
            <p>Dr. João Manuel R. S. Tavares</p>
            <p>(Universidade do Porto (FEUP), PORTUGAL)</p><br/>
           
            
          </div>
          <div className="testimonials w-[100%] bg-neutral-100 text-secondary-400">
            <h3>Convener(s):</h3>
            <hr />
            <p>Roman Danel</p>
            <p>(Institute of Technology and Business in České Budějovice)</p>
            <br/>
            <p>Dr. Zdzislaw Polkowski</p>
            <p>
              (The Karkonosze University of Applied Sciences in Jelenia Góra,
              Poland)
            </p>
            
           
          </div>
          <div className="flex flex-col gap-4">
            <div className="testimonials h-full w-[100%] bg-neutral-100 text-secondary-400">
              <h3>Publication Chair(s):</h3>
              <hr />
              <p>Prof. Abhishek Swaroop</p>
              <p>(Bhagwan Parshuram Institute of Technology, India)</p>
              <br />
              <p>Jan Valicek</p>
            <p>(Institute of Technology and Business in České Budějovice)</p>
              
              
            </div>
          <div className="testimonials w-[100%] bg-neutral-100 text-secondary-400">
            <h3>Technical Program Chair(s):</h3>
            <hr />
            <p>Omer Rana</p>
            <p>(Cardiff University, UK)</p>
            <br/>
            <p>Prof Punam Bedi</p>
            <p>(Department of Computer Science, University of Delhi)</p>
            <br/>
            <p>Dr. Richa Sharma</p>
            <p>(London Metropolitan University)</p>
            <br/>
            <p>Dr. Momina Shaheen</p>
            <p>(Department of Computing, School of Arts Humanities and Social Sciences, University of Roehampton, London SW15 5PJ, United Kingdom.

)</p>
            
     
            
          </div>
                 
          <div className="testimonials w-[100%] bg-neutral-100 text-secondary-400">
            <h3>Publicity Chair(s):</h3>
            <hr />            
<p>Dr Marta Harničárová</p>
<p>(Department of Mechanical Engineering, Faculty of Technology, Institute of Technology and Business in České Budějovice)</p>
            <p>Dr. Akshi Kumar</p>
            <p>(Manchester Metropolitan University, UK)</p>
            <br />
            <p>Dr. Sandra Fernando</p>
            <p>(London Metropolitan University)</p>
            <br />         

            <p>Dr. Jameel Ahamed</p>
            <p>
              (Maulana Azad National Urdu University (MANUU), Hyderabad, India)
            </p>
            <br />
            <p>Mr. Moolchand Sharma</p>
            <p>(Maharaja Agrasen Institute of Technology, Delhi)</p>
            <br />      
          
           
            <p>Dr. Mamoona Humayun</p>
            <p>(Department of Information Systems, College of Computer and Information Sciences, Jouf University, Sakaka, Saudi Arabia)</p>
          </div>
          
            
          </div>         
        </div>
        <div className="mt-8 min-w-fit">
          <ImpDates />
        </div>
      </div>
    </div>
  );
};

export default SteeringCommittee;
