import React, { useState } from 'react';
import { addInternship } from '../../services/internshipService';

const AddInternship = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [paymentScript, setPaymentScript] = useState(''); // Changed from applyLink to paymentScript
  const [content, setContent] = useState(''); // Added content field

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addInternship({ image, title, paymentScript, content }); // Pass paymentScript in the request
    // Optionally clear form or give feedback
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Payment Script:</label>
        <input type="text" value={paymentScript} onChange={(e) => setPaymentScript(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Add Internship</button>
    </form>
  );
};

export default AddInternship;
