import React from "react";
import { useStateValue } from "../Context/StateProvider";
import CloseIcon from "@material-ui/icons/Close";
import "./SelectedCountryCard.css";

function SelectedCountryCard() {
  const [
    { covidData, dayOnMapNumber, selectedCountry },
    dispatch,
  ] = useStateValue();

  return (
    <>
      {selectedCountry ? (
        <div className="selectedCountryCard">
          <CloseIcon
            fontSize="small"
            color="primary"
            style={{ position: "absolute", right: "10px", cursor: "pointer" }}
            onClick={(event) => {
              dispatch({
                type: "SET_SELECTED_COUNTRY",
                selectedCountry: null,
              });
            }}
          />
          <br />

          <h6> {covidData[selectedCountry]?.location}</h6>
          <p>
            <strong>day:</strong>
            <br />{" "}
            {
              covidData[selectedCountry]?.data[
                dayOnMapNumber
                  ? dayOnMapNumber
                  : covidData[selectedCountry]?.data.length - 1
              ]?.date
            }
          </p>
          <p>
            <strong>new cases: </strong>
            {covidData[selectedCountry]?.data[
              dayOnMapNumber
                ? dayOnMapNumber
                : covidData[selectedCountry]?.data.length - 1
            ]?.new_cases.toLocaleString()}
          </p>
          <p>
            <strong>new deaths: </strong>
            {covidData[selectedCountry]?.data[
              dayOnMapNumber
                ? dayOnMapNumber
                : covidData[selectedCountry]?.data.length - 1
            ]?.new_deaths.toLocaleString()}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default SelectedCountryCard;
