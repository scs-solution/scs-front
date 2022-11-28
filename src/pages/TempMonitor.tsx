import React from "react";
import TempMain from "../components/TempMain";
import styled from "styled-components";
import InfoModal from "../components/InfoModal";

const Layout = styled.div`
  /*padding-top: 80px;*/
  /* padding-bottom: 80px; */
`;

const TempMonitor = () => {
  return (
    <Layout>
      <InfoModal show={true} instance={{ name: "asdf" }} />
      <TempMain></TempMain>
    </Layout>
  );
};

export default TempMonitor;
