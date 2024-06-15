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
        <Link to="/">
          <img
            className="logo"
            src="https://static.vecteezy.com/system/resources/previews/028/082/444/non_2x/food-point-logo-design-white-spoon-fork-and-plate-symbol-with-circle-shape-vector.jpg"
          />
        </Link>
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
