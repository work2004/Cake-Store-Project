import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./comp/dashboard/Home";
import Shop from "./comp/shop/Shop";

function Main(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
            </Routes>
        </>
    )
}
export default Main;