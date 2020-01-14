import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h2>Marco's reading List</h2>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
