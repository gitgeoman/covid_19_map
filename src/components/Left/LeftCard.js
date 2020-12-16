import React from "react";
import { useStateValue } from "../Context/StateProvider";

import "./LeftCard.css";

function LeftCard() {
  const [{ covidData, dayOnMapNumber }] = useStateValue();

  return (
    <div className="leftCard">
      <div className="left__Card">
        <div className="left__world">
          <h5>{covidData["OWID_WRL"]?.location}</h5>
          <div className="left__date">
            <h6>
              {dayOnMapNumber
                ? covidData["OWID_WRL"]?.data[dayOnMapNumber]?.date
                : covidData["OWID_WRL"]?.data[
                    covidData["OWID_WRL"]?.data.length - 1
                  ].date}
            </h6>
            <hr />
            <p>
              <strong>Population:</strong>{" "}
              {covidData["OWID_WRL"]?.population.toLocaleString()}
            </p>
            <hr />
            <h6>Covid cases</h6>{" "}
            <p>
              <strong>Day cases:</strong>{" "}
              {dayOnMapNumber
                ? covidData["OWID_WRL"]?.data[
                    dayOnMapNumber
                  ]?.new_cases.toLocaleString()
                : covidData["OWID_WRL"]?.data[
                    covidData["OWID_WRL"]?.data.length - 1
                  ].new_cases.toLocaleString()}
            </p>{" "}
            <p>
              <strong>Day deaths:</strong>{" "}
              {dayOnMapNumber
                ? covidData["OWID_WRL"]?.data[
                    dayOnMapNumber
                  ]?.new_deaths.toLocaleString()
                : covidData["OWID_WRL"]?.data[
                    covidData["OWID_WRL"]?.data.length - 1
                  ].new_deaths.toLocaleString()}
            </p>
            <p>
              <strong>Total cases:</strong>{" "}
              {dayOnMapNumber
                ? covidData["OWID_WRL"]?.data[
                    dayOnMapNumber
                  ]?.total_cases.toLocaleString()
                : covidData["OWID_WRL"]?.data[
                    covidData["OWID_WRL"]?.data.length - 1
                  ].total_cases.toLocaleString()}
            </p>
            <p>
              <strong>Total deaths:</strong>{" "}
              {dayOnMapNumber
                ? covidData["OWID_WRL"]?.data[
                    dayOnMapNumber
                  ]?.total_deaths.toLocaleString()
                : covidData["OWID_WRL"]?.data[
                    covidData["OWID_WRL"]?.data.length - 1
                  ].total_deaths.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftCard;
