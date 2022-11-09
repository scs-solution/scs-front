//import styler from "../styles/MonitoringPage.module.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import InsertNodeButton from "./InsertNodeButton";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container style={{flexDirection: 'row', alignItems: 'stretch', width: '100%', margin: '0 auto'}}>
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
  );
};
//・표시 안보기 위해 ul에 li 넣음
export default Header;
