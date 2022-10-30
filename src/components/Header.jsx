import styler from '../styles/MonitoringPage.module.css';
const Header = () => {
    return (
      <header className={styler.header}>
        <div className={styler.headerContents}>
          <div>로고</div>
          <nav className={styler.navigation}>
            <ul>
              <li>메뉴 1</li>
              <li>메뉴 2</li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
  //・표시 안보기 위해 ul에 li 넣음
  export default Header