//import styler from "../styles/MonitoringPage.module.css";
import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed; /*스크롤 내려도 고정*/ 
  left: 0;
  top : 0;
  width: 100%;
  height: 80px;
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
const NavStyle = styled.nav`
  
`;
const LogoWrap = styled.div`
  display: inline-block;
`


const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContents>
        <LogoWrap>로고</LogoWrap>
        <NavStyle>
          <ul>
            <li>메뉴 1</li>
            <li>메뉴 2</li>
          </ul>
        </NavStyle>
      </HeaderContents>
    </HeaderStyle>
  );
};
//・표시 안보기 위해 ul에 li 넣음
export default Header;
