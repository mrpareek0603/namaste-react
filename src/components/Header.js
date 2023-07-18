import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="restaurant1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCbzvRLLbTMEOxv1E5fFBQ4N2cfJW-PSg6MeEtLJ&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
