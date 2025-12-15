import React from "react";
import { Link } from "react-router-dom";

export default function DisplayData({ books }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Topic</th>
          <th>Format</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book._id}>
            <td>{book.booktitle}</td>
            <td>{book.author}</td>
            <td>{book.Topic}</td>
            <td>{book.formate}</td>
            <td>{book.PubYear}</td>
            <td>
              <Link to={`/edit/${book._id}`} className="btn btn-primary btn-sm mr-2">Edit</Link>
              <Link to={`/Delete/${book._id}`} className="btn btn-danger btn-sm">Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

