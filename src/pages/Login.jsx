import "../css/Login.css";
import { useState } from "react";
import Logo from "../assets/stock.svg"

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="login-logo">
          <img src={Logo} alt="IPO-Varum Logo" width={30} height={30} />
          &nbsp; IPO-Varum
        </div>
        <button className="support-button">Talk to Support</button>
      </div>

      <div className="login-title">Log in to Your Account</div>

      <div className="login-card">
        <div className="login-label">Email Address</div>
        <input
          type="text"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="login-label">Password</div>
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div
          className="login-options"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button className="login-button">Login</button>
      </div>

      <footer className="footer-content">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} SriJan Karki. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Login;
