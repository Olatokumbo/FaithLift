import React from "react";
import style from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Slideshow from "../../Sections/Slideshow/Slideshow";
import Info from "../../Sections/Info/Info";
import About from "../../Sections/About/About";
import { images } from "../../components/SlideshowImages";
const Home = () =>{
    return(
        <div className={style.home}>
            <Navbar/>
            <Slideshow data={images}/>
            <Info/>
            <About/>
        </div>
    )
}

export default Home