import {useState} from 'react'
import Marquee from 'react-fast-marquee'



const AutoScroller = () => {
  const[open,setOpen]=useState(false)
  return (
    <div className='flex-col justify-between items-center max-w-[418px] m-auto ' onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
    <div className={`w-[418px] text-center bg-black text-white h-8 cursor-pointer underline font-bold text-xl `}  >Downloads</div>
    <div  className={`overflow-hidden bg-black text-white flex-col ${open?'visible':'hidden'}`} >
    <Marquee direction='up' speed={50}   style={{textAlign:'center',width:'27rem'}}>
      
     <div className='flex-col items-center h-[20rem] '>
      <a className='text-cyan-800 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor- pinter' href='https://icicc-conf.com/static/media/ManuscriptguidelinesforEnglishbooks.b4c0e227c2235ee1639f.pdf' target='_blank'>Manuscript Guidelines</a><br/>
      <a className='text-cyan-800 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor- pinter' href='https://icicc-conf.com/static/media/Checklist.53f333387521d291e859.pdf' target='_blank'>Checklist</a><br/>
      <a className='text-cyan-800 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor- pinter' href='src/assets/Special_Session_Proposal_Template.31f347006f168f90d745 (1).docx' download={'Special_Session_Proposal_Template.docx'}>Special Session Proposal Template</a><br/>
      <a className='text-cyan-800 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor- pinter' href='https://icicc-conf.com/static/media/ICICC_Brochure.673f10fb281cdd1d8593.pdf' target='_blank'>Icicc Brochure</a><br/>
      <a className='text-cyan-800 hover:shadow-lg hover:scale-125 underline text-lg font-semibold cursor- pinter' href='https://icicc-conf.com/static/media/sponsorship_Proposal.cd95a369821042f3f018.pdf' target='_blank'>Sponsorship Proposal</a><br/>
      </div>
      </Marquee>
      
      
      
     </div>
    </div>
     

    
  )
}

export default AutoScroller