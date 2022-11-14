import axios from "axios";
import React, { useEffect } from "react";
import Chart from "react-google-charts";
import { getScsContextInstance } from "../../context/ScsContext";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function MetricChart() {
  useEffect(() => {
    const pull = setInterval(async () => {
      const metric = await axios.post("http://www.rollrat.com/api/v1/monitor", {
        infraName: getScsContextInstance().infraName,
      });
      console.log(metric);
    }, 1000);
    return () => clearInterval(pull);
  });

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
