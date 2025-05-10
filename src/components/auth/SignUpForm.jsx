'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Store the token in localStorage if remember me is checked
      if (rememberMe) {
        localStorage.setItem('token', data.token);
      } else {
        sessionStorage.setItem('token', data.token);
      }

      // Redirect to dashboard or home page
      window.location.href = '/';
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.message);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome!</h1>
        <p className="text-gray-400">Use these awesome forms to create new account for free.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg bg-[#221641] border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0328EE]/30 transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg bg-[#221641] border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0328EE]/30 transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
              className="w-full px-4 py-3 rounded-lg bg-[#221641] border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0328EE]/30 transition-all"
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#221641] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0328EE]"></div>
            <span className="ml-3 text-sm font-medium text-gray-400">Remember me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#0328EE] hover:bg-[#0328EE]/90 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0328EE]/50 focus:ring-offset-2 focus:ring-offset-[#221641]"
        >
          SIGN UP
        </button>

        <div className="text-center text-sm">
          <span className="text-white">Already have an account? </span>
          <Link href="/login" className="text-white font-bold hover:text-[#0328EE] transition-colors">
            Sign in
          </Link>
        </div>
      </form>

      <div className="mt-8 text-center text-xs text-gray-500">
        <p>© 2024. Made with ❤️ by Dream Algorithm</p>
        <div className="mt-2 space-x-4">
          <Link href="/marketplace" className="hover:text-gray-400">Marketplace</Link>
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
          <Link href="/license" className="hover:text-gray-400">License</Link>
        </div>
      </div>
    </div>
  );
}
