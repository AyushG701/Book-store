import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0, 8)); //helps so it render only the 8 books
        console.log(data);
      });
  }, []);

  return (
    <div>
      <BookCards books={books} headline="best Seller Goods" />
    </div>
  );
};

export default BestSellerBooks;
