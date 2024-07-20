import React, { useState } from "react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0],
  );
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.book_title.value;
    const authorName = form.author_name.value;
    const imageURL = form.book_image.value;
    const category = form.categoryName.value;
    const bookDescription = form.book_description.value;
    const bookPDFURL = form.book_pdf_link.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookCategories,
      bookDescription,
      bookPDFURL,
    };
    console.log(bookObj);

    // send data to dbhttp://localhost:5000/upload-book
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Book uploaded successfuly!!!!");
        form.reset();
      });
  };
  return (
    <>
      <div className="px-4 my-12">
        <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>
        <form
          onSubmit={handleBookSubmit}
          className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="book_title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Book Title
              </label>
              <input
                type="text"
                id="book_title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Book Title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="author_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Author Name
              </label>
              <input
                type="text"
                id="author_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Author Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="book_image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Book Image URL
              </label>
              <input
                type="url"
                id="book_image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Book Image URL"
                required
              />
            </div>
            <div>
              <label
                htmlFor="categoryName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Book Category
              </label>
              {/* <input
                type="text"
                id="book_category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Book Category"
                required/> */}
              <select
                id="inputState"
                name="categoryName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedBookCategory}
                onChange={handleChangeSelectedValue}
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="book_description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Book Description
            </label>
            <textarea
              type="text"
              id="book_description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Book Description"
              rows={6}
            />
          </div>
          <div>
            <label
              htmlFor="book_pdf_link"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Book PDF Link
            </label>
            <input
              type="url"
              id="book_pdf_link"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Book PDF Link"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="agree_terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="agree_terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Upload Book
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadBook;
