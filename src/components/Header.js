import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButtonName, setLoginButtonName] = useState(["Login"]);

  useEffect(() => {
    console.log("use effect in header called");
  }, [loginButtonName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"
        />
      </div>
      <div className="menu-container">
        <Link to="/">Home</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/help"> Help</Link>
        <Link to="/contact">Contact Us</Link>
        
        <button
          className="login-btn"
          onClick={() => {
            setLoginButtonName(
              loginButtonName === "Login" ? "Logout" : "Login"
            );
          }}
        >
          {loginButtonName}
        </button>
        </div>
    </div>
  );
};

export default Header;
