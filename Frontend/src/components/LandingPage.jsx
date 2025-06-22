// src/components/LandingPage.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();  // Hook for programmatic navigation

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { yoyo: Infinity } },
  };

  const parallaxImage = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };

  const handleGetStarted = () => {
    navigate('/internship');  // Redirect to the internships page
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mt-10">
      {/* Responsive Background Image */}
      <picture>
        <source
          srcSet="https://img.freepik.com/free-vector/choice-worker-concept-illustrated_52683-44076.jpg?t=st=1733314757~exp=1733318357~hmac=15672a171da050dec8967abd9fa4370a39c50e5d7670102ac57a0e0e40a5eab1&w=996"
          media="(min-width: 1024px)"
          style={{ opacity: 0.5 }} // Reduce opacity for large screens
        />
        <img
          src="https://img.freepik.com/free-vector/online-job-interview_23-2148612474.jpg?t=st=1733314851~exp=1733318451~hmac=23af634336e5bf79da900885da46b0b6bca153ef09790b07c56d46eedf054b46&w=996"  // Fallback image for small screens
          alt="Futuristic office with professionals working"
          className="absolute inset-0 w-full h-full object-fill"
          loading="lazy"  // Lazy load to improve performance
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Landing Page Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Main Heading */}
        <motion.h1
          className="text-6xl font-bold text-white mb-6 font-openSans"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome to the Future of Internships
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-2xl text-gray-200 mb-12"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Accelerate your career with hands-on experience and expert guidance
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-orange-600 text-white py-4 px-8 rounded-full text-xl font-semibold hover:bg-orange-500 transition duration-300"
          whileHover="hover"
          variants={buttonVariants}
          onClick={handleGetStarted}  // Trigger the navigation on button click
        >
          Get Started
        </motion.button>
      </div>

      
    </div>
  );
};

export default LandingPage;
