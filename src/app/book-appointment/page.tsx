"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { format, addDays } from "date-fns";

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
];

export default function BookAppointment() {
  const params = useSearchParams();
  const id = Number(params.get("id"));
  const router = useRouter();

  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const doctor = doctors.find((doc) => doc.id === id);

  const upcomingDates = Array.from({ length: 7 }, (_, i) =>
    addDays(new Date(), i)
  );

  // Fetch doctors from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("/api/doctors");
        const data = await res.json();
        setDoctors(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch doctors:", err);
      }
    };

    fetchDoctors();
  }, []);

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }
    if (!doctor) {
      alert("Doctor not found.");
      return;
    }
    router.push(
      `/success?name=${encodeURIComponent(doctor.name)}&date=${format(
        selectedDate,
        "PPP"
      )}&time=${selectedTime}`
    );
  };

  if (loading) return <div className="p-4 text-center">Loading doctor...</div>;
  if (!doctor) return <div className="p-4 text-center">Doctor not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 px-2 py-4 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-4 text-black">
        {/* Doctor Info */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">{doctor.name}</h2>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>
            <p className="text-xs text-gray-400">{doctor.location}</p>
          </div>
        </div>

        {/* Date Selection */}
        <h3 className="font-medium mb-2">Select a Date</h3>
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          {upcomingDates.map((date) => (
            <button
              key={date.toDateString()}
              onClick={() => setSelectedDate(date)}
              className={`min-w-[80px] rounded-lg px-3 py-2 text-sm border ${
                date.toDateString() === selectedDate.toDateString()
                  ? "bg-sky-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <div className="font-medium">{format(date, "EEE")}</div>
              <div className="text-xs">{format(date, "MMM d")}</div>
            </button>
          ))}
        </div>

        {/* Time Slot Selection */}
        <h3 className="font-medium mt-5 mb-2">Select a Time</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`border rounded-lg px-3 py-2 text-sm ${
                selectedTime === slot
                  ? "bg-sky-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          className="w-full mt-6 bg-sky-500 text-white py-2 rounded-lg text-center font-semibold hover:bg-sky-600 transition"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
