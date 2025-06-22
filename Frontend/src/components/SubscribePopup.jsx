import { useState, useEffect } from 'react';
import useSubscription from '../hooks/useSubscription';

const SubscribePopup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(true); // To control popup visibility
  const { subscribe, checkSubscription } = useSubscription();

  useEffect(() => {
    if (message === 'Subscribed successfully!' || message === 'Already subscribed!') {
      setIsOpen(false); // Close the popup and stop showing it
    } else {
      const interval = setInterval(() => {
        setIsOpen(true); // Show the popup every 300 seconds
      }, 300000);

      return () => clearInterval(interval);
    }
  }, [message]);

  const handleSubscribe = async () => {
    // Simple email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }
  
    try {
      const res = await subscribe(email);
      setMessage(res.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error subscribing');
    }
  };
  

  const handleCheckSubscription = async () => {
    try {
      const res = await checkSubscription(email);
      setMessage(res.message);
      if (res.message === 'Already subscribed!') {
        setIsOpen(false); // Automatically close the popup if already subscribed
      }else{
        handleSubscribe();
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error checking subscription');
    }
  };

  const handleClosePopup = () => {
    setIsOpen(false); // Manually close the popup
  };

  if (!isOpen) return null; // Don't render the popup if it's closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl relative p-8 max-w-sm w-full transform scale-100 transition-transform hover:scale-105 duration-300 ease-in-out">
        {/* Close button */}
        <button
          onClick={handleClosePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-amber-600 text-center mb-6">Subscribe to Updates</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-200 ease-in-out mb-4"
        />

        {/* Subscribe Button */}
        <button
          onClick={handleSubscribe}
          className="w-full py-3 bg-amber-600 text-white font-bold rounded-xl shadow-md hover:bg-amber-700 hover:shadow-lg transition duration-300 ease-in-out mb-3"
        >
          Subscribe
        </button>

        {/* Check Subscription Button */}
        <button
          onClick={handleCheckSubscription}
          className="w-full py-3 bg-amber-100 text-amber-600 font-bold rounded-xl shadow-md hover:bg-amber-200 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Already Subscribed?
        </button>

        {/* Message Display */}
        {message && (
          <p className={`mt-4 text-center font-semibold ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}

        {/* Decorative Circle */}
        {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-amber-600 rounded-full shadow-lg"></div> */}
      </div>
    </div>
  );
};

export default SubscribePopup;
