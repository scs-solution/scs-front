import styler from "../styles/MonitoringPage.module.css";

function Main() {
  return (
    <body className={styler.main}>
      <div className={styler.mainContentsLeft}>
        <div className={styler.mainContentsLeft1}>LC1</div>
        <div className={styler.mainContentsLeft2}>LC-2</div>
      </div>

      <div className={styler.mainContentsRight}>
        <div className={styler.mainContentsRight2}>RC-1</div>
        <div className={styler.mainContentsRight2}>RC-2</div>
      </div>

      {/*여백을 없애서 width 50% 줄바뀜 현상 제거*/}
    </body>
  );
}

export default Main;
