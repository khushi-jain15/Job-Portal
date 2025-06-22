// src/components/AdminNotification.jsx
import { useState } from 'react';

const AdminNotification = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [status, setStatus] = useState('');

  const handleSendNotification = async () => {
    try {
      // const res = await fetch('/api/notifications/send-notification', {
        const res = await fetch('http://localhost:3000/api/notifications/send-notification', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, message, image, link }),
        credentials: 'include'  // Send cookies/credentials with the request
      });

      if (res.ok) {
        setStatus('Notification sent successfully!');
      } else {
        throw new Error('Failed to send notification');
      }
    } catch (error) {
      setStatus('Error sending notification');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-amber-600">Send Notification</h2>

      <div className="mb-4">
        <label className="block text-lg font-semibold text-amber-600 mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the notification title"
          className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold text-amber-600 mb-2">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter the notification message"
          className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold text-amber-600 mb-2">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter an image URL (optional)"
          className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold text-amber-600 mb-2">Link to Visit</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter the link URL"
          className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <button
        onClick={handleSendNotification}
        className="w-full py-3 bg-amber-600 text-white font-bold rounded-xl shadow-md hover:bg-amber-700 transition duration-300 ease-in-out"
      >
        Send Notification
      </button>

      {status && (
        <p className={`mt-4 text-center font-semibold ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default AdminNotification;
