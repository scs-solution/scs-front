import React, { useState, useEffect } from "react";
import styled from "styled-components";

const dataStyle = styled.div`
    text-align: left;
`

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
        <div>
            <dataStyle> CPU :</dataStyle>
            <dataStyle> {cpuData}% </dataStyle>
            <br/>
            <dataStyle> RAM : {ramData}% </dataStyle>
            <br/>
            <dataStyle> DISK : {diskData}% </dataStyle>
            <br/>
            <dataStyle> NET : {networkData}Kbps </dataStyle>
        </div>
    )
}

export default TempData;