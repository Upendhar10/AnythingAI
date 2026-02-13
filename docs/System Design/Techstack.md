# Teachstack Overview :

- This document explains the rationale behind the technology choices made for the **Frontend Internship Assignment**. 
- The goal was not just to build a working application, but to design it in a **professional and scalable** manner, aligned with real-world frontend engineering practices.

---

## Project Goal

The assignment focuses on evaluating:

- Frontend engineering skills
- Authentication & API integration
- Code quality and scalability
- Security best practices

Since this is a **Frontend-focused internship**, the stack was intentionally designed to **highlight frontend expertise**, while keeping the backend minimal, secure, and supportive.

---

## Frontend Technology Choices (Primary Focus)

### 1. React.js

**Why React?**

- Industry-standard library for building component-based UIs
- Strong ecosystem and community support
- Encourages reusable and maintainable UI architecture

---

### 2. TypeScript (over JavaScript)

**Why TypeScript?**

- Provides static type checking, reducing runtime errors
- Improves code readability and maintainability
- Encourages better API contracts between frontend and backend

---

### 3. Tailwind CSS

**Why Tailwind CSS?**

- Utility-first CSS enables faster UI development
- Avoids large custom CSS files
- Makes responsive design straightforward

---

### 4. React Router

**Why React Router?**

- Enables clean separation of public and private routes
- Required for implementing protected routes (authentication-based access)

**Use Case in Project:**

- Public routes: Login, Register
- Protected routes: Dashboard, Profile, Tasks

---

### 5. Axios

**Why Axios?**

- Built-in request/response interceptors
- Automatic JSON transformation
- Cleaner error handling compared to Fetch

**Usecase in Project:**

- Central Axios instance
- JWT token injected via interceptors

---

### 6. Redux Toolkit + Thunks

**Why Redux Toolkit?**

- Simplifies Redux boilerplate
- Encourages best practices by default
- Ideal for managing async server state

**Why Thunks?**

- Clean handling of async API calls
- Better separation between UI and business logic

**What Redux is used for (intentionally limited):**

- Authentication state (user, token)
- Loading and error states

---

## Backend Technology Choices (Supportive Role)

### 1. Node.js + TypeScript

**Why Node.js?**

- Seamless integration with frontend JavaScript/TypeScript
- Large ecosystem and community

**Why TypeScript on Backend?**

- Consistency across the stack
- Type-safe request/response handling


---

### 2. Express.js

**Why Express?**

- Lightweight and flexible
- Perfect for REST APIs
- Minimal abstraction, easy to reason about

---

### 3. MongoDB + Mongoose

**Why MongoDB?**

- Schema flexibility
- Fast iteration for CRUD-based applications

**Why Mongoose?**

- Schema validation
- Model-based data access

---

### 4. Authentication & Security

**bcrypt**

- Secure password hashing

**JWT + Bearer Tokens**

- Stateless authentication
- Scales well across services


---

### 5. Postman

**Why Postman?**

- API testing
- Clear API documentation
- Helps validate backend independently of frontend

---

## Deployment Choices

### Frontend: Vercel

- Optimized for React applications
- Easy CI/CD integration
- Fast global delivery

### Backend: Render

- Simple deployment for Node.js APIs
- Environment variable management

### Database: MongoDB Atlas

- Cloud-hosted, scalable MongoDB
- Secure and production-ready

---

## Final Summary

This tech stack was chosen to:

- Highlight **frontend expertise**
- Follow **industry standards**
- Ensure **security and scalability**
- Avoid unnecessary complexity

These decisions reflect not just the ability to write code, but the ability to **think like a frontend engineer working on real products**.

---
