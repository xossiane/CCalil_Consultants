import React from 'react'
import Number from '../CardIconsNumber'
import CardIconsNumber from '../CardIconsNumber'
import styles from './styles.module.scss'


function CardIcons({id, text, icon, number, symbol}) {
    return (
        <div className={styles[`CardIcons`]} >
            
                <div className={styles[`CardIcons__container`]} key={id}>
                    <div className={styles[`CardIcons__info`]}>
                        <img src={icon} className={styles[`CardIcons__icon`]} alt="" /> <span className={styles[`CardIcons__number`]}>{symbol}<Number n={number}/></span>
                        <h2 className={styles[`CardIcons__text`]}>{text}</h2>
                    </div>


                </div>
            
        </div>)
}

export default CardIcons