import React, { useState } from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.jpg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import { logout } from "../firebase";
export default function NavBar() {
  const [theme, setTheme] = useState(true);
  const handleClick = () => {
    document.body.classList.toggle("dark-mode");
    setTheme(!theme);
  };
  return (
    <div className="NavBar">
      <div className="logo">
        <img src={logo} />
      </div>
      {/*code to add dark and light theme. Current disabled*/}
      {/* <div onClick={handleClick} className="theme">
        {theme ? <img src={moon} /> : <img src={sun} />}
      </div> */}
      <div className="avatar">
        <img
          onClick={() => logout()}
          alt="profile avatar"
          className="avatarImg"
          src={avatar}
        />
      </div>
    </div>
  );
}
