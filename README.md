

A **Database Management System (DBMS) project** developed to manage student-teacher evaluation data through a backend application connected to a PostgreSQL database.

##  Overview

The project provides a backend system for handling student-teacher evaluation information in a structured database environment.

The project is built using **Node.js and Express.js** for the backend and **Neon Serverless PostgreSQL** for database management. It uses environment variables for database configuration and CORS to support communication between different application origins.

This project was developed as an academic DBMS project to demonstrate practical use of database connectivity, backend APIs, and relational database concepts.

##  Technologies Used

* **Node.js** – Backend runtime
* **Express.js** – Web framework for building the backend
* **PostgreSQL** – Relational database
* **Neon** – Serverless PostgreSQL database
* **@neondatabase/serverless** – Database connectivity
* **CORS** – Cross-origin request handling
* **dotenv** – Environment variable management
* **Nodemon** – Automatic server restart during development

##  Project Structure

```text
dbms-project/
│
├── backend/
│   └── server.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

##  Installation

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd dbms-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project directory and add your Neon PostgreSQL connection string:

```env
DATABASE_URL=your_neon_database_url
```

> Do not upload the `.env` file to GitHub because it may contain sensitive database credentials.

##  Running the Project

### Development Mode

```bash
npm run dev
```

This starts the backend using **Nodemon**, which automatically restarts the server when changes are made.

### Normal Start

```bash
npm start
```

The project is configured to start the backend using `node server.js`.

##  Database

The project uses **Neon Serverless PostgreSQL** as its database.

The application connects to the database using:

```text
@neondatabase/serverless
```

The database connection is managed through environment variables using `dotenv`.

##  Application Flow

```text
Student / User
      ↓
Backend API
      ↓
Express.js
      ↓
Neon PostgreSQL
      ↓
Database Results
      ↓
API Response
```

##  NPM Scripts

| Command       | Description                           |
| ------------- | ------------------------------------- |
| `npm install` | Install project dependencies          |
| `npm run dev` | Start development server with Nodemon |
| `npm start`   | Start server with Node.js             |

##  Security

* Database credentials are stored in environment variables.
* `.env` files are excluded from Git.
* Sensitive configuration should not be committed to the repository.
* Database access is handled through the PostgreSQL connection.


##  Academic Project

This project was developed as a **Database Management Systems (DBMS) course project** to apply database and backend development concepts in a practical application.

### Main Concepts

* Database management
* PostgreSQL
* Server-side development
* Express.js
* Database connectivity
* API-based backend
* Environment configuration



