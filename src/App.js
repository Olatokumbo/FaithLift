import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Articles from "./pages/Articles/Articles";
import ContactUs from "./pages/ContactUs/ContactUs";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/articles/:articleId" component={ArticleInfo} />
        <Route exact path="/movies/:movieId" component={MovieInfo} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
