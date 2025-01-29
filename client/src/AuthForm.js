import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthForm = () => {
  const [mode, setMode] = useState('login'); // 'login', 'signup', or 'forgotPassword'
  const [formData, setFormData] = useState({ email: '', name: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (mode === 'signup') {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required.';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required.';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters.';
      }
    }

    if (mode === 'login') {
      if (!formData.password) {
        newErrors.password = 'Password is required.';
      }
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear errors on user input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    let url;
    if (mode === 'login') {
      url = 'http://localhost:5000/api/login';
    } else if (mode === 'signup') {
      url = 'http://localhost:5000/api/signup';
    } else if (mode === 'forgotPassword') {
      url = 'http://localhost:5000/api/forgot-password';
    }

    try {
      const response = await axios.post(url, formData);

      if (response.data.success) {
        if (mode === 'login') {
          navigate('/home'); // Redirect to home after login
        } else if (mode === 'signup') {
          setMode('login'); // Switch to login mode after signup
          alert('Signup successful! Please log in.');
        } else if (mode === 'forgotPassword') {
          alert('Password reset email sent! Please check your inbox.');
          setMode('login');
        }
      } else {
        alert(response.data.message); // Display error from backend
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h3>
        {mode === 'login' && 'Login'}
        {mode === 'signup' && 'Sign Up'}
        {mode === 'forgotPassword' && 'Forgot Password'}
      </h3>
      <form onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
        )}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        {mode !== 'forgotPassword' && (
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>
        )}
        <button type="submit" className="btn btn-primary w-100">
          {mode === 'login' && 'Login'}
          {mode === 'signup' && 'Sign Up'}
          {mode === 'forgotPassword' && 'Reset Password'}
        </button>
        {mode === 'login' && (
          <button
            type="button"
            className="btn btn-link mt-2"
            onClick={() => setMode('forgotPassword')}
          >
            Forgot Password?
          </button>
        )}
        {mode === 'forgotPassword' && (
          <button
            type="button"
            className="btn btn-link mt-2"
            onClick={() => setMode('login')}
          >
            Back to Login
          </button>
        )}
        <button
          type="button"
          className="btn btn-link mt-2"
          onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
        >
          {mode === 'login' ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
