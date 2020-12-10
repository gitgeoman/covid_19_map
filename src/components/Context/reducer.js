import { features } from "../../data/countries.json";

const legendData = [
  { value: 1_000_000, desc: "1 000000+", color: "#450237" },
  { value: 5000_000, desc: " 500 000+", color: "#823374" },
  { value: 200_000, desc: "200 000+", color: "#CC3BA3" },
  { value: 100_000, desc: "100 000+", color: "#CC76A1" },
  { value: 50_000, desc: "50 000+", color: "#9E094A" },
  { value: 20_000, desc: "20 000+", color: "#D93838" },
  { value: 10_000, desc: "10 000+", color: "#D93838" },
  { value: 5_000, desc: "5 000+", color: "#E60E0E" },
  { value: 2_000, desc: "2 000+", color: "#fc573aff" },
  { value: 1_000, desc: "1 000+", color: "#bd5c5cff" },
  { value: 500, desc: "500+", color: "#e88787ff" },
  { value: 200, desc: "200+", color: "#e8a273ff" },
  { value: 100, desc: "100+", color: "#eb881eff" },
  { value: 50, desc: "50+", color: "#f6ab13ff" },
  { value: 20, desc: "10+", color: "#dbbe2cff" },
  { value: 10, desc: "0+", color: "#e3dbcfff" },
  { value: 0, desc: "no data", color: "#ffffffff" },
];

export const initialState = {
  countriesData: features,
  covidData: null,
  dayOnMapNumber: null,
  selector: null,
  legend: legendData,
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
    default:
      return state;
  }
};

export default reducer;
