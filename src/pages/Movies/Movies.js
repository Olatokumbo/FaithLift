import React from "react";
import Poster from "../../assets/images/poster.png";
import Movie from "../../assets/images/jailer.jpg";
import { Typography, Button } from "@material-ui/core";
import style from "./Movies.module.css";

const Movies = () => {
  return (
    <div className={style.movies}>
      <div className={style.moviePoster}>
        <div className={style.posterContent}>
          <Typography className={style.posterTitle}>The Jailer</Typography>
          <Typography className={style.posterSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
          </Typography>
          <Button className={style.ytBtn} variant="contained">
            Watch on YouTube
          </Button>
        </div>
        <img src={Poster} alt="poster" />
        <div className={style.fadeBottom}></div>
      </div>
      <div className={style.movieListContainer}>
        <div className={style.movieList}>
          <Typography className={style.listHeader}>LATEST FILMS</Typography>
          <div className={style.posterList}>
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
          </div>
        </div>
        <div className={style.movieList}>
          <Typography className={style.listHeader}>LATEST FILMS</Typography>
          <div className={style.posterList}>
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
          </div>
        </div>
        <div className={style.movieList}>
          <Typography className={style.listHeader}>LATEST FILMS</Typography>
          <div className={style.posterList}>
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
            <img className={style.poster} src={Movie} alt="movie" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;