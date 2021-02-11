import React from "react";
import { Typography, Button } from "@material-ui/core";
import image from "../../assets/images/main.jpg"
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.about}>
      <div className={style.header}>
        <Typography className={style.title}>
          About FaithLift Productions
        </Typography>
        <Typography component="p" className={style.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <div className={style.aboutContent}>
        <div className={style.aboutContentLeft}>
          <Typography component="p" className={style.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </Typography>
          <Button className={style.readBtn} variant="contained">
            Read More
          </Button>
        </div>
        <div className={style.aboutContentRight}>
            <img className={style.ceo} src={image} alt="main"/>
        </div>
      </div>
    </div>
  );
};

export default About;
