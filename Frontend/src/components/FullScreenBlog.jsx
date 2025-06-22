// FullScreenBlog.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaCopy } from 'react-icons/fa'; // Importing copy icon

const FullScreenBlog = ({ blog, onClose }) => {
  const [copyStatus, setCopyStatus] = useState(null); // State for copy status

  if (!blog) return null;

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopyStatus('Copied!'); // Update copy status
    setTimeout(() => {
      setCopyStatus(null); // Reset after 3 seconds
    }, 3000);
  };

  const renderLineContent = (lines) => {
    let inCodeBlock = false;
    let codeBlock = '';
  
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
  
      // Check for a single line of code (starting and ending with backticks)
      if (trimmedLine.startsWith('`') && trimmedLine.endsWith('`')) {
        const code = trimmedLine.slice(1, -1); // Extract the code between backticks
        return (
          <div key={index} className="relative bg-gray-100 p-4 rounded-md mb-4 shadow-md">
            <button
              onClick={() => copyToClipboard(code)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              aria-label="Copy code"
            >
              {copyStatus ? (
                <span>{copyStatus}</span>
              ) : (
                <FaCopy />
              )}
            </button>
            <pre className="overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        );
      }
  
      // Start a code block if the line starts with a backtick
      if (trimmedLine.startsWith('`') && !inCodeBlock) {
        inCodeBlock = true;
        codeBlock = trimmedLine.slice(1); // Start accumulating code without the backtick
        return null; // Skip rendering this line
      }
  
      // If we're in a code block, accumulate the lines
      if (inCodeBlock) {
        if (trimmedLine.endsWith('`')) {
          // End of code block
          codeBlock += `\n${trimmedLine.slice(0, -1)}`; // Add this line and remove the last backtick
          const code = codeBlock.trim();
          inCodeBlock = false;
          codeBlock = '';
  
          return (
            <div key={index} className="relative bg-gray-100 p-4 rounded-md mb-4 shadow-md">
              <button
                onClick={() => copyToClipboard(code)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                aria-label="Copy code"
              >
                {copyStatus ? (
                  <span>{copyStatus}</span> // Show "Copied!" text
                ) : (
                  <FaCopy />
                )}
              </button>
              <pre className="overflow-x-auto">
                <code>{code}</code>
              </pre>
            </div>
          );
        } else {
          // Continue accumulating code lines
          codeBlock += `\n${trimmedLine}`; // Add the line to the code block
          return null; // Skip rendering these lines
        }
      }

      // Handle bullet points (lines starting with '-')
      if (trimmedLine.startsWith('-')) {
        return (
          <ul key={index} className="list-disc ml-5 mb-4 sm:mb-8">
            <li className="text-sm sm:text-lg text-gray-700 leading-relaxed">
              {trimmedLine.substring(1).split(/("[^"]*")/g).map((part, j) =>
                part.startsWith('"') && part.endsWith('"') ? (
                  <strong key={j}>{part}</strong>
                ) : (
                  part
                )
              )}
            </li>
          </ul>
        );
      }

      // Handle subtitles (lines starting and ending with '*')
      if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*')) {
        return (
          <h2 key={index} className="text-orange-600 text-xl font-bold mb-4 sm:mb-8 leading-relaxed">
            {trimmedLine.substring(1, trimmedLine.length - 1).split(/("[^"]*")/g).map((part, j) =>
              part.startsWith('"') && part.endsWith('"') ? (
                <strong key={j}>{part}</strong>
              ) : (
                part
              )
            )}
          </h2>
        );
      }

      // Handle numeric points (lines starting with numbers followed by a dot)
      if (/^\d+\./.test(trimmedLine)) {
        return (
          <p key={index} className="text-xl font-bold mb-4 sm:mb-8 leading-relaxed">
            {trimmedLine.split(/("[^"]*")/g).map((part, j) =>
              part.startsWith('"') && part.endsWith('"') ? (
                <strong key={j}>{part}</strong>
              ) : (
                part
              )
            )}
          </p>
        );
      }

      // Default behavior (for regular paragraphs)
      return (
        <p key={index} className="text-sm sm:text-lg text-gray-700 mb-4 sm:mb-8 leading-relaxed">
          {trimmedLine.split(/("[^"]*")/g).map((part, j) =>
            part.startsWith('"') && part.endsWith('"') ? (
              <strong key={j}>{part}</strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <motion.div
      className="fixed inset-0 bg-amber-500 bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Scrollable Content with Hidden Scrollbar */}
      <motion.div
        className="relative bg-white bg-opacity-95 backdrop-blur-lg p-4 md:p-8 pb-8 sm:pb-12 rounded-xl shadow-2xl w-full max-w-full sm:max-w-3xl h-auto max-h-screen overflow-y-auto scrollbar-hide mt-8 sm:mt-0"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={`Image for ${blog.title}`}
          className="w-full h-40 sm:h-72 object-cover rounded-lg mb-4 sm:mb-8 shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
        />

        {/* Blog Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-700 mb-3 sm:mb-6 leading-tight tracking-wide">
          {blog.title}
        </h2>

        {/* Blog Content */}
        <div>
          {renderLineContent(blog.content.split('\n'))}
        </div>

        {/* Blog Details */}
        <div className="text-gray-600 text-xs sm:text-sm space-y-1 sm:space-y-2 border-t pt-3">
          <p><span className="font-semibold text-amber-600">Author:</span> {blog.author || 'Unknown'}</p>
          <p><span className="font-semibold text-amber-600">Published:</span> {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>

        {/* Decorative Bottom Border */}
        <div className="w-full h-1 bg-gradient-to-r from-amber-500 to-amber-200 rounded-full mt-6"></div>
      </motion.div>

      {/* Fixed Close Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 bg-amber-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg transition-transform duration-300 hover:bg-amber-500 focus:outline-none z-50"
      >
        &times;
      </button>
    </motion.div>
  );
};

export default FullScreenBlog;
