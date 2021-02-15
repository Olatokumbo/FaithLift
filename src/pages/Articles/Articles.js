import React from "react";
import { Typography } from "@material-ui/core";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import style from "./Articles.module.css";

const Articles = () => {
  return (
    <div className={style.articles}>
      <Typography className={style.title}>Articles</Typography>
      <ul className={style.menu}>
        <li>
          <Typography className={style.menuItem}>ALL</Typography>
        </li>
        <li>
          <Typography className={style.menuItem}>NEWS</Typography>
        </li>
        <li>
          <Typography className={style.menuItem}>EVENTS</Typography>
        </li>
        <li>
          <Typography className={style.menuItem}>WORD</Typography>
        </li>
      </ul>
      <div className={style.articlesContainer}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default Articles;
