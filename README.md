# Dashboard Back-End

This project is a back-end application developed using TypeScript and MongoDB, aiming to enhance skills in back-end development.

## 📁 Project Structure

```
Dashboard_BackEnd/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
├── .eslintrc.js
├── .gitignore
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Technologies Used

- **TypeScript**: Provides static typing and modern JavaScript features.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB, facilitating schema definition and interaction.
- **Nodemon**: Utility that monitors for changes and automatically restarts the server.
- **ESLint**: Tool for identifying and fixing code quality issues.

## 🔧 Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/FabricioHiury/Dashboard_BackEnd.git
   cd Dashboard_BackEnd
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the necessary environment variables, such as:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The server will start on the specified port (default is 3000).

## 📌 Features

- **API Endpoints**: Provides RESTful API endpoints for managing resources.
- **Database Integration**: Connects to MongoDB for data persistence.
- **Modular Architecture**: Organized codebase with separation of concerns.
- **Development Tools**: Includes ESLint for code linting and Nodemon for automatic server restarts during development.
