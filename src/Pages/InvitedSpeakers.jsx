import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const speakers2025 = [
  {
    name: "Rohan Salvi",
    image: "./rohan.jpg",
    title: "Conversational AI Architect, Parallon, US",
  },
  {
    name: "Reena Chandra",
    image: "./reena.jpg",
    title: "Senior Software Engineer, Amazon, US",
  },
  {
    name: "Karthik Sirigiri",
    image: "./karthik.jpg",
    title: "Application Developer, Redmane Technology, US",
  },
  {
    name: "Vishal Bharadwaj Meruga",
    image: "./vishal.jpg",
    title: "Data Scientist, Marriott International, US",
  },
  {
    name: "Aditya Gupta",
    image: "./aditya.jpg",
    title:
      "Software Development Engineer II, AWS | Ex-ZS, Senior Fellow AI2030, Seattle, Washington, US",
  },
  {
    name: "Sukumar Reddy Beereddy",
    image: "./sukumar.jpg",
    title: "Treasury & ERP Systems Solution Architect | USA",
  },
  {
    name: "Karan Lulla",
    image: "./karan.jpg",
    title: "Lead Board Test Engineer, Santa Clara, CA, USA",
  },
  {
    name: "Mukesh Reddy Dhanagari",
    image: "./mukesh.jpg",
    title:
      "Manager, Software Development & Engineering, Charles Schwab, USA",
  },
  {
    name: "Santosh Durgam",
    image: "./santoshh.jpg",
    title:
      "Manager of Software Engineering, Morningstar Investments LLC, Chicago, Illinois, USA",
  },
  {
    name: "Ramanan Hariharan",
    image: "./raman.png",
    title:
      "Principal Engineering Manager, Security and Resiliency, Microsoft, Mountain View, USA",
  },
  {
    name: "Dr Dinesh Kalla",
    image: "./dinesh.jpg",
    title: "Senior Technical Advisor, Microsoft",
  },
  {
    name: "Chandra Sekhar Kubam",
    image: "./chandra.jpg",
    title:
      "Independent Researcher, Integration Architect, Dallas, Texas, USA",
  },
  {
    name: "Prasad Sundaramoorthy",
    image: "./prasad.jpg",
    title: "Sr Distinguished Leader - Data & AI, Nordstrom, USA",
  },
  {
    name: "Raman Krishnaswami",
    image: "./raman.jpg",
    title: "Chief Information Officer, Eagleview Technologies, US",
  },
  {
    name: "Satyabrata Pradhan",
    image: "./satya.jpg",
    title: "General Motors, US",
  },
  {
    name: "Surendra B. Konathala",
    image: "./surendra.jpg",
    title: "Portfolio Manager, Capgemini, US",
  },
  {
    name: "Ranjith Kumar Kollu",
    image: "./ranjith.jpg",
    title: "Salesforce Architect, Epson America, US",
  },
  {
    name: "SINDHU GOPAKUMAR NAIR",
    image: "./sindhu.jpg",
    title: "Principal Engineer, Autodesk, USA",
  },
  {
    name: "Shalini Sivasamy",
    image: "./shalini.jpg",
    title: "Senior AI Engineer, Webster Bank, USA",
  },
  {
    name: "Omkar Bhalekar",
    image: "./omkar.jpg",
    title: "Sr Network Engineer at Tesla Motors, United States",
  },
  {
    name: "Anjani Kumar Polinati",
    image: "./anjani.jpg",
    title: "Technical Lead, Primoris Systems, Wesley Chapel, FL, USA",
  },
  {
    name: "Sibaram Prasad Panda",
    image: "./sibaram.jpg",
    title: "SVP, Decision Ready Solutions",
  },
  {
    name: "Hemanth Kumar Maheshwaram",
    image: "./hemanth.jpg",
    title: "IT Project Manager, Abbott Laboratories, Illinois, USA",
  },
  {
    name: "Mr. Venkata Ramana Gudelli",
    image: "./venkata.jpg",
    title: "Cloud Architect, USA",
  },
  {
    name: "Sanketh Nelavelli",
    image: "./sanket.jpg",
    title: "Independent Researcher, Cloud DevOps Architect, Texas, USA",
  },
  {
    name: "Bidisha Goswami",
    image: "./bidisha.jpg",
    title: "The Pokémon Company International",
  },
  {
    name: "Surender Kusumba",
    image: "./surender.jpg",
    title: "Sr Solutions Architect, Trinamix Inc",
  },
  {
    name: "Arnab Saha",
    image: "./arnab.jpg",
    title: "IEEE Member / Oracle",
  },
  {
    name: "Sarbani Paul",
    image: "./sarbani.jpg",
    title: "Amazon",
  },
  {
    name: "Pararameswara Reddy Nangi",
    image: "./reddy.jpg",
    title: "Senior Hadoop Engineer, Independent Researcher",
  },
  {
    name: "Arjun Kamisetty",
    image: "./arjun.jpg",
    title: "Independent Researcher, USA",
  },
  {
    name: "Divya Kodi",
    image: "./divya.jpg",
    title: "Cyber Security Senior Data Analyst, Truist Bank",
  },
  {
    name: "Professor (Dr.) Rahul Katarya",
    image: "./rahul.jpeg",
    title:
      "Department of Computer Science & Engineering, Delhi Technological University",
  },
  {
    name: "Janardhana Naidu Kola",
    image: "./naidu.jpg",
    title:
      "Director of Business Intelligence, ADP (Automatic Data Processing, Inc.)",
  },
  {
    name: "Narendra Mangala",
    image: "./narendra.png",
    title: "Data Engineer Manager, Kenvue, Dallas, Texas, United States",
  },
  {
    name: "Vasanta Kumar Tarra",
    image: "./vasanta.jpeg",
    title: "Lead Engineer, Guidewire Software",
  },
];

// Add 2026 speakers here
const speakers2026 = [
  {
    name: "Mayur Patel",
    image: "./mayur.jpeg",
    title: "Director IT – Center of Excellence, Axalta Coating Systems, LLC",
  },
];

export default function InvitedSpeakers() {
  const [activeTab, setActiveTab] = useState("2025");

  const speakers =
    activeTab === "2025" ? speakers2025 : speakers2026;

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Invited Speakers
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setActiveTab("2025")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === "2025"
              ? "bg-black text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          2025
        </button>

        <button
          onClick={() => setActiveTab("2026")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === "2026"
              ? "bg-black text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          2026
        </button>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {speakers.map((speaker, index) => (
          <Card
            key={index}
            className="overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl group"
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  {speaker.name}
                </h2>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {speaker.title}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}