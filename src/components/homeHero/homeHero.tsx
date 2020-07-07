import React from "react"

import HeroPoster from "../../assets/img/hero-poster.jpg"
import HeroVideoHD from "../../assets/video/hero-hd.mp4"
import HeroVideo from "../../assets/video/hero.mp4"
import { isHD, isMobile } from "../../utils/browser"
import { SiteMetaDataResponse } from "../../api/interfaces/gatsbyData"

import styles from "./homeHero.module.scss"

export const HomeHero: React.FC<SiteMetaDataResponse> = ({ companyName }) => {
  const heroVideoSrc = isHD() ? HeroVideoHD : HeroVideo

  return (
    <div className={styles.home}>
      <div className={styles.home__hero}>
        <h1 className={`${styles.home__header} page__header`}>
          <span data-letters={companyName} />
          <span data-letters={companyName} />
        </h1>
        <div className={styles.home__slogan}>
          <p>Rise beyond limits</p>
        </div>
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