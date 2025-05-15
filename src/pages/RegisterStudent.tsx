import React from "react";
// src/pages/RegisterStudent.tsx
import "./RegisterStudent.css"; // ✅ ถูกต้อง
// ✔️ ถูกต้องถ้า .css อยู่ใน src/pages




export default function RegisterStudent() {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-avatar">
          <svg
            className="avatar-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 100 8 4 4 0 000-8zM2 16a6 6 0 1112 0H2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="register-title">ลงทะเบียน</h2>

        <form className="register-form">
          <input type="text" placeholder="รหัสนิสิต" />
          <input type="password" placeholder="รหัสผ่าน" />
          <input type="password" placeholder="ยืนยันรหัสผ่าน" />
          <input type="text" placeholder="ชื่อ-สกุล" />
          <div className="form-row">
            <input type="text" placeholder="ชั้นปี" />
            <input type="text" placeholder="คณะ" />
          </div>
          <input type="text" placeholder="สาขา" />
          <button type="submit">ลงทะเบียน</button>
        </form>
      </div>
    </div>
  );
}