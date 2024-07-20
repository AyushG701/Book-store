import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function truncateText(text, maxWords) {
  if (typeof text !== "string") {
    return "";
  }

  const words = text.split(" ");

  if (words.length > maxWords) {
    const truncatedText = words.slice(0, maxWords).join(" ");
    return `${truncatedText} ...`;
  }

  return text;
}

const Shop = () => {
  const maxWords = 20;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className=" mt-8 px-4 lg:px24">
      <h2 className="text-5xl font-bold text-center mb-7">
        All Books are here
      </h2>
      <div className="grid gap-3 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
        {books.map((book) => (
          <div
            key={book._id}
            className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-[20rem]"
                src={book.imageURL}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {book.author}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {console.log(book.bookDescription)}
                {truncateText(book.bookDescription, maxWords)}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy Now
                <FaArrowRight className="w-3.5 h-3.5 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
