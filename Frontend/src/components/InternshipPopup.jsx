import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaTimes } from 'react-icons/fa'; // Import close icon



const InternshipPopup = ({ internship, onClose }) => {

  if (!internship) return null; // Return null if no internship is selected

  // Helper function to copy code to the clipboard
  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Code copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy code.');
      });
    } else {
      alert('Clipboard API not supported.');
    }
  };

  // Combined formatDescription function
  const formatDescription = (description) => {
    if (!description) return null; // Return null if description is not provided

    const lines = description.split('\n'); // Split description by new lines
    let inCodeBlock = false;
    let codeBlock = '';

    return lines.map((line, index) => {
      const trimmedLine = line.trim();

      // Single line code block (starting and ending with backticks)
      if (trimmedLine.startsWith('`') && trimmedLine.endsWith('`')) {
        const code = trimmedLine.slice(1, -1); // Extract code between backticks
        return (
          <div key={index} className="relative bg-gray-100 p-4 rounded-md mb-4 shadow-md">
            <button
              onClick={() => copyToClipboard(code)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              aria-label="Copy code"
            >
              <FaCopy />
            </button>
            <pre className="overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        );
      }

      // Multiline code block handling
      if (trimmedLine.startsWith('`') && !inCodeBlock) {
        inCodeBlock = true;
        codeBlock = trimmedLine.slice(1); // Start accumulating code without the backtick
        return null; // Skip rendering this line
      }

      if (inCodeBlock) {
        if (trimmedLine.endsWith('`')) {
          // End of code block
          codeBlock += `\n${trimmedLine.slice(0, -1)}`; // Add line and remove the last backtick
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
                <FaCopy />
              </button>
              <pre className="overflow-x-auto">
                <code>{code}</code>
              </pre>
            </div>
          );
        } else {
          // Continue accumulating code lines
          codeBlock += `\n${trimmedLine}`;
          return null; // Skip rendering these lines
        }
      }

      // Handle bullet points (lines starting with '-')
      if (trimmedLine.startsWith('-')) {
        return (
          <ul key={index} className="list-disc ml-5 mb-4">
            <li className="text-gray-700 leading-relaxed">
              {trimmedLine.substring(1).split(/"([^"]*)"/g).map((part, j) =>
                j % 2 === 1 ? (  // Odd index corresponds to text inside quotes
                  <strong key={j}>{part}</strong>
                ) : (
                  part  // Text outside quotes
                )
              )}
            </li>
          </ul>
        );
      }

      // Handle subtitles (lines starting and ending with '*')
      if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*')) {
        return (
          <h2 key={index} className="text-amber-600 text-xl font-bold mb-4 leading-relaxed">
            {trimmedLine.substring(1, trimmedLine.length - 1)}
          </h2>
        );
      }

      // Default for regular paragraphs with bolding text inside quotes
      return (
        <p key={index} className="text-sm sm:text-lg text-gray-700 mb-4 sm:mb-8 leading-relaxed">
          {trimmedLine.split(/"([^"]*)"/g).map((part, j) =>
            j % 2 === 1 ? (  // Odd index corresponds to text inside quotes
              <strong key={j}>{part}</strong>
            ) : (
              part  // Text outside quotes
            )
          )}
        </p>
      );

    });
  };


  // Define an array of valid payment button IDs
  const validPaymentButtonIds = [
    'pl_P4jQsOdCFqIZBPt', // Frontend web development
    'pl_P5581sCMsnavzXJ', //Fullstack web development
    'pl_P55HiHdP6Hy0sOi', // Programming
    'pl_P55E8xBNFf9qqWL', // HR marketing
    'pl_P4hJf9TdvKsW4d30', // Content Writing
    'pl_P55B9RUBDOfvWh06', // Graphic Designing
    'pl_P55g5VE0RnNjrfYt', // 299 @ 1
    'pl_P55jngtderUCVKfd', // 299 @ 2
    'pl_fvP55mP3LPyTgw4r', // 299 @ 3
    'pl_P5fv5rc2a3dwwWXl', // 999 @ 1
    'pl_P55sfvgtCLRAY6OTF', // 999 @ 2
    'pl_P55uXDpfgfdgdp0YT92i', // 599 @ 1
    'pl_P55vru6dfgdq2PTjU', // 599 @ 2
    'pl_P55yhd9LuEjgdfgDNM', // 599 @ 3
    // Add more valid payment IDs here
  ];

  // Dynamically inject Razorpay script inside a form tag
  const renderPaymentScript = (paymentScript) => {
    if (!paymentScript) {
      // Show the message if no payment script is available
      return (
        <div className="text-center text-red-700 font-semibold mt-4">
          All slots are full!!  <p className="text-amber-600 hover:underline">Till then, subscribe for the updates</p>.
        </div>
      );
    }

    // Extract the payment button ID from the script
    const paymentButtonIdMatch = paymentScript.match(/data-payment_button_id="(.*?)"/);
    const paymentButtonId = paymentButtonIdMatch ? paymentButtonIdMatch[1] : null;

    // Check if the payment button ID is valid
    if (paymentButtonId && validPaymentButtonIds.includes(paymentButtonId)) {
      useEffect(() => {
        const form = document.createElement('form');
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.setAttribute('data-payment_button_id', paymentButtonId);
        form.appendChild(script);

        const paymentContainer = document.getElementById('payment-container');
        if (paymentContainer) {
          paymentContainer.appendChild(form);
        }

        return () => {
          const paymentContainer = document.getElementById('payment-container');
          if (paymentContainer) {
            paymentContainer.innerHTML = ''; // Clean up on unmount
          }
        };
      }, [paymentButtonId]);


      return <div id="payment-container"></div>;
    }

    return null; // Return null if no valid payment button ID
  };


  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-11/12 max-w-lg relative overflow-y-auto max-h-[80vh] custom-scrollbar scroll-animation" // Applied custom scrollbar class
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Close button - Make sticky with 'sticky' and position it to the top right */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition-all duration-300"
          aria-label="Close"
          style={{ position: 'sticky', float: 'right', zIndex: 50 }} // Ensures it stays visible and above content
        >
          <FaTimes className="text-gray-600 hover:text-gray-800 text-xl" />
        </button>

        {/* Title */}
        <h2 className="text-2xl text-center sm:text-3xl font-bold text-amber-700 mb-4">
          {internship.title}
        </h2>

        {/* Internship Image */}
        <img
          src={internship.image}
          alt={internship.title}
          className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
        />

        {/* Description */}
        <div className="mb-6">
          {formatDescription(internship.description)}
        </div>

        {/* Payment Script */}
        <div className="mb-6 flex justify-center">
          {renderPaymentScript(internship.paymentScript)}
        </div>


      </motion.div>
    </motion.div>
  );
};

export default InternshipPopup;

