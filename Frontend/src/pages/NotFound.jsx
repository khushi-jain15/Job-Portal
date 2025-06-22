// src/pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-4">Page Not Found</p>
        <p className="text-gray-600">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
    </div>
  );
};

export default NotFound;
