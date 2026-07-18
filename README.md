Student Management REST API

A simple REST API for managing student records built with Node.js, Express.js, MongoDB, and Mongoose.

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
dotenv
CORS
Helmet
Morgan
Postman
Project Structure
student-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── student.controller.js
│
├── middleware/
│   ├── error.middleware.js
│   ├── logger.middleware.js
│   └── notFound.middleware.js
│
├── models/
│   └── student.model.js
│
├── routes/
│   └── student.routes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
