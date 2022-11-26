import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GoogleChartEditor,
  GoogleChartWrapper,
  GoogleViz,
  Chart,
} from "react-google-charts";
import { getScsContextInstance } from "../../context/ScsContext";

export const options = {
  pointSize: 0,
  title : "CPU/RAM usage",
  vAxis: {
    title: "%",
    viewWindow: {
      max: 0,
      min: 100,
    },
  },
  hAxis: {
    title: "time(second)",
    titleTextStyle: {color: "#333"},
    viewWindow: { //live horizontal axis
    },
  },
  legend: { position: "none" },
  enableInteractivity: false,
};

function getData() {
  return [
    ["time", "cpu", "ram"],
    ...Array.from({ length: 60 }, (_, index) => [
      index,
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]),
  ];
}

function updateData(chartData: any) {
  const data = chartData;
  data.splice(1, 1);
  data.push([data[data.length - 1][0] + 1, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
  return data;
}

export default function MetricChart() {
  const [chartData, setChartData] = useState(getData());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updateddata = updateData(Object.assign([], chartData)); //deep copy
      setChartData(updateddata);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="600px"
        data={chartData}
        options={options}
      />
    </>
  );
}
