import React, { useEffect, useRef, useState } from "react";
import "./CovidMap.css";
//import leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//data from context
import { useStateValue } from "../Context/StateProvider";
import Legend from "../Legend/Legend";

function CovidMap() {
  const [
    { countriesData, covidData, dayOnMapNumber, legend, selector },
  ] = useStateValue();

  //function stylisation
  function getColor(d) {
    return d > 1_000_000
      ? legend[0].color
      : d > 500_000
      ? legend[1].color
      : d > 200_000
      ? legend[2].color
      : d > 100_000
      ? legend[3].color
      : d > 50_000
      ? legend[4].color
      : d > 20_000
      ? legend[5].color
      : d > 10_000
      ? legend[6].color
      : d > 5_000
      ? legend[7].color
      : d > 2_000
      ? legend[8].color
      : d > 1_000
      ? legend[9].color
      : d > 500
      ? legend[10].color
      : d > 200
      ? legend[11].color
      : d > 100
      ? legend[12].color
      : d > 50
      ? legend[13].color
      : d > 20
      ? legend[14].color
      : d > 10
      ? legend[15].color
      : d >= 0
      ? legend[16].color
      : "#fff";
  }

  function stylizacja(features) {
    return {
      fillColor: getColor(
        covidData[features.properties.ISO_A3]?.data[
          dayOnMapNumber
            ? dayOnMapNumber
            : covidData[features.properties.ISO_A3]?.data.length - 1
        ]?.new_cases
      ),
      weight: 2,
      opacity: 1,
      color: "#ddd",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }

  //on each country function to set the actual data
  const onEachCountry = (features, layer) => {
    const name = features.properties.ADMIN;

    const total_cases =
      covidData[features.properties.ISO_A3]?.data[
        dayOnMapNumber
          ? dayOnMapNumber
          : covidData[features.properties.ISO_A3]?.data.length - 1
      ]?.new_cases;
    const data =
      covidData[features.properties.ISO_A3]?.data[
        dayOnMapNumber
          ? dayOnMapNumber
          : covidData[features.properties.ISO_A3]?.data.length - 1
      ]?.date;

    layer.bindPopup(
      `Kraj: ${name} <br/> Stan na dzień: ${data} <hr/> Nowych zachorowań: ${total_cases} <hr/>`
    );
  };

  const filterData = (features, layer) => {
    return (
      covidData[features.properties.ISO_A3]?.data[
        dayOnMapNumber
          ? dayOnMapNumber
          : covidData[features.properties.ISO_A3]?.data.length - 1
      ]?.new_cases > selector
    );
  };

  // create map - tworzenie mapy
  const mapRef = useRef(null);
  //definicja warstwy podstawowej
  const baseLayer = L.geoJSON(countriesData, {
    onEachFeature: onEachCountry,
  });
  const filteredLayer = useRef(null);
  useEffect(() => {
    if (selector !== null) {
      filteredLayer.current = L.geoJSON(countriesData, {
        onEachFeature: onEachCountry,
        filter: filterData,
      });
      filteredLayer.current.addTo(mapRef.current);
    } else {
      filteredLayer.current?.remove();
    }
  }, [selector]);

  const newStyle = {
    fillColor: "#ddd",
    weight: 2,
    opacity: 1,
    color: "#ddd",
    dashArray: "3",
    fillOpacity: 0.7,
  };

  useEffect(() => {
    //checking if geoJSON layer exists and destroying it in order to avoid duplication of reference on of new one
    if (mapRef.current) {
      mapRef.current.remove();
    }
    //
    mapRef.current = L.map("map", {
      center: [52, 20],
      zoom: 3,
      layers: [baseLayer.setStyle(stylizacja)],
    });
  }, [dayOnMapNumber, countriesData]);

  return (
    <div className="map__container">
      <div id="map" />
      <Legend />
    </div>
  );
}
export default CovidMap;
