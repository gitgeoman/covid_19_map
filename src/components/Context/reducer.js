import { features } from "../../data/countries.json";

const legendData = [
  { value: 1_000_000, value1: 99_999_999, desc: "1 000000+", color: "#330000" },
  { value: 5000_000, value1: 999_999, desc: " 500 000+", color: "#660000" },
  { value: 200_000, value1: 499_999, desc: "200 000+", color: "#990000" },
  { value: 100_000, value1: 199_999, desc: "100 000+", color: "#CC0000" },
  { value: 50_000, value1: 99_999, desc: "50 000+", color: "#FF0000" },
  { value: 20_000, value1: 49_999, desc: "20 000+", color: "#FF3333" },
  { value: 10_000, value1: 19_999, desc: "10 000+", color: "#FF6666" },
  { value: 5_000, value1: 9_999, desc: "5 000+", color: "#FF9999" },
  { value: 2_000, value1: 4999, desc: "2 000+", color: "#FFCCCC" },
  { value: 1_000, value1: 1999, desc: "1 000+", color: "#CC6600" },
  { value: 500, value1: 999, desc: "500+", color: "#FF8000" },
  { value: 200, value1: 499, desc: "200+", color: "#FF9933" },
  { value: 100, value1: 199, desc: "100+", color: "#FFB266" },
  { value: 50, value1: 99, desc: "50+", color: "#FFCC99" },
  { value: 20, value1: 49, desc: "10+", color: "#C0C0C0" },
  { value: 10, value1: 19, desc: "0+", color: "#E0E0E0" },
  { value: 0, value1: 9, desc: "no data", color: "#FFFFFF" },
];

export const initialState = {
  countriesData: features,
  covidData: null,
  dayOnMapNumber: null,
  selector: null,
  legend: legendData,
  play: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_DATA":
      console.log(action.covidData["AFG"]?.data.length - 1);
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
    default:
      return state;
  }
};

export default reducer;
