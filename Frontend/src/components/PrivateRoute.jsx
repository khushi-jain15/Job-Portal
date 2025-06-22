// src/components/PrivateRoute.jsx
import { Navigate } from 'react';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
