import ImpDates from '@/components/ImpDates'


const ICICC2022 = () => {
  return (
    <div>
    <h1 className='ml-[10rem] underline font-bold text-blue-950 text-4xl'>ICICC 2022</h1>
    <div className='w-10/12 h-[1px]  mt-4 bg-gray-300'></div>
    <div className='sm:flex justify-around ml-10 gap-x-[10rem]'>
    <div className=' mt-10 flex-col mb-10'>
    <p>Fifth version of International Conference in innovative Computing and Communication (ICICC-2022) was organized at Shaheed Sukhdev
     College of Business Studies in association with National Institute of Technology Patna, University of Valladolid Spain and Korea 
     Institute of Digital Convergence South Korea on 19-20 February 2022 at New Delhi, India. ICICC-2022 received 864 papers from 
     approximately 3600 authors and a total of 200 papers were accepted with an acceptance ratio of 23%. All accepted papers were 
     published in Springer’s Lecture Notes on Networks and Systems, an scopus indexed series. A total of 550 participants attended the 
     conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2022 received papers from 30 countries.
      Due to unexpected COVID-19, ICICC-2022 was organized in hybrid mode.</p>
    <h1 className=' text-blue-950 text-3xl mt-8'>LINK OF PROCEEDINGS OF ICICC 2022</h1><br/>
    <table className='mb-6 mt-7'>
    <tbody>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 1:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811625930'>https://www.springer.com/gp/book/9789811625930</a></td>
        </tr>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 2:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811625961'>https://www.springer.com/gp/book/9789811625961</a></td>
        </tr>
        <tr>
            <td><b>Volume 3:</b></td>
            <td><a className='text-blue-500' href='https://www.springer.com/gp/book/9789811630705'>https://www.springer.com/gp/book/9789811630705</a></td>
        </tr></tbody>
        
    </table>
    </div>
        <div className='mt-10'>
            <ImpDates/>
        </div>
    </div>


    </div>
  )
}

export default ICICC2022