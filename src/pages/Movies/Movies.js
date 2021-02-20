import React, { useEffect, useState } from "react";
import Poster from "../../assets/images/poster.png";
// import Movie from "../../assets/images/jailer.jpg";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import CircularProgress from '@material-ui/core/CircularProgress';
import style from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    setLoadingState(true);
    const moviesList = [];
    firestore
      .collection("movies")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          moviesList.push({ ...{ id: doc.id }, ...doc.data() });
        });
      })
      .then(() => {
        setMovies(moviesList);
        console.log("Fetching...");
        if (moviesList) {
          setLoadingState(false);
        }
      });
  }, []);
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
          <Typography className={style.listHeader}>OUR FILMS</Typography>
          <div className={style.posterList}>
            {loadingState ? <CircularProgress/> : movies.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <img
                  className={style.poster}
                  src={movie.poster}
                  alt={movie.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
