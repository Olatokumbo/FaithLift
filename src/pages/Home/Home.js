import React from "react";
import style from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Slideshow from "../../Sections/Slideshow/Slideshow";
import { images } from "../../components/SlideshowImages";
const Home = () =>{
    return(
        <div className={style.home}>
            <Navbar/>
            <Slideshow data={images}/>
        </div>
    )
}

export default Home