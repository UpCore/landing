import React, { ReactNode } from "react"

import "../styles/styles.scss"

import { Menu } from "./menu/menu"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <div>
    <main>
      {children}
    </main>
    <footer>
      <Menu/>
    </footer>
  </div>
)

export default Layout