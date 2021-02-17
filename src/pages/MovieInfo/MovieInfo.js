import React from "react";
import Banner from "../../assets/images/Header.png";
import Poster from "../../assets/images/jailer.jpg";
import { Typography, Button } from "@material-ui/core";
import MovieCard from "../../components/MovieCard/MovieCard";
import style from "./MovieInfo.module.css";

const MovieInfo = () => {
  return (
    <div className={style.movieInfo}>
      <div className={style.banner}>
        <img className={style.bannerImage} src={Banner} alt="banner" />
        <div className={style.fadeBottom}></div>
      </div>
      <div className={style.movieContent}>
        <img className={style.posterImage} src={Poster} alt="poster" />
        <div className={style.movieDetails}>
          <div className={style.movieDetailsContainer}>
            <div className={style.movieDetailsLeft}>
              <Button className={style.ytBtn} variant="contained" size="large">
                Watch on YouTube
              </Button>
              <div className={style.movieTime}>
                <Typography>2021</Typography>
                <Typography>1hr 30mins</Typography>
              </div>
              <Typography className={style.movieTitle}>The Jailer</Typography>
              <Typography className={style.movieDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </div>
            <div className={style.movieDetailsRight}>
              <div className={style.movieStaff}>
                <Typography className={style.staffTitle}>Writer:</Typography>
                <Typography className={style.staffName}>
                  Pastor Johnson Odesola
                </Typography>
              </div>
              <div className={style.movieStaff}>
                <Typography className={style.staffTitle}>Director:</Typography>
                <Typography className={style.staffName}>
                  Pastor Johnson Odesola
                </Typography>
              </div>
              <div className={style.movieStaff}>
                <Typography className={style.staffTitle}>Cast:</Typography>
                <Typography className={style.staffName}>
                  Jon Doe, Jon Doe, Jon Doe, Jon Doe, Jon Doe, Jon Doe, Jon Doe,
                  Jon Doe, Jon Doe,
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.recommendation}>
        <Typography className={style.recommendHeader}>
          Similar Movies
        </Typography>
        <div className={style.similarMoviesList}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
