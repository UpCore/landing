import React from "react"

import HeroVideo from "../../assets/video/hero.mp4"

import styles from "./homeHero.module.scss"

type Props = {
  companyName: string
}

export const HomeHero: React.FC<Props> = ({ companyName }) => {
  return (
    <div className={`home ${styles.home}`}>
      <div className={styles.home__header}>
        <h1>{companyName}</h1>
        <p>Rise beyond limits</p>
      </div>
      <video autoPlay>
        <source src={HeroVideo}/>
      </video>
    </div>
  )
}