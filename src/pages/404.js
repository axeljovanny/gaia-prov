import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Footer } from "../components"
import { Navbar } from "../components/navbar"

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
