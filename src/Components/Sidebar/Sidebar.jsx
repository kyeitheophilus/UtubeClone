/* eslint-disable react/prop-types */

import "./Sidebar.css";
import home from "../../assets/Images/home.png";
import game_icon from "../../assets/Images/game_icon.png";
import automobiles from "../../assets/Images/automobiles.png";
import sports from "../../assets/Images/sports.png";
import entertainment from "../../assets/Images/entertainment.png";
import tech from "../../assets/Images/tech.png";
import music from "../../assets/Images/music.png";
import blogs from "../../assets/Images/blogs.png";
import news from "../../assets/Images/news.png";
import jack from "../../assets/Images/jack.png";
import sheldon from "../../assets/Images/sheldon.jpeg";
import kidi from "../../assets/Images/kidi.jpeg";
import headless from "../../assets/Images/headless.jpeg";
import magreheb from "../../assets/Images/magreheb.jpeg";
import gossips from "../../assets/Images/gossips.jpeg";
import simon from "../../assets/Images/simon.png";
import tom from "../../assets/Images/tom.png";
import megan from "../../assets/Images/megan.png";
import cameron from "../../assets/Images/cameron.png";

function Sidebar({ sidebar, category, setCategory }) {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category == 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category == 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category == 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category == 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category == 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category == 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category == 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category == 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category == 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-link">
            <img src={sheldon} alt="" /> <p>KSS Studios</p>
          </div>
          <div className="side-link">
            <img src={kidi} alt="" /> <p>Kidi Music</p>
          </div>
          <div className="side-link">
            <img src={headless} alt="" /> <p>Headless</p>
          </div>
          <div className="side-link">
            <img src={magreheb} alt="" /> <p>Magreheb</p>
          </div>
          <div className="side-link">
            <img src={gossips} alt="" /> <p>GossipsAvenue</p>
          </div>
          <div className="side-link">
            <img src={jack} alt="" /> <p>Jack Site</p>
          </div>
          <div className="side-link">
            <img src={simon} alt="" /> <p>MrBeast</p>
          </div>
          <div className="side-link">
            <img src={tom} alt="" /> <p>justin Bieber</p>
          </div>
          <div className="side-link">
            <img src={megan} alt="" /> <p>5_Minute Crafts</p>
          </div>
          <div className="side-link">
            <img src={cameron} alt="" /> <p>Nas Daily</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
