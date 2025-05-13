// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router";

const NotFound: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
