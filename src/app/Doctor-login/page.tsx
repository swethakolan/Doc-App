'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DoctorAuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router=useRouter();
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault(); 
  router.push('/doctor-dashboard'); 
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-sky-600">
          {isLogin ? 'Doctor Login' : 'Doctor Signup'}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
              required
            />
          )}

          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded-md font-semibold hover:bg-sky-600 transition"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="text-sky-600 font-medium hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
