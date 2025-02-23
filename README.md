# 📚Nyenyeri Book Hub: 

![Screenshot 2025-02-23 185138](https://github.com/user-attachments/assets/c4bedb63-446f-4678-a195-48b9b9dcce8e)


## Overview
Nyenyeri Book Hub is a web application designed to help users discover and browse books. The app allows users to search, filter, and sort books based on criteria such as author or  published year. It uses **React** with **TypeScript** for the front end and a **Node.js** backend API to manage book data. 

This project demonstrates the integration of front and backend technologies to build a full-stack application. It also includes plans for user authentication and authorization in the future.

## Project Goals

- **Frontend:**
 - User-friendly interface for browsing books.
- Filtering and searching books by various criteria (Title, author, published year, etc.).
  - A responsive layout for different screen sizes.
  - Future support for user accounts and book ratings.

- **Backend:**
  - A RESTful API for managing book data.
  - Data storage and retrieval (using MongoDB).

## Technical Specifications

### Frontend (React with TypeScript)

- **React Components:** Used for displaying book listings, book details, and filter options.
- **TypeScript:** Provides type safety and improves maintainability.
- **State Management:** Context API or Redux for managing the state ( user interactions, filters).
- **UI Library:** Material-UI to enhance the user interface.
- **Responsive Design:** Adapts to various screen sizes for a seamless experience.

### Backend (Node.js)

- **API Framework:** RESTful API built with **Node.js**.
- **Database:** MongoDB for storing and retrieving book data.
- **Authentication & Authorization:** Will be implemented in the future for user accounts.
  
- ### API Documentation & Testing
  
- **Swagger:** The API is documented using **Swagger** for easy and interactive exploration. It allows testing endpoints directly from the browser.

### Endpoints for Book Data

#### GET /api/books
Fetch a list of books with optional filters (e.g., genre, author).
#### GET /api/books/{id}
Fetch details of a specific book.
#### POST /api/books
Add a new book (admin functionality).
#### PUT /api/books/{id}
Update a book (admin functionality).
#### DELETE /api/books/{id}
Delete a book (admin functionality).

**Postman:** Postman is also used to test the API endpoints simplifying the process of making requests to the API.

### Key Features
- **📚 Book Listings:** Browse a catalog of books.
- **🔍 Search & Filter:** Filter books by genre, author, or publication date.
- **⚖️ Sorting:** Sort books by rating, publication date, or other criteria.
- **🔢 Pagination:** Efficiently handle large sets of book listings.
- **🔐 User Authentication (Planned):** Future implementation for user accounts and ratings.
- **📝 Swagger API Documentation**

## Installation & Setup

### Prerequisites

- **Node.js** (for backend)
- **MongoDB** (for the database)
- **React** with **TypeScript** for frontend development
- **npm**  as the package manager

### Steps

1. **Clone the repository:**

```bash
   git clone https://github.com/yourusername/summative-a-react-discovery-app-n-uwayo.git

            cd book-hub-backend or book-frontend
```

2.**Configure Environment Variables**

Create a *.env* file in the backend root folder and add:
 
 ```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
2. **Install dependencies**

 ```bash
   npm install
   ``` 

3. **Start the development server**

 ```bash
   npm run dev
   ```
## Development

```bash
# Run development server
npm run dev
```

```bash
# Build for production
npm run build
```

```bash
# Run tests
npm test
```

## Contributing
Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature`)
3. Commit your changes (`git commit -m 'Add '`)
4. Push to the branch (`git push origin feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. For details, see the [LICENSE](LICENSE) file.

Made by [Noella Uwayo](https://github.com/n-uwayo)
