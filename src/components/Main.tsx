//import styler from "../styles/MonitoringPage.module.css";
import React from "react";
import styled from "styled-components";

const Body = styled.body`
  min-height: calc(100vh - 180px);
`;

const MainContentLeft = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  /*display: inline-block; /* == float: left */
  width: 65%;
  height: 1115px;
  margin: 0 auto;
  /*border-right: solid black 1px;*/
  border-radius: 64px 64px 64px 64px;
`;

const DiagramWrap1 = styled.div`
  display: block; /* == float: left */
  width: 100%;
  height: 30%;
  margin: 0 auto;
  overflow: auto;
`;

const DiagramWrap2 = styled.div`
  display: block;
  width: 100%;
  height: 20%;
  margin: 0 auto;
`;

const MainContentRight = styled.div`
  position: absolute;
  right: 0;
  width: 34%;
  height: 1115px;
  margin: 0 auto;
  border-radius: 64px 64px 64px 64px;
`;

const MetricWrap1 = styled.div`
  display: block;
  width: 100%;
  height: 50%;
  margin: 0 auto;
`;

const MetricWrap2 = styled.div`
  display: block;
  width: 100%;
  height: 50%;
  margin: 0 auto;
`;

function Main() {
  return (
    <Body>
      <MainContentLeft>
        <DiagramWrap1>diagram1</DiagramWrap1>
        <DiagramWrap2>diagram2</DiagramWrap2>
      </MainContentLeft>

      <MainContentRight>
        <MetricWrap1>metric1</MetricWrap1>
        <MetricWrap2>metric2</MetricWrap2>
      </MainContentRight>
    </Body>
  );
}

export default Main;
