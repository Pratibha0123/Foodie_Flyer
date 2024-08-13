
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa modi rem molestias quas et illo accusantium omnis labore sequi. Aliquam consequuntur reprehenderit qui illo voluptates quae, sequi mollitia earum.</p>
<div className="footer-social-icons">
  <img src={assets.facebook_icon} alt="" />
  <img src={assets.twitter_icon} alt="" />
  <img src={assets.linkedin_icon} alt="" />
</div>
        </div>
        
        <div className="footer-content-center">
<h1>Company</h1>
<ul>
  <li>Home</li>
  <li>About Us</li>
  <li>Delivery</li>
  <li>Privacy Policy</li>
</ul>
        </div>
        <div className="footer-content-right">
     <h2>GET IN TOUCh</h2>
     <ul>
      <li>+91-17732789183</li>
     <li>contact.com</li>
     </ul>
        </div>
      </div>
<hr/>
<p className='footer-copyright'>Copyright 2024 @ ALL Right reserved</p>

    </div>
  )
}

export default Footer