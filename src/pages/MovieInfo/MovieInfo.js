import React, { useEffect, useState } from "react";
// import Banner from "../../assets/images/Header.png";
// import Poster from "../../assets/images/jailer.jpg";
import { Typography, Button } from "@material-ui/core";
import MovieCard from "../../components/MovieCard/MovieCard";
import Page404 from "../Page404/Page404";
import Loading from "../Loading/Loading";
import { firestore } from "../../firebase/firebase";
import style from "./MovieInfo.module.css";

const MovieInfo = ({
  match: {
    params: { movieId },
  },
}) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    firestore
      .collection("movies")
      .doc(movieId)
      .get()
      .then((snapshot) => {
        setMovie(snapshot.data());
        // setError("");
        console.log(snapshot);
      })
      .catch((err) => {
        // setError(err.message);
      });
  }, [movieId]);
  if (movie === null) {
    return <Loading />;
  } else {
    if (movie === undefined) {
      return <Page404 />;
    } else {
      return (
        <div className={style.movieInfo}>
          <div className={style.banner}>
            <img
              className={style.bannerImage}
              src={movie.coverPhoto}
              alt="banner"
            />
            <div className={style.fadeBottom}></div>
          </div>
          <div className={style.movieContent}>
            <img
              className={style.posterImage}
              src={movie.poster}
              alt="poster"
            />
            <div className={style.movieDetails}>
              <div className={style.movieDetailsContainer}>
                <div className={style.movieDetailsLeft}>
                  <Button
                    className={style.ytBtn}
                    variant="contained"
                    size="large"
                    onClick={() => window.open(`${movie.youtubeUrl}`, "_blank")}
                  >
                    Watch on YouTube
                  </Button>
                                <Typography className={style.movieTitle}>{movie.name}</Typography>
                  <div className={style.movieTime}>
                    <Typography>{movie.year}</Typography>
                    <Typography>{`${movie.duration.hours}hr ${movie.duration.minutes}mins`}</Typography>
                  </div>
                  <Typography className={style.movieDescription}>
                    {movie.info}
                  </Typography>
                </div>
                <div className={style.movieDetailsRight}>
                  <div className={style.movieStaff}>
                    <Typography className={style.staffTitle}>
                      Writer:
                    </Typography>
                    <Typography className={style.staffName}>
                      {movie.writer}
                    </Typography>
                  </div>
                  <div className={style.movieStaff}>
                    <Typography className={style.staffTitle}>
                      Director:
                    </Typography>
                    <Typography className={style.staffName}>
                      {movie.director}
                    </Typography>
                  </div>
                  <div className={style.movieStaff}>
                    <Typography className={style.staffTitle}>Cast:</Typography>
                    <Typography className={style.staffName}>
                      {movie.casts.map((castMember) => `${castMember}, `)}
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
              {/* <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard /> */}
              <Typography
                variant="h5"
                style={{ color: "white", margin: "5rem" }}
              >
                Coming Soon...
              </Typography>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default MovieInfo;
