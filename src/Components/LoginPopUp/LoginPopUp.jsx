import { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./LoginPopUp.css";
import { StoreContext } from "../Context/StoreContext";

const LoginPopUp = ({ setShowLogin }) => {
  const { setUser } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo user (replace with real authentication later)
    const loggedInUser = { name: name || "Guest", email };

    // Save in Context + LocalStorage
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));

    // Close popup
    setShowLogin(false);
  };

  return (
    <div className="login-popup">
      <div className="popup-content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <button className="close-btn" onClick={() => setShowLogin(false)}>
          ✖
        </button>
      </div>
    </div>
  );
};

LoginPopUp.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopUp;
