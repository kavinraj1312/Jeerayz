import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../components/Authcontext/Authcontext';
import './Signup.css';

const Signup = () => {
  const { url } = useContext(Authcontext); // Accessing URL from context
  const [data, setData] = useState({
    name: '',
    password: '',
    secretkey: '',
  });

  const navigate = useNavigate(); // Using hook to navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: data.name,
      password: data.password,
      secretkey: data.secretkey,
    };

    // Corrected axios call
    axios
      .post(`${url}/solar/signup`, formData)
      .then((res) => {
        setData({ name: '', password: '', secretkey: '' });
        navigate('/admin'); // Navigate after successful signup
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='signup'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={data.name}
          placeholder='Enter your name'
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={data.password}
          placeholder='Enter your password'
          onChange={handleChange}
          required
        />
        <label htmlFor='secretkey'>SecretKey</label>
        <input
          type='password'
          name='secretkey'
          value={data.secretkey}
          placeholder='Enter the secretkey'
          onChange={handleChange}
          required
        />
        <button type='submit'>Sign Up</button>
        <Link to='/login'>Have an Account</Link>
      </form>
    </div>
  );
};

export default Signup;
