import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import styler from '../styles/MonitoringPage.module.css';

const MonitoringPage = (props) => {
  return (
    <div className={styler.layout}>
      <Header />
      <Main></Main>
      <Footer />
    </div>
  )
}

export default MonitoringPage