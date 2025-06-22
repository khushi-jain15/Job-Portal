import { useState, useEffect } from 'react';
import useInternships from '../hooks/useInternships';
import Loading from '../components/Loading'; // Import Loading component
import Error from '../components/Error'; // Import Error component
import InternshipPopup from '../components/InternshipPopup'; // Import the popup component

const Internship = () => {
  const { internships, loading, error } = useInternships();
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(''); // State for debounced search term
  const [selectedInternship, setSelectedInternship] = useState(null);

  // Debouncing logic: wait 300ms after the user stops typing to update the debounced search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler); // Cleanup the timeout if user keeps typing
    };
  }, [searchTerm]);

  if (loading) return <Loading />; // Use Loading component
  if (error) return <Error message={error.message} />; // Use Error component

  // Function to open the popup
  const handleCardClick = (internship) => {
    setSelectedInternship(internship);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedInternship(null);
  };

  // Function to filter internships based on the debounced search term
  const filteredInternships = internships.filter(internship =>
    internship.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="p-6 mt-20 bg-gradient-to-b from-orange-50 to-orange-100 font-playfair">
      {/* Section for the internships description with enhanced styling */}



      <div className="text-center mb-12 p-8 rounded-lg shadow-lg relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-30 bg-amber-200 rounded-lg"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
  <div className="absolute top-0 left-0 w-60 h-60 bg-orange-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

  {/* Title */}
  <h1 className="text-6xl font-extrabold mb-4 text-amber-800 tracking-widest relative z-20 font-openSans ">
    Step into the Future with Internships
  </h1>

  {/* Description */}
  <p className="text-lg text-gray-800 leading-relaxed relative z-20 mb-4 px-4 sm:px-10">
    Internships bridge the gap between academics and real-world experience. They offer a unique chance to explore careers, build professional networks, and stand out in competitive job markets.
  </p>

  <p className="text-lg text-gray-800 leading-relaxed relative z-20 mb-4 px-4 sm:px-10">
    Whether you're diving into a specific field or exploring new horizons, internships unlock endless possibilities!
  </p>

  <p className="text-lg text-gray-800 leading-relaxed relative z-20 mb-6 px-4 sm:px-10">
    Start today, explore opportunities that align with your passion, and gain invaluable experience that sets the foundation for your career success.
  </p>

  {/* Decorative Line */}
  <div className="w-32 h-1 bg-amber-600 mx-auto rounded-full mb-6 relative z-20"></div>

  {/* Decorative Shapes */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-60 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
  <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-200 rounded-full opacity-60 transform translate-x-1/2 translate-y-1/2 z-10"></div>

  {/* Quotes or Key Points */}
  <div className="relative z-20 mt-6 space-y-2">
    <blockquote className="text-lg italic text-gray-600 border-l-4 border-amber-600 pl-4">
      "Internships are the stepping stones to success in your career journey."
    </blockquote>
    <blockquote className="text-lg italic text-gray-600 border-l-4 border-amber-600 pl-4">
      "Explore, Learn, and Grow: The internship experience awaits!"
    </blockquote>
  </div>
</div>


      {/* Search bar with creative styling */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search for an internship by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className="border-2 p-4 w-full max-w-lg rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-500 text-center text-gray-800 text-lg"
        />
      </div>

      {/* Displaying Filtered Internships */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredInternships.length > 0 ? (
    filteredInternships.map((internship) => (
      <div
        key={internship._id}
        onClick={() => handleCardClick(internship)} // Open popup on card click
        className="cursor-pointer bg-white p-5 rounded-3xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300 relative group"
      >
        {/* Image Container with perfect fit */}
        <div className="overflow-hidden rounded-lg mb-4 h-40">
          <img
            src={internship.image}
            alt={internship.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title with gradient and subtle animation */}
        <h2 className="text-xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-indigo-500 group-hover:text-amber-700 transition duration-300">
          {internship.title}
        </h2>

        {/* Description (optional) */}
        <p className="text-gray-600 text-sm mb-3 leading-relaxed text-center">
          {internship.shortDescription}
        </p>

        {/* Button with fancy hover effect */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when button is clicked
            handleCardClick(internship); // Open popup
          }}
          className="w-full py-2 mt-2 bg-gradient-to-r from-amber-500 to-teal-600 text-white rounded-full hover:bg-gradient-to-l hover:from-amber-400 hover:to-teal-300 shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          View
        </button>

        {/* Subtle decorative elements */}
        <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-amber-300 to-indigo-200 rounded-full opacity-30 blur-xl group-hover:opacity-40 transition duration-300"></div>
        <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-bl from-amber-300 to-indigo-200 rounded-full opacity-30 blur-xl group-hover:opacity-40 transition duration-300"></div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-600 col-span-full text-lg">No internships found matching your search.</p>
  )}
</div>



      {/* Popup for Selected Internship */}
      {selectedInternship && (
        <InternshipPopup
          internship={selectedInternship}
          onClose={handleClosePopup} // Pass the close handler
        />
      )}

      {/* Additional content after the cards */}
      <div className="mt-16 relative bg-white p-8 rounded-lg shadow-lg text-center overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-amber-200 to-white rounded-lg"></div>
  <div className="absolute top-0 left-0 w-64 h-64 bg-amber-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
  <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-400 rounded-full transform translate-x-1/2 translate-y-1/2 opacity-70"></div>

  {/* Title */}
  <h2 className="text-5xl font-extrabold mb-6 text-amber-600 tracking-widest font-openSans relative z-20">
    Why Internships Matter for Freshers
  </h2>

  {/* Description Paragraphs */}
  <div className="relative z-20 mb-8 px-4 sm:px-8">
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      For fresh graduates, internships are a golden opportunity to kickstart their professional journey. They allow you to put academic knowledge into practice, explore career paths, and build skills that will make you stand out to employers. The experience gained from internships is invaluable in making the transition from student to professional smoother and more rewarding.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Internships also give freshers a competitive edge in the job market. Employers often prefer hiring candidates who have practical experience. In many cases, completing a successful internship can even lead to a full-time job offer. As a fresher, you can expand your professional network, meet industry experts, and learn about the latest trends and technologies that are shaping your field.
    </p>
  </div>

  {/* Decorative Line */}
  <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6 relative z-20"></div>

  {/* Call to Action */}
  <p className="text-lg font-semibold text-amber-700 relative z-20">
    Ready to take the next step in your career? Embrace the power of internships!
  </p>

  {/* Footer Shapes */}
  <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-200 rounded-full transform translate-x-1/2 translate-y-1/2 opacity-60 z-10"></div>
  <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-60 z-10"></div>
</div>

    </div>
  );
};

export default Internship;
