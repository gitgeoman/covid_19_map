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
    width: "90vw",
    margin: "auto",
  },
});

export default function DiscreteSlider() {
  const [{ covidData }, dispatch] = useStateValue({});

  const classes = useStyles();

  const handleSliderChange = (event, value) => {
    dispatch({
      type: "SET_DAY_NUMBER",
      dayOnMapNumber: value,
    });
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Move to the date:
      </Typography>
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
