import React from 'react' 
import { Link } from 'react-router-dom'
import './Footer.css' 
const Footer = () => { 
    return ( 
        <div className="footer" id="footer-section"> 
            <div className="upper-footer"> 
                <div className="testing"> 
                    <div className="logo-section"> 
                        <img src="/images/LogoDevace.webp" alt="logo" className='footer-logo' /> 
                        <h1 className='footer-name'>Devace</h1> 
                    </div> 
                    <p className="footer-tagline">A relaxation and recharging point for developers</p> 
                </div> 
                <div className="upper-footer-content"> 
                    <Link to='/test' onClick={()=>{window.scrollTo(0,0)}}>Test Yourself</Link> 
                    <Link to='/resources' onClick={()=>{window.scrollTo(0,0)}}>Station</Link> 
                    <Link to='/contact' onClick={()=>{window.scrollTo(0,0)}}>Contact Us</Link> 
                </div> 
                <div><img src="https://i.gifer.com/Vr6.gif"  className="footer-gif" alt="" height={192} width={200} /></div>
            </div> 
            <div className="lower-footer"> 
                <div className="lower-footer-content-outer"> 
                    <p className="lower-footer-content">Made with 🧡 by Nerd's Squad in </p> 
                    <img src="/images/htm-logo.png" alt="" width={32} height={32} className="htm-img-footer" /> 
                </div> 
            </div> 
 
        </div> 
    ) 
} 
 
export default Footer