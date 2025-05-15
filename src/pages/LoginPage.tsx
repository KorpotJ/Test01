import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <button className="close-button">×</button>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtext">Please enter your credentials to login</p>

        <form className="login-form">
          <label>รหัสนิสิต</label>
          <input type="email" placeholder="example@email.com" />

          <label>รหัสผ่าน</label>
          <input type="password" placeholder="********" />

          <div className="remember-row">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Keep me signed in</label>
          </div>

          <button type="submit" className="login-button">เข้าสู่ระบบ</button>
        </form>

        <div className="signup-row">
          <span>Don't have an account?</span>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </div>
  );
}