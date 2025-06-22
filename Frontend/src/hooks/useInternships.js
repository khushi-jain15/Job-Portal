// src/hooks/useInternships.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useInternships = () => {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInternships = async () => {
            await axios.get("http://localhost:3000/internships")
                .then((response) => {
                    setInternships(response.data.data.internships);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        };
        fetchInternships();
    }, []);

    const addInternship = async (internship) => {
        try {
            const response = await axios.post(
              "http://localhost:3000/internships/create",
              {...internship}
            );
            setInternships([...internships, response.data]); // Add the newly created internship
        } catch (error) {
            console.error('Error adding internship:', error);
            setError(error);
        }
    };

    const updateInternship = async (id, updatedInternship) => {
        try {
            const response = await axios.patch(
              `http://localhost:3000/internships/${id}`,
              updatedInternship
            );
            setInternships(
                internships.map((item) => (item._id === id ? response.data : item))
            );
        } catch (error) {
            console.error('Error updating internship:', error);
            setError(error);
        }
    };

    const deleteInternship = async (id) => {
        try {
            await fetch(`http://localhost:3000/internships/${id}`, {
                // await fetch(`http://localhost:3000/internships/${id}`, {
              method: "DELETE",
            });
            setInternships(internships.filter((item) => item._id !== id));
        } catch (error) {
            console.error('Error deleting internship:', error);
            setError(error);
        }
    };

    return {
        internships,
        loading,
        error,
        addInternship,
        updateInternship,
        deleteInternship,
    };
};

export default useInternships;
