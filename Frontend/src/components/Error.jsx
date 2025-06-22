// src/components/Error.jsx
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-red-300">
        <div className="flex items-center mb-4">
          <FaExclamationTriangle className="text-red-500 text-4xl mr-2" />
          <h2 className="text-2xl font-bold text-red-500">Something Went Wrong</h2>
        </div>
        <p className="text-gray-700">{message || 'An unexpected error occurred. Please try again later.'}</p>
      </div>
    </div>
  );
};

export default Error;
