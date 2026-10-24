"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SpecialSessions = () => {
  const [sessionDetails, setSessionDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch(
          "https://ui-admin.vercel.app/api/v1/sessions?conference_id=c5"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch special sessions.");
        }

        const data = await response.json();
        setSessionDetails(data.items || []);
      } catch (err) {
        setError(err.message || "Something went wrong while loading sessions.");
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div>
      <div className="w-[90%] mt-6 mx-auto text-center text-blue-950 font-bold text-3xl bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        Special Sessions
      </div>

      <div className="w-10/12 h-[1px] ml-10 mt-4 bg-gray-400"></div>
      <br />

      {loading && (
        <p className="text-center mb-10">Loading special sessions...</p>
      )}

      {!loading && error && (
        <p className="text-center text-red-600 mb-10">{error}</p>
      )}

      {!loading && !error && sessionDetails.length === 0 && (
        <p className="text-center mb-10">No special sessions available.</p>
      )}

      {!loading && !error && sessionDetails.length > 0 && (
        <div className="grid gap-y-11 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mb-10 px-6">
          {sessionDetails.map((session) => (
            <Card
              key={`${session.conference_id}-${session.session_id}`}
              className="hover:scale-105 bg-blue-900 shadow-xl shadow-violet-950 text-white duration-300 w-full max-w-[300px] rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl"
            >
              <CardHeader>
                <CardTitle className="text-sm">
                  {session.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p>
                  Organisers
                  <br />

                  {(session.organisers || []).map((organiser, i) => (
                    <span
                      key={`${session.session_id}-organiser-${i}`}
                    >
                      {organiser.name}
                      {organiser.designation
                        ? `, ${organiser.designation}`
                        : ""}
                      {i < session.organisers.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </CardContent>

              <CardFooter>
                <p>
                  Listing
                  <br />

                  {session.pdf_url ? (
                    <a
                      href={session.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-300"
                    >
                      {session.session_id}
                    </a>
                  ) : (
                    session.session_id
                  )}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecialSessions;