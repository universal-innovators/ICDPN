import {useState} from 'react'
import Marquee from 'react-fast-marquee'


const AutoScroller = () => {
  const[open,setOpen]=useState(false)
  return (
    <div className='flex-col justify-between items-center max-w-[418px] m-auto ' onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
    <div className={`w-[418px] text-center bg-black text-white h-8 cursor-pointer underline font-bold text-xl `}  >Downloads</div>
    <div  className={`overflow-hidden bg-black text-white flex-col ${open?'visible':'hidden'}`} >
    <Marquee direction='up' speed={50}  style={{textAlign:'center',width:'27rem'}}>
      
     <div className='flex-col items-center h-[20rem] '>
      <a className='text-cyan-800 hover:shadow-lg underline text-lg font-semibold cursor- pinter' >Manuscript Guidelines</a><br/>
      <a className='text-cyan-800 hover:shadow-lg underline text-lg font-semibold cursor- pinter'>Checklist</a><br/>
      <a className='text-cyan-800 hover:shadow-lg underline text-lg font-semibold cursor- pinter'>Special Session Proposal Template</a><br/>
      <a className='text-cyan-800 hover:shadow-lg underline text-lg font-semibold cursor- pinter'>Icicc Brochure</a><br/>
      <a className='text-cyan-800 hover:shadow-lg underline text-lg font-semibold cursor- pinter'>Sponsorship Proposal</a><br/>
      </div>
      </Marquee>
      
      
      
     </div>
    </div>
     

    
  )
}

export default AutoScroller