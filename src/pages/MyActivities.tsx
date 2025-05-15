import React from "react";
import "./MyActivitiesPage.css";

export default function MyActivitiesPage() {
  const activities = [
    {
      id: 1,
      category: "อบรม",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "วันที่เริ่มต้น - วันที่สิ้นสุด",
    },
    {
      id: 2,
      category: "อบรม",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "วันที่เริ่มต้น - วันที่สิ้นสุด",
    },
    {
      id: 3,
      category: "อบรม",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "วันที่เริ่มต้น - วันที่สิ้นสุด",
    },
    {
      id: 4,
      category: "อบรม",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "วันที่เริ่มต้น - วันที่สิ้นสุด",
    },
  ];

  return (
    <div className="my-activities-container">
      <div className="header-bar">
        <h2>กิจกรรมของฉัน</h2>
      </div>
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-left">
              <div className="category-box">{activity.category}</div>
            </div>
            <div className="activity-center">
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
              <p className="date-text">{activity.date}</p>
            </div>
            <div className="activity-right">
              <button className="detail-button">ดูเพิ่มเติม</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}