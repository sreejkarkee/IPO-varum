import "../css/Login.css";
import { useState } from "react";
import Logo from "../assets/stock.svg";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleLogin = () => {
    if (!Email || !Password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (Email == "admin@ipo.com" && Password == "admin123") {
      toast.success("Admin Login successful");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/dashboard";
    } else {
      toast.error("Access Denied: Invalid credentials");
    }

    // toast.success("Login successful");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <img src={Logo} alt="IPO-Varum Logo" width={30} height={30} />
            &nbsp; IPO-Varum
          </div>
          <button className="support-button">Talk to Support</button>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />

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
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>

          <div className="login-options">
            <Link to="/forget-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>

        <footer className="footer-content">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} SriJan Karki. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Login;
