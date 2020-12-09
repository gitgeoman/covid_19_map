import React, { useEffect, useRef, useState } from "react";
import "./CovidMap.css";
//import leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";
//data from context
import { useStateValue } from "../Context/StateProvider";

function CovidMap() {
  const [{ countriesData, covidData }] = useStateValue();

  function getColor(d) {
    console.log(d);
    return d > 1000000
      ? "#eb0707"
      : d > 50000
      ? "#BD0026"
      : d > 20000
      ? "#E31A1C"
      : d > 10000
      ? "#FC4E2A"
      : d > 5000
      ? "#FD8D3C"
      : d > 2000
      ? "#FEB24C"
      : d > 1000
      ? "#FED976"
      : d > 500
      ? "#c7edb7"
      : d > 200
      ? "#f5dd53"
      : d > 100
      ? "#a9c730"
      : d > 50
      ? "#6fc730"
      : d > 10
      ? "#30c744"
      : "#FFEDA0";
  }

  function stylizacja(features) {
    return {
      fillColor: getColor(
        covidData[features.properties.ISO_A3]?.data[
          covidData[features.properties.ISO_A3]?.data.length - 1
        ].new_cases
      ),
      weight: 2,
      opacity: 1,
      color: "#38783d",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }
  const onEachCountry = (features, layer) => {
    const name = features.properties.ADMIN;
    console.log(
      covidData[features.properties.ISO_A3]?.data[
        covidData[features.properties.ISO_A3]?.data.length - 1
      ]
    );
    const total_cases =
      covidData[features.properties.ISO_A3]?.data[
        covidData[features.properties.ISO_A3]?.data.length - 1
      ].new_cases;
    const data =
      covidData[features.properties.ISO_A3]?.data[
        covidData[features.properties.ISO_A3]?.data.length - 1
      ].date;

    layer.bindPopup(
      `Kraj: ${name} <br/> Stan na dzień: ${data} <hr/> Nowych zachorowań: ${total_cases} <hr/>`
    );
  };

  // create map
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [0, 0],
      zoom: 1,
      layers: [
        L.geoJSON(countriesData, {
          onEachFeature: onEachCountry,
          style: stylizacja,
        }),
      ],
    });
  }, []);

  return <div id="map" />;
}
export default CovidMap;
