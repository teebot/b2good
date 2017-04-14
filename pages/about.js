import App from '../components/App'
import Header from '../components/Header'

export default (props) => (
  <App>
    <Header pathname={props.url.pathname}/>

    <h2>About</h2>

    <p>We make the link between SMBs and charity organizations</p>

    <p>Most large corporations have programs for social responsibility and community involvement. This is a great idea for a small business too.</p>

    <p>What you will gain from supporting a charity or non-profit organization:</p>
    <ul>
      <li>The opportunity to give back</li>
      <li>Community support and good will – People are more apt to support businesses they feel are part of their world</li>
      <li>The opportunity to support causes you believe in – It is great if you can tie your business purpose to a particular charity but if you can’t simply pick a charity that you are passionate about.</li>
      <li>Company morale – This can boost company morale by bringing employees together to support something that is separate from the office</li>
      <li>Marketing and business strategy – This is a way for you to reach out and connect with community members on a different platform</li>
    </ul>
  </App>
)
