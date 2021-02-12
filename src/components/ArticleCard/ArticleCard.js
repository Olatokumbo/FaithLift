import React from "react";
import { Typography, Button } from "@material-ui/core";
import style from "./ArticleCard.module.css";
import Image from "../../assets/images/Header.png";
const ArticleCard = () => {
  return (
    <div className={style.articleCard}>
      <div className={style.banner}>
        <img src={Image} alt="Poster" />
      </div>
      <div className={style.articleContent}>
        <Typography className={style.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Typography className={style.articleMessage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris...
        </Typography>
        <div className={style.articleFooter}>
          <Typography className={style.publishedDate} >Published Date: 02/02/2021</Typography>
          <Button className={style.readBtn} variant="contained">
            ReadMore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
