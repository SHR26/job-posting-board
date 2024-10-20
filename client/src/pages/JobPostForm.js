// src/pages/JobPostForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './JobPostForm.css';

const JobPostForm = () => {
  const initialValues = {
    title: '',
    description: '',
    experienceLevel: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    experienceLevel: Yup.string().required('Required'),
  });

  const onSubmit = async (values) => {
    // Get the JWT token from localStorage or wherever you store it after login
    const token = localStorage.getItem('token');
  
    try {
      // Send a POST request to the backend to create a new job
      const response = await axios.post('http://localhost:5000/api/jobs', values, {
        headers: {
          Authorization: `Bearer ${token}`,  // Include JWT token for authentication
          'Content-Type': 'application/json'
        }
      });
  
      // If the request is successful, handle success (you can redirect or show a message)
      console.log('Job posted successfully:', response.data);
      // Example: Redirect or show success message
      alert('Job posted successfully');
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Error posting job:', error.response ? error.response.data : error.message);
      alert('Error posting job, please try again.');
    }
  };


  return (
    <div className="jobpost-form-container">
      <h1 className="jobpost-form-title">Post a Job</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="jobpost-form-group">
            <label className="jobpost-form-label" htmlFor="title">Job Title</label>
            <Field className="jobpost-form-input" type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div className="jobpost-form-group">
            <label className="jobpost-form-label" htmlFor="description">Job Description</label>
            <Field  as="textarea" className="jobpost-form-input" id="description" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>

          <div className="jobpost-form-group">
            <label className="jobpost-form-label" htmlFor="experienceLevel">Experience Level</label>
            <Field as="select" className="jobpost-form-input" id="experienceLevel" name="experienceLevel">
              <option value="">Select experience level</option>
              <option value="Entry">Entry Level</option>
              <option value="Mid">Mid Level</option>
              <option value="Senior">Senior Level</option>
            </Field>
            <ErrorMessage name="experienceLevel" component="div" />
          </div>

          <button className="jobpost-form-button" type="submit">Post Job</button>
        </Form>
      </Formik>
    </div>
  );
};

export default JobPostForm;
