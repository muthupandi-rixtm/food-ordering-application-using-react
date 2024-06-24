import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButtonName, setLoginButtonName] = useState(["Login"]);

  useEffect(() => {
    console.log("use effect in header called");
  }, [loginButtonName]);
  return (
    <div className="header px-3 py-3   flex justify-between 	bg-[#fc8019] text-xl">
      <div className="logo-container cursor-pointer ml-32">
        <Link to="/">
          <img
            width={100}
            src="https://seeklogo.com/images/F/food-delivery-symbol-logo-37F3E64A34-seeklogo.com.png"
          />
        </Link>
      </div>
      <div className="menu-container flex items-center mr-32">
        <Link to="/">
          <a className="px-3 font-semibold" href="#">
            Home
          </a>
        </Link>
        <Link to="/about">
          <a className="px-3 font-semibold" href="#">
            About Us
          </a>
        </Link>
        <Link to="/offers">
          <a className="px-3 font-semibold" href="#">
            Offers
          </a>
        </Link>
        <Link to="/help">
          <a className="px-3 font-semibold" href="#">
            Help
          </a>
        </Link>

        <button
          className="login-btn px-3 font-semibold"
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
