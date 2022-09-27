import React from 'react'
import './css/RightNav.css'

const RightNav = () => {
    return (
        <div id='sideNav'>
            <div className="firstsection">
                <ul>
                    <li><i class="fa-sharp fa-solid fa-house"></i><span>Home</span></li>
                    <li><i class="fa-solid fa-compass"></i><span>Explore</span></li>
                    <li><i class="fa-solid fa-video"></i><span>Shorts</span></li>
                    <li><i class="fa-solid fa-bars-progress"></i><span>Subscriptions</span></li>
                </ul>
            </div>
            <div className="hrline"></div>
            <div className="secondSection">
                <ul>
                    <li><i class="fa-brands fa-youtube"></i><span>Library</span></li>
                    <li><i class="fa-solid fa-clock-rotate-left"></i><span>History</span></li>
                    <li><i class="fa-solid fa-video"></i><span>Your videos</span></li>
                    <li><i class="fa-solid fa-clock"></i><span>Watch later</span></li>
                    <li><i class="fa-solid fa-download"></i><span>Downloads</span></li>
                    <li><i class="fa-solid fa-scissors"></i><span>Your clips</span></li>
                    <div className="showMore">
                        <li><i class="fa-solid fa-thumbs-up"></i><span>Liked videos</span></li>
                        <li><i class="fa-solid fa-bars"></i><span>React Js Tutorials</span></li>
                    </div>
                </ul>
            </div>
            <div className="hrline"></div>
            <div className="thirdSection" id='subscription'>
                <ul>
                    <p id='subs'>Subscriptions</p>
                    <li><div className="profile">S</div>Sandeep maheshwari</li>
                    <li><div className="profile">Y</div>Yebook</li>
                    <li><div className="profile">C</div>Code with harry</li>
                    <li><div className="profile">R</div>RIVTIZ</li>
                </ul>
            </div>
            <div className="hrline"></div>
            <div className="fourthSection sectionsL">
                <ul>
                    <p id='subs'>Explore</p>
                    <li><i class="fa-solid fa-gamepad"></i>Gaming</li>
                    <li><i class="fa-solid fa-trophy"></i>Sports</li>
                </ul>
            </div>
            <div className="hrline"></div>
            <div className="fifthsection sectionsL">
                <ul>
                    <p id='subs'>More From Youtube</p>
                    <li><img src="https://lh3.googleusercontent.com/-OeGNozxvw9RMFUP-9x_qscnCRsz6y4HI2b0JqzkNX7UNcZqR-zdHtg3Ng5zQHqRlw" alt="img" /> Creator Studio</li>
                    <li><img src="https://www.technowl.com/wp-content/uploads/2021/07/yeniyoutubestudiologo_ic2_technowlcom.png" alt="music" /> Youtube Music</li>
                    <li><img src="http://www.tecnologiamica.it/upload/800_480/YouTube_Kids_Logo.jpg" alt="youtubekids" /> Youtube Kids</li>
                    <li><img src="https://imgs.search.brave.com/4IVpX1ebKvV5n9laHHBE2YLhL8niHxEfwuWLD-bjvKM/rs:fit:980:656:1/g:ce/aHR0cDovL3d3dy5k/cm9pZC1saWZlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8xMS95b3V0dWJl/LXR2LWxvZ28tOTgw/eDY1Ni5qcGc" alt="youtubetv" /> Youtube TV</li>
                </ul>
            </div>
            <div className="hrline"></div>
            <div className="sixthSection sectionsL">
                <ul>
                    <li><i class="fa-solid fa-gear"></i>Setting</li>
                    <li><i class="fa-solid fa-flag"></i>Report history</li>
                    <li><i class="fa-solid fa-circle-question"></i>help</li>
                    <li><i class="fa-solid fa-comment"></i>Send feedback</li>
                </ul>
            </div>
            <div className="hrline"></div>
            <div className="seventhSection">
                <p>About Press Copyright <br />
                    Contact usCreators <br />
                    AdvertiseDevelopers <br /><br />
                    TermsPrivacyPolicy & Safety<br />
                    How YouTube works <br />
                    Test new features
                </p>
                <p id='copyright'>© 2022 Google LLC</p>
            </div>
        </div>
    )
}

export default RightNav;
