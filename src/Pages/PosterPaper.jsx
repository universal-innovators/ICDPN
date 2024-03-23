
import Marquee from 'react-fast-marquee'
import ImpDates from '../components/ImpDates'

const PosterPaper = () => {
  return (
    <div className='flex mb-10'>
    <div>
        <h1 className=' underline font-bold text-blue-950 text-4xl'>Call For Poster Paper Presentation</h1>
        <p className='mt-8'>The scope of this conference is to provide a platform for researchers, engineers, academicians, and industry professionals from all <br/> over the world to present their research results and development activities in various topics of Engineering and Technology. It <br/>allows participants to discuss the recent developments in the solidification of computer science and management and review <br/>challenges faced by the community in the 21st century.<br/>

1.The Original unpublished Research Papers, Articles and working papers having a maximum length of 8 pages on the topics related to the theme are invited for Poster Paper presentations in the conference proceedings.<br/>
2.Kindly ensure your paper is formatted s (not exceeding 8 pages written in A4 size).All papers must be submitted online via Microsoft CMT Submission Portal<br/>
3.All submissions will be thoroughly peer-reviewed by experts based on originality, significance and clarity.<br/>
4,Only papers presenting original content with novel research results or successful innovative applications will be considered for Poster Paper Presentation.</p>
    </div>
    
    <ImpDates/>
    


    </div>
  )
}

export default PosterPaper