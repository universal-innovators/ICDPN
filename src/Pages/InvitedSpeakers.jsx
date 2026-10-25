"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const API_URL = "https://ui-admin.vercel.app/api/v1/speakers";
const years = [2026, 2025];

export default function InvitedSpeakers() {
  const [activeTab, setActiveTab] = useState(2025);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchSpeakers() {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          conference_id: "c5",
          year: String(activeTab),
          type: "industry",
          speaker_type: "invited",
        });

        const response = await fetch(`${API_URL}?${params}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch invited speakers.");
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
    }

    fetchSpeakers();

    return () => controller.abort();
  }, [activeTab]);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Invited Speakers
      </h1>

      {/* Year Tabs */}
      <div className="flex justify-center gap-4 mt-8">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveTab(year)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === year
                ? "bg-black text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center mt-12 text-gray-600">
          Loading invited speakers...
        </p>
      )}

      {/* Error */}
      {!loading && error && (
        <p className="text-center mt-12 text-red-600">{error}</p>
      )}

      {/* Empty State */}
      {!loading && !error && speakers.length === 0 && (
        <p className="text-center mt-12 text-gray-600">
          No invited speakers found for {activeTab}.
        </p>
      )}

      {/* Speakers Grid */}
      {!loading && !error && speakers.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {speakers.map((speaker) => (
            <Card
              key={speaker.id}
              className="overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl group"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={
                      speaker.image_url ||
                      speaker.image ||
                      "/placeholder.png"
                    }
                    alt={speaker.name}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 text-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {speaker.name}
                  </h2>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {speaker.designation || speaker.title || ""}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}