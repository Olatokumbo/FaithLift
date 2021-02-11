import React from "react";
import { Typography, Button } from "@material-ui/core";
import style from "./Slide.module.css";

const Slide = ({ image }) => {
  return (
    <div className={style.slide}>
      <img className={style.image} src={image.imagePath} alt={image.imageAlt} />
      <div className={style.content}>
        <div className={style.header}>
          <Typography className={style.subtitle}>{image.subtitle}</Typography>
          <Typography className={style.title}>{image.title}</Typography>
        </div>
        <div className={style.about}>
          <Typography className={style.aboutMovieHeader}>
            About Movie
          </Typography>
          <Typography className={style.aboutMovie}>
            {image.aboutMovie}
          </Typography>
          <Button className={style.readBtn} variant="contained">
            Read More
          </Button>
        </div>
      </div>
      <div className={style.fadeBottom}></div>
    </div>
  );
};

export default Slide;
