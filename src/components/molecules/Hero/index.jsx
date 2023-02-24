import React from 'react'
import styles from './styles.module.scss'

function Hero() {
  return (
    <div className={styles.Hero}>
       <h1 className={styles.Hero__title}>Consultoria especializada em busca de profissionais, inspirada por pessoas.</h1>
    </div>
  /*   <img
          src={Banner}
          className={styles[`HomePage__img`]}
          alt="Soluções adequadas às particularidades de cada organização"
        ></img> */
  )
}

export default Hero