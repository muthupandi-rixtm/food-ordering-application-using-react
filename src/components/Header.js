import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  console.log("Header change");
  const [loginButtonName, setLoginButtonName] = useState(["Login"]);
  const [cartButtonName, setCartButtonName] = useState(["Add to cart"]);
  useEffect(() => {
    console.log("use effect in header called");
  }, [loginButtonName]);



  return (
    <div className='header flex justify-between bg-orange-300 px-2 py-2'>
      <div className='logo-container'>
      <Link to="/">
          <img
            width={100}
            src="https://seeklogo.com/images/F/food-delivery-symbol-logo-37F3E64A34-seeklogo.com.png"
          />
        </Link>
      </div>
      <ul className='menu-container flex items-center'>
        <Link to='/'>
          <li className='px-3 font-semibold' href='#'>
            🛒 Home
          </li>
        </Link>
        <Link to='/about'>
          <li className='px-3 font-semibold' href='#'>
            🆕 About Us
          </li>
        </Link>
        <Link to='/help'>
          <li className='px-3 font-semibold' href='#'>
            🆘 Help
          </li>
        </Link>
        
        <Link to='/help'>
          <li className='px-3 font-semibold' href='#'>
            Help
          </li>
        </Link>
        
        
        <li>
          <button
            className='login-btn px-3 font-semibold'
            onClick={() => {
              setLoginButtonName(
                loginButtonName === "Login" ? "Logout" : "Login"
              );
            }}>
            {loginButtonName}
          </button>
        </li>
        <li>
          <button
            className='add-to-cart-btn px-3 font-semibold'
            onClick={() => {
              setCartButtonName(
                cartButtonName === "Add to cart" ? "Payment" : "Add to cart"
              );
            }}>
            {cartButtonName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
