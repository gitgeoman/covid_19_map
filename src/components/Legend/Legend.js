import React from "react";
import "./Legend.css";
import LegendItem from "../LegendItem/LegendItem";
import { useStateValue } from "../Context/StateProvider";

function Legend() {
  const [{ legend }] = useStateValue();

  return (
    <div className="legend">
      <h6>Sars Cov 2 - Cases</h6>
      {legend.map(({ color, desc, value }) => {
        return <LegendItem key={value} id={value} color={color} title={desc} />;
      })}
    </div>
  );
}
export default Legend;
