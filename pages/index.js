import App from '../components/App'
import Header from '../components/Header'
import Causes from "../components/Causes";
import withData from "../lib/withData";

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname}/>
    <Causes />
  </App>
))
