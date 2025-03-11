
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../Context/userContext';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { setUser } = React.useContext(UserDataContext);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
      toast.error('All fields are required.', { position: 'top-right', theme: 'colored' });
      return false;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.', { position: 'top-right', theme: 'colored' });
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newUser = { name, email, password };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        toast.success('Registration successful!', { position: 'top-right', theme: 'colored' });
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.', { position: 'top-right', theme: 'colored' });
    }
    
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300 px-4"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-300"
      >
        <h1 className="text-center text-2xl font-bold text-gray-800">Create an Account</h1>
        <form onSubmit={submitHandler} className="mt-6">
          <div className="space-y-4">
            <motion.input 
              whileFocus={{ scale: 1.05 }}
              type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800" required 
            />
            <motion.input 
              whileFocus={{ scale: 1.05 }}
              type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800" required 
            />
            <motion.input 
              whileFocus={{ scale: 1.05 }}
              type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800" required 
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="w-full mt-6 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Register
          </motion.button>
        </form>
        <p className="text-center mt-4 text-gray-700">Already have an account? <Link to="/login" className="text-blue-600">Login here</Link></p>
        <ToastContainer />
      </motion.div>
    </motion.div>
  );
};

export default Register;






