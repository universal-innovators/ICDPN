import ImpDates from '@/components/ImpDates'


const ICICC2023 = () => {
  return (
    <div className='container'>
    <hr />
    <h1 className='sponsor-heading'>ICICC 2023</h1>
    <hr />
    <div className='sm:flex justify-around ml-10 '>
    <div className=' mt-10 flex-col mb-10'>
    <h1 className=' text-blue-950 text-3xl'>LINK OF PROCEEDINGS OF ICICC 2023</h1><br/>
    <div className=' overflow-scroll sm:overflow-hidden'>
    <table className='mb-6 mt-7'>
    <tbody>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 1:</b></td>
            <td><a className='text-blue-500' href='https://link.springer.com/book/10.1007/978-981-99-3315-0'>https://link.springer.com/book/10.1007/978-981-99-3315-0</a></td>
        </tr>
        <tr  className='hover:bg-gray-300'>
            <td><b>Volume 2:</b></td>
            <td><a className='text-blue-500' href='https://link.springer.com/book/9789819940721'>https://link.springer.com/book/9789819940721</a></td>
        </tr>
        <tr>
            <td><b>Volume 3:</b></td>
            <td><a className='text-blue-500' href='	https://link.springer.com/book/9789819930098'>	https://link.springer.com/book/9789819930098</a></td>
        </tr></tbody>
        
    </table></div>
    </div>
        <div className='mt-10'>
            <ImpDates/>
        </div>
    </div>


    </div>
  )
}

export default ICICC2023