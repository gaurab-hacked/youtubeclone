import React from 'react'
import './css/VIdeosection.css'


const Eachvideo = () => {
    return (
        <div className='VideoCard'>
            <div className="videosec">
                <img src="https://i.ytimg.com/vi/cc0o1E9-b-0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGPxZfIJ5goyvgJg7YK5W9ZNhRMQ" alt="img" />
                <div className="videoTime">6:30</div>
            </div>
            <div className="discSecP" >
                <div className="discSec">
                    <div className="logo"><img src="https://yt3.ggpht.com/ytc/AMLnZu_HlCDPcBrBeXlAnO5LC-leTXM6vKi8ci1fQU7Uww=s68-c-k-c0x00ffffff-no-rj" alt="img" /></div>
                    <div className="content">
                        <div className="videoTitle">Yashoda Teaser (Hindi)  Varalaxmi Sarathkumardsadsa</div>
                        <div className="channelName">Aditya Movies</div>
                        <div className="extrainfo">
                            <div className="views">1.8M views</div>
                            <div className="time">2 weeks ago</div>
                        </div>
                    </div>
                </div>
                <div className="watLater">Watch later</div>
                <div className="ATQ">Add to Queue</div>
            </div>
        </div>
    )
}

export default Eachvideo
