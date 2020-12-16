import React, { useEffect } from "react";
import "./Covid.css";

import axios from "axios";

//import CountryTable from "./CountryTable/CountryTable";

import { useStateValue } from "../Context/StateProvider";
import Loading from "../Loading/Loading";
import CovidMap from "../Map/CovidMap";
import DiscreteSlider from "../Slider/Slider";

import MyChart from "../Chart/MyChart";
import Player from "../Player/Player";
import Header from "../Header/Header";

import SelectedCountryCard from "../SelectedCountryCard/SelectedCountryCard";
import WorldCard from "../SelectedCountryCard/WorldCard";

function Covid() {
  const [{ covidData, selectedCountry }, dispatch] = useStateValue({});

  //fetching the data
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
  }, []);

  //end of fetching data

  return (
    <div className="covid">
      {covidData === null ? (
        <Loading />
      ) : (
        <div className="covid__afterLoad">
          <Header />
          <CovidMap />
          <div className="covid__playerSlider" style={{ paddingTop: "20px" }}>
            <Player />
            <DiscreteSlider />
          </div>
          <div className="covid__charts">
            {selectedCountry ? <SelectedCountryCard /> : <WorldCard />}
            <MyChart />
          </div>
        </div>
      )}
    </div>
  );
}
export default Covid;
