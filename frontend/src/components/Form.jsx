import axios from 'axios';
import React, { useState } from 'react';
import {toast} from 'react-toastify'


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.password) newErrors.password = 'Password is required';

    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    
    const response = await axios.post('http://localhost:5001/api/post',formData)
    console.log(response.data)
    if(!response) {
      return toast.error('Form not submited');
    }
    else{
    toast.success("Form Submitted Successfully");
    }

    setFormData({ name: '', email: '',age:'', password: '' });
    
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Full Name</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Age</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        </div>

        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Register</button>
      </form>
    </div>
  );
};

export default Form;
