//import styler from "../styles/MonitoringPage.module.css";
import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import InsertNodeButton from "./InsertNodeButton";

const HeaderStyle = styled.header`
  position: fixed; /*스크롤 내려도 고정*/
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #f7f7f7;
  //border-radius: 0 0 64px 64px;
  z-index: 1;
`;

const HeaderContents = styled.div`
  display: flex; /*로고부터 메뉴바까지의 길이 조정 및 좌우 밀착*/
  width: 96%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const NavStyle = styled.nav``;
const LogoWrap = styled.div`
  /* display: inline-block; */
  /* rela */
  display: flex;
`;

const LogoImage = styled.img`
  /* object-fit: contain; */

  /* overflow: hidden;
  position: relative;
  width: 100%; */

  /* width: 100%; */

  /* height: 100%; */
  align-items: center;
`;
// <HeaderStyle>
//   <HeaderContents>
{
  /* <LogoWrap>
          <LogoImage src="/logo.png"></LogoImage>
        </LogoWrap> */
}
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
          />{" "}
        </Navbar.Brand>
        <InsertNodeButton />
        {/* <NavStyle>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </NavStyle> */}
      </Container>
    </Navbar>
    //   </HeaderContents>
    // </HeaderStyle>
  );
};
//・표시 안보기 위해 ul에 li 넣음
export default Header;
