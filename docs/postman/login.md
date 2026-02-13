## Login 

## Overview :

Authenticate a user and obtain an access token for subsequent requests.
- **Method:** `POST`
- **URL:** `http://localhost:8000/api/v1/auth/login`
- **Auth type:** Request body (email + password)

### Request Body
Send a JSON object with the following fields:
```json
{
  "email": "mike.tyson@gmail.com",
  "password": "123456789"
}

 ```

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `email` | string | Yes | User’s registered email address. | `"mike.tyson@gmail.com"` |
| `password` | string | Yes | User’s account password (plain text in transit over HTTPS). | `"123456789"` |

> Note: Other valid combinations (depending on your backend data) may include: 


### Successful Response

On success, the API should return:

- **Status:** `200 OK` (or `201 Created` depending on your implementation)
    
- **Body:** Typically includes:
    
    - An access token (e.g., JWT)
        
    - Basic user profile details
        

Example (illustrative):

``` json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI...",
  "user": {
    "id": "123",
    "email": "mike.tyson@gmail.com",
    "fullName": "Mike Tyson"
  }
}

 ```

You would then use the token in subsequent requests as:

``` http
Authorization: Bearer <token>

 ```

### Error Responses

Common failure cases:

- **400 Bad Request**
    
    - Missing or invalid `email` / `password` format.
        
    - { "success": false, "message": "Email and password are required"}
        
- **401 Unauthorized**
    
    - Email not found or password incorrect.
        
    - { "success": false, "message": "Invalid email or password"}
        

### Usage in Auth Flow

1. Call this **Login** endpoint with valid `email` and `password`.
    
2. Store the returned access token in a Postman variable (e.g., `{{authToken}}`).
    
3. Authorization: Bearer `{{authToken}}`

## Notes

- This request is intended for **local development** against an auth service running on `localhost:8000`.
    
- In production, the base URL, security requirements (HTTPS, stronger passwords, etc.), and response format may differ.