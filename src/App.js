import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Articles from "./pages/Articles/Articles";
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
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
