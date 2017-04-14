import App from '../components/App'
import Header from '../components/Header'

export default (props) => (
  <App>
    <Header pathname={props.url.pathname}/>

    <h2>Login</h2>
  </App>
)
