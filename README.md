## Anything.ai Assignment for Frontend Developer

## 📌 Project Overview

This is a frontend focused full-stack web application built with:

* **Frontend:** React (with TypeScript)
* **Backend:** Node.js + Express
* **Authentication:** JWT-based authentication
* **Database:** MongoDB (Atlas)
* **Deployment:** Frontend : Vercel / Backend : Render

The application allows users to register, login, and manage tasks through a responsive dashboard.

---

# ✨ Features

## 🔐 Authentication

* User registration
* User login
* JWT token generation
* Protected routes
* Password hashing (secure storage)
* Logout functionality

---

## 📊 Dashboard

* Responsive UI
* View all tasks
* Update existing tasks
* Search & filter tasks 

---

## 🔄 Frontend–Backend Integration

* RESTful API communication
* Token-based authentication using Authorization headers
* Proper error handling for failed requests
* Environment-based API configuration

---

# 🏗 Project Structure

## 📁 Frontend

```
src/
 ├── api/
 ├── app/
 ├── assets/
 ├── config/
 ├── features/
 ├── pages/
 ├── layouts/
 ├── App.tsx
 ├── index.css
 └── main.tsx
```

* Reusable components
* Type-safe models using TypeScript
* Clean separation of concerns

## 📁 Backend

```
src/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── utils/
 ├── app.ts
 ├── constants.ts
 └── index.ts
```

* Modular routing
* JWT middleware for route protection
* Centralized error handling
* Environment variable configuration

---

# 🔒 Security Practices

* Password hashing before database storage
* JWT validation middleware
* Protected API routes
* Input validation using RHF
* Environment variables for secrets

---

# 📬 API Documentation

[Postman docs](./docs/postman/) are included in the repository for testing all endpoints.

---

# 🛠 Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone <your-repo-link>
```

## 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file ( refer to sample env file):

```
PORT=
JWT_SECRET=
DATABASE_URL=
```

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
---

Please refer to [docs](./docs/) folder for additional details of this project.