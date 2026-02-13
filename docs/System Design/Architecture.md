## Auth System Architecture :

### Overview 
The authentication system follows a **traditional JWT-based authentication flow**:

- Registration → Creates user in DB (no auto-login)
- Login → Validates user + generates JWT
- LoadUser → Validates existing token on page refresh
- Route Protection → Public & Protected routes
- Axios interceptors → Attach token + handle 401
- Redux Toolkit → Global auth state management.

### Auth Flow
```code
                   ┌─────────────────────┐
                   │      Frontend       │
                   │  (React + Redux)    │
                   └──────────┬──────────┘
                              │
                              │ 1️⃣ Register / Login
                              ▼
                   ┌─────────────────────┐
                   │     Auth Thunks     │
                   │ (Redux Toolkit)     │
                   └──────────┬──────────┘
                              │
                              │ 2️⃣ API Call (Axios)
                              ▼
                   ┌─────────────────────┐
                   │    Axios Client     │
                   │ (with Interceptors) │
                   └──────────┬──────────┘
                              │
                              │ 3️⃣ HTTP Request
                              ▼
                   ┌─────────────────────┐
                   │      Backend        │
                   │  Express Server     │
                   └──────────┬──────────┘
                              │
                              │ 4️⃣ Auth Routes
                              ▼
                   ┌─────────────────────┐
                   │  Auth Controller    │
                   └──────────┬──────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
        Register Flow                 Login Flow
        (Create User)             (Validate + JWT)
                │                           │
                ▼                           ▼
         MongoDB Database           Generate JWT Token
                                             │
                                             ▼
                                     Return Token + User
                                             │
                                             ▼
                                   Store Token (localStorage)
                                             │
                                             ▼
                                 Redux Auth State Updated
```