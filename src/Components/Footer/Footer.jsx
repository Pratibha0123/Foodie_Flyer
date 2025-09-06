import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <img src={assets.logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore culpa modi rem molestias quas et illo accusantium omnis labore sequi.</p>
          <div className="footer-social">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>

        <div className="footer-middle">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Get in Touch</h3>
          <ul>
            <li>+91-17732789183</li>
            <li>contact.com</li>
          </ul>
        </div>

      </div>

      <hr />
      <p className='footer-copyright'>
        Copyright 2024 @ All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
