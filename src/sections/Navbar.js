import React, { useState } from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { MdHome, MdMenuOpen} from 'react-icons/md'

function Navbar() {
    const [navData, setNavData ] = useState({top: '-235px'});
    const links = [
        { link: '/', path: 'home' },
        { link: 'shop', path: 'shop' },
        { link: 'service', path: 'service' },
        { link: 'gallary', path: 'gallary' },
    ]
    return (
        <>
            <div className="nav_main">
                <div>
                    <p className="logo"><span className="f_log">C</span>ake<span className="f_log">S</span>tore</p>
                </div>
                <div className="nav_div">
                    {
                        links.map((linkItem, linkIndex) => {
                            return (
                                <li key={linkIndex} className="link_tag">
                                    <NavLink to={linkItem.link}>{linkItem.path.toLocaleUpperCase()}</NavLink>
                                </li>
                            )
                        })
                    }
                </div>
                <div className="pre">
                    <button>Premuim</button>
                </div>
                <div className="menu">
                    <span><MdMenuOpen onClick={()=>setNavData({top: '0px'})} className="menu_icon" /></span>
                </div>
            </div>
            <div className="res_nav" style={navData}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                    <div className="logo">CakeStore</div>
                    <div className="pre">
                    <button>Premuim</button>
                </div>
                </div>
                {
                    links.map((linkItem, linkIndex) => {
                        return (
                            <li key={linkIndex} className="res_link_tag">
                                <NavLink onClick={()=>setNavData({top: '-235px'})} to={linkItem.link}><span><MdHome className="res_icon"/></span>{linkItem.path.toLocaleUpperCase()}</NavLink>
                            </li>
                        )
                    })
                }
                <img className="nav_cake" src="cakeback.png" alt="img_cake"/>
            </div>
        </>
    )
}
export default Navbar;