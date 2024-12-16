import ImpDates from '@/components/ImpDates';
import w1 from "./Workshops/W-1.pdf"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const Workshops = () => {
  const workshopDetails = [
    {
      title: "AI and Machine Learning: Transforming Data Analytics for Global Impact and Intelligent Systems",
      organisers: [
        "Dr. Sangeeta Kumari, Bennett University (Times Group), Greater Noida, U.P., India",
        "Prof. Pierluigi Siano, University of Salerno, Fisciano, Italy",
        "Prof. Zdzislaw Polkowski, Jan Wyzykowski University, Polkowice, Poland",
      ],
      file: w1,
      fileName: "W-1.pdf",
    }  
    
  ];
  return (
    <div className='container mb-8'>
    <h1 className=' font-bold text-blue-950 text-4xl ml-10 text-center'>Workshops</h1><br/>
    <hr />
    <br />
    <div className="grid gap-y-11 sm:grid-cols-4 ml-6 mb-10">
            {workshopDetails.map((session, index) => (
              <Card key={index} className="hover:scale-110 bg-blue-900 shadow-xl shadow-violet-950 text-white duration-1000 w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl">
                <CardHeader>
                  <CardTitle className="text-sm">{session.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Organisers
                    <br />
                    {session.organisers.map((organiser, i) => (
                      <span key={i}>
                        {organiser}
                        {i < session.organisers.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </CardContent>
                <CardFooter>
                  <p>
                    Listing
                    <br />
                    <a href={session.file} target="_blank">
                      {session.fileName}
                    </a>
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
    <br />

    <ImpDates/></div>
  )
}

export default Workshops