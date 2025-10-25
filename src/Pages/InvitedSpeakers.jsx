import { Card, CardContent } from "@/components/ui/card"; // shadcn card (if you’re using it)

const speakers = [
  {
    name: "Rohan Salvi",
    image: "./rohan.jpg",
    title:
      "Conversational AI Architect, Parallon, US",
  },
  {
    name: "Reena Chandra",
    image: "./reena.jpg",
    title: "Senior Software Engineer, Amazon, US",
  },
  {
    name: "Karthik Sirigiri,",
    image: "./karthik.jpg",
    title: "Application Developer, Redmane Technology, US",
  },
  {
    name: "Vishal Bharadwaj Meruga",
    image: "./vishal.jpg",
    title: "Data Scientist , Marriott International , US",
  },
  {
    name: "Aditya Gupta",
    image: "./aditya.jpg",
    title: "Software Development Engineer II, AWS | Ex-ZS, Senior Fellow AI2030 , Seattle, Washington, US",
  },
  {
    name: "Sukumar Reddy Beereddy",
    image: "./sukumar.jpg",
    title: "Treasury & ERP Systems Solution Architect |USA",
  },
  {
    name: "Karan Lulla",
    image: "./karan.jpg",
    title: "Lead Board Test Engineer, Santa Clara, CA, USA",
  },
  {
    name: "Mukesh Reddy Dhanagari",
    image: "./mukesh.jpg",
    title: "Manager, Software Development & Engineering, Charles Schwab, USA",
  },
  {
    name: "Santosh Durgam",
    image: "./santoshh.jpg",
    title: "Manager of software engineering, Morningstar Investments LLC, Chicago, Illinois, USA",
  },
  {
    name: "Ramanan Hariharan",
    image: "./raman.png",
    title: "Principal Engineering Manager, Security and Resiliency, Microsoft, Mountain View, USA",
  },
  {
    name: "Dr Dinesh Kalla",
    image: "./dinesh.jpg",
    title: "Senior Technical Advisor, Microsoft",
  },
  {
    name: "Chandra Sekhar Kubam",
    image: "./chandra.jpg",
    title: "Independent Researcher, Integration Architect, Dallas, Texas, USA",
  },
  {
    name: "Prasad Sundaramoorthy",
    image: "./prasad.jpg",
    title: "Sr Distinguished Leader - Data & AI, Nordstrom, USA",
  }
 
];

export default function InvitedSpeakers() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-gray-600 text-3xl tracking-wide text-center mt-5">
        Invited Speakers - 2025
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {speakers.map((speaker, index) => (
          <Card key={index} className="w-[300px] duration-500 hover:shadow-lg">
            <CardContent>
              <div className="text-center flex flex-col items-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-48 w-full object-cover rounded-md mb-3 mt-2"
                />
                <strong className="text-lg">{speaker.name}</strong>
                <p className="text-sm text-gray-600 mt-2">{speaker.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
