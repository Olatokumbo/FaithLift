import React from "react";
import { Typography } from "@material-ui/core";
import style from "./Testimonials.module.css";
const Testimonials = () =>{
    return(
        <div className={style.testimonials}>
            <Typography className={style.title}>TESTIMONIALS</Typography>
        </div>
    )
}

export default Testimonials;