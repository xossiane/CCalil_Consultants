import React from 'react'
import styles from './styles.module.scss'

function CardIcons() {
    const cardInfo = [{
        "id":0,
        "icon": "src/assets/images/Time.png",
        "number": "13",
        "text": "anos de atuação"
    },
    {
        "id":1,
        "icon": "src/assets/images/House.png",
        "number": "39",
        "text": "empresas atendidas"
    },
    {
        "id":2,
        "icon": "src/assets/images/People.png",
        "number": "+300",
        "text": "contratações"
    }]
  return (
    <div className={styles[`CardIcons`]} >
    {cardInfo.map((item) => (
    <div className={styles[`CardIcons__container`]} key={item.id}>
    <div className={styles[`CardIcons__info`]}>
    <img src={item.icon} className={styles[`CardIcons__icon`]} alt="" /><p className={styles[`CardIcons__number`]}>{item.number}</p>
    <h2 className={styles[`CardIcons__text`]}>{item.text}</h2>
    </div>
    
    
</div>
)    
  )
    }
    </div>)
}

export default CardIcons