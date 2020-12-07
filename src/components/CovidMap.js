import React, { useEffect, useRef, useState } from "react";
import "./CovidMap.css";

import L from "leaflet";
//import { features } from "../data/countries.json";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function CovidMap({ countriesData, covidData }) {
  //data check
  //console log of the covid  data
  // countriesData.map((item) => {
  //   if (covidData[item.properties.ISO_A3] !== undefined) {
  //     console.log(
  //       covidData[item.properties.ISO_A3].data[
  //         covidData[item.properties.ISO_A3].data.length - 1
  //       ]
  //     );
  //   }
  // });

  //styling of the map

  function getColor(d) {
    console.log(d);
    return d > 1000
      ? "#5cad47"
      : d > 500
      ? "#BD0026"
      : d > 200
      ? "#E31A1C"
      : d > 100
      ? "#FC4E2A"
      : d > 50
      ? "#FD8D3C"
      : d > 20
      ? "#FEB24C"
      : d > 10
      ? "#FED976"
      : "#FFEDA0";
  }

  function stylizacja(feature) {
    return {
      fillColor:
        feature.properties.covid?.new_deaths !== undefined
          ? getColor(feature.properties.covid?.new_deaths)
          : "white", //tutaj jest celowy błąd jestszcze tego nie rozgryzłem ale z nim działa
      weight: 2,
      opacity: 1,
      color: "#38783d",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }
  const onEachCountry = (features, layer) => {
    const name = features.properties.ADMIN;

    if (covidData[features.properties.ISO_A3] !== undefined) {
      features.properties.covid =
        covidData[features.properties.ISO_A3].data[
          covidData[features.properties.ISO_A3].data.length - 1
        ];
    } else {
      features.properties.covid = 0;
    }
    const covid = features.properties.covid;
    layer.bindPopup(
      `Kraj: ${name} <br/> Stan na dzień: ${covid.date}
      <hr>
      Łącznie chorych: ${covid.total_cases}<br/>
      Nowe zachorowania: ${covid.new_cases}
      <hr>
      Łącznie zmarło: ${covid.total_deaths}<br/>
      Dzisiaj zgonów: ${covid.new_deaths}
      `
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
