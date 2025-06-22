// src/components/HappyFaces.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HappyFaces = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const images = [
    'https://github.com/Fusiotech-in/Web-Images/blob/main/student1.jpg?raw=true',
    'https://github.com/Fusiotech-in/Web-Images/blob/main/student10.jpg?raw=true',
    'https://github.com/Fusiotech-in/Web-Images/blob/main/student2.jpg?raw=true',
    'https://github.com/Fusiotech-in/Web-Images/blob/main/student3.jpg?raw=true',
    'https://github.com/Fusiotech-in/Web-Images/blob/main/student4.jpg?raw=true',
    'https://github.com/Fusiotech-in/Web-Images/blob/main/student5.jpg?raw=true',
    'https://github.com/Fusiotech-in/Web-Images/blob/main/student6.jpg?raw=true',
    'https://github.com/Fusiotech-in/Web-Images/blob/main/student7.jpg?raw=true',
    // 'https://github.com/Fusiotech-in/Web-Images/blob/main/student8.jpg?raw=true',
    // 'https://github.com/Fusiotech-in/Web-Images/blob/main/student9.jpg?raw=true',
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-100 px-2  font-openSans">
      <div className="container mx-auto text-center" style={{ maxWidth: '1200px' }}>
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Happy Faces
        </motion.h2>
        <div
          className="grid gap-4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns
            gridAutoRows: '1fr', // ensure grid items expand to fill space
            height: '100%',
            maxHeight: '700px', // control maximum height
          }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{ width: '100%', height: '100%' }}
            >
              <img
                src={src}
                alt={`Happy Face ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyFaces;
