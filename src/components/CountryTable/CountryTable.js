import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import { useStateValue } from "../Context/StateProvider";

import "./CountryTable.css";

function CountryTable() {
  const [{ countriesData, covidData }] = useStateValue();

  return (
    <div className="countryTable">
      {countriesData.map((item, i) => {
        if (covidData[item.properties.ISO_A3]) {
          return (
            <CountryCard
              country={item}
              covidData={covidData[item.properties.ISO_A3]}
            />
          );
        }
      })}
    </div>
  );
}
export default CountryTable;
