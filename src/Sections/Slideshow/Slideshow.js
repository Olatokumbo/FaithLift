import React, {useState}  from "react";
import style from "./Slideshow.module.css";
import Slide from "../../components/Slide/Slide";
const Slideshow = ({data}) =>{
    const [currentSlide, setCurrentSlide] = useState(0);
    return(
        <div className={style.slideshow}>
           <Slide image={data[currentSlide]}/>
        </div>
    )
}

export default Slideshow;