import React, { useState } from "react";
import {FiEye, FiEyeOff } from "react-icons/fi";
import "../../css/CreateAcc.css";
import logo from "../../assets/logo with name.png";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="regis-page">
      <header className="regis-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* <div className="icons">
          <FiShoppingBag className="icon" />
          <FiMenu className="icon" />
        </div> */}
      </header>

      {/* Content */}
      <main className="regis-content">
        <h1>
          Let's get you <span className="coffee">brewing!</span>
        </h1>

        <form className="regis-form" onSubmit={handleSignUp}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
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

          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            {showConfirmPassword ? (
              <FiEyeOff
                className="eye-icon"
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <FiEye
                className="eye-icon"
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
          </div>

          <button type="submit">CREATE ACCOUNT</button>

          <p
            className="text-white text-xs mt-3 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Already have an account? <span className="text-orange-500">Sign in</span>
          </p>
        </form>
      </main>
    </div>
  );
}

export default CreateAccount;
