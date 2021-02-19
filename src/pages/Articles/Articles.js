import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import style from "./Articles.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articlesList = [];
    firestore
      .collection("articles")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          articlesList.push({ ...{ id: doc.id }, ...doc.data() });
        });
      })
      .then(() => {
        setArticles(articlesList);
        console.log("Fetching...");
      });
  }, []);
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
        {articles.map((data) => (
          <Link key={data.id} to={`/article/${data.id}`}>
            <ArticleCard data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
