import ImpDates from '@/components/ImpDates'


const ICICC2023 = () => {
  return (
    <div>
    <h1 className='ml-[10rem] underline font-bold text-blue-950 text-4xl'>ICICC 2023</h1>
    <div className='w-10/12 h-[1px]  mt-4 bg-gray-300'></div>
    <div className='flex justify-around ml-10 gap-x-[10rem]'>
    <div className=' mt-10 flex-col mb-10'>
    <h1 className=' text-blue-950 text-3xl'>LINK OF PROCEEDINGS OF ICICC 2023</h1><br/>
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

export default ICICC2023