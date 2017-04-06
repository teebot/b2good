import Link from 'next/link'

export default ({ pathname }) => (
    <header>
        <h1>b2GOOD</h1>
        <Link prefetch href='/'>
            <a className={pathname === '/' && 'is-active'}>Home</a>
        </Link>

        <Link prefetch href='/about'>
            <a className={pathname === '/about' && 'is-active'}>About</a>
        </Link>

        <Link prefetch href='/login'>
            <a className={pathname === '/login' && 'is-active'}>Login</a>
        </Link>

        <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
    </header>
)
