import React from "react";
import "./CountryCard.css";

function CountryCard({ country, covidData }) {
  //console.log(country.properties);
  return (
    <div key={Math.random()} className="countryCard">
      <div className="countryCard__container">
        <div className="country__name">
          <h5>{country.properties.ADMIN}</h5>
        </div>
        <div className="countryCard__data">
          <hr />
          <h6>Population</h6>{" "}
          <p>
            <strong>Continent:</strong> {covidData?.continent}
          </p>
          <p>
            <strong>Location:</strong> {covidData?.location}
          </p>
          <p>
            <strong>Population:</strong> {covidData?.population}
          </p>
          <p>
            <strong>Population density:</strong> {covidData?.population_density}
          </p>
          <p>
            <strong>Population median age: </strong>
            {covidData?.median_age}
          </p>
          <hr /> <h6>Covid</h6>{" "}
          <h6>{covidData?.data[covidData?.data.length - 1].date}</h6>
          <p>
            <strong>New cases:</strong>{" "}
            {covidData?.data[covidData?.data.length - 1].new_cases}
          </p>
        </div>
      </div>
    </div>
  );
}
export default CountryCard;
