import ImpDates from '@/components/ImpDates';


const ICICC2024= () => {
  return (
    <div className='container'>
      <hr />
    <h1 className='sponsor-heading'>ICICC 2024</h1>
    <hr />
    <div className='sm:flex justify-around ml-10 gap-x-[10rem]'>

    <div className=' mt-10 flex-col mb-10'>
    <h1 className=' text-blue-950 text-3xl'>VIDEOS OF ICICC 2024</h1><br/><br/>
    <h1 className=' text-blue-950 text-2xl'>Inaugural Ceremony of ICICC 2024:</h1>
    
        <iframe src='https://www.youtube.com/embed/JcfW9UUq_hs'/>
        <h1 className='mt-10 text-blue-950 text-2xl'>ICICC 2024 Keynotes (Day 1):</h1><br/>

        <iframe className='mt-3' src='https://www.youtube.com/embed/3Xvj5eOH_xI'/>
        <h1 className='mt-10 text-blue-950 text-2xl'>ICICC 2024 Keynotes (Day 2):</h1><br/>

        <iframe className='mt-3' src='https://www.youtube.com/embed/uOyFLThnwfo'/>
    </div>
    <div className='mt-10'>
    <ImpDates/>
    </div>
    </div>
    </div>
  )
}

export default ICICC2024;
