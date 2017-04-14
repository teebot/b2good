import Link from 'next/link'

export default ({ pathname }) => (
    <header>
        <img className="logo" src="/static/logo.png" />
        <Link prefetch href='/'>
            <a className={pathname === '/' && 'is-active'}>Home</a>
        </Link>

        <Link prefetch href='/about'>
            <a className={pathname === '/about' && 'is-active'}>About</a>
        </Link>

        <Link prefetch href='/donation'>
            <a className={pathname === '/donation' && 'is-active'}>Donation</a>
        </Link>

        <Link prefetch href='/login'>
            <a className={pathname === '/login' && 'is-active'}>Login</a>
        </Link>

        <style jsx>{`
      header {
        margin-bottom: 25px;
        display: flex;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
        align-self: center;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
    </header>
)
