import React from "react"

import { Footer, Header } from '../index';

import { ROUTES } from '../../ContentController'

export const Layout = ({ children, noFooter }) => {
  return (
    <div className="background d-flex flex-column">
      <Header routes={ROUTES} style={{ flex: "0 1 auto" }} />
      <div style={{ flex: "1 1 auto" }}>
        {children}
      </div>
      {!noFooter && <Footer style={{ flex: "0 1 auto" }} />}
    </div>
  )
}

export default Layout