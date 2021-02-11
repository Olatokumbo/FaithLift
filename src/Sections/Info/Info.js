import React from "react";
import bg from "../../assets/images/bg.jpg";
import { Typography } from "@material-ui/core";
import image from "../../assets/images/image.png";
import style from "./Info.module.css";
const Info = () => {
  return (
    <div className={style.info}>
      <img className={style.bg} src={bg} alt="bg" />
      <div className={style.mainContent}>
        <div className={style.contentLeft}>
          <Typography className={style.header}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </Typography>
          <Typography component="p" className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography component="p" className={style.text} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <div className={style.contentRight}>
            <img className={style.image} src={image} alt="placeholder"/>
            <img className={style.image} src={image} alt="placeholder"/>
            <img className={style.image} src={image} alt="placeholder"/>
            <img className={style.image} src={image} alt="placeholder"/>
        </div>
      </div>
    </div>
  );
};

export default Info;
