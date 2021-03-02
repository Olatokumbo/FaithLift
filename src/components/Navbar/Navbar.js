import React, { useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [buttonState, setButtonState] = useState(false);
  const [backgroundState, setBackground] = useState(false);
  const changeMenu = () => {
    if (window.innerWidth > 530) {
      setButtonState(false);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setBackground(true);
    } else setBackground(false);
  };
  const handleClose = () => {
    setButtonState(false);
  };
  window.addEventListener("resize", changeMenu);
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={!backgroundState ? style.navbar : style.navbarRolled}>
      <div className={style.header}>
        <Link to="/">
          <img className={style.logo} src={Logo} alt="logo"/>
        </Link>
        <div
          className={buttonState ? style.change : style.hamburger}
          onClick={() => setButtonState((prevState) => !prevState)}
        >
          <span className={style.rectangle1}></span>
          <span className={style.rectangle2}></span>
          <span className={style.rectangle3}></span>
        </div>
      </div>
      <ul className={!buttonState ? style.menu : style.menuVertical}>
        <li>
          <Link to="/" onClick={handleClose}>
            <Typography>Home</Typography>
          </Link>
        </li>
        <li>
          <Link to="/articles" onClick={handleClose}>
            <Typography>Articles</Typography>
          </Link>
        </li>
        <li>
          <Link to="/movies" onClick={handleClose}>
            <Typography>Movies</Typography>
          </Link>
        </li>
        <li>
          <Link to="/contactUs" onClick={handleClose}>
            <Typography>Contact</Typography>
          </Link>
        </li>
      </ul>
      <ul className={style.socials}>
        <li>
          <IconButton>
            <InstagramIcon className={style.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <TwitterIcon className={style.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <FacebookIcon className={style.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <YouTubeIcon className={style.icon} />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
