import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { firestore } from "../../firebase/firebase";
import moment from "moment";
import Loading from "../Loading/Loading";
import Page404 from "../Page404/Page404";
import style from "./ArticleInfo.module.css";

const ArticleInfo = ({
  match: {
    params: { articleId },
  },
}) => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    firestore
      .collection("articles")
      .doc(articleId)
      .get()
      .then((snapshot) => {
        setArticle(snapshot.data());
        setError("");
        console.log(snapshot);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [articleId]);
  if (article === null) {
    return <Loading errorMessage={error} />;
  } else {
    if (article === undefined) {
      return <Page404/>;
    } else {
      return (
        <div className={style.article}>
          <div className={style.articleInfo}>
            <div className={style.banner}>
              <img className={style.bannerPhoto} src={article.poster} alt="banner" />
            </div>
            <div className={style.mainArticle}>
              <div className={style.articleHeader}>
                <Typography className={style.articleTitle}>
                  {article.title}
                </Typography>
                <Typography className={style.articleDate}>
                  Published Date:{" "}
                  {moment(article.publishedDate.toDate()).format("MM/DD/YYYY")}
                </Typography>
              </div>
              <div className={style.articleContent}>
                {article.message.map((message, index) => (
                  <Typography key={index} className={style.articleParagraph}>
                    {message}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ArticleInfo;
