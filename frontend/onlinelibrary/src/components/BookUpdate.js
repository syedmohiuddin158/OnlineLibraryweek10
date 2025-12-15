import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function Book_UpdateForm() {
  const { id } = useParams();
  const history = useHistory(); // for redirect after update
  const url = "http://localhost:5000/";

  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990
  });

  // Fetch book data when component mounts
  useEffect(() => {
    axios
      .get(url + "getbook/" + id)
      .then(res => setState(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url + "updatebook/" + id, state)
      .then(res => {
        console.log(res.data);
        history.push("/DisplayBooksF1"); // redirect to book list
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Book Title:</label>
          <input
            type="text"
            name="booktitle"
            className="form-control"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Book Authors:</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={state.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Book Topic:</label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          >
            <option value="Computer Science">CS</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        <div className="form-group">
          <label>Format:</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="formate"
              value="Hard Copy"
              checked={state.formate === "Hard Copy"}
              onChange={handleChange}
            />
            <label>Hard Copy</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="formate"
              value="Electronic Copy"
              checked={state.formate === "Electronic Copy"}
              onChange={handleChange}
            />
            <label>Electronic Copy</label>
          </div>
        </div>

        <div className="form-group">
          <label>
            Publication Year: 
            <input
              type="range"
              name="PubYear"
              min="1980"
              max="2025"
              value={state.PubYear}
              onChange={handleChange}
            />
            {state.PubYear}
          </label>
        </div>

        <div className="form-group">
          <center>
            <input type="submit" value="Update Book" className="btn btn-primary"/>
          </center>
        </div>
      </form>
    </div>
  );
}
