import "../css/Forget-password.css";
import { useState } from "react";
import Logo from "../assets/stock.svg";

function ForgetPassword() {
  const [Email, setEmail] = useState("");


  return (
    <div className="forget-container">
      <div className="forget-header">
        <div className="forget-logo">
          <img src={Logo} alt="IPO-Varum Logo" width={30} height={30} />
          &nbsp; IPO-Varum
        </div>
        <button className="support-button">Talk to Support</button>
      </div>

      <div className="forget-title">Forget password</div>

      <div className="forget-card">
        <div className="forget-label">Email Address</div>
        <input
          type="text"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

     

        <button className="forget-button">Next</button>
      </div>

      <footer className="footer-content">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} SriJan Karki. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default ForgetPassword;
