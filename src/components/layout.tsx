import React, { ReactNode } from "react"

import "../styles/styles.scss"

import { Header } from "./header/header"

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <div>
    <header>
      <Header/>
    </header>
    <main>
      {children}
    </main>
  </div>
)