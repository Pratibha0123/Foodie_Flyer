import { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import PropTypes from 'prop-types';
function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { cartItems = {} } = useContext(StoreContext); // Safe default

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <Link to="/menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</Link>
        <a href="#AppDownload" onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        {/* <Link to="/about" className={menu === 'about' ? 'active' : ''}>About Us</Link>
        <Link to="/delivery" className={menu === 'delivery' ? 'active' : ''}>Delivery</Link>
        <Link to="/privacy-policy" className={menu === 'privacy' ? 'active' : ''}>Privacy Policy</Link> */}
        <Link to="/contact" onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>Contact Us</Link>
      </ul>

      {/* Right section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <Link to="/cart" className="navbar-cart">
          <img src={assets.basket_icon} alt="Cart" />
          {Object.keys(cartItems || {}).length > 0 && <div className="dot"></div>}
        </Link>
        <button onClick={() => setShowLogin(true)}>Sign In</button>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && <div className="overlay" onClick={closeMobileMenu}></div>}

      {/* Sliding Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMobileMenu}>Home</Link>
        <Link to="/menu" onClick={closeMobileMenu}>Menu</Link>
        {/* <a href="#AppDownload" onClick={closeMobileMenu}>Mobile App</a> */}
        <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>

        {/* Mobile Cart */}
        <Link to="/cart" className="mobile-cart" onClick={closeMobileMenu}>
          <img src={assets.basket_icon} alt="Cart" />
          Cart
          {Object.keys(cartItems || {}).length > 0 && <div className="dot"></div>}
        </Link>

        <button onClick={() => { setShowLogin(true); closeMobileMenu(); }}>Sign In</button>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};
export default Navbar;
