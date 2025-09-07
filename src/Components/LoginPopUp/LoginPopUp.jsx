import { useState, useContext } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Context/StoreContext";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login"); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(StoreContext);

  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usersJSON = localStorage.getItem("users");
    const users = usersJSON ? JSON.parse(usersJSON) : {};

    if (currState === "Sign Up") {
      if (!email) {
        alert("Please enter an email.");
        return;
      }
      const avatar = assets.profile_icon || assets.default_avatar || "";

      const newUser = { name: name || email.split("@")[0], email, avatar };
      users[email] = newUser;
      localStorage.setItem("users", JSON.stringify(users));
      setUser(newUser);
      resetFields();
      setShowLogin(false);
      return;
    }

    
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    if (users[email]) {
      setUser(users[email]);
    } else {
      const derivedName = email.split("@")[0] || "User";
      const avatar = assets.profile_icon || assets.default_avatar || "";
      const newUser = { name: derivedName, email, avatar };
      users[email] = newUser;
      localStorage.setItem("users", JSON.stringify(users));
      setUser(newUser);
    }

    resetFields();
    setShowLogin(false);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState === "Login" ? "Sign-In" : "Create Account"}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="amazon-btn">
          {currState === "Sign Up" ? "Create account" : "Sign-In"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, you agree to FoodieFlyer’s <span>Conditions of Use</span>{" "}
            and <span>Privacy Notice</span>.
          </p>
        </div>

        {currState === "Login" ? (
          <p>
            New to FoodieFlyer?{" "}
            <span
              onClick={() => {
                setCurrState("Sign Up");
                resetFields();
              }}
            >
              Create account
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrState("Login");
                resetFields();
              }}
            >
              Sign-In
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
