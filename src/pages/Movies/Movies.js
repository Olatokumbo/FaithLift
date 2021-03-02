import React, { useEffect, useState, useContext } from "react";
// import Poster from "../../assets/images/poster.png";
// import Movie from "../../assets/images/jailer.jpg";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AppContext } from "../../contexts/AppContext";
import style from "./Movies.module.css";

const Movies = () => {
  const { moviesList, posterMain } = useContext(AppContext);
  const [movies, setMovies] = moviesList;
  const [poster, setPoster] = posterMain;
  // const [movies, setMovies] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    if (movies === null) {
      setLoadingState(true);
      const moviesList = [];
      firestore
        .collection("movies")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.id !== "poster")
              moviesList.push({ ...{ id: doc.id }, ...doc.data() });
            else setPoster({ id: doc.id, ...doc.data() });
          });
        })
        .then(() => {
          setMovies(moviesList);
          console.log("Fetching...");
          if (moviesList) {
            setLoadingState(false);
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMovies]);
  return (
    <div className={style.movies}>
      <div className={style.moviePoster}>
       {movies &&  <div className={style.posterContent}>
          <Typography className={style.posterTitle}>{poster?.title}</Typography>
          <Typography className={style.posterSubtitle}>
            {poster?.info}
          </Typography>
          <Button
            className={style.ytBtn}
            variant="contained"
            onClick={() => window.open(`${poster?.youtubeUrl}`, "_blank")}
          >
            Watch on YouTube
          </Button>
        </div>}
        <img src={poster?.poster} alt="poster" />
        <div className={style.fadeBottom}></div>
      </div>
      <div className={style.movieListContainer}>
        <div className={style.movieList}>
          <Typography className={style.listHeader}>OUR FILMS</Typography>
          <div className={style.posterList}>
            {loadingState ? (
              <CircularProgress />
            ) : (
              movies?.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <img
                    className={style.poster}
                    src={movie.poster}
                    alt={movie.title}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
