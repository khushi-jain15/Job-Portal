// src/components/FeatureSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    { icon: "📚", title: "Hands-on Learning", description: "Get practical experience in real-world projects." },
    { icon: "👨‍🏫", title: "Expert Mentorship", description: "Work alongside industry experts who guide your growth." },
    { icon: "🌍", title: "Global Exposure", description: "Collaborate with teams and clients worldwide, gaining international experience." },
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 font-openSans"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Why Choose Our Internship?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
