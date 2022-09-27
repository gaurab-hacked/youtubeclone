import React from 'react'
import './css/VIdeosection.css'
import Eachvideo from './Eachvideo'

const Videosection = () => {
  return (
    <div id='VideoSection'>
      <div className="allcards">
        <Eachvideo/>
        <Eachvideo/>
        <Eachvideo/>
        <Eachvideo/>
        <Eachvideo/>
      </div>
    </div>
  )
}

export default Videosection
