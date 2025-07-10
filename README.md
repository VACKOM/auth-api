📌 ToDo API
A simple backend ToDo Management System built with Node.js, Express, MongoDB, and JWT authentication.
This project shows my ability to build secure RESTful APIs, user authentication, and CRUD operations.

🚀 Features
✅ User registration & login (with hashed passwords)
✅ JWT-based authentication stored in secure cookies
✅ Create, Read, Update, Delete (CRUD) tasks
✅ Protect routes with middleware
✅ User-specific tasks (only see your own tasks)
✅ MongoDB database with Mongoose ODM


🛠️ Tech Stack
Node.js

Express

MongoDB with Mongoose

bcryptjs for password hashing

jsonwebtoken for JWT tokens

cookie-parser for handling auth cookies

dotenv for environment variables


📂 Project Structure

AUTH-API/
├── controllers/
│   ├── authController.js
│   ├── taskController.js
├── middleware/
│   ├── auth.js
├── models/
│   ├── Task.js
│   ├── User.js
├── routers/
│   ├── authRouter.js
│   ├── taskRouter.js
├── .env
├── package-lock.json
├── package.json
├── README.md
├── server.js


⚙️ Installation

1. Clone the repo
git clone https://github.com/vackom/auth-api.git
cd auth-api

2. Install dependencies
npm install

3. Add .env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
NODE_ENV=development

4. Run the server
npm run dev
The API runs on: http://localhost:8080/


🔑 API Endpoints
| Method | Endpoint             | Description            | Auth Required |
| ------ | -------------------- | ---------------------- | ------------- |
| POST   | `/api/auth/register` | Register new user      | No            |
| POST   | `/api/auth/login`    | Login & get JWT cookie | No            |
| POST   | `/api/tasks`         | Create a new task      | ✅             |
| GET    | `/api/tasks`         | Get all tasks for user | ✅             |
| PUT    | `/api/tasks/:id`     | Update a task by ID    | ✅             |
| DELETE | `/api/tasks/:id`     | Delete a task by ID    | ✅             |


📌 How Authentication Works

When you log in, a JWT is generated and sent as a secure HttpOnly cookie.

On each request to protected routes, the cookie is automatically sent and verified by the middleware.

Only authenticated users can create, update, or delete their tasks.


✅ Future Improvements
Add input validation with express-validator

Add user password reset

Add test cases with Jest/Supertest

Deploy to Render/Heroku


✨ Author
Vida Ackom

📄 License
This project is open source for learning and demonstration purposes.

✅ Quick Start Example
1. Register a user: POST /api/auth/register
    {
    "username": "vidaackom",
    "password": "securepassword123"
    }

2. Login user: POST /api/auth/login
   Returns a cookie token.

3. Use the cookie to:
    {
    "title": "Finish my portfolio"
    }


    ## 📸 Thunder Client Test Results

Here’s proof of the working API tested with Thunder Client in VS Code.

### ✅ Register User
![Register](https://github.com/VACKOM/auth-api/blob/main/scrennshots/create-task.png)

### ✅ Login User
![Login](https://github.com/VACKOM/auth-api/blob/main/screenshots/login.png)

### ✅ Create Task
![Create Task](https://github.com/VACKOM/auth-api/blob/main/screenshots/create-task.png)

### ✅ Get Tasks
![Get Tasks](https://github.com/VACKOM/auth-api/blob/main/screenshots/get-tasks.png)

### ✅ Update Task
![Update Task](https://github.com/VACKOM/auth-api/blob/main/screenshots/update-task.png)

### ✅ Delete Task
![Delete Task](https://github.com/VACKOM/auth-api/blob/main/screenshots/delete-task.png)















