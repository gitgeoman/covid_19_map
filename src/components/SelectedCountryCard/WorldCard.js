import React from "react";
import { useStateValue } from "../Context/StateProvider";

import "./SelectedCountryCard.css";

function WorldCard() {
  const [{ covidData, dayOnMapNumber }] = useStateValue();

  return (
    <>
      <div className="selectedCountryCard">
        <h6> {covidData["OWID_WRL"]?.location}</h6>
        <p>
          <strong>day:</strong>
          <br />{" "}
          {
            covidData["OWID_WRL"]?.data[
              dayOnMapNumber
                ? dayOnMapNumber
                : covidData["OWID_WRL"]?.data.length - 1
            ]?.date
          }
        </p>
        <p>
          <strong>new cases: </strong>
          {covidData["OWID_WRL"]?.data[
            dayOnMapNumber
              ? dayOnMapNumber
              : covidData["OWID_WRL"]?.data.length - 1
          ]?.new_cases?.toLocaleString()}
        </p>
        <p>
          <strong>new deaths: </strong>
          {covidData["OWID_WRL"]?.data[
            dayOnMapNumber
              ? dayOnMapNumber
              : covidData["OWID_WRL"]?.data.length - 1
          ]?.new_deaths?.toLocaleString()}
        </p>
      </div>
    </>
  );
}
export default WorldCard;
