import { useState, useEffect } from 'react';
import axios from 'axios';

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blogs');
        setBlogs(response.data.data); // Adjust according to your data structure
      } catch (err) {
        setError(err.message || 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const addBlog = async (blog) => {
    try {
      const response = await axios.post('http://localhost:3000/blogs', blog);
      setBlogs((prevBlogs) => [...prevBlogs, response.data.data.blog]); // Adjust according to your data structure
    } catch (err) {
      setError(err.message || 'Failed to add blog');
    }
  };

  const updateBlog = async (id, updatedBlog) => {
    try {
      const response = await axios.patch(`http://localhost:3000/blogs/${id}`, updatedBlog);
      setBlogs(blogs.map((blog) => (blog._id === id ? response.data.data.blog : blog))); // Adjust according to your data structure
    } catch (err) {
      setError(err.message || 'Failed to update blog');
    }
  };
  

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete blog');
    }
  };

  return {
    blogs,
    loading,
    error,
    addBlog,
    updateBlog,
    deleteBlog,
  };
};

export default useBlogs;
