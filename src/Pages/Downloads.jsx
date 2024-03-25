import ImpDates from '@/components/ImpDates'
import { Download } from '@mui/icons-material'


const Downloads = () => {
  return (
    <div>
      <h1 className=' ml-[3rem] underline font-bold text-blue-950 text-4xl'>Downloads</h1>
      <div className='w-10/12 h-[1px]  mt-11 bg-gray-300'></div>
    
      <div className='flex flex-wrap'>
        <div className='mt-[3rem] md:ml-[10rem] sm:ml-[2rem] download-blocks'>
          <div className='flex gap-2 flex-wrap  mb-5'>
          <div className=' relative'><a href="https://icicc-conf.com/static/media/ICICC2024%20POSTER.842bd5eacfa35fbbd8e2.pdf" target="_blank">
      <button className=' sm:w-[23rem]   bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 '>
        <div className='m-auto px-[4rem] p-[2rem] text-white'>ICICC-2024</div>
      </button><Download className='absolute right-9 top-9'/></a></div>
          <div className='relative'><a href="https://icicc-conf.com/static/media/ManuscriptguidelinesforEnglishbooks.b4c0e227c2235ee1639f.pdf" target="_blank">
      <button className=' w-[23rem]  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 '>
        <div className='m-auto  px-[4rem] p-[2rem] text-white'>Manuscript Guidelines</div>
      </button><Download className='absolute right-9 top-9'/></a></div>
          </div>
          <div className='flex gap-2  mb-5 flex-wrap'>
          <div className=' relative'><a href="https://icicc-conf.com/static/media/Checklist.53f333387521d291e859.pdf" target="_blank">
      <button className='w-[23rem]   bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 '>
        <div className='m-auto px-[4rem] p-[2rem] text-white'>Checklist</div>
      </button><Download className='absolute right-9 top-9'/></a></div>
          <div className='relative'><a href="src\assets\Special_Session_Proposal_Template.31f347006f168f90d745 (1).docx" download={'Special_Session_Proposal_Template.docx'} target="_blank">
      <button className='   bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 '>
        <div className='m-auto p-[2rem] text-white px-[4rem]'>Special Session Proposal Template</div>
      </button><Download className='absolute right-9 top-9'/></a></div>
          </div>
          <div className='flex gap-2 mb-5 flex-wrap'>
          <div className='relative'><a href="https://icicc-conf.com/static/media/Market_Material.6378d6a85c825d4bf227.pdf" target="_blank">
      <button className=' w-[23rem]  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 '>
        <div className='m-auto p-[2rem] text-white px-[4rem]'>ICICC Brochure</div>
      </button><Download className='absolute right-[6rem] top-9'/></a></div>
          <div className='relative w-[20rem]'><a href="src\assets\Workshop_Proposal_Template.d18afe1b387bf6e93015.docx" target="_blank" download={'Workshop_Proposal_Template.docx'}>
      <button className='w-[23rem] bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 '>
        <div className='  m-auto p-[2rem] text-white'>Workshop Proposal Template</div>
      </button><Download className=' absolute right-2 top-9'/></a></div>
          </div>
          <div className='flex gap-2 mb-5 flex-wrap'>
          <div className='relative'><a href="src\assets\INTERNATIONAL WORKSHOP -2024.54c7fb366801469b55a8 (1).docx" target="_blank" download={'INTERNATIONAL WORKSHOP-2024.docx'}>
      <button className=' w-[23rem]  bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 '>
        <div className='m-auto p-[2rem]  text-white'>International Workshop-2024</div>
      </button><Download className='absolute right-11 top-9'/></a></div>
          <div className='relative'><a href="src\assets\License to Publish Agreement form 2024.77a3e6fd19ec29d60036 (1).docx" target="_blank" download={'License to Publish Agreement form 2024.docx'}>
      <button className='w-[23rem]   bg-blue-600 rounded-lg hover:bg-gradient-to-t from-blue-900 to-cyan-500 '>
        <div className='m-auto p-[2rem]  text-white'>License to Publish  Agreement Form 2024</div>
      </button><Download className='absolute right-[1rem] top-9'/></a></div>
          </div>
          
        </div>
        <ImpDates/>
      </div>
 
    </div>
    )
}

export default Downloads