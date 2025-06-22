// src/components/WhyFusiotech.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyFusiotech = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const reasons = [
    { title: "Trusted by Students", description: "Over 10,000 students trust Job World." },
    { title: "Top-Notch Support", description: "Dedicated support 24/7 to assist with any challenges." },
    { title: "Cutting-Edge Technology", description: "Stay ahead with the latest advancements in tech." }
  ];

  return (
    <section ref={ref} className="py-16 bg-white ">
      <div className="container mx-auto text-center font-openSans">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Why Job World?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFusiotech;
