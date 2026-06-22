# WeatherGuard Admin

WeatherGuard Admin is a minimalist invitation-based weather alert management system built with **NestJS**, **React**, **TypeScript**, **MongoDB**, and **Tailwind CSS**.

The application allows users to request access to the platform, while administrators can review, approve, or reject requests. Approved users receive simulated weather alerts generated automatically through a scheduled background task.

---

# Live Demo

Invite Request: https://weatherguard-frontend-z462.onrender.com
Admin Login: https://weatherguard-frontend-z462.onrender.com/login
Dashboard(Login first): https://weatherguard-frontend-z462.onrender.com/dashboard

---

# Tech Stack

## Backend

* NestJS
* TypeScript
* MongoDB
* Mongoose
* JWT Authentication
* Role-Based Access Control (RBAC)
* @nestjs/schedule

## Frontend

* React
* TypeScript
* Tailwind CSS
* TanStack Query (React Query)
* Axios
* React Router

---

# Features

## Authentication

* JWT-based authentication
* Secure admin login
* Protected routes
* Role-based authorization

## Invitation Workflow

Users can:

* Submit invite requests

Admins can:

* View pending requests
* Approve requests
* Reject requests

## Weather Alerts

* Automated weather alert generation using @nestjs/schedule
* Alerts generated for approved users
* Alerts stored in MongoDB
* Alerts displayed in the admin dashboard

## Dashboard

* Pending Users list
* Approved Users list
* Weather Alerts list
* User approval and rejection actions
* Real-time UI updates using React Query

---

# Architecture Decisions

The project follows a modular architecture to maintain clear separation of concerns and improve scalability.

## Backend Structure

```text
src
├── auth
├── users
├── weather
├── common
│   ├── guards
│   └── decorators
├── app.module.ts
└── main.ts
```

### Auth Module

Responsibilities:

* JWT authentication
* Login functionality
* User authorization

Keeping authentication isolated makes the codebase easier to maintain and extend.

### Users Module

Responsibilities:

* Request Invite
* Approve User
* Reject User
* User management

User-related business logic remains independent from authentication and weather functionality.

### Weather Module

Responsibilities:

* Scheduled weather alert generation
* Weather alert storage
* Weather alert retrieval

This separation allows weather functionality to evolve independently.

### Common Module

Responsibilities:

* Guards
* Role decorators
* Shared authorization logic

Reusable functionality is centralized to avoid duplication.

---

# Frontend Structure

```text
src
├── api
├── hooks
├── pages
├── routes
└── components
```

### API Layer

Contains Axios configuration and API communication logic.

### Hooks

Contains React Query hooks for:

* Fetching pending users
* Fetching approved users
* Fetching alerts
* Approving users
* Rejecting users

This keeps API state management separate from UI components.

### Pages

Contains:

* Login Page
* Invite Page
* Dashboard Page

Each page focuses only on presentation and user interaction.

### Components

Reusable UI components can be added here as the application grows.

---

# Database Design

## User Schema

```ts
{
  name: string;
  email: string;
  password?: string;
  role: string;
  status: string;
}
```

### Status Values

* pending
* approved
* rejected

### Role Values

* admin
* user

---

## Weather Alert Schema

```ts
{
  userId: string;
  email: string;
  alert: string;
}
```

The schema is intentionally simple to support quick iteration while remaining scalable for future enhancements.

---

# Why This Structure?

The architecture was designed around three principles:

### Separation of Concerns

Controllers handle requests.

Services contain business logic.

Database schemas define persistence.

This keeps responsibilities clearly defined.

### Maintainability

Features are organized into independent modules.

Changes to weather functionality do not affect authentication or user management.

### Startup Mindset

The goal was to create a clean and maintainable solution without introducing unnecessary complexity.

The implementation prioritizes:

* Simplicity
* Readability
* Scalability
* Fast development

---

# API Endpoints

## Authentication

POST /auth/login

---

## Users

POST /users/request-invite

GET /users/pending

GET /users/approved

PATCH /users/:id/approve

PATCH /users/:id/reject

---

## Weather

GET /weather/alerts

---

# Running Locally

## Backend

```bash
cd backend

npm install

npm run start:dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Environment Variables

Backend .env

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET
```

---

# Default Admin Credentials

```text
Email: admin@gmail.com

Password: admin123
```

---

# Future Improvements

* Email notifications
* Real weather API integration
* Pagination and filtering
* Audit logging
* User profile management
* Alert severity levels
* Advanced RBAC

-

Thank you for reviewing this project.
