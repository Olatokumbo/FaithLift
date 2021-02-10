import React, { useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [buttonState, setButtonState] = useState(false);
  const changeMenu = () => {
    if (window.innerWidth > 530) {
      setButtonState(false);
    }
  };
  window.addEventListener("resize", changeMenu);
  return (
    <div className={!buttonState ? style.navbar : style.navbarRolled}>
      <div className={style.header}>
        <Typography className={style.logo}>FaithLift</Typography>
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
          <Typography>Home</Typography>
        </li>
        <li>
          <Typography>Articles</Typography>
        </li>
        <li>
          <Typography>Movies</Typography>
        </li>
        <li>
          <Typography>Contact</Typography>
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
