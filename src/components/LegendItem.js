import React from "react";
import "./LegendItem.css";
function LegendItem({ title, color }) {
  return (
    <div className="legendItem">
      <div
        className="legentItem__color"
        style={{ backgroundColor: color, minWidth: "120px" }}
      >
        {title}
      </div>
    </div>
  );
}
export default LegendItem;
