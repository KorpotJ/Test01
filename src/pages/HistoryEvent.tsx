import React from "react";
import "./HistoryEvent.css";

const mockData = [
  {
    year: "ปีการศึกษา 2565",
    items: [
      { name: "อบรม A", type: "อบรม", date: "10/01/65", hours: 3, color: "#d0bebe" },
      { name: "กิจกรรม B", type: "จิตอาสา", date: "12/01/65", hours: 2, color: "#eef7b2" },
      { name: "สัมมนา C", type: "สัมมนา", date: "14/01/65", hours: 4, color: "#baf7a1" },
    ],
  },
  {
    year: "ปีการศึกษา 2566",
    items: [
      { name: "อบรม D", type: "อบรม", date: "08/03/66", hours: 2, color: "#c6c6c6" },
      { name: "กิจกรรม E", type: "จิตอาสา", date: "09/03/66", hours: 5, color: "#efbaf7" },
    ],
  },
];

export default function HistoryEventPage() {
  return (
    <div className="history-container">
      {mockData.map((section, index) => (
        <div key={index} className="history-section">
          <div className="section-header">{section.year}</div>
          <div className="history-table">
            <div className="table-row table-head">
              <div>ชื่อ</div>
              <div>ประเภท</div>
              <div>วันที่</div>
              <div>ชั่วโมง</div>
            </div>
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="table-row"
                style={{ backgroundColor: item.color }}
              >
                <div>{item.name}</div>
                <div>{item.type}</div>
                <div>{item.date}</div>
                <div>{item.hours}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
