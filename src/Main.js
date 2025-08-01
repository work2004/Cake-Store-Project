import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./comp/dashboard/Home";

function Main(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}
export default Main;