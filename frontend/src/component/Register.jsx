import React, { useState } from 'react';
import './Register.css'; 
import axios from 'axios';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', userData);

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error registering user:', error.response.data); // Handle error response
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="form-title">Create an Account</h2>
        <form onSubmit={registerUser}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" name="name" value={userData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" name="phone" value={userData.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name="address" value={userData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={userData.password} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary btn-submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
