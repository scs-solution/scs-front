import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import styled from "styled-components";

const Layout = styled.div`
  /*padding-top: 80px;*/
  /* padding-bottom: 80px; */
`;

const MonitoringPage = () => {
  return (
    <Layout>
      <Header />
      <Main></Main>
    </Layout>
  );
};

export default MonitoringPage;
