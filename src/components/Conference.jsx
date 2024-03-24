import React from 'react'
import AutoScroller from './AutoScroller'

const Conference = () => {
  return (
    <div className='flex md:flex-nowrap flex-wrap  justify-around mr-10 mt-8 '>
    <div className='border-2 border-black mr-6 gap-[4rem]'>
    <h1 className='font-bold  text-[35px] underline'>About   Conference</h1>
    <p className='mt-10'>International Conference on Innovative Computing and Communication (ICICC 2025) is organized to bring together innovative scientists,<br/> professors, research scholars, students, and industrial experts in the field of Computing and Communication to a common forum. The<br/> primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers<br/>, students, and practitioners. Another goal is to promote the transformation of fundamental research into institutional and industrialized<br/> research and to convert applied exploration into the real-time application. Overall, the conference will provide the researchers and attendees<br/> with prospects for national and international collaboration and networking among universities and institutions from India and abroad for<br/> promoting research. ICICC- 2025 will be held at Shaheed Sukhdev College of Business Studies, University of Delhi, New Delhi. All the accepted<br/> papers (after double-blinded peer review) will be published as proceedings of ICICC-2025 in Springer LNNS Series (Accepted)</p>
    <div className='flex mt-7'>Paper Submission Link :
    <a href='https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICICC2025%2FSubmission%2FIndex' className=' underline hover:shadow-lg text-blue-600' >Paper Submission</a></div>
    </div>
    
    <AutoScroller/>
    </div>
  )
}

export default Conference