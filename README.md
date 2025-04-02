# Forum API

A RESTful API for a forum application built with Node.js, Hapi.js, and PostgreSQL.

## Tech Stack

- **Node.js** - Runtime environment
- **@hapi/hapi** - Web framework
- **@hapi/jwt** - JWT authentication
- **PostgreSQL** - Database
- **node-pg-migrate** - Database migration tool
- **Jest** - Testing framework
- **ESLint** - Code linting
- **bcrypt** - Password hashing
- **nanoid** - ID generation
- **instances-container** - Dependency injection

## Features

- User Management
  - User registration
  - User authentication (JWT)
- Thread Management
  - Create threads
  - View thread details
  - List threads
- Comment System
  - Add comments to threads
  - Reply to comments
  - Delete comments

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (copy `.env.example` to `.env` and adjust values)
4. Run database migrations:
   ```bash
   npm run migrate up
   ```

### Running the Application

- Development mode:
  ```bash
  npm run start:dev
  ```
- Production mode:
  ```bash
  npm start
  ```

### Testing

- Run all tests:
  ```bash
  npm test
  ```
- Run tests with coverage:
  ```bash
  npm run test:watch
  ```

## API Documentation

API documentation is available in the Postman collection located in the `docs` folder.

## Project Structure

```
├── config/          # Configuration files
├── docs/            # API documentation
├── migrations/      # Database migrations
├── src/
│   ├── Applications/    # Application business rules
│   ├── Commons/         # Shared resources
│   ├── Domains/         # Enterprise business rules
│   ├── Infrastructures/ # External interfaces
│   ├── Interfaces/      # Interface adapters
│   └── app.js          # Application entry point
└── tests/          # Test helpers
```

## License

ISC