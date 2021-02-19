import React, { useEffect, useState } from "react";
import Banner from "../../assets/images/Header.png";
import { Typography } from "@material-ui/core";
import { firestore } from "../../firebase/firebase";
import moment from "moment";
import Loading from "../Loading/Loading";
import style from "./ArticleInfo.module.css";

const ArticleInfo = ({
  match: {
    params: { articleId },
  },
}) => {
  const [article, setArticle] = useState(null);
  const [error,setError] =useState("");
  useEffect(() => {
    firestore
      .collection("articles")
      .doc(articleId)
      .get()
      .then((snapshot) => {
        setArticle(snapshot.data());
        setError("");
        console.log(snapshot);
      }).catch((err)=>{
        setError(err.message);
      });
  }, [articleId]);
  if( article === null ){
    return(<Loading errorMessage={error}/>)
  }
  else{
    if(article===undefined){
      return(<div>Page 404</div>)
    }
    else{
      return (
        <div className={style.article}>
          <div className={style.articleInfo}>
            <div className={style.banner}>
              <img className={style.bannerPhoto} src={Banner} alt="banner" />
            </div>
            <div className={style.mainArticle}>
              <div className={style.articleHeader}>
                <Typography className={style.articleTitle}>
                  {article.title}
                </Typography>
                <Typography className={style.articleDate}>
                  Published Date: {moment(article.publishedDate.toDate()).format("MM/DD/YYYY")}
                </Typography>
              </div>
              <div className={style.articleContent}>
                <Typography className={style.articleParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                  eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore
                  et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                  vel eum iure reprehenderit qui in ea voluptate velit esse quam
                  nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </Typography>
                <Typography className={style.articleParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                  eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore
                  et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                  vel eum iure reprehenderit qui in ea voluptate velit esse quam
                  nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </Typography>
                <Typography className={style.articleParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                  eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore
                  et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                  vel eum iure reprehenderit qui in ea voluptate velit esse quam
                  nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </Typography>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ArticleInfo;
