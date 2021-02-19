import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import style from "./Articles.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("all");
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
        <li onClick={()=>setCategory("all")}>
          <Typography className={category==="all" ? style.selected : style.menuItem}>ALL</Typography>
        </li>
        <li onClick={()=>setCategory("news")}>
          <Typography className={category==="news" ? style.selected : style.menuItem}>NEWS</Typography>
        </li>
        <li onClick={()=>setCategory("events")}>
          <Typography className={category==="events" ? style.selected : style.menuItem}>EVENTS</Typography>
        </li>
        <li onClick={()=>setCategory("word")}>
          <Typography className={category==="word" ? style.selected : style.menuItem}>WORD</Typography>
        </li>
      </ul>
      <div className={style.articlesContainer}>
        {articles.map((data) => (
          <Link key={data.id} to={`/articles/${data.id}`}>
            <ArticleCard data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
