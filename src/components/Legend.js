import React from "react";
import "./Legend.css";
import LegendItem from "./LegendItem";
function Legend() {
  return (
    <div className="legend">
      <LegendItem color={"#5cad47"} title={"1000 +"} />
      <LegendItem color={"#BD0026"} title={"500+"} />
      <LegendItem color={"#E31A1C"} title={"200+"} />
      <LegendItem color={"#FC4E2A"} title={"100+"} />
      <LegendItem color={"#FC4E2A"} title={"50+"} />
      <LegendItem color={"#FD8D3C"} title={"10+"} />
      <LegendItem color={"#FED976"} title={"0+"} />{" "}
      <LegendItem color={"white"} title={"no data available"} />
    </div>
  );
}
export default Legend;
