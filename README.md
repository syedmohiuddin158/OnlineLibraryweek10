Online Book Library


Overview:

This is a full-stack Online Book Library application. The backend is built using Node.js, Express, and MongoDB, and the frontend is built using React. The application allows users to add, display, update, and delete books through a clean and interactive web interface.

The frontend communicates with the backend using Axios, a promise-based HTTP client that simplifies sending and receiving JSON data. We also used React Router v5.2.0 to create a single-page application (SPA) experience, allowing navigation between views without reloading the page.
During development, Thunder Client was used to test all API endpoints in the backend to ensure that the CRUD operations were working correctly before integrating with the React frontend.

Backend Setup:

Open terminal in the backend folder.

Install dependencies:
npm install

Start the backend server:
node Server.js

The backend will run on: http://localhost:5000

You can use Thunder Client or Postman to test endpoints like:

GET /allbooks – fetch all books

POST /addbooks – add a new book

POST /updatebook/:id – update an existing book

POST /deleteBook/:id – delete a book


Make sure MongoDB is running locally before starting the backend.


Frontend Setup:

Open terminal in the frontend folder.

Install dependencies:
npm install

Start the React frontend:
npm start

The frontend will run on: http://localhost:3000


Navigate through the SPA using the links:

Add a Book – form to insert new book records

Display All Books – shows all books with Edit and Delete options


Features:

. Add, update, and delete books from MongoDB.

. Display all books in a table format with all relevant fields.

. Single-page application experience using React Router.

. Communication between frontend and backend using Axios.

. Tested backend APIs using Thunder Client to verify CRUD functionality.

Notes:

. All components are React functional components using Hooks (useState, useEffect, useParams).

. The application is designed to maintain a stateful frontend synced with MongoDB backend.

. Axios handles all HTTP requests, removing the need to manually parse JSON responses.

. Make sure both backend and frontend are running simultaneously for full functionality.




