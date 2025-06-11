import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit to backend (optional)
    console.log(formData);
    alert("Signup successful!");
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
