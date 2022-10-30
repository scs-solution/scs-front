import React, { Children } from "react";
import styled from "../styles/MonitoringPage.module.css";
import InsertNodeButton from "../components/InsertNodeButton";

function MonitoringPagebefore() {
  return (
    <div className={styled.header}>
      <div className={styled.logoWrap}>
        <img className="logo" src="img/SCloud.png" height="200px"></img>
      </div>
      <div
        className={styled.buttonWrap}
        style={{ display: "flex", right: "5%", top: "20%" }}
      >
        <InsertNodeButton />
      </div>
      <div className={styled.menu} style={{ display: "flex", top: "20%" }}>
        <nav className={styled.inlineblock}>
          <span>temp menu1</span>
          <br />
          <span>temp menu2</span>
        </nav>
      </div>
      <div className={styled.page}>
        <div className={styled.monitoring}></div>
      </div>
      <div className={styled.footer}></div>
    </div>
  );
}

export default MonitoringPagebefore;
