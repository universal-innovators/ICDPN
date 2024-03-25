import Marquee from 'react-fast-marquee'


const ImpDates = () => {
  return (
    <div className='flex-col justify-between items-center max-w-[418px] sm:m-auto mt-8 mb-9 h-[40rem] ' >
    <div className={`sm:w-[418px] text-center  text-white h-8 bg-slate-900 font-bold text-xl p-12 downloads`}  >Important Dates</div>
    <div  className={`overflow-hidden bg-slate-900  text-white flex-col  clicks`} >
    <Marquee direction='up'  speed={50} pauseOnHover='true' className='marquee'  style={{textAlign:'center',width:'27rem',height:'30rem'}}>
      
     <div className='flex-col items-center h-[20rem] '>
      <div className=' text-blue-100 hover:scale-125'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div><br/>
      <div className=' text-blue-100 hover:scale-125'><p className='font-bold '>Notification of first Review:</p>January 05th, 2025</div><br/>
      <div className=' text-blue-100 hover:scale-125'><p className='font-bold '>Submission of revised manuscript:</p>January 10th, 2025</div><br/>
      <div className=' text-blue-100 hover:scale-125'><p className='font-bold '>Notification of Acceptance/Rejection:</p>January 15th, 2025</div><br/>
      <div className=' text-blue-100 hover:scale-125'><p className='font-bold '>Final manuscript due:</p>January 20th, 2025</div><br/>
      <div className=' text-blue-100 hover:scale-125'><p className='font-bold '>Registration Deadline:</p>January 5th, 2025</div><br/>
      </div>
      </Marquee>
      
      {/*  */}
      
     </div>
    </div>
  )
}

export default ImpDates