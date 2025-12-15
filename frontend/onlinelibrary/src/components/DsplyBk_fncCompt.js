import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function FncDisplayBooks() {
  const url = "http://localhost:5000/";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(url + "allbooks")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <DisplayData books={books} />
    </div>
  );
}


