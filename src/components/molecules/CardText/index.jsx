import React from 'react'
import styles from './styles.module.scss'

function CardText({list, mt, className}) {
   const classList = [];
   classList.push(styles[`CardText--${mt}`]);
   classList.push(styles[`CardText`]);

  return (
    <div className={`${classList.join(" ")} ${className}`}>
    {list.map((item) => (
    <div className={styles[`CardText__container`]} key={item.id}>
    <div className={styles[`CardText__info`]}>
    <p className={styles[`CardText__title`]}>{item.title}</p>
    <h2 className={styles[`CardText__text`]}>{item.text}</h2>
    </div>
    
    
</div>
)    
  )
    }
    </div>)
}

export default CardText