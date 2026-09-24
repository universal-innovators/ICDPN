import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";



// Add 2026 speakers here
const speakers2026 = [
 {
      name: "Pratham Pravin Patkar",
      title: "Director of Business Systems\nSociety for Science & the Public",
      image: "./pratham.jpg",
    }
];

export default function KeynoteSpeakers() {
  const [activeTab, setActiveTab] = useState("2026");

  const speakers =
    activeTab === "2025" ? null : speakers2026;

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Keynote Speakers
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-8">
        

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