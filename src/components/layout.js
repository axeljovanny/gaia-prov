import React from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from '../styles/js/index';

import '../styles/css/footer.css'
import '../styles/css/navbar.css'





const Layout = ({ children }) => (

  <>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <GlobalStyles />
    <main>{children}</main>
  </>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
