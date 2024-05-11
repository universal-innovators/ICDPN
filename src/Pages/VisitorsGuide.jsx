import Slider from '@/components/Slider'
import React from 'react'
import {
    Card,
    CardContent,
  } from '@/components/ui/card'




const VisitorsGuide = () => {
  return (
    <div>
        <Slider/>
        <div className='w-[90%] mt-6 mx-auto text-center text-blue-950 underline font-bold text-3xl bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl'>Visitors Guide</div>
        <div className='w-[90%] mt-6 mx-auto text-center underline  p-1 text-xl text-green-900 '>Places to visit in Prague</div>
        
        <div className='grid sm:grid-cols-4 ml-11 mb-10  gap-y-10 mt-10 '>
        <Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>

  <CardContent>
    <p><p className='text-center font-bold underline text-yellow-200'>Charles Bridge</p><br/>
Charles Bridge is a historic bridge over the Vltava River, connecting the Old Town with the Lesser Town (Malá Strana). It's adorned with statues and offers beautiful views of Prague Castle.<br/>
<img src='https://www.sdcn-conf.com/static/media/1.4cf429d4831d584a7fa9.jpeg' className=' object-fill rounded-xl'/></p>
  </CardContent>
  
</Card>
<Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  
  <CardContent>
  <p><p className='text-center font-bold underline text-yellow-200'>Old Town Square</p><br/>
  Old Town Square is the main square in Prague's historic Old Town. It's surrounded by stunning architecture including the Astronomical Clock, Týn Church, and colorful historic buildings.<br/>
<img src='https://www.sdcn-conf.com/static/media/ots.3780643e54030dd5ae37.jpg' className=' object-fill rounded-xl'/></p>
  </CardContent>
  
</Card>
<Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  
  <CardContent>
  <p><p className='text-center font-bold underline text-yellow-200'>Prague Castle</p><br/>
  Prague Castle is a vast castle complex that has been the seat of Czech rulers for over a thousand years. It includes St. Vitus Cathedral, Royal Palace, St. George's Basilica, and beautiful gardens.<br/>
<img src='https://www.sdcn-conf.com/static/media/pc.527a4705f3c9e36e5321.jpg' className=' object-fill rounded-xl'/></p>
  </CardContent>
  
</Card>
<Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  
  <CardContent>
  <p><p className='text-center font-bold underline text-yellow-200'>St. Vitus Cathedral</p><br/>
  St. Vitus Cathedral is the largest and most important cathedral in Prague. Its Gothic architecture, stained glass windows, and stunning interior make it a must-visit landmark within Prague Castle.<br/>
<img src='https://www.sdcn-conf.com/static/media/st.b4cef05c234d2c026d4a.jpg' className=' object-fill rounded-xl'/></p>
  </CardContent>
  
</Card>
<Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardContent>
  <p><p className='text-center font-bold underline text-yellow-200'>Powder Tower</p><br/>
  The Powder Tower is a Gothic tower and one of the original gates to Prague's Old Town. It once served as a gunpowder store and is now a historical landmark offering panoramic views from the top.<br/>
<img src='https://www.sdcn-conf.com/static/media/pt.e2908b647d610f03d692.jpg' className=' object-fill rounded-xl'/></p>
  </CardContent>
</Card>
</div>
{/* <div className='w-[90%] mt-10 mx-auto text-center underline  p-1 text-xl text-green-900 '>Places to visit in Delhi</div> */}
        
        {/* <div className='grid sm:grid-cols-4 mt-10 gap-y-10 ml-10 mb-10 '>
        <Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>

  <CardContent>
    <p><p className='text-center font-bold underline text-yellow-200'>Charles Bridge</p><br/>
Charles Bridge is a historic bridge over the Vltava River, connecting the Old Town with the Lesser Town (Malá Strana). It's adorned with statues and offers beautiful views of Prague Castle.<br/>
<img src='https://www.sdcn-conf.com/static/media/1.4cf429d4831d584a7fa9.jpeg' className=' object-fill rounded-xl'/></p>
  </CardContent>
  
</Card>
<Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  
  <CardContent>
  <p><p className='text-center font-bold underline text-yellow-200'>Charles Bridge</p><br/>
Charles Bridge is a historic bridge over the Vltava River, connecting the Old Town with the Lesser Town (Malá Strana). It's adorned with statues and offers beautiful views of Prague Castle.<br/>
<img src='https://www.sdcn-conf.com/static/media/1.4cf429d4831d584a7fa9.jpeg' className=' object-fill rounded-xl'/></p>
  </CardContent>
  
</Card>
<Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  
  <CardContent>
  <p><p className='text-center font-bold underline text-yellow-200'>Charles Bridge</p><br/>
Charles Bridge is a historic bridge over the Vltava River, connecting the Old Town with the Lesser Town (Malá Strana). It's adorned with statues and offers beautiful views of Prague Castle.<br/>
<img src='https://www.sdcn-conf.com/static/media/1.4cf429d4831d584a7fa9.jpeg' className=' object-fill rounded-xl'/></p>
  </CardContent>
  
</Card>
<Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  
  <CardContent>
  <p><p className='text-center font-bold underline text-yellow-200'>Charles Bridge</p><br/>
Charles Bridge is a historic bridge over the Vltava River, connecting the Old Town with the Lesser Town (Malá Strana). It's adorned with statues and offers beautiful views of Prague Castle.<br/>
<img src='https://www.sdcn-conf.com/static/media/1.4cf429d4831d584a7fa9.jpeg' className=' object-fill rounded-xl'/></p>
  </CardContent>
  
</Card>
<Card className='hover:scale-110  bg-black shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardContent>
  <p><p className='text-center font-bold underline text-yellow-200'>Charles Bridge</p><br/>
Charles Bridge is a historic bridge over the Vltava River, connecting the Old Town with the Lesser Town (Malá Strana). It's adorned with statues and offers beautiful views of Prague Castle.<br/>
<img src='https://www.sdcn-conf.com/static/media/1.4cf429d4831d584a7fa9.jpeg' className=' object-fill rounded-xl'/></p>
  </CardContent>
</Card>



        </div> */}
    
</div>
  )
}

export default VisitorsGuide