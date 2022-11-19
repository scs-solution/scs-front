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
  colors: ["grey", "#276419"],
  pointSize: 10,
  animation: {
    duration: 1000,
    easing: "out",
    startup: true,
  },
  vAxis: {
    title: "y",
    viewWindow: {
      max: -10,
      min: 100,
    },
  },
  hAxis: {
    title: "x",
    viewWindow: {
      /*max: 70,
      min: -10,*/
    },
  },
  legend: { position: "none" },
  enableInteractivity: false,
};
//var chartData:any = getData();

function getData() {
  return [
    ["x", "y"],
    ...Array.from({ length: 60 }, (_, index) => [
        index,
        Math.floor(Math.random()*100),
    ]),
  ];
}
function updateData(chartData:any)
{
    const data = chartData;
    data.splice(1,1);
    /*data[data.length-1][0] = data[data.length-2][0]+1;
    data[data.length-1][1] = Math.floor(Math.random()*100)*/
    data.push([
    data[data.length-1][0]+1,Math.floor(Math.random()*100)]);
    /*console.log( "first", [data[1][0], data[1][1]], "second", [data[2][0], data[2][1]],
       "last", [data[data.length-1][0], data[data.length-1][1]], "length", data.length);*/
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
  const [chartData, setChartData] = useState(getData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updateddata = updateData(chartData);
      setChartData(updateddata);
      console.log( "first", [chartData[1][0], chartData[1][1]], "second", [chartData[2][0], chartData[2][1]],
       "last", [chartData[chartData.length-1][0], chartData[chartData.length-1][1]], "length", chartData.length);
      
      }, 1000);
      return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <Chart
        chartType="LineChart"
        width="100%"
        height="600px"
        data={chartData}
        options={options}
        
      />
    </>
  );
}
