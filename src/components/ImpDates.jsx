import Marquee from 'react-fast-marquee'


const ImpDates = () => {
  return (
    <div className='flex-col impdates justify-between items-center sm:w-[418px] m-auto mt-8 mb-9 h-[40rem] ' >
    <div className={`sm:w-[418px] sm:text-center bg-black text-white h-8 cursor-pointer underline font-bold text-xl p-12 `}  >Important Dates</div>
    <div  className={`overflow-hidden bg-black text-white flex-col  `} >
    <Marquee direction='up'  speed={50} pauseOnHover='true'    style={{textAlign:'center',width:'27rem',height:'30rem',}}>
      
     <div className='flex-col items-center h-[20rem] '>
      <div className=' text-blue-400 hover:scale-105'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div>
      <div className='w-10/12 h-[1px] m-auto  bg-gray-400'></div>
      <div className=' text-blue-400 hover:scale-105'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div>
      <div className='w-10/12 h-[1px] m-auto  bg-gray-400'></div>
      <div className=' text-blue-400 hover:scale-105'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div>
      <div className='w-10/12 h-[1px] m-auto  bg-gray-400'></div>
      <div className=' text-blue-400 hover:scale-105'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div>
      <div className='w-10/12 h-[1px] m-auto  bg-gray-400'></div>
      <div className=' text-blue-400 hover:scale-105'><p className='font-bold '>Paper Submission Deadline:</p>December 31st, 2024</div>
      <div className='w-10/12 h-[1px] m-auto  bg-gray-400'></div>

      </div>
      </Marquee>
      
      
      
     </div>
    </div>
  )
}

export default ImpDates