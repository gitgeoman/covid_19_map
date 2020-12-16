import React, { useEffect, useState } from "react";
import { useStateValue } from "../Context/StateProvider";

import OneOfTen from "./OneOfTen";

function Topten() {
  const [{ covidData, dayOnMapNumber }] = useStateValue();
  const [topTen, setTopTen] = useState([]);

  useEffect(() => {
    var toptens = Object.values(covidData)
      .sort(function (a, b) {
        return (
          b.data[dayOnMapNumber]?.new_cases - a.data[dayOnMapNumber]?.new_cases
        );
      })
      .splice(0, 10);
    setTopTen(toptens);
    console.log("to jest top tens", topTen);
  }, [dayOnMapNumber]);

  return (
    <div
      className="topten"
      style={{ backgroundColor: "yellow", cursor: "pointer" }}
    >
      asdf
      <OneOfTen topten={topTen} />
    </div>
  );
}
export default Topten;
