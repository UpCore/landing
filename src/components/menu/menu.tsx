import React, { ReactComponentElement, ReactNode, useState } from "react"
import { MdHome, MdMail, MdMenu, MdPeople } from "react-icons/md"

import styles from "./menu.module.scss"

type MenuItem = {
  name: string
  icon: ReactComponentElement<any>
  path: string
}

export const Menu: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [toggleDisabled, setToggleDisabled] = useState<boolean>(false)

  const menuItems: MenuItem[] = [
    {
      name: "O nas",
      icon: <MdPeople/>,
      path: "#1",
    },
    {
      name: "Główna",
      icon: <MdHome/>,
      path: "#2",
    },
    {
      name: "Kontakt",
      icon: <MdMail/>,
      path: "#3",
    },
  ]

  const generateItems = (items: MenuItem[]): ReactNode => {
    return items.map(item => {
      return (
        <li className={styles.menu__item} key={item.path}>
          <a href={item.path} className={styles.menu__link}>
            <span className={styles.menu__link__icon}> {item.icon} </span>
            <span className={styles.menu__link__text}> {item.name} </span>
          </a>
        </li>
      )
    })
  }

  const toggleMenu = () => {
    if (toggleDisabled) return

    setToggleDisabled(true)
    setCollapsed(!collapsed)

    setTimeout(() => {
      setToggleDisabled(false)
    }, 300)
  }

  return (
    <>
      <nav className={`${styles.menu} ${collapsed ? styles.collapsed : ""}`}>
        {!!menuItems.length &&
        <ul className={styles.menu__list}>
          {generateItems(menuItems)}
        </ul>
        }
      </nav>
      <div className={styles.menu__switch} onClick={toggleMenu}>
        <MdMenu/>
      </div>
    </>
  )
}