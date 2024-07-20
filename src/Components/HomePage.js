import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div id="home-page" className="page">
        <div id="middle-box">
            <div className="" id="main-page-logo">
            <div id="brain-image">
                <img id="imgBrain" src="/images/LogoDevace.webp" alt="meditating-brain" style={{width:60,height:60}}/>
            </div>
                <h1>Devace</h1>
            </div>
                <p className="home-desc">A relaxation and recharging point for Developers</p>
            <div id="home-buttons">
                <Link to='/test'><button className="main-buttons" id="home-questionnaire">Test Yourself</button></Link>
                <Link to='/resources'><button className="main-buttons" id="proceed-to-website">Proceed to Website</button></Link>
                
            </div>
        </div>
    </div>
  )
}

export default HomePage