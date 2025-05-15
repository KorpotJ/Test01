import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <div className="flex space-x-6 items-center">
        <span className="font-bold text-lg">VolunteerHub</span>
        <Link to="/" className="hover:underline">หน้าแรก</Link>
        <Link to="/activities" className="hover:underline">กิจกรรม</Link>
        <Link to="/my-activities" className="hover:underline">กิจกรรมของฉัน</Link>
        <Link to="/history" className="hover:underline">ประวัติกิจกรรม</Link>
        <Link to="/register" className="hover:underline">ลงทะเบียน</Link>
        <Link to="/login" className="text-sm underline">เข้าสู่ระบบ</Link>
      </div>
    </nav>
  );
}
