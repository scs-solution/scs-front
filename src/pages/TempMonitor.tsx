import React from "react";
import TempMain from "../components/TempMain";
import styled from "styled-components";

const Layout = styled.div`
  /*padding-top: 80px;*/
  /* padding-bottom: 80px; */
`;

const TempMonitor = () => {
  return (
    <Layout>
      <TempMain></TempMain>
    </Layout>
  );
};

export default TempMonitor;
