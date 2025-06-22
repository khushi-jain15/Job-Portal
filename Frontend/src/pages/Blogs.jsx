import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import axios from "axios";
import FullScreenBlog from "../components/FullScreenBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:3000/blogs");

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        setBlogs(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="p-4 bg-amber-50 min-h-screen mt-20">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-amber-800">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              content={blog.content}
              author={blog.author}
              image={blog.image}
              createdAt={new Date(blog.createdAt).toLocaleDateString()}
              onClick={() => handleBlogClick(blog)}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">No blogs available</p>
        )}
      </div>

      {selectedBlog && (
        <FullScreenBlog blog={selectedBlog} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Blogs;
