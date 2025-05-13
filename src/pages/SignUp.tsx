import React from "react";
import { NavLink } from "react-router";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#121212] px-4">
      <div className="w-full max-w-md bg-[#121212] rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Sign Up for Spotify
        </h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="firstName" className="block text-sm mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-bold py-2 px-4 rounded hover:bg-[#1ed760] transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <NavLink to="/login" className="text-[#1DB954] hover:underline">
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
