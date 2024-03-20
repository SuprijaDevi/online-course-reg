import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Signup() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Form data
    const formData = {
      username: event.target.username.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      password: event.target.password.value,
      password1: event.target.password1.value
    };

    if (formData.password !== formData.password1) {
      setPasswordError('Passwords do not match');
      return;
    }
    setLoading(true); // Set loading state

    try {
      const response = await axios.post('http://localhost:8000/Signup', formData);
      console.log('Signup successful:', response.data);
      window.alert('Signup successful!');
      // Redirect to /home after successful signup
      navigate('/home');
    } catch (error) {
      window.alert('Signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="mobile">Ph-Number:</label>
            <input
              type="tel"
              id="mobile"
              placeholder="Ph-Number"
              name="mobile"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              name="email"
              pattern="^\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*$"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password1">Confirm Password:</label>
            <input
              type="password"
              id="password1"
              placeholder="Confirm Password"
              required
            />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p>
          <h3>
            Already have an account? <Link to="/">Login</Link>
          </h3>
        </p>
      </div>
    </div>
  );
}

export default Signup;

