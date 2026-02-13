### Overview

Retrieves the profile details for the currently authenticated user.

This endpoint is typically called after a successful login to confirm the user’s identity and fetch basic account information tied to the provided access token.

### HTTP Request

- **Method:** `GET`
    
- **URL:** `http://localhost:8000/api/v1/auth/me` (Local system)
    

### Authentication

This endpoint **requires authentication** via a Bearer token in the `Authorization` header.

``` http
Authorization: Bearer {{access_token}}

 ```

> **Note:** In this request, a sample hard-coded token is currently present in the `Authorization` header. For real usage and better security, replace it with a variable, for example: 
  

### Request Body

Although this request is saved with a sample JSON body:

``` json
{
  "email": "mike@gmail.com",
  "password": "password123"
}

 ```

`GET /api/v1/auth/me` typically **does not require a body**. The user context is derived solely from the Bearer token. The body is retained here only as sample data from the login flow.

### Successful Response (200 OK)

On success, the API returns details about the currently authenticated user. A typical response might look like:

``` json
{
  "success": true,
  "data": {
    "_id": "698eeee5c7ea090e3573ac1f",
    "name": "Mike",
    "email": "mike@gmail.com",
    "role": "user",
    "createdAt": "2024-10-01T12:34:56.789Z"
  }
}

 ```

Fields may vary depending on the backend implementation, but you can generally expect identifiers and basic profile attributes.

### Unauthorized Response (401 Unauthorized)

If the token is missing, expired, or invalid, the API will respond with a 401 status code. A typical response shape might be:

``` json
{
  "success": false,
  "error": "Not authorized to access this route"
}

```

### Usage Notes

- Ensure a valid Bearer token is present before calling this request. Commonly, a prior "Login" request will obtain a token that you can store in `{{auth_token}}`.
    
- Prefer **variables** (e.g., `{{base_url}}`, `{{auth_token}}`) instead of hard-coded values so the collection is portable across environments (local, staging, production).
    
- Example using variables:
    

``` http
GET {{base_url}}/api/v1/auth/me
Authorization: Bearer {{auth_token}}
 ```
## Notes

- This request is intended for **local development** against an auth service running on `localhost:8000`.
    
- In production, the base URL, security requirements (HTTPS, stronger passwords, etc.), and response format may differ.