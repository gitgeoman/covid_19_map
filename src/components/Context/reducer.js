import { features } from "../../data/countries.json";

export const initialState = {
  countriesData: features,
  covidData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        covidData: action.covidData,
      };

    default:
      return state;
  }
};

export default reducer;
