import React, { useState, useEffect } from "react";
import "./Covid.css";

import axios from "axios";

import CountryTable from "./CountryTable/CountryTable";

import { useStateValue } from "./Context/StateProvider";
import Loading from "./Loading";
import CovidMap from "./Map/CovidMap";

function Covid() {
  const [{ countriesData, covidData }, dispatch] = useStateValue({});

  //pobieram dane nt covid
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://covid.ourworldindata.org/data/owid-covid-data.json"
      );
      // setCovidData(result.data);
      dispatch({
        type: "UPDATE_DATA",
        covidData: result.data,
      });
    };
    fetchData();
  }, []);

  return (
    <div className="covid">
      {covidData === null ? (
        <Loading />
      ) : (
        <div>
          <CovidMap />
          <CountryTable />
        </div>
      )}
    </div>
  );
}
export default Covid;
