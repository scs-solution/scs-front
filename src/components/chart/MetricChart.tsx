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
  //colors: ["#3333FF"],
  pointSize: 1,
  title : "CPU/RAM usage",
  vAxis: {
    viewWindow: {
      max: 0,
      min: 100,
    },
  },
  hAxis: {
    title: "time(second)",
    titleTextStyle: {color: "#333"},
    viewWindow: {
    },
  },
  legend: { position: "none" },
  enableInteractivity: false,
};
//var chartData:any = getData();

function getData() {
  return [
    ["time", "cpu"],
    ...Array.from({ length: 60 }, (_, index) => [
      index,
      Math.floor(Math.random() * 100),
    ]),
  ];
}

function getDatar() {
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
  data.push([data[data.length - 1][0] + 1, Math.floor(Math.random() * 100)]);
  return data;
}

function updateDatar(chartData: any) {
  const data = chartData;
  data.splice(1, 1);
  data.push([data[data.length - 1][0] + 1, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
  return data;
}

export default function MetricChart() {
  /*useEffect(() => {
    const pull = setInterval(async () => {
      const metric = await axios.post("http://www.rollrat.com/api/v1/monitor", {
        infraName: getScsContextInstance().infraName,
      });
      console.log(metric);
    }, 1000);
 
    
    return () => clearInterval(pull);
  });*/
  const [chartData, setChartData] = useState(getDatar());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updateddata = updateDatar(Object.assign([], chartData)); //deep copy
      setChartData(updateddata);
      /*console.log(
        "first",
        [chartData[1][0], chartData[1][1]],
        "second",
        [chartData[2][0], chartData[2][1]],
        "last",
        [
          chartData[chartData.length - 1][0],
          chartData[chartData.length - 1][1],
        ],
        "length",
        chartData.length
      );*/
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
