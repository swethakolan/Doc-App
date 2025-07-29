'use client';
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";


interface Appointment {
  id: number;
  doctorName: string;
  specialty: string;
  photo: string;
  location: string;
  date: string;
  time: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("appointments");
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  return (
    <div className=" bg-gray-100">
      <Navbar/>
    <div className="min-h-screen bg-gray-100 px-4 py-6 flex flex-col items-center ">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Appointments</h1>
      {appointments.length === 0 ? (
        <p className="text-center text-gray-600">No appointments booked yet.</p>
      ) : (
        <div className="w-full max-w-md space-y-4">
          {appointments.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
            >
              <img
                src={app.photo}
                alt={app.doctorName}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col">
                <h2 className="text-base sm:text-lg font-semibold">{app.doctorName}</h2>
                <p className="text-sm text-gray-500">{app.specialty}</p>
                <p className="text-sm">{app.date} at {app.time}</p>
                <p className="text-xs text-gray-400">{app.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
