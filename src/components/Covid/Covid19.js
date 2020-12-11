import React, { useEffect, useState } from "react";
import "./Covid.css";

import axios from "axios";

//import CountryTable from "./CountryTable/CountryTable";

import { useStateValue } from "../Context/StateProvider";
import Loading from "../Loading/Loading";
import CovidMap from "../Map/CovidMap";
import DiscreteSlider from "../Slider/Slider";

//icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import CountryCard from "../CountryCard/CountryCard";
import Left from "../Left/Left";

function Covid() {
  const [{ covidData, dayOnMapNumber, play }, dispatch] = useStateValue({});

  useEffect(() => {
    if (play !== false) {
      setTimeout((event) => {
        console.log(event, dayOnMapNumber, dayOnMapNumber + 1);
        dispatch({
          type: "SET_DAY_NUMBER",
          dayOnMapNumber: dayOnMapNumber + 1,
        });
      }, 1000);
    }
  }, [play, dayOnMapNumber]);

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
          <div className="covid__left">
            <Left />
          </div>
          <div className="covid__center">
            <div className="covid__header">
              <h3>Covid situation </h3>
              <div>
                <h6>
                  Map of{" "}
                  <span style={{ color: "green" }}>
                    {dayOnMapNumber ? ` ${dayOnMapNumber} th ` : " present "}
                  </span>
                  day of pandemy.
                </h6>
              </div>
            </div>
            <div className="covid__containerOfMapLegendSlider">
              <CovidMap />
              <DiscreteSlider />
              <div className="covid__buttons">
                {play !== true ? (
                  <PlayArrowIcon
                    className="covid__button"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch({ type: "SET_PLAY", play: true });
                    }}
                  />
                ) : (
                  <PauseIcon
                    className="covid__button"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch({ type: "SET_PLAY", play: false });
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* <CountryTable /> */}
        </div>
      )}
    </div>
  );
}
export default Covid;
