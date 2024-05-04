import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'


const SpecialSessions = () => {
  return (
    <div>
      <h1 className=' underline font-bold text-blue-950 text-4xl ml-10'> Special Sessions</h1><br/>
    <div className='w-10/12 h-[1px] ml-10 mt-4 bg-gray-400'></div><br/>
    <div className='grid gap-y-11 grid-cols-4'>
    <Card className='hover:scale-110 h-[300px] bg-violet-950 shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 1:Media and Games in Education and Learning</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Faizan Ahmad, Cardiff Metropolitan University, Cardiff UK.
Momina Shaheen, University of Roehampton London, UK</p>
  </CardContent>
  <CardFooter>
    <p>Listing<br/>
SS 001.pdf</p>
  </CardFooter>
</Card>
<Card className='min-h-[300px] text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm' >Session - 2:Advancements in Secure Communication Technologies: Unveiling the latest in wireless communication, IoT, and 5G networks with a dedicated security focus)</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Parita Jain, KIET Group of Institutions, AKTU, India
Dr. Puneet Kumar Aggarwal, ABES Engineering College, AKTU, India
Dr. Sushil Kumar Singh, Marwadi University, Rajkot, Gujrat, India
Mr. Mandeep Singh, Raj Kumar Goel Institute of Technology, AKTU, India</p>
  </CardContent>
  <CardFooter>
    <p>Listing<br/>
SS 002.pdf</p>
  </CardFooter>
</Card>
<Card className=' shadow-violet-950  shadow-xl hover:scale-110 transition duration-1000 text-sm bg-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 3:Recent Advances in Computational Intelligence & Technologies</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Vikash Yadav, Government Polytechnic Bighapur Unnao, Department of Technical Education, Uttar Pradesh, India
Mr. Anup Lal Yadav, Chandigarh University, Mohali, Punjab, India
Mr. Navjot Singh Talwandi, Chandigarh University, Mohali, Punjab, India</p>
  </CardContent>
  <CardFooter>
    <p>Listing<br/>
SS 003.pdf</p>
  </CardFooter>
</Card>
<Card className='text-sm  bg-violet-950 shadow-xl shadow-violet-950 hover:scale-110 duration-1000 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 4:Recent Advances in Software and System Engineering</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Faizan Ahmad, Cardiff Metropolitan University, Cardiff, UK
Zeeshan Ahmed, Institute of Software, University of Chinese Academy of Sciences, Beijing, China</p>
  </CardContent>
  <CardFooter>
    <p>Listing<br/>
SS 004.pdf</p>
  </CardFooter>
</Card>
<Card className=' text-sm   bg-violet-950 shadow-xl shadow-violet-950 hover:scale-110 duration-1000 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 5:Recent Advancements in Generative AI: An Areas of Active Research</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Narinder Kaur, Chandigarh University, Gharuan, Mohali, India
Dr. Bobbinpreet Kaur, Chandigarh University, Gharuan, Mohali, India
Dr. Puneet Kumar, Chandigarh University, Gharuan, Mohali, India
Dr. Ganesh Gupta, Sharda University, Greater Noida, India
Dr. Gaganjot Kaur,Raj Kumar Goel Institute of Technology, Ghaziabad,</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 005.pdf</p></p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 6:Advancements in Secure Communication Technologies: Unveiling the latest in wireless communication, IoT, and 5G networks with a dedicated security focus</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Parita Jain, KIET Group of Institutions, AKTU, India
Dr. Puneet Kumar Aggarwal, ABES Engineering College, AKTU, India
Dr. Sushil Kumar Singh, Marwadi University, Rajkot, Gujrat, India
Mr. Mandeep Singh, Raj Kumar Goel Institute of Technology, AKTU, India,</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 006.pdf</p></p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm ' >Session - 7:Advancements in Communication and Networks using Data Analytics with Machine learning and Deep Learning</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Preeti Nagrath, Associate Professor, Bharati Vidyapeeth’s college of Engineering, Delhi, India
Dr. Rachna Jain, Associate Professor, Bhagwan Parshuram Institute of Technology, Delhi, India</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 007.pdf</p></p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 8:Computational intelligence in disease diagnosis, prediction and prevention</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. PRASANALAKSHMI B, College of Computer Science, King Khalid University, Abha, Saudi Arabia</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 008.pdf</p></p>
  </CardFooter>
</Card>
<Card className=' row-span-2 text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 9:Computational Intelligence and Communication System</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Tanweer Ali, Associate Professor, Department of Electronics and Communication Engineering, Manipal Institute of Technology, Manipal Academy of Higher Education,Manipal
Dr. Praveen Kumar, Assistant Professor, Department of Electronics and Communication Engineering, Manipal Institute of Technology, Manipal Academy of Higher Education,Manipal
Dr. Subramanya G Nayak, Professor, Department of Electronics and Communication Engineering, Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal 576104, India
Dr. Pramod Kumar, Professor, Department of Electronics and Communication Engineering, Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal 576104, India
Dr. Sameena Pathan, Assistant Professor, Department of Information and Communication Technology, Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal 576104, India</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 009.pdf</p></p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 10:INTELLIGENT MACHINES AND COMPUTATIONAL SYSTEM ENGINEERING</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Harish Kumar Taluja, HRIT Group of Institutions, Ghaziabad-201003,India
Dr. Sonam Gupta, Ajay Kumar Garg Engineering College, Ghaziabad-201009, India
Dr.Anuradha Taluja, Ajay Kumar Garg Engineering College, Ghaziabad-201009, India</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 010.pdf</p></p>
  </CardFooter>
</Card>
<Card className=' text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className=' text-sm'>Session - 11:Internet of Things (IOT) with Edge Computing on Healthcare, Agriculture, Education,Intelligent Transportation and Energy Management</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr Biswa Mohan Sahoo, School of Engineering and Technology, Vivekananda Institute of Professional Studies-TC, Delhi
Ms. Prerna Ajmani, School of Information Technology, Vivekananda Institute of Professional Studies-TC, Delhi</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 011.pdf</p></p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 12:Privacy, Security, and Integration Challenges in Smart Data Processing</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Righa Tandon, Assistant Professor, Chitkara University, Rajpura, Punjab,India
Dr. P.K Gupta, Professor, Jaypee University of Information Technology, Solan, H.P,India
Dr. Md. Khubeb Siddiqui, Lead Data Scientist, IBM, Australia</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 012.pdf</p></p>
  </CardFooter>
</Card>
<Card className=' text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className=' text-sm'>Session - 13:Transforming the World to be Green for Humans with IoT and its Opportunities</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. A. Suresh, Associate Professor, Department of Networking and Communications,School of Computing, SRM Institute of Science and Technology, Chennai, Tamil Nadu, India
Dr. V. Anbarasu, Associate Professor, Department of Networking and Communications, School of Computing, SRM Institute of Science and Technology, Chennai, Tamil Nadu, India</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 013.pdf</p></p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 14:Computational Frontiers: Advancements in Computer Science and Technology using IoT & ML</CardTitle>
  
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Jay Kumar Pandey, Department of Electrical & Electronics Engineering , Shri Ramswaroop Memorial University , Dewa Road, Barabanki, U.P, India
Dr. Mritunjay Rai, Department of Electrical & Electronics Engineering ,Shri Ramswaroop Memorial University , Dewa Road, Barabanki, U.P, India
Mr. Ankur Gupta, Department of Computer Science and Engineering at Vaish College of Engineering, Rohtak</p>
  </CardContent>
  <CardFooter>
    <p><p>Listing<br/>
SS 014.pdf</p></p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 15:Cryptographic Techniques for Secure Machine Learning Inference</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Manish Verma, Galgotias University, Gr. Noida, UP, India
Dr. Ashutosh Dhar Dwivedi, Aalborg University, Copenhagen, Denmark
Mr. Keshav Kaushik, University of Petroleum and Energy Studies, Dehradun,</p>
  </CardContent>
  <CardFooter>
  <p>Listing<br/>
SS 015.pdf</p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 16:AI in Healthcare</CardTitle>
   
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr.Balaji Ganesh Rajagopal, Assistant Professor, Department of Computer Science and Engineering, SRM Institute of Science and Technology, Tiruchirappalli, Tamil Nadu
Dr.R.Deebalakshmi, Assistant Professor, Department of Computer Science and Engineering, SRM Institute of Science and Technology, Tiruchirappalli, TamilNadu</p>
  </CardContent>
  <CardFooter>
    <p>Listing<br/>
SS 016.pdf</p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 17:Recent Advances in AI and Machine Learning: Innovations, Environmental Sustainability, and Healthcare</CardTitle> 
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr. Sangeeta Kumari, Bennett University (The Times Group), Greater Noida, U.P., India
Dr. Sumit Kumar, Royal Holloway, University of London, UK</p>
  </CardContent>
  <CardFooter>
    <p>Listing<br/>
SS 017.pdf</p>
  </CardFooter>
</Card>
<Card className='text-sm hover:scale-110 duration-1000  bg-violet-950 shadow-xl shadow-violet-950 text-white w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl'>
  <CardHeader>
    <CardTitle className='text-sm'>Session - 18:AI for sustainability: Exploring the Intersection of Sustainability and AI</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Organisers<br/>
Dr Shweta Bansal, K.R. Mangalam University, Sohna Road, Gurugram, Haryana, India
Dr Nupur Jangu, K.R. Mangalam University, Sohna Road, Gurugram, Haryana, India
Dr. Surabhi Shankar, K.R. Mangalam University, Sohna Road, Gurugram, Haryana, India</p>
  </CardContent>
  <CardFooter>
    <p>Listing<br/>
SS 018.pdf</p>
  </CardFooter>
</Card>
</div>
    </div>
  )
}

export default SpecialSessions