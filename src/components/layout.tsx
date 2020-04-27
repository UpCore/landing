import React, { ReactNode } from "react"

import "../styles/styles.scss"

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <div>{ children }</div>
)