'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { FaUserEdit, FaCalendarAlt, FaUserInjured, FaSignOutAlt } from "react-icons/fa";

export default function DashBoard() {
  const router = useRouter();

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/Doctor-login');
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Doctor Dashboard
        </h1>

        {/* Button Card */}
        <button
          onClick={() => router.push('/doctor-profile')}
          className="flex items-center justify-between bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 shadow-md transition"
        >
          <span className="flex items-center gap-2">
            <FaUserEdit className="text-lg" />
            Edit Profile
          </span>
        </button>

        <button
          onClick={() => router.push('/doctor-appointments')}
          className="flex items-center justify-between bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 shadow-md transition"
        >
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-lg" />
            Appointments
          </span>
        </button>

        <button
          onClick={() => router.push('/doctor-patients')}
          className="flex items-center justify-between bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 shadow-md transition"
        >
          <span className="flex items-center gap-2">
            <FaUserInjured className="text-lg" />
            Patients
          </span>
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center justify-between bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 shadow-md transition"
        >
          <span className="flex items-center gap-2">
            <FaSignOutAlt className="text-lg" />
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
