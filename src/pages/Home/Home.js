import React from "react";
import style from "./Home.module.css";
import Slideshow from "../../Sections/Slideshow/Slideshow";
import Info from "../../Sections/Info/Info";
import About from "../../Sections/About/About";
import Testimonials from "../../Sections/Testimonials/Testimonials";
import { images } from "../../components/SlideshowImages";
const Home = () =>{
    return(
        <div className={style.home}>
            <Slideshow data={images}/>
            <Info/>
            <About/>
            <Testimonials/>
        </div>
    )
}

export default Home