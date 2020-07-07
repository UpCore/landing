import React, { ReactComponentElement, ReactNode, useState } from "react"
import { MdHome, MdMail, MdMenu, MdPeople } from "react-icons/md"

import styles from "./menu.module.scss"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

export const Menu: React.FC = () => {
  const { menuLinks } = useSiteMetadata()

  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [toggleDisabled, setToggleDisabled] = useState<boolean>(false)

  const generateItems = (): ReactNode => {
    const icons: ReactComponentElement<any>[] = [<MdPeople/>, <MdHome/>, <MdMail/>]

    return menuLinks.map((item, index: number) => {
      const { path, name } = item

      return (
        <li className={styles.menu__item} key={path}>
          <Link to={item.path} className={styles.menu__link} activeClassName={styles.active}>
            <span className={styles.menu__link__icon}> {icons[index]} </span>
            <span className={styles.menu__link__text}> {name} </span>
          </Link>
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
        {!!menuLinks.length &&
        <ul className={styles.menu__list}>
          {generateItems()}
        </ul>
        }
      </nav>
      <div className={styles.menu__switch} onClick={toggleMenu}>
        <MdMenu/>
      </div>
    </>
  )
}