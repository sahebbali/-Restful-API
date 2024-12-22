Product Management API with Authentication and RBAC
This project is a RESTful API for managing products, including features for user authentication, authorization, and role-based access control (RBAC). The API is built using Node.js, Express, MongoDB, and JSON Web Tokens (JWT).

Features
Product Management: Endpoints for retrieving, creating, updating, and deleting products.
User Authentication: User registration and login using JWT for securing endpoints.
Role-Based Access Control (RBAC): Admin users can create, update, and delete products, while regular users can only view products.
Technologies Used
Node.js: JavaScript runtime for building the server.
Express.js: Web framework for creating RESTful APIs.
MongoDB: NoSQL database for storing products and user data.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
JWT (JSON Web Token): For authentication and securing routes.
bcryptjs: For hashing passwords.
express-validator: Middleware for validating request bodies.
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
MongoDB (local or cloud instance)
Postman or any other API testing tool
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/sahebbali/-Restful-API
Navigate to the project directory:
bash
Copy code
cd product-management-api
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory and add the following:
env
Copy code
MONGO_URI=mongodb://localhost:27017/product_management
JWT_SECRET=your_jwt_secret_key
PORT=2476
Start the server:
bash
Copy code
node index.js
The server will start at http://localhost:2477.

API Endpoints

1. User Authentication
   Register a User
   POST /register
   Request Body:
   json
   Copy code
   {
   "username": "johndoe",
   "email": "john@example.com",
   "password": "password123",
   "role": "User" // or "Admin"
   }
   Login
   POST /login
   Request Body:
   json
   Copy code
   {
   "email": "john@example.com",
   "password": "password123"
   }
   Response:
   json
   Copy code
   {
   "token": "your_jwt_token"
   }
2. Product Management (Protected Routes)
   Get All Products
   GET /products
   No authentication required.
   Get Product by ID
   GET /products/{id}
   No authentication required.
   Create a Product (Admin Only)
   POST /products
   Requires Admin role.
   Request Body:
   json
   Copy code
   {
   "name": "Product Name",
   "description": "Product Description",
   "price": 100.0,
   "category": "Category Name",
   "inStock": true
   }
   Update a Product (Admin Only)
   PUT /products/{id}
   Requires Admin role.
   Delete a Product (Admin Only)
   DELETE /products/{id}
   Requires Admin role.
   Authentication & Authorization Strategy
   JWT Authentication: Upon successful login, a JWT token is issued, which is used to authenticate subsequent requests. The token must be included in the Authorization header as Bearer <token>.
   Role-Based Access Control (RBAC): Users have roles (Admin or User). Only Admins can create, update, and delete products, while regular users can view products.
   Middleware
   auth: Middleware for checking if the user is authenticated via a JWT.
   role: Middleware for checking the user’s role (Admin or User) to grant or restrict access to specific routes.
   Running Tests
   You can test the API using Postman or any other API client by hitting the endpoints mentioned above.

For the protected routes, include the JWT token in the Authorization header:

makefile
Copy code
Authorization: Bearer <your_token>
License
This project is licensed under the MIT License.

This should give a clear overview of the project structure and functionality. You can replace https://github.com/sahebbali/-Restful-API.git with your actual repository URL if you're hosting the code on GitHub or another platform.
