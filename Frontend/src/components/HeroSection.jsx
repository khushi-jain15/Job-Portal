// src/components/HeroSection.jsx
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="py-16 px-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold font-openSans">Internships that shape your future</h2>
        <p className="text-gray-600 mt-4">"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt</p>
      </div>
    </motion.section>
  );
};

export default HeroSection;






// // src/components/HeroSection.jsx
// const HeroSection = () => {
//     return (
//       <section className="bg-gray-100 py-16 px-4" data-aos="fade-right">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Kickstart Your Career</h2>
//           <p className="text-center text-lg max-w-2xl mx-auto">
//             Job World helps you connect with top internships that shape your future career!
//           </p>
//         </div>
//       </section>
//     );
//   };
  
//   export default HeroSection;
  