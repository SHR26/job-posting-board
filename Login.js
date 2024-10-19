import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Your custom styles

const Login = () => {
  const [loginError, setLoginError] = useState(''); // To capture and display login errors
  const navigate = useNavigate();

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values) => {
    try {
      // API call for login
      const response = await axios.post('/api/auth/login', values);
      
      if (response.data.success) {
        // Store token (if needed)
        localStorage.setItem('token', response.data.token);
        
        // Navigate to dashboard after successful login
        navigate('/dashboard');
      } else {
        // Show login error if credentials are wrong
        setLoginError(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      
      {/* Display login error if exists */}
      {loginError && <div className="error-message">{loginError}</div>}
      
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
