import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const speakersData = {
  2025: [
    {
      name: "Pavel Šimek",
      title:
        "Czech - Department of Information Technologies, Faculty of Economics and Management , University of Life Sciences Prague",
      img: "./pavel.jpg",
    },
    {
      name: "Zuzana Palková",
      title:
        "Slovak University of Agriculture in Nitra, Faculty of Engineering, Institute of Electrical Engineering, Automation, Informatics and Physics",
      img: "./zuza.jpg",
    },
    {
      name: "Mahmoud Hawamdeh",
      title: "Al-Quds Open University, Palestine",
      img: "./hawa.jpg",
    },
    {
      name: "Mr. Aninda Bose",
      title:
        "Executive Editor – Interdisciplinary Applied Sciences, Computational Intelligence, Energy, Springer Nature London",
      img: "./aninda.jpeg",
    },
    {
      name: "Dr. Thipendra P Singh",
      title:
        "Professor of Artifical Intelligence, Pro Vice Chancellor, Chandigarh University, UP, India",
      img: "./thip.jpg",
    },
  ],

  2024: [
    
    {
      name: "Prof. Bal Virdee",
      title:
        "Director of the Centre for Communications Technology, London Metropolitan University, London, UK",
      img: "./balVirdee.jpeg",
    },
    {
      name: "Prof. WSG Dr. Eng. Zdzislaw Polkowski",
      title: "WSG University, Bydgoszcz, Poland",
      img: "./zdzislaw.jpeg",
    },
    {
      name: "Mr. Aninda Bose",
      title:
        "Executive Editor – Interdisciplinary Applied Sciences, Computational Intelligence, Energy, Springer Nature London",
      img: "./aninda.jpeg",
    },
    {
      name: "Prof. Ph.D. engineer Stanisław Duer",
      title: "PhD. Electronics Engineering",
      img: "./stanislaw.jpg",
    },
    {
      name: "Dr. Biswajit Brahma",
      title:
        "Data Expert, McKesson Corporation, USA. 40+ Publications in SCI/Scopus journals. 10+ patents and copyrights",
      img: "./biswajit.jpg",
    },
  ],
};

const PrevSpeakers = () => {
  const [year, setYear] = useState("2025");

  const years = Object.keys(speakersData); // ["2025", "2024"]

  return (
    <div className="w-full px-4 mt-10">

      {/* ------------ YEAR TABS ------------ */}
      <div className="flex gap-3 justify-center mb-6 flex-wrap">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`px-6 py-2 rounded-md text-lg font-medium transition 
            ${year === y ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* ------------ SPEAKER CARDS ------------ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {speakersData[year].map((person, index) => (
          <Card key={index} className="w-[300px] shadow-md hover:shadow-lg transition">
            <CardContent>
              <div className="text-center flex flex-col items-center py-4">
                <img
                  src={person.img}
                  className="h-48 w-full object-contain rounded-md mb-4"
                  alt={person.name}
                />
                <strong className="text-lg">{person.name}</strong>
                <p className="mt-2 text-sm text-gray-700 px-2">{person.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrevSpeakers;
