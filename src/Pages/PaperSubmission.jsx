import ImpDates from '@/components/ImpDates'

const PaperSubmission = () => {
  return (
    <div>
    <div className='w-10/12 h-[1px]  mt-4 bg-gray-200'></div>
    <h1 className=' underline font-bold text-blue-950 text-4xl ml-[3rem]'>Paper Submission</h1>
    <div className='w-10/12 h-[1px]  mt-4 bg-gray-200 '></div>
    <div className='flex mt-6 ml-[3rem]'>
    <div><p>The Original unpublished Research Papers, Articles & Working papers having maximum length 8 pages on the topics related to the<br/> theme are invited for presentation/publication in the conference proceedings.<br/>

1)Kindly ensure that your paper is formatted as per <a className='text-blue-500 ' href='https://icicc-conf.com/static/media/Manuscript%20guidelines%20for%20English%20books.b4c0e227c2235ee1639f.pdf'>Springer Guidelines</a> (not exceeding 8 pages written in A4 size). Please refer the attached springer template for preparation of your paper.<br/>
2)All papers must be submitted online. via<br/>
3)All submissions will be thoroughly peer-reviewed by experts based on originality, significance and clarity.<br/>
4)Only papers presenting original content with novel research results or successful innovative applications will be considered for publication in the conference proceedings (as chapters in edited volumes of Springer Series).</p><br/><br/>
<p><h1 className=' font-bold text-blue-950 text-3xl'>Plagiarism Policy</h1><br/>
1)The paper prior to submission should be checked for plagiarism from licensed plagiarism softwares like Turnitin/iAuthenticate <br/>etc. The similarity content should not exceed 20% (in any case either self contents or others). Further, you have to strictly implement<br/> the following ethical guidelines for publication.<br/>
2)Any form of self-plagiarism or plagiarism from others work(s) should not be there in an article.<br/>
If any model / concept / figure / table / data / conclusive comment by any previously published work is used in your article,<br/> you should properly cite a reference to the original work.<br/>
3)Also language of explaining it should not be same as language of the work from which you have adopted it.<br/>
If you are using any copyrighted material, you should acquire prior permission from the copyright holder.</p>

    </div>
    <ImpDates/>

    </div>
    </div>
  )
}

export default PaperSubmission