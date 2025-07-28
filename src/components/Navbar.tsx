'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiHome, HiUserGroup, HiMenu, HiX } from 'react-icons/hi';
import { FaCalendarCheck } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" flex justify-end p-4">
      {/* Top Row: Logo + Menu Toggle */}
      <div className="flex justify-end items-start absolute top-1">
        
        <button
          className="sm:hidden text-gray-700 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Links */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-4 sm:mt-0 ${
          menuOpen ? 'block' : 'hidden sm:flex'
        }`}
      >
        <Link
          href="/home"
          className="flex items-center gap-2 text-gray-700 hover:text-sky-600 py-2"
        >
          <HiHome className="text-xl" />
          Home
        </Link>

        <Link
          href="/book"
          className="flex items-center gap-2 text-gray-700 hover:text-sky-600 py-2"
        >
          <HiUserGroup className="text-xl" />
          Doctors
        </Link>

        <Link
          href="/appointments"
          className="flex items-center gap-2 text-gray-700 hover:text-sky-600 py-2"
        >
          <FaCalendarCheck className="text-xl" />
          Appointments
        </Link>
      </div>
    </nav>
  );
}
