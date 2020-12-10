import React, { useEffect } from "react";
import "./Covid.css";

import axios from "axios";

//import CountryTable from "./CountryTable/CountryTable";

import { useStateValue } from "../Context/StateProvider";
import Loading from "../Loading/Loading";
import CovidMap from "../Map/CovidMap";
import DiscreteSlider from "../Slider/Slider";

function Covid() {
  const [{ covidData }, dispatch] = useStateValue({});

  //pobieram dane nt covid
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://covid.ourworldindata.org/data/owid-covid-data.json"
      );
      dispatch({
        type: "UPDATE_DATA",
        covidData: result.data,
      });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="covid">
      {covidData === null ? (
        <Loading />
      ) : (
        <div className="covid__afterLoad">
          <CovidMap />
          <DiscreteSlider />
          {/* <CountryTable /> */}
        </div>
      )}
    </div>
  );
}
export default Covid;
