import React from "react";
import { Link, Outlet } from "react-router-dom";
import  "./Style.css";
const Home = () => {
  return (
    <div>
      <nav className="nav">
        <h1>Your Favourite Food Recipe</h1>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/recipe">Recipe</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
