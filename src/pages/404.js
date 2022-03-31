import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Footer, Navbar } from "../components"

const pageStyles = {
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: 'white',
  margin: 0,
}

// markup
const NotFoundPage = () => {
  return (
    <>
      <StaticImage
        className="fondo"
        src="../images/fondo.jpg"
        alt="gaia fondo"
        loading="eager"
        layout="fullWidth"
        breakpoints={[750, 1080, 1366, 1920]}
        formats={['auto', 'webp', 'avif']}
        quality='80'
      />
      <Navbar />
      <div style={pageStyles}>
        <title>Not found</title>
        <h1> Page not found</h1>
        <h2 >
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </h2>
      </div>
      <Footer />
    </>
  )
}

export default NotFoundPage
