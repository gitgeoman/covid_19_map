import React from "react";
import "./Left.css";

import { useStateValue } from "../Context/StateProvider";

function Left() {
  const [{ covidData, dayOnMapNumber }, dispatch] = useStateValue();
  console.log(covidData["OWID_WRL"]);

  return (
    <div className="left">
      <h5>{covidData["OWID_WRL"]?.location}</h5>
      <div className="left__data">
        <hr />
        <h6>Population</h6>{" "}
        <p>
          <strong>Total:</strong> {covidData["OWID_WRL"]?.population}
        </p>
        <p>
          <strong>Density (avg):</strong>{" "}
          {covidData["OWID_WRL"]?.population_density}
        </p>
        <p>
          <strong>Median age: </strong>
          {covidData["OWID_WRL"]?.median_age}
        </p>
        <hr /> <h6>Covid</h6>{" "}
        <h6>
          {dayOnMapNumber
            ? covidData["OWID_WRL"]?.data[dayOnMapNumber]?.date
            : covidData["OWID_WRL"]?.data[
                covidData["OWID_WRL"]?.data.length - 1
              ].date}
        </h6>
        <p>
          <strong>Day cases:</strong>{" "}
          {dayOnMapNumber
            ? covidData["OWID_WRL"]?.data[dayOnMapNumber]?.new_cases
            : covidData["OWID_WRL"]?.data[
                covidData["OWID_WRL"]?.data.length - 1
              ].new_cases}
        </p>{" "}
        <p>
          <strong>Day deaths:</strong>{" "}
          {dayOnMapNumber
            ? covidData["OWID_WRL"]?.data[dayOnMapNumber]?.new_deaths
            : covidData["OWID_WRL"]?.data[
                covidData["OWID_WRL"]?.data.length - 1
              ].new_deaths}
        </p>
        <p>
          <strong>Total cases:</strong>{" "}
          {dayOnMapNumber
            ? covidData["OWID_WRL"]?.data[dayOnMapNumber]?.total_cases
            : covidData["OWID_WRL"]?.data[
                covidData["OWID_WRL"]?.data.length - 1
              ].total_cases}
        </p>
        <p>
          <strong>Total deaths:</strong>{" "}
          {dayOnMapNumber
            ? covidData["OWID_WRL"]?.data[dayOnMapNumber]?.total_deaths
            : covidData["OWID_WRL"]?.data[
                covidData["OWID_WRL"]?.data.length - 1
              ].total_deaths}
        </p>
      </div>
    </div>
  );
}
export default Left;
