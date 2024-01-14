import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          textAlign: "center",
          gap: "10px",
        }}
      >
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Sign In</Link>
      </ul>
    </div>
  );
};

export default Header;
