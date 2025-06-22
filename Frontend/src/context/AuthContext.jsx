// src/context/AuthContext.jsx
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    if (email && password) {
      try {
            await axios.post('http://localhost:3000/login', {
          email,
          password,
        });

        setIsAuthenticated(true);
        navigate('/admin');
      } catch (err) {
        alert('Error occurred');
        console.log(err);
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = async () => {
    try {
      await axios.get('http://localhost:3000/logout');
      
      setIsAuthenticated(false);
      navigate('/');
    } catch (err) {
      alert('Error occurred during logout');
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
