import { useState, useEffect } from "react";
import styled from "styled-components";



function TempData()
{
    const [cpuData, setCpuData] = useState(0);
    const [ramData, setRamData] = useState(0);
    const [diskData, setDiskData] = useState(0);
    const [networkData, setNetworkData] = useState(0);
    
    useEffect (()=>{
        const intervalId = setInterval(() => {
            setCpuData(Math.floor(Math.random() * 100));
            setRamData(Math.floor(Math.random() * 100));
            setDiskData(Math.floor(Math.random() * 100));
            setNetworkData(Math.floor(Math.random() * 1000));
        },1000)
        return () => {
            clearInterval(intervalId);
          };
    })
    

    return (
        <>
            <div>CPU : {cpuData}%</div>
            <div>RAM : {ramData}%</div>
            <div>DISK : {diskData}%</div>
            <div>NET : {networkData}Kbps</div>
        </>
    )
}

export default TempData;