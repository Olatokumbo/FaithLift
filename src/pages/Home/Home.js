import React from "react";
import style from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () =>{
    return(
        <div className={style.home}>
            <Navbar/>
        </div>
    )
}

export default Home