import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Typography className={style.logo}>FaithLift</Typography>
      <ul className={style.menu}>
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
            <InstagramIcon className={style.icon}/>
          </IconButton>
        </li>
        <li>
          <IconButton>
            <TwitterIcon className={style.icon}/>
          </IconButton>
        </li>
        <li>
          <IconButton>
            <FacebookIcon className={style.icon}/>
          </IconButton>
        </li>
        <li>
          <IconButton>
            <YouTubeIcon className={style.icon}/>
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
