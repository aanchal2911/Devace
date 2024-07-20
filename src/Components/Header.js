import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      {/* <Link to="/"> */}
      <div className="logo grid">
        <img src="/images/LogoDevace.webp" className="logo-img"alt="" style={{width:35,height:39}} /> 
        <div className="devace-logo">
            <h1>Devace</h1>
        </div>
      </div>
      {/* </Link> */}

        <nav id="header-nav">
            <Link to="/" className="black current" alt="home-button" onClick={()=>{window.scrollTo(0,0)}}>Home</Link>
            <Link to="/after" className="black current" alt="home-button" onClick={()=>{window.scrollTo(0,0)}}>Relax Here</Link>
            <Link to="/test" className="black" alt="questionnaire-button" onClick={()=>{window.scrollTo(0,0)}}>Test</Link>
            <Link to="/symptom" className="black" alt="symptom-identification-button" onClick={()=>{window.scrollTo(0,0)}}>Analysis</Link>
            <Link to="/resources" className="black" alt="resources-button" onClick={()=>{window.scrollTo(0,0)}}>Station</Link>
            <Link to="/contact" className="black" alt="contact-us-button" onClick={()=>{window.scrollTo(0,0)}}>Contact Us</Link>
        </nav>
    </div>
  )
}

export default Header