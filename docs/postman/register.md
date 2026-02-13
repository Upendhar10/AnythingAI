## Overview

User registration endpoint for the local authentication service.

Use this endpoint to create a new user account in the auth service running on `localhost`. On success, the service typically persists the user and may return user details and/or an auth token (implementation-specific).

---

## HTTP Request

- **Method:** `POST`
    
- **URL:** `http://localhost:8000/api/v1/auth/register`
    

This endpoint is usually called from a client application (web, mobile, or backend) when a new user signs up.

---

## Request Body

Send a JSON object in the request body with the following fields:

``` json
{
  "fullName": "Mike Tyson",
  "email": "mike@gmail.com",
  "password": "password123"
}

 ```

### Fields

- `fullName` `string` **(required)**  
    The user's full display name. Example: `"Mike Tyson"`.
    
- `email` `string` **(required)**  
    The user's email address, used as a unique login identifier. Example: `"mike@gmail.com"`.
    
- `password` `string` **(required)**  
    The user's plaintext password to be hashed and stored securely by the server. Example: `"password123"`.
    

> Make sure to set the **Body** type to `raw` and **format** to `JSON` when sending this request. 
  
---

## Typical Responses

Actual response formats may vary depending on your implementation, but common patterns include:

### 201 Created (Success)

User was registered successfully.

Example (illustrative):

``` json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "uuid-or-id",
    "fullName": "Mike Tyson",
    "email": "mike@gmail.com"
  }
}

 ```

### 400 Bad Request

The request body is invalid or missing required fields.

Example (illustrative):

``` json
{
  "success": false,
  "message": "Validation error",
  "errors": {
    "email": "Email is required"
  }
}

 ```

### 409 Conflict

A user with the same email already exists.

Example (illustrative):

``` json
{
  "success": false,
  "message": "User with this email already exists"
}

 ```

### 500 Internal Server Error

An unexpected error occurred on the server.

``` json
{
  "success": false,
  "message": "Internal server error"
}

 ```

---

## Notes

- This request is intended for **local development** against an auth service running on `localhost:8000`.
    
- In production, the base URL, security requirements (HTTPS, stronger passwords, etc.), and response format may differ.