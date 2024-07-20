import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  //   const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  };

  // Use setInterval to poll for updates every X seconds (e.g., every 10 seconds)
  useEffect(() => {
    fetchData(); // Initial data fetch

    const interval = setInterval(() => {
      fetchData(); // Fetch updated data
    }, 10000); // 10 seconds (adjust the interval as needed)

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  //   const handleEdit = (id) => {
  //     // Redirect to the edit page for the selected book
  //     window.location.href = `http://localhost:5000/book/${id}`;
  //   };

  const handleDelete = (id) => {
    // Send a DELETE request to your server to delete the book
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          // Book deleted successfully, you can remove it from the state
          setAllBooks(allBooks.filter((book) => book.id !== id));

          alert("Deleted successfully");
          console.log("Item deleted");
        } else {
          // Handle any errors or display a message to the user
          alert("An error occurred while deleting the book.");
          console.log("Error deleting the item.");
        }
      })
      .catch((error) => {
        alert("An error occurred: " + error);
        console.error(error);
      });
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Book Name
              </th>
              <th scope="col" className="px-6 py-3">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr
                key={book._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "dark:bg-gray-800"
                } border-b dark:border-gray-700`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{book.bookTitle}</td>
                <td className="px-6 py-4">{book.authorName}</td>
                <td className="px-6 py-4">{book.category}</td>
                <td className="px-6 py-4">{book.price}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <span className="mx-2 text-gray-500 dark:text-gray-400">
                    |
                  </span>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageBooks;
