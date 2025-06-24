// TravelSupport.jsx
import React from "react";

const TravelSupport = () => {
  return (
    <div className="max-w-[80vw] mx-auto my-8 p-6 md:p-8 bg-green-700 text-white rounded-xl shadow-lg font-sans">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Travel & Participation Support</h2>

      <p className="mb-4 text-justify">
        We are pleased to inform you that we are offering comprehensive support
        for your travel and participation in the conference, scheduled to be
        held in <strong>České Budějovice, Near Prague, Czech Republic, Europe</strong> on <strong>7th - 8th November, 2025</strong>.
      </p>

      <p className="mb-4 text-justify">
        As part of our commitment to a seamless experience for our delegates,
        we are providing a complete travel package that includes:
      </p>

      <ul className="list-disc list-inside mb-4 pl-2">
        <li>Visa assistance</li>
        <li>Flight arrangements</li>
        <li>Comfortable accommodation</li>
        <li>Local tourism opportunities</li>
      </ul>

      <p className="mb-4 text-justify">
        This all-in-one package is designed to ensure both your professional
        engagement and personal exploration of Czech Republic — all under one roof.
      </p>

      <p className="mb-4 text-justify">
        If you're interested, we'll be happy to share the details and help you
        further with documentation and travel planning.
      </p>

      <p className="text-justify mb-6">
        Kindly fill out the Google form for further information:{" "}
        <a
          href="https://forms.gle/xjRxPUrg3SkUApU1A"
          className="underline break-words text-white font-medium hover:text-green-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://forms.gle/xjRxPUrg3SkUApU1A
        </a>
      </p>

      <div className="text-center font-semibold">
        Looking forward to welcoming you to Europe for <strong>ICDPN - 2025!</strong>
      </div>
    </div>
  );
};

export default TravelSupport;
