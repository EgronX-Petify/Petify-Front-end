import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-10">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/vets">Vets</Link>
      <Link to="grooming">Grooming</Link>
      <Link to="beginner-guide">Beginner Guide</Link>
    </nav>
  );
};

export default Navbar;
