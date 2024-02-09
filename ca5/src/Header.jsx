import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Kalvium Books
      </Link>
      <ul>
        <Link to="/about">Register</Link>
      </ul>
    </nav>
  );
}
