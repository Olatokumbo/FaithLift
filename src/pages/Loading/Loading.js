import React from "react";
import {Typography} from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import style from "./Loading.module.css";

const Loading = ({errorMessage}) =>{
    return(
        <div className={style.loading}>
            <CircularProgress/>
            <Typography className={style.errorMessage}>{errorMessage}</Typography>
        </div>
    )
}

export default Loading;