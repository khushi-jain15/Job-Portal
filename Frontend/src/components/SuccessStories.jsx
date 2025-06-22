// src/components/SuccessStories.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuccessStories = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stories = [
    {
      name: 'Shristi Yadav',
      image: 'https://github.com/Fusiotech-in/Web-Images/blob/main/shristi.jpg?raw=true',
      description: 'Shristi’s dedication and hard work paid off, securing a senior position in a renowned firm.',
      college: 'NIT Andra',
    },
    
    {
      name: 'Tarun Pratap Singh',
      image: 'https://github.com/Fusiotech-in/Web-Images/blob/main/Tarun.jpg?raw=true',
      description: 'Tarun successfully pivoted to a new industry and is now a key player in a top startup.',
      college: 'IIT BHU',
    },
    {
      name: 'Shruti Saraswat',
      image: 'https://github.com/Fusiotech-in/Web-Images/blob/main/shruti.jpg?raw=true',
      description: 'Shruti transformed her career with our program and landed her dream job at a leading tech company.',
      college: 'Galgotia University',
    },
    
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="container mx-auto text-center font-openSans">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={story.image}
                alt={`Success Story ${index + 1}`}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white"
                style={{ boxShadow: '0 0 10px rgba(0, 195, 255, 0.49)' }}
              />
              <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
              <p className="text-gray-600">{story.description}</p>
              <p className="text-sm text-orange-700 mt-2 font-medium">{story.college}</p> {/* College name added */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
