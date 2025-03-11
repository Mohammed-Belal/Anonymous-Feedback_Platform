

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from '../context/userContext';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const sendOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/send-otp`, { email });
      toast.success("OTP sent to your email.");
      setStep(2);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error sending OTP.");
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/verify-otp`, { email, otp });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      toast.success("Login successful!");
      setTimeout(() => navigate("/welcome"), 1000);
    } catch (error) {
      toast.error("Invalid OTP.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, { email, password });
      if (response.status === 200) {
        setUser(response.data.user);
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 text-center mt-2">Login to continue</p>
        {step === 1 ? (
          <form onSubmit={submitHandler} className="mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white mt-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account? <Link to="/register" className="text-purple-600">Register</Link>
            </p>
          </form>
        ) : (
          <form onSubmit={verifyOTP} className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="123456"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white mt-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Verify OTP
            </button>
          </form>
        )}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition">
            <i className="text-blue-600 ri-google-fill text-2xl"></i>
          </button>
          <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition">
            <i className="text-blue-600 ri-facebook-fill text-2xl"></i>
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" theme="light" />
    </div>
  );
};

export default Login;