// src/pages/Register.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Register.css';  // Add your custom styles here
import axios from 'axios';

const Register = () => {
  const initialValues = { email: '', password: '', company: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
    company: Yup.string().required('Company name is required'),
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', values);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        alert('Registration successful!');
        window.location.href = '/';
      } else {
        alert(response.data.message || 'Registration failed!');
      }
    } catch (error) {
      console.error('Error during registration', error);
      setErrors({ api: 'There was a problem with the registration.' });
    }
    setSubmitting(false);  // Stop form submission spinner if you have one
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-control">
            <label htmlFor="company">Company Name</label>
            <Field type="text" id="company" name="company" />
            <ErrorMessage name="company" component="div" />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
