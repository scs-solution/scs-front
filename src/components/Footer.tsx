//import styler from "../styles/MonitoringPage.module.css";
import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  margin-top: auto;
  background-color: #f7f7f7;
  border-radius: 64px 64px 0 0;
  z-index: 1;
`;
const FooterContents = styled.div`
  width: 96%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
const FooterTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
`;


const Footer = () => {
  return (
    <FooterStyle>
      <FooterContents>
        <FooterTitle>footer</FooterTitle>
      </FooterContents>
    </FooterStyle>
  );
};

export default Footer;
