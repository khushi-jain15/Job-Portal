import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminLogin from './pages/Login';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Internship from './pages/Internship';
import Blogs from './pages/Blogs';
import About from './pages/About';
// import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SubscribePopup from './components/SubscribePopup';
import TrozonHorse from './pages/TrozonHorse';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/blogs" element={<Blogs /> } />
          <Route path="/about" element={<About />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Lowercased path */}
          <Route path="/terms" element={<TermsOfService />} /> {/* Lowercased path */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          <Route path="/trozonhorseinstallnow" element={<TrozonHorse />} />
          {/* Uncomment below line if PrivateRoute is ready for authentication */}
          {/* <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> */}
          
        </Routes>
        <Footer />
        <SubscribePopup />
      </AuthProvider>
    </Router>
  );
};

export default App;

