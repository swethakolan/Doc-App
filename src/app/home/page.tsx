'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
    <Navbar />

<section className="bg-sky-100 text-center py-12">
  <h1 className="text-3xl font-bold mb-2">Find the Right Doctor</h1>
  <p className="text-lg text-gray-700">Book appointments with verified healthcare professionals</p>
  <Link href="/book" className="mt-4 inline-block bg-sky-600 text-white px-6 py-2 rounded-md">
    Book Now
  </Link>
</section>

<section className="py-10 px-4 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <span className="text-3xl">🔍</span>
    <h3 className="font-bold mt-2">Search Doctors</h3>
    <p className="text-gray-600 text-sm">Browse by specialty, location, or rating</p>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <span className="text-3xl">📅</span>
    <h3 className="font-bold mt-2">Book Appointments</h3>
    <p className="text-gray-600 text-sm">Pick your date and time in seconds</p>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <span className="text-3xl">🏥</span>
    <h3 className="font-bold mt-2">Trusted Clinics</h3>
    <p className="text-gray-600 text-sm">All doctors are verified and rated by patients</p>
  </div>
</section>
</div>



  );
}
