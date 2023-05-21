import React, { useState } from 'react'
import './header.css'
import Drawer from './Drawer';
function Header() {
   
    return (
        <>  
            <nav className="navbar  ">
                <div className="navbar__left">
                    <div className="seach__bar">
                        <i className="bx bx-search"></i>
                        <input type="text" name="" id="" placeholder='Search for song , artists etc..' />
                    </div>
                </div>
                <div className="navbar__right">
                    <i className="bx bx-bell" id='nav__icon'></i>
                    <i class='bx bx-cog' id='nav__icon'></i>
                    <button className="donate">By me Coffee</button>


                </div>
            </nav>
        </>
    )
}

export default Header   