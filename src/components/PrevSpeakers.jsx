"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const API_URL = "https://ui-admin.vercel.app/api/v1/speakers";

const years = [2026, 2025, 2024];

const PrevSpeakers = () => {
  const [year, setYear] = useState(2026);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          conference_id: "c5",
          year: String(year),
          type: "homepage",
          speaker_type: "keynote",
        });

        const response = await fetch(`${API_URL}?${params}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch speakers.");
        }

        const data = await response.json();
        setSpeakers(data.items || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
          setSpeakers([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchSpeakers();

    return () => controller.abort();
  }, [year]);

  return (
    <div className="w-full px-4 mt-10">
      {/* Year Tabs */}
      <div className="flex gap-3 justify-center mb-6 flex-wrap">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`px-6 py-2 rounded-md text-lg font-medium transition ${
              year === y
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center py-10 text-gray-600">
          Loading speakers...
        </p>
      )}

      {/* Error */}
      {!loading && error && (
        <p className="text-center py-10 text-red-600">{error}</p>
      )}

      {/* Empty State */}
      {!loading && !error && speakers.length === 0 && (
        <p className="text-center py-10 text-gray-600">
          No speakers found for {year}.
        </p>
      )}

      {/* Speaker Cards */}
      {!loading && !error && speakers.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {speakers.map((person) => (
            <Card
              key={person.id}
              className="w-[300px] shadow-md hover:shadow-lg transition"
            >
              <CardContent>
                <div className="text-center flex flex-col items-center py-4">
                  <img
                    src={person.image_url || person.image || "/placeholder.png"}
                    className="h-48 w-full object-contain rounded-md mb-4"
                    alt={person.name}
                  />

                  <strong className="text-lg">{person.name}</strong>

                  <p className="mt-2 text-sm text-gray-700 px-2">
                    {person.designation || person.title || ""}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrevSpeakers;