import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div className="nav-link">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
      </div>
      {user?.email && (
        <div>
          <h4 style={{ color: "white" }}>{user?.email}</h4>
        </div>
      )}
      {user?.uid ? (
        <button>Sign out</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </>
      )}
    </nav>
  );
};

export default Header;
