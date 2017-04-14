import App from '../components/App'
import Header from '../components/Header'
import withData from "../lib/withData";
import NewDonation from "../components/NewDonation";

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname}/>
    <NewDonation />
  </App>
))
