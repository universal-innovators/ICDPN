//import React from 'react'
import Marquee from 'react-fast-marquee'

const ImpDates = () => {
  return (
    <div className='flex-col justify-between items-center max-w-[418px] m-auto mt-8 mb-9 h-[40rem] ' >
    <div className={`w-[418px] text-center bg-black text-white h-8 cursor-pointer underline font-bold text-xl p-12 `}  >Important Dates</div>
    <div  className={`overflow-hidden bg-black text-white flex-col  `} >
    <Marquee direction='up'  speed={50} pauseOnHover='true'  style={{textAlign:'center',width:'27rem',height:'30rem'}}>
      
     <div className='flex-col items-center h-[20rem] '>
      <div className=' text-green-400 hover:scale-125'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div><br/>
      <div className=' text-green-400 hover:scale-125'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div><br/>
      <div className=' text-green-400 hover:scale-125'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div><br/>
      <div className=' text-green-400 hover:scale-125'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div><br/>
      <div className=' text-green-400 hover:scale-125'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div><br/>
      </div>
      </Marquee>
      
      
      
     </div>
    </div>
     
  )
}

export default ImpDates