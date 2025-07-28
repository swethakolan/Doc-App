'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const name = params.get("name");
  const date = params.get("date");
  const time = params.get("time");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
        <div className="text-green-600 text-4xl mb-2">🎉</div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">Appointment Booked!</h2>
        <p className="text-sm text-gray-600 mb-4">
          Your appointment with <span className="font-medium">{name}</span> is confirmed.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm text-gray-700">
          <div><span className="font-medium">Date:</span> {date}</div>
          <div><span className="font-medium">Time:</span> {time}</div>
        </div>

        <a
          href="/home"
          className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
