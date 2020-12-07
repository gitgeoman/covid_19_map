import React, { useState, useEffect } from "react";
import "./Covid.css";
import CovidMap from "./CovidMap";

import axios from "axios";

import { features } from "../data/countries.json";
import Loading from "./Loading";
import Legend from "./Legend";

function Covid() {
  const countriesData = features;
  const [covidData, setCovidData] = useState([]);
  //pobieram dane nt covid
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://covid.ourworldindata.org/data/owid-covid-data.json"
      );
      setCovidData(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    countriesData.map((features) => {
      if (covidData[features.properties.ISO_A3] !== undefined) {
        features.properties.covid = covidData[features.properties.ISO_A3].data;
      } else {
        features.properties.covid = 0;
      }
    });
    console.log(countriesData);
  }, [covidData]);

  return (
    <div className="covid">
      {covidData.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countriesData={countriesData} covidData={covidData} />
          <Legend />
        </div>
      )}
    </div>
  );
}
export default Covid;
