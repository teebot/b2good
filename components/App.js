export default ({children}) => (
  <main>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
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

    `}</style>
  </main>
)
