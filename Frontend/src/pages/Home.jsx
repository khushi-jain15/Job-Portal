// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import LandingPage from '../components/LandingPage';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import WhyFusiotech from '../components/WhyFusiotech';
import HappyFaces from '../components/HappyFaces';
import SuccessStories from '../components/SuccessStories';
import RatingsFeedback from '../components/RatingFeedback';
import Loading from '../components/Loading'; // Import Loading component
import Error from '../components/Error'; // Import Error component

const Home = () => {
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

  if (loading) return <Loading />; // Use Loading component
  if (error) return <Error message={error.message} />; // Use Error component

  return (
    <div className='font-playfair'>
      <LandingPage />
      <HeroSection />
      <FeatureSection />
      <WhyFusiotech />
      <HappyFaces />
      <SuccessStories />
      <RatingsFeedback />
    </div>
  );
};

export default Home;
