// src/components/RatingFeedback.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RatingFeedback = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const feedbacks = [
    { rating: "⭐⭐⭐⭐⭐", text: "The internship was excellent!", user: "Navya" },
    { rating: "⭐⭐⭐⭐", text: "Highly recommended!", user: "Arpit" },
    { rating: "⭐⭐⭐⭐⭐", text: "Amazing experience!", user: "Surya" }
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Rating & Feedback
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <p className="text-2xl font-bold mb-4">{feedback.rating}</p>
              <p className="text-gray-600 italic mb-4">"{feedback.text}"</p>
              <p className="font-semibold text-orange-500">- {feedback.user}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingFeedback;
