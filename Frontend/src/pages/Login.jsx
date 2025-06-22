// src/pages/Login.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div 
      className="flex items-center justify-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-orange-light-background-atom-science-design-vector-illustration_1182-2378.jpg?t=st=1733316213~exp=1733319813~hmac=575dde7e72e4a0fc244e08b2572aa6efcebd79a687deb43b1a731f38a5937ba7&w=900')" }}  // Add your image path here
    >
      <form
        onSubmit={handleLogin}
        className="bg-white bg-opacity-90 p-6 rounded shadow-md w-96"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/foam-texture_23-2147927809.jpg?t=st=1733316274~exp=1733319874~hmac=8d3e806a6fefd0e368d23b154f835e0d32d450c5f204eb2f8b5abd48875e08d2&w=996')" }}  // Add your block image path here
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-amber-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
