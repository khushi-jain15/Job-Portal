# 💼 Job Portal Application

A modern **Job Portal Web Application** built using the **MERN Stack (MongoDB, Express.js, React, Node.js)** with advanced features such as job listings, resume uploads, user authentication, machine learning recommendations, and dynamic UI management.

## 🚀 Features

- 👤 **User Authentication**
  - Sign Up / Login (Job Seekers & Recruiters)
  - Role-based dashboard access

- 📝 **Job Management**
  - Recruiters can **post, edit, delete jobs**
  - Job Seekers can **view and apply** to jobs

- 📄 **Resume Upload & Profile Building**
  - Upload resumes in PDF format
  - Add skills, education, and experience

- 🔍 **Smart Search & Filters**
  - Filter jobs by role, location, salary, and skills

- 🧠 **ML-Based Career Suggestions**
  - Machine Learning engine for recommending jobs based on profile and preferences

- 📊 **Admin Dashboard**
  - View total users, jobs, and analytics
  - Manage reported listings and user accounts

## 🛠 Tech Stack

| Frontend        | Backend       | Database    | Other Tools & Libraries        |
|-----------------|---------------|-------------|--------------------------------|
| React.js        | Node.js       | MongoDB     | Redux Toolkit, Axios, Tailwind CSS |
| React Router    | Express.js    | Mongoose    | Cloudinary (image upload), JWT Auth |
| Framer Motion   | Nodemailer    |             | Multer, Bcrypt.js              |

## 📁 Folder Structure
job-portal/
├── client/ # React Frontend
│ ├── components/
│ ├── pages/
│ └── redux/
├── server/ # Node.js Backend
│ ├── routes/
│ ├── controllers/
│ └── models/
└── README.md


## ⚙️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/job-portal.git
   cd job-portal
   cd server
npm install
npm start

cd client
npm install
npm run dev

📈 Future Enhancements
Chat system between job seeker and recruiter

Notification system (email/SMS)

Resume parsing using AI

Job recommendation engine enhancement
