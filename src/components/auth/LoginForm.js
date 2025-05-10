'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // We'll implement the login logic later
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Nice to see you!</h1>
        <p className="text-gray-400">Enter your email and password to sign in</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          SIGN IN
        </button>

        <div className="text-center text-sm">
          <span className="text-white">Don't have an account? </span>
          <Link href="/signup" className="text-white font-bold hover:text-[#0328EE] transition-colors">
            Sign up
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
