import React, { useEffect, useState } from 'react';
import { fetchInternships, deleteInternship } from '../services/internshipService';

const InternshipList = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const loadInternships = async () => {
      const data = await fetchInternships();
      setInternships(data);
    };
    loadInternships();
  }, []);

  const handleDelete = async (id) => {
    await deleteInternship(id);
    setInternships(internships.filter((internship) => internship._id !== id));
  };

  return (
    <div>
      <h2>Internships</h2>
      <ul>
        {internships.map((internship) => (
          <li key={internship._id}>
            <img src={internship.image} alt={internship.title} />
            <h3>{internship.title}</h3>
            <p>{internship.content}</p> {/* Added content field */}
            <div dangerouslySetInnerHTML={{ __html: internship.paymentScript }} /> {/* Render payment script */}
            <button onClick={() => handleDelete(internship._id)}>Delete</button>
            {/* Add buttons for update functionality */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipList;
