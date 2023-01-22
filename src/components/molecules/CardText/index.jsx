import React from 'react'
import styles from './styles.module.scss'

function CardText() {
    const cardInfo = [{
        "id":0,
        "title": "RECRUTAMENTO & SELEÇÃO",
        "text": "Identificamos no mercado talentos humanos através de processos desenhados de acordo com o perfil solicitado pelo cliente. Conduzimos processos seletivos de executivos e profissionais. Realizamos entrevistas no idioma inglês."
    },
    {
        "id":1,
        "title": "COACHING EXECUTIVO",
        "text": "Programa individual de desenvolvimento de competências, com a orientação de um coach executivo, através do qual o profissional irá desenvolver seu projeto de carreira dentro da empresa-cliente."
    },
    {
        "id":2,
        "title": "AVALIAÇÃO DE PERFIL PROFISSIONAL",
        "text": "Conduzimos entrevistas a partir das competências organizacionais para processos de promoção, sucessão e melhoria de performance."
    }]
  return (
    <div className={styles[`CardText`]}>
    {cardInfo.map((item) => (
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