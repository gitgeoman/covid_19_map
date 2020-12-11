import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "./LegendItem.css";

function LegendItem({ title, color, range }) {
  const [, dispatch] = useStateValue();
  return (
    <div
      className="legendItem"
      onMouseOver={() =>
        dispatch({
          type: "SET_SELECTED_DATA_FROM_LEGEND",
          selector: range,
        })
      }
      onMouseOut={() =>
        dispatch({
          type: "SET_SELECTED_DATA_FROM_LEGEND",
          selector: null,
        })
      }
    >
      <div
        className="legentItem__colorBox"
        style={{ backgroundColor: color }}
      ></div>
      {title}
    </div>
  );
}
export default LegendItem;
