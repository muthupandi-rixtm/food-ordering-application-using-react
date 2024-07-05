import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
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
  return (
    <div className="header flex justify-between bg-[#fc8019] px-2 py-2">
      <div className="logo-container">
        <Link to="/">
          <img
            width={100}
            src="https://seeklogo.com/images/F/food-delivery-symbol-logo-37F3E64A34-seeklogo.com.png"
          />
        </Link>
      </div>
      <ul className="menu-container flex items-center">
        <Link to="/">
          <li
            className="text-white hover:text-black px-3 font-bold text-xl text-xl"
            href="#"
          >
            Home
          </li>
        </Link>
        <Link to="/about">
          <li
            className="text-white hover:text-black px-3 font-bold text-xl"
            href="#"
          >
            About Us
          </li>
        </Link>
        <Link to="/help">
          <li
            className="text-white hover:text-black text-white hover:text-black px-3 font-bold text-xl"
            href="#"
          >
            Help
          </li>
        </Link>

        <Link to="/help">
          <li
            className="text-white hover:text-black px-3 font-bold text-xl"
            href="#"
          >
            Offers
          </li>
        </Link>
       

        <li>
          <button
            className="add-to-cart-btn w-40 text-white hover:text-black px-3 font-bold text-xl"
            onClick={() => {
              setCartButtonName(
                cartButtonName === "Add to cart" ? "Payment" : "Add to cart"
              );
            }}
          >
            {cartButtonName}
          </button>
        </li>
        
        <li>
          <button
            className=" w-20 login-btn text-white hover:text-black px-3 font-bold text-xl"
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
            className="  font-bold text-xl border-2 border-solid border-black"
            onClick={updateName}
          >
            Update Name
          </button>
        </li>
        <li>{userDetails.loggedUser}</li>
      </ul>
    </div>
  );
};

export default Header;
