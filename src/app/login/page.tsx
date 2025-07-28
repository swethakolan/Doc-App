'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DoctorAuthPage() {
  const [isLogin, setIsLogin] = useState(true);
   const router=useRouter();
   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('Login successful:', data);
      router.push('/home');
    } else {
      console.error('Login failed');
      alert('Invalid credentials');
    }
  } catch (err) {
    console.error('Error logging in:', err);
    alert('Something went wrong');
  }
};

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black ">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm ">
        <h2 className="text-2xl font-bold text-center mb-6 text-sky-600">
          {isLogin ? 'Patient Login' : 'Patient Signup'}
        </h2>

        <form className="space-y-4 " onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="full Name"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <input
            type="password"
            name="password"
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
        <div className="mt-4 p-4 bg-red-50 border border-red-300 rounded-lg text-center">
  <h2 className="text-red-600 font-semibold mb-2">use below Credentials</h2>
  <p className="text-sm text-gray-700">
    <span className="font-medium">Email:</span> test@example.com
  </p>
  <p className="text-sm text-gray-700">
    <span className="font-medium">Password:</span> test123
  </p>
</div>
      </div>
    </div>
  );
}
