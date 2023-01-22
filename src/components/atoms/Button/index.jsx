import React from 'react'
import styles from "./styles.module.scss"

function Button({children, mt, className}) {
  const classList = [];
  classList.push(styles[`btn__container`]);
  classList.push(styles[`btn__container--${mt}`]);

  return (
    <button className={`${classList.join(" ")} ${className}`}><p className={styles[`btn__text`]}>{children}</p></button>
  )
}

export default Button