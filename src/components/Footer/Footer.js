import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import { Link } from "react-scroll";
// import Fade from 'react-reveal/Fade';
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.left}>
        <Typography className={style.logo}>FaithLift</Typography>
        <div className={style.copyRight}>
          <Typography className={style.copyRightText}>
            © Copyright {new Date().getFullYear()}
          </Typography>
          <Typography className={style.copyRightText}>
            All Rights Reserved.
          </Typography>
        </div>
      </div>
      <div className={style.right}>
        <button className={style.upBtn}>
          <KeyboardArrowUpIcon />
        </button>
        <div className={style.lowerContent}>
          <div className={style.rectangle}></div>
          <div className={style.socials}>
            <IconButton size="small" onClick={()=>window.open("https://www.youtube.com/channel/UCbvSvzeLnUrT9XfYqSWeemQ", "_blank")}>
              <YouTubeIcon className={style.icon} />
            </IconButton>
            <IconButton size="small"  onClick={()=>window.open("https://www.instagram.com/pastorjfodesola", "_blank")}>
              <InstagramIcon className={style.icon} />
            </IconButton>
            <IconButton size="small"  onClick={()=>window.open("https://www.facebook.com/JFOdesola", "_blank")}>
              <FacebookIcon className={style.icon} />
            </IconButton>
            <IconButton size="small"  onClick={()=>window.open("https://twitter.com/pastorjfodesola", "_blank")}>
              <TwitterIcon className={style.icon} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
