import React from 'react'
import styles from './styles.module.scss'

function CardValues({list, mt, className}) {
   const classList = [];
   classList.push(styles[`CardValues--${mt}`]);
   classList.push(styles[`CardValues`]);

  return (
    <div className={`${classList.join(" ")} ${className}`}>
    {list.map((item) => (
    <div className={styles[`CardValues__container`] } key={item.id}>
    <div className={styles[`CardValues__info`]}>
    <p className={styles[`CardValues__title`]}>{item.title}</p>
    <h2 className={styles[`CardValues__text`]}>{item.text}</h2>
    </div>
    
    
</div>
)    
  )
    }
    </div>)
}

export default CardValues