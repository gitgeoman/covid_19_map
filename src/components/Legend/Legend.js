import React from "react";
import "./Legend.css";
import LegendItem from "../LegendItem/LegendItem";
import { useStateValue } from "../Context/StateProvider";

function Legend() {
  const [{ legend }] = useStateValue();

  return (
    <div className="legend">
      <h6>Sars Cov 2 - Cases</h6>
      {legend.map(({ color, desc, value, value1 }) => {
        return (
          <LegendItem
            key={value}
            range={[value, value1]}
            color={color}
            title={desc}
          />
        );
      })}
    </div>
  );
}
export default Legend;
