import React from "react"

import HeroPoster from "../../assets/img/hero-poster.jpg"
import HeroVideoHD from "../../assets/video/hero-hd.mp4"
import HeroVideo from "../../assets/video/hero.mp4"

import styles from "./homeHero.module.scss"
import { isHD, isMobile } from "../../utils/browser"

type Props = {
  companyName: string
}

export const HomeHero: React.FC<Props> = ({ companyName }) => {
  const heroVideoSrc = isHD() ? HeroVideoHD : HeroVideo

  return (
    <div className={`home ${styles.home}`}>
      <div className={styles.home__header}>
        <h1>{companyName}</h1>
        <p>Rise beyond limits</p>
      </div>
      {!isMobile()
        ? <video className={styles.home__video} poster={HeroPoster} autoPlay>
            <source src={heroVideoSrc} type="video/mp4"/>
          </video>
        : <div className={styles.home__background} />
      }
    </div>
  )
}