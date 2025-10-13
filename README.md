# Workflow repository Course Assignment

## Assignment focus

The goal of this assignment was to apply the skills and knowledge gained during the Workflow course to enhance the quality of a website. This included writing unit and end-to-end (E2E) tests and configuring tools to automatically detect and fix mistakes.

## Tech stack & tools

- HTML, CSS, JavaScript
- Tailwind CSS
- ESLint
- Prettier
- Husky
- Vitest
- Playwright

## Project set up

### 1. Installation

- Clone repository:

```bash
git clone https://github.com/martir2109/workflow-repo-ca.git
```

### 2. Navigate to project directory

```bash
cd workflow-repo-ca
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run project

Run project with vite:

```bash
npm run dev
```

or with live server

### 5. Run tests

**Run all tests:**

```bash
npm run test
```

**Run unit test:**

```bash
npm run test:unit
```

**Run e2e test:**

```bash
npm run test:e2e
```

## Pre-commit hooks

**Install hooks:**

Install pre-commit hooks to ensure linting and formatting before commit.

```bash
npx husky install
```

## 6. Environment variables

1. Create a .env file in the root of the project
2. Add the following to the .env file:

```env
   TEST_USER_EMAIL=your-email-here
   TEST_USER_PASSWORD=your-password-here
```

3. Add the .env file to .gitignore if it is not already in there.

## Author

👤 martir2109
