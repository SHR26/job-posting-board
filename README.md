# job-posting-board

## Description

Job Posting Board is a web application that allows users to register, log in, and post job listings. The platform provides a user-friendly interface for job seekers and employers to connect.

## Features

- User Registration
- User Authentication (Login/Logout)
- Post Job Listings
- View Job Listings
- Responsive Design

## Technologies Used

- **Frontend**: React.js, Formik, Yup, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Middleware**: JWT for authentication
- **Other**: Git for version control, Postman for API testing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (either locally or using a service like MongoDB Atlas)
- Git (optional for version control)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SHR26/job-posting-board.git

2. **Navigate to the project directory**:
   cd job-posting-board

3. **Install backend dependencies**:
   cd server
   npm install

4. **Set up your environment variables**:
   Create a .env file in the server directory and add your MongoDB URI and any other necessary configurations.

5. **Run the backend server**:
   npm start

6. **Install frontend dependencies**:
   cd ../client
   npm install
   
7. **Run the Frontend Apllication**:
   npm start

8. **API Endpoints**:
   
POST /api/auth/register: Register a new user
POST /api/auth/login: Authenticate a user and get a JWT
POST /api/jobs: Post a new job listing (protected route)
GET /api/jobs: Retrieve all job listings

9. **Usage**:
    
Register a new user by navigating to the registration page.
Log in with your credentials.
Once logged in, you can post new job listings or view existing ones.

10. **License**:
    
This project is licensed under the MIT License - see the LICENSE file for details.

11. **Acknowledgements**:
https://react.dev/
https://nodejs.org/en
https://expressjs.com/
https://www.mongodb.com/
https://formik.org/
https://github.com/jquense/yup
