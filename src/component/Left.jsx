import React from 'react'
import "./left.css"
import logo from "../assets/logo.png"
import play from "../assets/play.png"

function Left() {
  return (
    <div className='left'>
      <div className="leftIn">
           <div className="upper">
            <img src={logo} alt="" />
           </div>
           <div className="lower">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur saepe odio numquam!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem placeat esse aperiam blanditiis, error et repellat laudantium totam sint vero facere eligendi at doloribus rem? Molestiae laboriosam ex nisi sit?</p>
            <div className="btn">
                <img src={play} alt="" />
                <img src={play} alt="" />
            </div>
           </div>
      </div>
    </div>
  )
}

export default Left

