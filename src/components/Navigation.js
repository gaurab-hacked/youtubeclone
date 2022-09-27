import React from 'react'
import './css/Navigation.css'
import Logo from '../images/logo.png'
import RightNav from './RightNav'

const Navigation = () => {
    return (
        <>
            <nav>
                <div className="navLeft">
                    <div id="sideHam">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div id="logo"><img src={Logo} alt="logo" /></div>
                </div>
                <div className="navmiddle">
                    <div className="icon">icon</div>
                    <input type="text" name="search" id="search" placeholder="Search" />
                    <i class="fa-solid fa-magnifying-glass" id='navSearch'></i>
                    <i class="fa-solid fa-microphone" id='voice'></i>
                </div>
                <div className="navRight">
                    <i class="fa-solid fa-video" id='videoIcon' ></i>
                    <i class="fa-regular fa-bell" id='notificationIcon'></i>
                    <div className="profile">
                        g
                    </div>
                </div>
            </nav>
            <RightNav/>
        </>
    )
}

export default Navigation
