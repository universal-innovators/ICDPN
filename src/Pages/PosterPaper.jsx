
import Marquee from 'react-fast-marquee'

const PosterPaper = () => {
  return (
    <div className='flex'>
    <div>
        <h1 className=' underline font-bold text-blue-950 text-4xl'>Call For Poster Paper Presentation</h1>
        <p className='mt-8'>The scope of this conference is to provide a platform for researchers, engineers, academicians, and industry professionals from all <br/> over the world to present their research results and development activities in various topics of Engineering and Technology. It <br/>allows participants to discuss the recent developments in the solidification of computer science and management and review <br/>challenges faced by the community in the 21st century.<br/>

1.The Original unpublished Research Papers, Articles and working papers having a maximum length of 8 pages on the topics related to the theme are invited for Poster Paper presentations in the conference proceedings.<br/>
2.Kindly ensure your paper is formatted s (not exceeding 8 pages written in A4 size).All papers must be submitted online via Microsoft CMT Submission Portal<br/>
3.All submissions will be thoroughly peer-reviewed by experts based on originality, significance and clarity.<br/>
4,Only papers presenting original content with novel research results or successful innovative applications will be considered for Poster Paper Presentation.</p>
    </div>
    
    <div className='flex-col justify-between items-center max-w-[418px] m-auto '  >
    <div className={`w-[418px] text-center bg-black text-white h-8 cursor-pointer underline font-bold text-xl `}  >Downloads</div>
    <div  className={`overflow-hidden bg-black text-white flex-col `} >
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
    


    </div>
  )
}

export default PosterPaper