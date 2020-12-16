import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { useStateValue } from "../Context/StateProvider";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    width: "85%",
    margin: "auto",
    padding: "0 0 0 2.5vw",
  },
});

export default function DiscreteSlider() {
  const [{ covidData }, dispatch] = useStateValue({});

  const classes = useStyles(); //expected by slider

  const handleSliderChange = (event, value) => {
    dispatch({
      type: "SET_DAY_NUMBER",
      dayOnMapNumber: value ? value : covidData["AFG"]?.data.length - 1,
    });
  };

  return (
    <div className={classes.root}>
      <Typography
        id="discrete-slider"
        gutterBottom
        style={{
          marginTop: "0.1rem",

          fontSize: "0.7rem",
        }}
      ></Typography>
      <Slider
        defaultValue={covidData["AFG"]?.data.length - 1}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={covidData["AFG"]?.data.length - 1}
        onChange={handleSliderChange}
      />
    </div>
  );
}
