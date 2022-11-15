import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Accordion, Badge } from "react-bootstrap";
import DiagramPannel from "./diagram/DiagramPannel";
import MetricChart from "./chart/MetricChart";
import axios from "axios";
import { getScsContextInstance } from "../context/ScsContext";

const Body = styled.div`
  min-height: calc(100vh - 180px);
`;

const MainContentLeft = styled.div`
  position: absolute;
  /*display: flex;*/
  left: 0;
  /*display: inline-block; /* == float: left */
  width: 65%;
  /*height: 1230px;*/
  margin: 0 auto;
  /*border-right: solid black 1px;*/
`;

const DiagramWrap1 = styled.div`
  display: block; /* == float: left */
  width: 100%;
  height: 700px;
  margin: 0 auto;
  overflow: auto; //초과분 표시속성
  background-color: #f7f7f7;
`;

const DiagramWrap2 = styled.div`
  display: block;
  width: 100%;
  height: 350px;
  margin: 0 auto;
  background-color: #f7f7f7;
`;

const MainContentRight = styled.div`
  position: absolute;
  right: 0;
  width: 34%;
  /*height: 1230px;*/
  margin: 0 auto;
  /*border-radius: 64px 64px 64px 64px;*/
`;

const MetricWrap1 = styled.div`
  display: block;
  width: 100%;
  /* height: 1080px; */
  margin: 0 auto;
  background-color: #f7f7f7;
`;

const MetricWrap2 = styled.div`
  display: block;
  width: 100%;
  height: 1080px;
  margin: 0 auto;
  background-color: #f7f7f7;
`;

function Main() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function get() {
      const infraInfo = await axios.post(
        `http://www.rollrat.com/api/v1/infra/detail/${
          getScsContextInstance().infraName
        }`
      );

      getScsContextInstance().infraDesc = infraInfo.data;
      setLoaded(true);
    }
    get();
  });

  if (!loaded) {
    return <></>;
  }

  return (
    <Body>
      <MainContentLeft>
        <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Badge pill bg="primary">
                Diagram 1
              </Badge>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <DiagramWrap1>
                <DiagramPannel />
              </DiagramWrap1>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Badge pill bg="primary">
                Diagram 2
              </Badge>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <DiagramWrap2></DiagramWrap2>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </MainContentLeft>

      <MainContentRight>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Badge pill bg="secondary">
                CPU RAM Metric
              </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <MetricWrap1>
                <MetricChart />
              </MetricWrap1>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Badge pill bg="secondary">
                Metric 2
              </Badge>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <MetricWrap2></MetricWrap2>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </MainContentRight>
    </Body>
  );
}

export default Main;
