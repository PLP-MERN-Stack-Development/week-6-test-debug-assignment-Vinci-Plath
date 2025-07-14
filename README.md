# MERN Testing & Debugging Assignment – Student Submission

## Overview
This project demonstrates comprehensive testing and debugging for a MERN stack application. All requirements for unit, integration, and end-to-end (E2E) testing, as well as debugging techniques, have been implemented and documented below.

## What I Did
- Set up Jest for both client and server
- Used React Testing Library for client components and hooks
- Used Supertest and MongoDB Memory Server for server API integration tests
- Set up Cypress for E2E user flow testing
- Implemented a React error boundary and a global Express error handler
- Achieved 100% code coverage (see screenshot below)

## How to Run Everything
- **Install dependencies:**
  ```sh
  pnpm install
  ```
- **Run all tests:**
  ```sh
  pnpm test
  ```
- **Run only unit tests:**
  ```sh
  pnpm test:unit
  ```
- **Run only integration tests:**
  ```sh
  pnpm test:integration
  ```
- **Run E2E tests (Cypress):**
  ```sh
  pnpm test:e2e
  ```
- **Generate coverage report:**
  ```sh
  pnpm test -- --coverage
  ```
  Then open `coverage/lcov-report/index.html` in your browser.

## Debugging Features
- **Client:**
  - Error boundary in `client/src/components/ErrorBoundary.jsx` catches and displays UI errors
  - Used browser dev tools for inspecting React components and network requests
- **Server:**
  - Global error handler in `server/src/middleware/errorHandler.js` logs and returns errors
  - Used `console.log` and breakpoints for server debugging

## Coverage
- Achieved 100% code coverage for all tested files
- ![Coverage Report](coverage-summary.png)

## Project Structure (Key Parts)
```
client/
  src/components/         # React components (Button, ErrorBoundary)
  src/hooks/              # Custom React hooks (useCounter)
  src/tests/unit/         # Unit tests for components and hooks
  src/tests/integration/  # Integration tests for API/component interaction
  App.jsx                 # Main app with error boundary and button
  cypress/                # Cypress E2E tests
server/
  src/app.js              # Express app
  src/utils.js            # Example server utility
  src/middleware/         # Error handler middleware
  tests/unit/             # Unit tests for utils and middleware
  tests/integration/      # Integration test for /api/data
```

## Notes
- All tests pass and coverage is complete.
- See the code and comments for further details on testing and debugging approaches.
- If you have any questions, please check the test files and the coverage report for specifics. 