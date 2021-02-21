import React from "react";
import { Typography } from "@material-ui/core";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.layer}>
        <Typography className={style.title}>FAITHLIFT</Typography>
        <Typography className={style.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </Typography>
      </div>
      {/* <div className={style.fadeBottom}></div> */}
    </div>
  );
};

export default Header;
