//import styler from "../styles/MonitoringPage.module.css";
import React from "react";
import styled from "styled-components";
import { Accordion, Badge, Button, Carousel } from "react-bootstrap";

const Body = styled.body`
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
  height: 1080px;
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
  return (
    <Body>
      <MainContentLeft>
        <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Badge pill bg = "primary">Diagram 1</Badge>{' '}
            </Accordion.Header>
            <Accordion.Body>
              <DiagramWrap1>
                <Button variant="light" style={{}}>edit</Button>
              </DiagramWrap1>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Badge pill bg = "primary">Diagram 2</Badge>{' '}
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
                <Badge pill bg = "secondary">Metric 1</Badge>{' '}
              </Accordion.Header>
              <Accordion.Body>
                <MetricWrap1></MetricWrap1>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Badge pill bg = "secondary">Metric 2</Badge>{' '}
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
