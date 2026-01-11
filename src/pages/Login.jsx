import "../css/Login.css";
import { useState } from "react";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
              />
            </svg>
            &nbsp; IPO-Varum
          </div>
          <button className="support-button">Talk to Support</button>
        </div>
        <div className="login-title">Log in to Your Account</div>
        <div className="login-card">
          <div className="login-label">Email Address</div>
          <input type="text" placeholder="Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
          <div className="login-label">Password</div>
          <input type="password" placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
          <div className="login-options">
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
        </footer>{" "}
      </div>
    </>
  );
}

export default Login;
