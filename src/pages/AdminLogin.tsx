// src/pages/AdminLogin.tsx

import React, { useState } from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    acceptedTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      alert("You must accept the terms and conditions.");
      return;
    }

    console.log("Login data:", formData);
  };

  return (
    <div className="wrapper">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="policy">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
          />
          <h3>I accept all terms & conditions</h3>
        </div>
        <div className="input-box button">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
