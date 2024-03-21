import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Form data
    const formData = {
      name: event.target.name.value,
      dob: event.target.dob.value,
      phoneNumber: event.target.phoneNumber.value,
      studentId: event.target.studentId.value,
      collegeName: event.target.collegeName.value
    };
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/Register', formData);
      console.log('Register successful:', response.data);
      window.alert('Register successful!');
      navigate('/home');
    } catch (error) {
      window.alert('Register failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signup-container">
        <h2>Register</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Student's Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Student's Name"
              name="name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              name="phoneNumber"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              placeholder="Student ID"
              name="studentId"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="collegeName">College Name:</label>
            <input
              type="text"
              id="collegeName"
              placeholder="College Name"
              name="collegeName"
              required
            />
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
