// src/pages/Admin.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for redirecting
import useInternships from '../hooks/useInternships';
import useBlogs from '../hooks/useBlogs';
import { useAuth } from '../context/AuthContext';
import AdminNotification from '../components/AdminNotification';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Ensure to import this, but you can override these styles with your own.




const Admin = () => {
  const { internships, addInternship, updateInternship, deleteInternship } = useInternships();
  const { blogs, addBlog, updateBlog, deleteBlog } = useBlogs();
  const [newInternship, setNewInternship] = useState({ image: '', title: '', paymentScript: '' });
  const [editInternshipId, setEditInternshipId] = useState(null);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', author: '', image: '' });
  const [editBlogId, setEditBlogId] = useState(null);
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [loadingBlogId, setLoadingBlogId] = useState(null); // Separate loading for blog deletion
  const [loadingInternshipId, setLoadingInternshipId] = useState(null); // Separate loading for internship deletion
  const navigate = useNavigate();

  // Redirect to login page if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login page
    }
  }, [isAuthenticated, navigate]);

  // Internship Handlers
  const handleAddInternship = async () => {
    if (!isAuthenticated) {
      return alert('You need to login first');
    }
    if (!newInternship.image || !newInternship.title || !newInternship.paymentScript) {
      return alert('Please fill all fields');
    }

    try {
      setLoading(true);
      await addInternship(newInternship);
      setNewInternship({ image: '', title: '', paymentScript: '' });
    } catch (err) {
      alert('Error occurred during adding internship');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateInternship = async () => {
    if (!isAuthenticated) {
      return alert('You need to login first');
    }
    if (!newInternship.image || !newInternship.title || !newInternship.paymentScript) {
      return alert('Please fill all fields');
    }

    try {
      setLoading(true);
      await updateInternship(editInternshipId, newInternship);
      setNewInternship({ image: '', title: '', paymentScript: '' });
      setEditInternshipId(null);
    } catch (err) {
      alert('Error occurred during updating internship');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteInternship = async (id) => {
    if (!isAuthenticated) {
      return alert('You need to login first');
    }
    try {
      setLoadingInternshipId(id);
      await deleteInternship(id);
    } catch (err) {
      alert('Error occurred during deleting internship');
      console.log(err);
    } finally {
      setLoadingInternshipId(null);
    }
  };

  const handleEditInternship = (id) => {
    const internshipToEdit = internships.find((internship) => internship._id === id);
    setNewInternship(internshipToEdit);
    setEditInternshipId(id);
  };

  // Blog Handlers
  const handleAddBlog = async () => {
    if (!isAuthenticated) {
      return alert('You need to login first');
    }
    if (!newBlog.title || !newBlog.content || !newBlog.author || !newBlog.image) {
      return alert('Please fill all fields');
    }

    try {
      setLoading(true);
      await addBlog(newBlog);
      setNewBlog({ title: '', content: '', author: '', image: '' });
    } catch (err) {
      alert('Error occurred during adding blog');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateBlog = async () => {
    if (!isAuthenticated) {
      return alert('You need to login first');
    }
    if (!newBlog.title || !newBlog.content || !newBlog.author || !newBlog.image) {
      return alert('Please fill all fields');
    }

    try {
      setLoading(true);
      await updateBlog(editBlogId, newBlog);
      setNewBlog({ title: '', content: '', author: '', image: '' });
      setEditBlogId(null);
    } catch (err) {
      alert('Error occurred during updating blog');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!isAuthenticated) {
      return alert('You need to login first');
    }
    try {
      setLoadingBlogId(id);
      await deleteBlog(id);
    } catch (err) {
      alert('Error occurred during deleting blog');
      console.log(err);
    } finally {
      setLoadingBlogId(null);
    }
  };

  const handleEditBlog = (id) => {
    const blogToEdit = blogs.find((blog) => blog._id === id);
    setNewBlog(blogToEdit);
    setEditBlogId(id);
  };

  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab index

  return (
    <div className="p-4 mt-20 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl text-center text-amber-600 font-extrabold mb-8">Admin Portal</h1>

      {/* Tabs Component */}
      <Tabs selectedIndex={activeIndex} onSelect={index => setActiveIndex(index)}>
        <TabList className="flex space-x-4 border-b mb-4 justify-center items-center">
          <Tab className={`py-2 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${activeIndex === 0 ? 'bg-amber-500 text-white' : 'bg-white text-gray-600 hover:bg-amber-100'}`}>
            Internships
          </Tab>
          <Tab className={`py-2 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${activeIndex === 1 ? 'bg-amber-500 text-white' : 'bg-white text-gray-600 hover:bg-amber-100'}`}>
            Blogs
          </Tab>
          <Tab className={`py-2 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${activeIndex === 2 ? 'bg-amber-500 text-white' : 'bg-white text-gray-600 hover:bg-amber-100'}`}>
            Notifications
          </Tab>
        </TabList>



        {/* Internship Panel */}
        <TabPanel>
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl text-center font-semibold text-amber-600 mb-4">Internships</h2>


            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-gray-900">
              <h3 className="font-roboto text-xl sm:text-2xl font-bold mb-6 text-orange-600">
                How to Format Your Internship Content:
              </h3>
              <ul className="list-inside space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500 font-bold">*</span>
                  <span>
                    Use <span className="font-bold">asterisks (*)</span> at both the start and end
                    of a line to make it <span className="font-bold text-amber-600">bold and teal-colored</span>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-500 font-bold">-</span>
                  <span>
                    Start a line with a <span className="font-bold">hyphen (-)</span> to create a bullet point.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500 font-bold">1.</span>
                  <span>
                    Lines that start with <span className="font-bold">numbers (1., 2., etc.)</span> will appear
                    bold and in an extra-large font.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-500 font-bold">"</span>
                  <span>
                    Text enclosed in <span className="font-bold">double quotes (" ")</span> will automatically
                    appear bold and prominent.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500 font-bold">&#9166;</span>
                  <span>
                    Press <span className="font-bold">Enter</span> to separate content into new paragraphs for clearer formatting.
                  </span>
                </li>
              </ul>
            </div>





            {/* Internship Form */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {editInternshipId ? 'Edit Internship' : 'Add New Internship'}
              </h2>
              <input
                type="text"
                placeholder="Image URL"
                value={newInternship.image}
                onChange={(e) => setNewInternship({ ...newInternship, image: e.target.value })}
                className="p-2 border border-gray-300 rounded w-full mb-2"
              />
              <input
                type="text"
                placeholder="Title"
                value={newInternship.title}
                onChange={(e) => setNewInternship({ ...newInternship, title: e.target.value })}
                className="p-2 border border-gray-300 rounded w-full mb-2"
              />
              <textarea
                type="text"
                placeholder="Description"
                value={newInternship.description} // Added description field
                onChange={(e) => setNewInternship({ ...newInternship, description: e.target.value })}
                className="p-2 border border-gray-300 rounded w-full mb-2"
              />
              
              <input
                type="text"
                placeholder="Payment Script"
                value={newInternship.paymentScript}
                onChange={(e) => setNewInternship({ ...newInternship, paymentScript: e.target.value })}
                className="p-2 border border-gray-300 rounded w-full mb-4"
              />
              {editInternshipId ? (
                <button
                  onClick={async () => {
                    try {
                      await handleUpdateInternship(editInternshipId, newInternship); // Pass the ID for updating
                      // Handle successful update (e.g., show a success message or reset form)
                    } catch (error) {
                      console.error('Error updating internship:', error);
                      // Handle error (e.g., show an error message)
                    }
                  }}
                  disabled={loading}
                  className={`bg-orange-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
                >
                  {loading ? 'Updating...' : 'Update'}
                </button>
              ) : (
                <button
                  onClick={async () => {
                    try {
                      await handleAddInternship(newInternship); // Pass the new internship data
                      // Handle successful addition (e.g., show a success message or reset form)
                    } catch (error) {
                      console.error('Error adding internship:', error);
                      // Handle error (e.g., show an error message)
                    }
                  }}
                  disabled={loading}
                  className={`bg-green-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
                >
                  {loading ? 'Adding...' : 'Add'}
                </button>
              )}
            </div>

            {/* Internship List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {internships &&
                internships.map((internship) => (
                  <div
                    key={internship._id}
                    className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={internship.image}
                      alt={internship.title}
                      className="w-full h-32 object-cover rounded-md mb-4"
                    />
                    <div>
                      <h2 className="text-xl font-semibold mb-2">{internship.title}</h2>
                      <a
                        href={internship.paymentScript}
                        className="text-orange-500 mb-4 block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                      </a>
                    </div>
                    <div className="flex justify-between mt-auto">
                      <button
                        onClick={() => handleEditInternship(internship._id)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                        disabled={!isAuthenticated}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteInternship(internship._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        disabled={loadingInternshipId === internship._id || !isAuthenticated}
                      >
                        {loadingInternshipId === internship._id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>


        {/* Blog Panel */}
        <TabPanel>
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl text-center font-semibold text-amber-600 mb-4">Blogs</h2>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-gray-900">
              <h3 className="font-roboto text-xl sm:text-2xl font-bold mb-6 text-orange-600">
                How to Format Your Blog Content:
              </h3>
              <ul className="list-inside space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500 font-bold">*</span>
                  <span>
                    Use <span className="font-bold">asterisks (*)</span> at both the start and end
                    of a line to make it <span className="font-bold text-amber-600">bold and teal-colored</span>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-500 font-bold">-</span>
                  <span>
                    Start a line with a <span className="font-bold">hyphen (-)</span> to create a bullet point.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500 font-bold">1.</span>
                  <span>
                    Lines that start with <span className="font-bold">numbers (1., 2., etc.)</span> will appear
                    bold and in an extra-large font.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-500 font-bold">"</span>
                  <span>
                    Text enclosed in <span className="font-bold">double quotes (" ")</span> will automatically
                    appear bold and prominent.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500 font-bold">&#9166;</span>
                  <span>
                    Press <span className="font-bold">Enter</span> to separate content into new paragraphs for clearer formatting.
                  </span>
                </li>
              </ul>
            </div>


            {/* Blog Form */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {editBlogId ? 'Edit Blog' : 'Add New Blog'}
              </h2>
              <input
                type="text"
                placeholder="Title"
                value={newBlog.title}
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                className="p-2 border border-gray-300 rounded w-full mb-2"
              />
              <textarea
                placeholder="Content"
                value={newBlog.content}
                onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                className="p-2 border border-gray-300 rounded w-full mb-2"
                rows="4"
              />
              <input
                type="text"
                placeholder="Author"
                value={newBlog.author}
                onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                className="p-2 border border-gray-300 rounded w-full mb-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newBlog.image}
                onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
                className="p-2 border border-gray-300 rounded w-full mb-4"
              />
              {editBlogId ? (
                <button
                  onClick={handleUpdateBlog}
                  disabled={loading}
                  className={`bg-orange-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
                >
                  {loading ? 'Updating...' : 'Update'}
                </button>
              ) : (
                <button
                  onClick={handleAddBlog}
                  disabled={loading}
                  className={`bg-green-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
                >
                  {loading ? 'Adding...' : 'Add'}
                </button>
              )}
            </div>

            {/* Blog List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs &&
                blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-32 object-cover rounded-md mb-4"
                    />
                    <div>
                      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                      <p className="text-gray-700 mb-4">
                        {/* {blog.content} */}
                        {blog.content.length > 150 ? `${blog.content.substring(0, 150)}...` : blog.content}
                      </p>
                      <p className="text-gray-500 mb-4">By {blog.author}</p>
                    </div>
                    <div className="flex justify-between mt-auto">
                      <button
                        onClick={() => handleEditBlog(blog._id)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                        disabled={!isAuthenticated}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        disabled={loadingBlogId === blog._id || !isAuthenticated}
                      >
                        {loadingBlogId === blog._id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>


        <TabPanel>
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl text-center font-semibold text-amber-600 mb-4">Notifications</h2>
            <main className="p-6">
              <AdminNotification />
            </main>
          </div>
        </TabPanel>

      </Tabs>


    </div>
  );
};

export default Admin;
