import React from "react";
import { Link } from "react-router-dom";

const Header = ({ logout }) => {
  const handleOnClick = e => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
      </ul>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  );
};

export default Header;
