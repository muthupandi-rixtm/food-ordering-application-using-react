import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import UserContext from "../../utils/UserContext";

const Header = () => {
  console.log("Header change");
  const [loginButtonName, setLoginButtonName] = useState(["Login"]);
  const [cartButtonName, setCartButtonName] = useState(["Add to cart"]);
  useEffect(() => {
    console.log("use effect in header called");
  }, [loginButtonName]);

  const userDetails = useContext(UserContext);

  const updateName = () => {
    userDetails.setUserName("DVG");
  };

  const cartSelector = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <div className="header flex justify-between bg-[#f58421] px-2 py-2">
      <div className="logo-container">
        <Link to="/">
          <img
            width={100}
            src={
              "https://seeklogo.com/images/F/food-delivery-symbol-logo-37F3E64A34-seeklogo.com.png"
            }
          />
        </Link>
      </div>
      <ul className="menu-container flex items-center">
        <Link to="/">
          <li className="px-3 font-semibold" href="#">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="px-3 font-semibold" href="#">
            About Us
          </li>
        </Link>
        <Link to="/help">
          <li className="px-3 font-semibold" href="#">
            Help
          </li>
        </Link>
        <Link to="/contact">
          <li className="px-3 font-semibold" href="#">
            Contact Us
          </li>
        </Link>

        <Link to="/grocery">
          <li className="px-3 font-semibold" href="#">
            Groceries
          </li>
        </Link>
        <li>
          Cart
          <div className="mx-2 inline-block w-6 h-6 rounded-full bg-gray-500 text-center">
            {cartSelector.length}
          </div>
        </li>

        <li>
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
        </li>
        <li>
          <button
            className="border-2 border-black px-2 py-2 rounded-lg"
            onClick={updateName}
          >
            Update Name
          </button>
        </li>
        <li>{userDetails.loggedUser}</li>
        <li>
          <button
            className="add-to-cart-btn px-3 font-semibold"
            onClick={() => {
              setCartButtonName(
                cartButtonName === "Add to cart" ? "Payment" : "Add to cart"
              );
            }}
          >
            {cartButtonName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
