import qr from '../static/upi.png';

const Registration = () => {
  return (
    <div className="container mb-9">
      <hr />
      <div className="text-center mt-3 mb-3 bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        <b className=" font-extrabold text-xl tracking-wider">Registration</b>
      </div>
      <hr />
      <br />
      {/* <div className='w-10/12 h-[1px] ml-10 mt-4 bg-gray-400'></div><br/> */}
      <p className="mb-9 text-lg">
        Once Your paper is accepted, the registration process begins. you have
        to complete the following steps.
        <br />
        <br />
        <b>Registration Fee:</b> It is mandatory for at least one author of an
        accepted paper to register in order for the paper to appear in the
        proceedings and included in the Technical Program.
        <br />
        <marquee><p className="text-lg my-4 text-red-500 font-semibold">Note: 40% Discount / Custom Fees Registration (Amount based on category of participation or the information conveyed) for online mode registrations</p></marquee>
        <p className="  rounded-3xl mt-3 text-lg ">
          <b className="">Author/Co-Author Registration Fee Includes</b>
          <br />
          1) Welcome reception
          <br />
          2) Badge
          <br />
          3) Conference Kit with Proceeding
          <br />
          4) Participation in the technical program
          <br />
          5) Coffee breaks
          <br />
          6) Lunch
          <br />
          7) Banquet
        </p>
      </p>
      
      <div className="w-10/12 m-auto flex-col content-center rounded-2xl p-3 bg-black text-white border-black border-[1px] ">
        {/* <div className="text-center font-bold text-lg mt-5 bg-green-700 ">
          Pay via Bank Transfer
        </div> */}

        {/* <table className="table1 m-auto  sm:w-10/12 mt-5">
          <tr>
            <td className="">ACCOUNT NAME</td>
            <td>UI CONSULTANTS</td>
          </tr>
          <tr>
            <td>ACCOUNT NAME</td>
            <td>510909010118897</td>
          </tr>
          <tr>
            <td>BANK</td>
            <td>City Union Bank</td>
          </tr>
          <tr>
            <td>BRANCH</td>
            <td>Sector-8, Rohini Delhi</td>
          </tr>
          <tr>
            <td>BRANCH CODE</td>
            <td>244</td>
          </tr>
          <tr>
            <td>IFSC CODE</td>
            <td>CIUB0000244</td>
          </tr>
          <tr>
            <td>SWIFT CODE</td>
            <td>CIUBIN5M</td>
          </tr>
          <tr>
            <td>ACCOUNT TYPE</td>
            <td>CURRENT</td>
          </tr>
        </table> */}
        {/* <div className="w-10/12 h-[1px] m-auto mt-4 bg-gray-400 shadow-white shadow-2xl"></div> */}
        <br />
        <div className="text-center font-bold text-lg ">Pay via Razorpay/Stripe (International Authors/Attendees)</div>
        <div className="text-center  ">
          For Payment from International Authors/Attendees, use the following
          Razorpay/Stripe link with additional 5% service charges applies
        </div><br/>
        <div className=" text-center">
          <a
            // href="https://rzp.io/l/Xsn5E1V"
            href="https://rzp.io/rzp/AwQjdPa"
            target="_blank"
            className=" "
          >
            <button className=" self-center  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500  ">
              <div className="m-auto p-[0.5rem] text-white">
                Pay with Razorpay
              </div>
            </button>
          </a>
        </div>
        <br />
        <div className=" text-center">
          <a
            href="https://buy.stripe.com/00gcP969V3is1Jm5kn"
            target="_blank"
            className=" "
          >
            <button className=" self-center  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500  ">
              <div className="m-auto p-[0.5rem] text-white">
                Pay with Stripe
              </div>
            </button>
          </a>
        </div><br/>
        
        <br />
        <div className="flex  items-stretch">
          <div className="w-[45%] h-[1px] m-auto mt-4  bg-gray-400"></div>
          <div className="text-center ">OR</div>
          <div className="w-[45%] h-[1px] m-auto mt-4  bg-gray-400"></div>
        </div>
        <br />

        <div className="text-center font-bold text-lg ">Pay via Paypal</div>
        <br />
        <div className=" text-center">
          <a
            href="https://www.paypal.com/paypalme/ICICCConference?locale.x=en_GB"
            target="_blank"
            className=" "
          >
            <button className=" self-center  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500  ">
              <div className="m-auto p-[0.5rem] text-white">
                Pay with Paypal
              </div>
            </button>
          </a>
        </div>
        {/*<br/>
        <div className="flex  items-stretch">
          <div className="w-[45%] h-[1px] m-auto mt-4  bg-gray-400"></div>
          <div className="text-center ">OR</div>
          <div className="w-[45%] h-[1px] m-auto mt-4  bg-gray-400"></div>
        </div>
        <div className="text-center font-bold text-lg ">Pay via Razorpay</div>
        <br />
        <div className=" text-center">
          <a
            href="https://pages.razorpay.com/pl_O9GXsuOr0CaWwE/view"
            target="_blank"
            className=" "
          >
            <button className=" self-center  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500  ">
              <div className="m-auto p-[0.5rem] text-white">
                Pay with Razorpay
              </div>
            </button>
          </a>
        </div>*/}
        <br/>
        <div className="flex  items-stretch">
          <div className="w-[45%] h-[1px] m-auto mt-4  bg-gray-400"></div>
          <div className="text-center ">OR</div>
          <div className="w-[45%] h-[1px] m-auto mt-4  bg-gray-400"></div>
        </div>
        <br/>

        
        <div className="text-center font-bold text-lg ">Pay via Razorpay</div>
        <div className="text-center  ">
          For payment from Indian Authors/Attendees, use the following payment
          link
        </div>
        <br />
        <div className="text-center">
          <a
            href="https://rzp.io/rzp/dsHd2W4"
            target="_blank"
          >
            <button className="   bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 ">
              <div className="m-auto p-[0.5rem] text-white">
                Pay with Razorpay
              </div>
            </button>
          </a>
        </div>
        <br />
        <div className="flex  items-stretch">
          <div className="w-[45%] h-[1px] m-auto mt-4  bg-gray-400"></div>
          <div className="text-center ">OR</div>
          <div className="w-[45%] h-[1px] m-auto mt-4  bg-gray-400"></div>
        </div>
        <br />
        <div className="text-center font-bold text-lg ">Pay via UPI</div>
        <br />
        <div className="flex justify-center">
          <img src={qr} className='h-72 w-60'/>
        </div>
        <br />

      </div>

      <div className="w-[90%] sm:overflow-auto overflow-scroll m-auto">
        <table className=" table1 bg-black text-white m-auto sm:w-10/12 mt-11">
          <thead>
            <th>Category</th>
            <th>Early Registration (before 10th September 2025)</th>
            <th>Late Registration (after 10th September 2025)</th>
          </thead>
          <tbody>
            <tr>
              <td>Research Scholar/Student</td>
              <td>USD 300</td>
              <td>USD 350</td>
            </tr>
            <tr>
              <td>Academician</td>
              <td>USD 350</td>
              <td>USD 400</td>
            </tr>
            <tr>
              <td>Industrial Participants</td>
              <td>USD 400</td>
              <td>USD 450</td>
            </tr>
            {/* <tr>
              <td>Foreigner Research Scholar/Student (Outside India)</td>
              <td>USD 120</td>
              <td>USD 150</td>
            </tr>
            <tr>
              <td>Foreigner Academician (Outside India)</td>
              <td>USD 150</td>
              <td>USD 200</td>
            </tr>
            <tr>
              <td>Foreigner Industrial Participant (Outside India)</td>
              <td>USD 200</td>
              <td>USD 250</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className="w-[90%] mt-20 sm:overflow-auto overflow-scroll m-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl">Conference Attendee Registration</h3>
          <p className="text-red-500">Note: Attendee is participant of the conference attending the conference without any paper registration</p>
        </div>
        <table className=" table1 bg-black text-white m-auto sm:w-10/12 mt-11">
          <thead>
            <th>Category</th>
            <th>Early Registration (before 10th September 2025)</th>
            <th>Late Registration (after 10th September 2025)</th>
          </thead>
          <tbody>
            <tr>
              <td>Research Student Attendee</td>
              <td>USD 150</td>
              <td>USD 200</td>
            </tr>
            <tr>
              <td>Standard Attendee</td>
              <td>USD 200</td>
              <td>USD 250</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="discount text-violet-700">
        *Special Discount of 10% for Universal Inovator (UI) Member
      </div>
    </div>
  );
};

export default Registration;
