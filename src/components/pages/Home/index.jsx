import React from 'react'
import Header from '../../organisms/NavBar'
import Button from '../../atoms/Button'
import Banner from '../../../assets/images/Hero/Banner.png'
import styles from './styles.module.scss'
import CardIcons from '../../molecules/CardIcons'
import CardText from '../../molecules/CardText'
import cida from "../../../assets/images/cida.png"

function HomePage() {
  return (
    <>
    <Header/>
    <header> 
      <img src={Banner} className={styles[`HomePage__img`]} alt="Soluções adequadas às particularidades de cada organização"></img>
       <h1 className={styles[`HomePage__headerText`]}>Desde 2008, a CCalil Consultores oferece soluções, de forma acertada, para seus clientes. </h1>
       </header>
       <div className={styles[`HomePage__cardIcons`]}>
        <h2 className={styles[`HomePage__cardIcons--text`]}>CCalil em números</h2>
       <CardIcons />
       </div>
       <div className={styles[`HomePage__cardText`]}>
        <h2 className={styles[`HomePage__cardText--text`]}>Nossos serviços</h2>
        <CardText />
       </div>
       <div className={styles[`HomePage__solicitation`]}>
        <h2 className={styles[`HomePage__solicitation--text`]}>Precisa de algum serviço?</h2>
        <Button>Contratar Serviço</Button>
        <h2 className={styles[`HomePage__solicitation--text`]}>Buscando colocação?</h2>
        <Button mt="mt">Enviar CV</Button>
       </div>
       <div className={styles[`HomePage__description`]}>
       <h2 className={styles[`HomePage__description--title`]}>A CCalil Consultores</h2>
       <p className={styles[`HomePage__description--text`]}><strong>Fundada em 2008,</strong> a CCalil Consultores possui <strong>experiência</strong> e <strong>maturidade</strong> na condução dos serviços que oferece.
Nossa equipe é formada por profissionais que trabalham de <strong>maneira personalizada</strong>, procurando primeiramente entender a cultura e particularidades de cada organização para oferecer <strong>soluções adequadas</strong> as suas necessidades.
Atendemos conceituadas empresas nacionais e multinacionais, dos mais variados setores, tais como: <strong>Indústrias Químicas, Farmacêuticas, Telecomunicações, T.I., Importadora de Mármores, Empresa de Engenharia, Escritório de Arquitetura, Indústria de Autopeças etc.</strong>  </p>
       </div>
       <div className={styles[`HomePage__profile`]}>
        <img src={cida} alt="Cida Calil" className={styles[`HomePage__avatar`]}></img>
       </div>
       
      
       
       
       
       </>
  )
}

export default HomePage