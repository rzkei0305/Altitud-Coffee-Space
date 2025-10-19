import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../../css/Login.css";
import logo from "../../assets/logo with name.png";
import { useNavigate } from "react-router-dom";


function LoginPage() {
 const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();

 const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/home");   
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
          />
        </div>
      </header>

      
      <main className="login-content">
        <h1>
          Ready to order your daily <span className="coffee">coffee</span>?
        </h1>

        <form className="login-form" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            {showPassword ? (
              <FiEyeOff
                className="eye-icon"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FiEye
                className="eye-icon"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <p className="forgot">Forget your password?</p>

          
          <button type="submit">SIGN IN</button>
          <p
            className="text-white text-xs cursor-pointer mt-3"
            onClick={() => navigate("/register")}
          >
           Don't have an account yet? <span className="text-orange-500">Create Account Here</span>
          </p>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
