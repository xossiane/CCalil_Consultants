import React from 'react'
import Header from '../../organisms/NavBar'
import Button from '../../atoms/Button'
import Banner from '../../../assets/images/Hero/Banner.png'
import styles from './styles.module.scss'
import CardIcons from '../../molecules/CardIcons'
import CardText from '../../molecules/CardText'
function HomePage() {
  return (
    <>
    <Header/>
    <header> 
      <img src={Banner} className={styles[`HomePage__img`]} alt="Soluções adequadas às particularidades de cada organização"></img>
       <h1 className={styles[`HomePage__headerText`]}>Desde 2008, a CCalil Consultores oferece soluções, de forma acertada, para seus clientes. </h1>
       </header>
       <CardIcons></CardIcons>
       <CardText></CardText>
       <Button>Contratar Serviço</Button>
       <Button mt="mt">Enviar CV</Button>
       </>
  )
}

export default HomePage