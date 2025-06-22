import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading'; // Import Loading component
import Error from '../components/Error'; // Import Error component

const About = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        // Replace with your actual data fetching logic
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <div className="bg-white mt-20 font-playfair ">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-400 to-amber-500 py-12 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <h1 className="text-9xl font-bold font-openSans">Empowering Students</h1>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Empowering students through real-world internship experiences</h1>
          <div className="border-b-4 border-white w-32 mx-auto"></div>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-gray-50 py-12 px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-500 font-nunito">Who We Are</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto font-playfair">
            We are an IT company committed to bridging the gap between education and professional experience. By offering top-tier internships, we help students gain the skills they need to thrive in today's fast-paced tech environment.
          </p>
        </div>

        {/* Mission Section */}
        <div className="relative bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 py-12 rounded-xl shadow-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <div className="text-6xl text-white">
              🎯
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
            <p className="text-amber-800 font-bold mb-6 font-lora">
              Our mission is to provide students with hands-on experience in the IT industry through internships that not only enhance their technical knowledge but also prepare them for real-world challenges. We believe in nurturing talent and helping students grow into confident, capable professionals.
            </p>
            <p className="text-amber-800 font-mono font-bold">
              We aim to create a learning environment that focuses on innovation, creativity, and practical experience.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-amber-500">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-amber-200"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1733315987~exp=1733319587~hmac=12863640e524cab1d96e1761a339a6c912e5e1fa2c996845b7088eca3cb22b62&w=996"
                alt="Surya Sharma"
              />
              <h4 className="text-xl font-semibold text-amber-500">
              <a href="#" target="_blank" rel="noopener noreferrer">
                  Surya Sharma
                </a>
              </h4>
              {/* <p className="text-gray-600">CEO</p> */}
              <p className="text-gray-600">Chief Executive Officer</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-amber-200"
                src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1733315882~exp=1733319482~hmac=8e79c329481fee6e9ecf70ff25a622bf70858b45ff55902557e2d507d530de8f&w=996"
                alt="Sofia"
              />
              <h4 className="text-xl font-semibold text-amber-500">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Shubham Sharma
                </a>
              </h4>
              <p className="text-gray-600">Chief Financial Officer</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-amber-200"
                src="https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?t=st=1733316056~exp=1733319656~hmac=bf2b9132e2035a1291334a9805a6f4517d70ddb10ad444233a35fb839b8ab540&w=996"
                alt="Aaradhya Dubey"
              />
              <h4 className="text-xl font-semibold text-amber-500">Arpit Dubey</h4>
              <p className="text-gray-600">Hiring manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Stats */}
      <div className="bg-amber-50 py-12 px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-500">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-500">5000+</h3>
            <p className="text-gray-600">Successful Internships</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-500">50+</h3>
            <p className="text-gray-600">On Going Projects</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-500">5+ Years</h3>
            <p className="text-gray-600">Experience in IT</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-500">98%</h3>
            <p className="text-gray-600">Intern Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
