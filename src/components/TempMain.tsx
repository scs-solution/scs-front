import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Accordion, Badge, Container, Navbar } from "react-bootstrap";
import MetricChart from "./chart/MetricChart";
import axios from "axios";
import { getScsContextInstance } from "../context/ScsContext";
import FlowPannel from "./diagram/FlowPannel";
import InsertNodeButton from "./InsertNodeButton";

const Body = styled.div`
  min-height: calc(100vh - 180px);
`;
const MainContentLeft = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  margin: 0 auto;
`;

const DiagramWrap1 = styled.div`
  display: block;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  overflow: auto;
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
  margin: 0 auto;
`;

const MetricWrap1 = styled.div`
  display: block;
  width: 100%;
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

function TempMain() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    async function get() {
      const infraInfo = await axios.get(
        `http://www.rollrat.com/api/v1/infra/detail/${
          getScsContextInstance().infraName
        }`
      );

      getScsContextInstance().infraDesc = infraInfo.data;
      setLoaded(true);
    }
    get();
  });

  return (
    <Body>
      <Navbar bg="dark" variant="dark">
        <Container
          style={{
            flexDirection: "row",
            alignItems: "stretch",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/SCloudOnly.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" Simple Cloud System"}
          </Navbar.Brand>
          <InsertNodeButton />
        </Container>
      </Navbar>
      <MainContentLeft>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Badge pill bg="primary">
                Instance Diagram
              </Badge>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <DiagramWrap1>{/* <FlowPannel/> */}</DiagramWrap1>
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

      {/* <MainContentRight>
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
      </MainContentRight> */}
    </Body>
  );
}

export default TempMain;
