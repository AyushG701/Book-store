import React from "react";
import { useLoaderData } from "react-router";

const SingleBook = () => {
  const { _id, bookTitle, imageURL } = useLoaderData();

  return (
    <>
      <div className="mt-28 px-4 lg:px-24">
        <img src={imageURL} alt="" className=" " />
      </div>
    </>
  );
};

export default SingleBook;
