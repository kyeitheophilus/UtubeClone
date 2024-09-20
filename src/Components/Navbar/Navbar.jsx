/* eslint-disable react/prop-types */

import "./Navbar.css";
import menu_icon from "../../assets/Images/menu.png";
// import logo from "../../assets/Images/logo.png";
import search_icon from "../../assets/Images/search.png";
import upload_icon from "../../assets/Images/upload.png";
import more_icon from "../../assets/Images/more.png";
import notification_icon from "../../assets/Images/notification.png";
import user_icon from "../../assets/Images/IMG_4925.jpg";
import { Link } from "react-router-dom";


function Navbar({ setSidebar }) {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          className="menu_icon"
          src={menu_icon}
          alt="menu"
        />
        <Link to="/">
          <h3 style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem" }}>
            T.KAY
          </h3>
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img className="user-icon" src={user_icon} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
