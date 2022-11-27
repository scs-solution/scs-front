import React, { useState, useEffect } from "react";
import { getScsContextInstance } from "../../context/ScsContext";
import { InfraInstance } from "../../dtos/infra-desc.dtos";

function TempData({ data }: any) {
  const [cpuData, setCpuData] = useState(0);
  const [ramData, setRamData] = useState("");
  const [statuss, setStatuss] = useState("");
  const [networkData, setNetworkData] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCpuData(Math.floor(Math.random() * 100));
      // setRamData(Math.floor(Math.random() * 100));
      // setDiskData(Math.floor(Math.random() * 100));
      // setNetworkData(Math.floor(Math.random() * 1000));

      const metric = getScsContextInstance().getMetricFromInstanceName(
        (data.instance as InfraInstance).name
      );

      setCpuData(Math.floor(metric.cpu * 1000) / 10);
      setRamData(
        `${Math.floor(
          ((metric.ramTotal / 100) * metric.memoryCapacity) / 1024 / 1024
        )}MB/${Math.floor(metric.memoryCapacity / 1024 / 1024)}MB`
      );
      setStatuss((data.instance as InfraInstance).status);
      setNetworkData(Math.floor(metric.txBps / 102.4) / 10);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      STATUS : {statuss}
      <br />
      CPU : {cpuData}%
      <br />
      RAM : {ramData}
      {/* <br />
      DISK : {diskData}% */}
      <br />
      NET : {networkData}Kbps
    </div>
  );
}

export default TempData;
