import { useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import PropTypes from "prop-types";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { cartItems = {}, user, setUser } = useContext(StoreContext);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <Link to="/menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</Link>
        <Link to="/contact" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</Link>
      </ul>

      {/* Right section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />

        <Link to="/cart" className="navbar-cart">
          <img src={assets.basket_icon} alt="Cart" />
          {Object.keys(cartItems || {}).filter(k => (cartItems[k] || 0) > 0).length > 0 && <div className="dot"></div>}
        </Link>

        {user ? (
          <div className="navbar-user">
            <div className="user-info" onClick={toggleDropdown}>
              <img src={user.avatar || assets.profile_icon} alt="User" className="user-avatar" />
              <span className="user-name">{user.name}</span>
            </div>

            {dropdownOpen && (
              <div className="user-dropdown">
                <Link to="/account" onClick={() => setDropdownOpen(false)}>Your Account</Link>
                <Link to="/orders" onClick={() => setDropdownOpen(false)}>Your Orders</Link>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && <div className="overlay" onClick={closeMobileMenu}></div>}

      {/* Sliding Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMobileMenu}>Home</Link>
        <Link to="/menu" onClick={closeMobileMenu}>Menu</Link>
        <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>

        <Link to="/cart" className="mobile-cart" onClick={closeMobileMenu}>
          <img src={assets.basket_icon} alt="Cart" />
          Cart
          {Object.keys(cartItems || {}).filter(k => (cartItems[k] || 0) > 0).length > 0 && <div className="dot"></div>}
        </Link>

        {user ? (
          <div className="mobile-user">
            <div className="user-info" onClick={toggleDropdown}>
              <img src={user.avatar || assets.profile_icon} alt="User" className="user-avatar" />
              <span>{user.name}</span>
            </div>

            {dropdownOpen && (
              <div className="user-dropdown">
                <Link to="/account" onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>Your Account</Link>
                <Link to="/cart" onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>Your Orders</Link>
                <button onClick={() => { handleLogout(); closeMobileMenu(); }} className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => { setShowLogin(true); closeMobileMenu(); }}>Sign In</button>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
