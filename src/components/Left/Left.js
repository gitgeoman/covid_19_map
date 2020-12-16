import React, { useState } from "react";
import "./Left.css";

import { useStateValue } from "../Context/StateProvider";
import LeftCard from "./LeftCard";
import SelectedCountryCard from "../SelectedCountryCard/SelectedCountryCard";

function Left() {
  const [{ covidData, dayOnMapNumber }, dispatch] = useStateValue();

  return (
    <div>
      <LeftCard />
      <SelectedCountryCard />
    </div>
  );
}
export default Left;
