export default ({ children }) => (
    <main>
        {children}
        <style jsx global>{`
      * {
        font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    color: #555;
      }
      h1, h2, h3 {
        font-weight: 300;
      }
      body {
        margin: 0;
        padding: 25px 50px;
      }
      a {
        color: #D94422;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #D94422;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1B9DB7;
        transition: background-color .3s
      }
      button:focus {
        outline: none;
      }
    `}</style>
    </main>
)
