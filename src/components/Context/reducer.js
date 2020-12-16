import { features } from "../../data/countries.json";
import { legendData } from "../Legend/DefaultLegend";

export const initialState = {
  countriesData: features,
  covidData: null,
  dayOnMapNumber: null,
  selector: null,
  legend: legendData,
  play: false,
  selectedCountry: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        covidData: action.covidData,
      };
    case "SET_DAY_NUMBER":
      return {
        ...state,
        dayOnMapNumber: action.dayOnMapNumber,
      };
    case "SET_SELECTED_DATA_FROM_LEGEND":
      return {
        ...state,
        selector: action.selector,
      };
    case "SET_PLAY":
      return {
        ...state,
        play: action.play,
      };
    case "SET_SELECTED_COUNTRY":
      return {
        ...state,
        selectedCountry: action.selectedCountry,
      };
    default:
      return state;
  }
};

export default reducer;
