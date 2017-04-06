import App from '../components/App'
import Header from '../components/Header'

export default (props) => (
    <App>
        <Header pathname={props.url.pathname} />

        <h2>About</h2>

        <p>We make the link between SMBs and charity organizations</p>
    </App>
)
