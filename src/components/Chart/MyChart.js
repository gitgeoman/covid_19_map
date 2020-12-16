import { Chart, Interval, Tooltip } from "bizcharts";
import { useEffect, useState } from "react";
import "./MyChart.css";
import { useStateValue } from "../Context/StateProvider";

function MyChart() {
  const [{ covidData, selectedCountry }] = useStateValue({});

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    covidData
      ? setChartData(
          covidData[selectedCountry ? selectedCountry : "OWID_WRL"]?.data
        )
      : console.log("loading");
  }, [covidData, selectedCountry]);

  return (
    <div className="myChart">
      {selectedCountry ? covidData[selectedCountry]?.location : "World"} cases
      of Covid
      <Chart
        height={"17vh"}
        autoFit
        data={chartData}
        interactions={["active-region"]}
        padding={[0, 0, 20, 50]}
        width={"80vw"}
      >
        <Interval position="date*new_cases" />
        <Tooltip shared />
      </Chart>
    </div>
  );
}
export default MyChart;
