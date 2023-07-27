import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between sm:bg-pink-100 md:bg-green-100 lg:bg-green-200 shadow-lg">
      <div className="logo-container">
        <img
          className="w-[100%]"
          alt="restaurant1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCbzvRLLbTMEOxv1E5fFBQ4N2cfJW-PSg6MeEtLJ&s"
        />
      </div>
      <div className="nav-items items-center">
        <ul className="flex justify-between p-6 m-4">
          <li className="px-4">Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold text-lg"><Link to={"/cart"}>Cart -({cartItems.length})</Link></li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li><button
            className="Login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          </li>
          <li>
            <p className="font-bold text-lg pl-4">{loggedInUser}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
