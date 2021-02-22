import React from "react";
import Header from "../../assets/images/Header.png";
import { Typography, Button } from "@material-ui/core";
import style from "./LatestMovies.module.css";
const LatestMovies = () => {
  return (
    <div className={style.latestMovies}>
      <Typography className={style.header}>LATEST MOVIES</Typography>
      <div className={style.moviesContainer}>
        <div className={style.movie}>
          <div className={style.content}>
            <Typography className={style.title}>The Jailer</Typography>
            <Typography className={style.year}>2021</Typography>
            {/* <Typography className={style.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </Typography> */}
            <Button className={style.readBtn} variant="contained">
              View More
            </Button>
          </div>
          <img className={style.moviePoster} src={Header} alt="header" />
        </div>
        <div className={style.movie}>
          <div className={style.content}>
            <Typography className={style.title}>The Jailer</Typography>
            <Typography className={style.year}>2021</Typography>
            {/* <Typography className={style.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </Typography> */}
            <Button className={style.readBtn} variant="contained">
              View More
            </Button>
          </div>
          <img className={style.moviePoster} src={Header} alt="header" />
        </div>
      </div>
    </div>
  );
};

export default LatestMovies;
